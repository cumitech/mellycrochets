"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  Button,
  Card,
  Descriptions,
  Image,
  Input,
  Space,
  Tag,
  Tooltip,
} from "antd";
import {
  ContactsOutlined,
  MinusOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useNotification } from "@refinedev/core";

import { API_URL_UPLOADS_CROCHETS } from "../../../constants/api-url";
import { crochetAPI } from "../../../store/api/crochet_api";
import CustomImage from "../../../components/shared/custom-image.component";
import { useCart } from "../../../hooks/cart.hook";
import { allColors, allSizes } from "../../../constants/constant";
import CrochetDetailSkeleton from "../../../components/crochet-detail.skeleton";
import { format } from "../../../lib/format";
import { sizeAPI } from "../../../store/api/size_api";
import { useCurrency } from "../../../hooks/currency.hook";

const buttonStyles = { width: 35, padding: "0 10px", borderRadius: 0 };
const inputStyles = {
  width: 70,
  height: 32,
  textAlign: "center",
  borderRadius: 2,
};

export default function IndexPage({ params }) {
  const [cartQty, setCartQty] = useState(1);
  const [loadingAddToCart, setLoadingAddToCart] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const { open } = useNotification();
  const { data: session } = useSession();
  const { addToCart } = useCart();
  const router = useRouter();
  const { slug } = params;
  const { currency } = useCurrency();

  const {
    data: sizes,
    isLoading: isLoadingSize,
    isFetching: isFetchingSize,
  } = sizeAPI.useFetchAllSizesQuery(1);
  const {
    data: crochet,
    isFetching,
    isLoading,
  } = crochetAPI.useGetSingleCrochetBySlugQuery(slug);

  if (isLoading || isFetching || isLoadingSize || isFetchingSize) {
    return (
      <div className="flex items-center justify-center min-h-[65vh]">
        <CrochetDetailSkeleton />
      </div>
    );
  }

  const convertedPrice =
    currency === "CFA" ? format.number(crochet.price) + " XAF" : "$" + 8.0;

  // const availableSizes = crochet.sizes.map((size) => size.label);
  // const availableColors = crochet.sizes.flatMap((size) =>
  //   (size.colors || []).filter((color) => color != null)
  // );

  const selectedSizeObj = sizes.find((size) => size.label === selectedSize);

  const handleAddToCart = async () => {
    if (!selectedSize) {
      return open({
        type: "error",
        message: "Please select a size and color before adding to cart.",
        key: "notification-key-open",
        placement: "bottomRight",
      });
    }

    setLoadingAddToCart(true);

    if (session?.user) {
      const updatedCartItem = await addToCart(
        crochet.id,
        selectedSizeObj.id,
        cartQty
      );

      if (updatedCartItem?.length > 0) {
        open({
          type: "success",
          message: `${crochet.name} has been added to cart 👌`,
          key: "notification-key-open",
          placement: "bottomRight",
        });
        window.location.reload();
      } else {
        open({
          type: "error",
          message: "Crochet not added to cart",
          key: "notification-key-open",
          placement: "bottomRight",
        });
        setLoadingAddToCart(true);
      }
    } else {
      open({
        type: "info",
        message: "Please sign in to continue",
        description: (
          <Button
            href={`/login?redirect=${encodeURIComponent(
              window.location.pathname
            )}`}
          >
            Sign In
          </Button>
        ),
        key: "notification-key-open",
        placement: "bottomRight",
      });
      router.push(
        `/login?redirect=${encodeURIComponent(window.location.pathname)}`
      );
    }

    setTimeout(() => setLoadingAddToCart(false), 1500);
  };

  const text = encodeURIComponent(
    `Hello, I found this beautiful ${crochet.name} on your mellycrochets.org and I'm interested. I would like to ask a few questions about it.`
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8">
      <Card variant={"borderless"} className="rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative py-3">
            <Image.PreviewGroup
              items={crochet.imageUrls?.map(
                (url) => `${API_URL_UPLOADS_CROCHETS}/${url || "nodata"}`
              )}
            >
              <Image
                width="100%"
                height={350}
                className="rounded-lg object-cover"
                src={`${API_URL_UPLOADS_CROCHETS}/${
                  crochet.imageUrls[0] || "nodata"
                }`}
                alt={crochet.name}
              />
            </Image.PreviewGroup>
            <div className="mt-5">
              <CustomImage imageList={crochet.imageUrls} />
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-1">
              {crochet.name}
            </h1>
            <p className="text-md font-semibold text-gray-700">
              <span className="text-red-500">{convertedPrice}</span>
            </p>

            {/* <div className="mt-3">
              <p className="text-md text-gray-700">
                <span className="font-semibold">Available Sizes</span> <br />
                {availableSizes.map((size) => (
                  <Tag key={size} color="cyan">
                    {size}
                  </Tag>
                ))}
              </p>
            </div>
            {availableColors.length > 0 && (
              <div className="mt-3">
                <p className="text-md text-gray-700">
                  <span className="font-semibold">Available Colors</span> <br />
                  {availableColors.map((size) => (
                    <Tag key={size} color="gold">
                      {size}
                    </Tag>
                  ))}
                </p>
              </div>
            )} */}
            <div className="mb-8">
              <p className="text-md font-semibold text-gray-700">
                Chose Your Size
              </p>
              <Space wrap>
                {allSizes.map((size) => {
                  const isActive = selectedSize === size.key;
                  return (
                    <Tooltip title={size.description} key={size.key}>
                      <Button
                        key={size.key}
                        style={{
                          borderRadius: 50,
                          padding: "0 15px",
                          background: isActive ? "#cb384e" : "#fdf3f3",
                          border: "2px solid #cb384e",
                          color: isActive ? "white" : "black",
                        }}
                        onClick={() => setSelectedSize(size.key)}
                      >
                        {size.key}
                      </Button>
                    </Tooltip>
                  );
                })}
              </Space>
            </div>
            <div className="mb-8">
              <p className="text-md font-semibold text-gray-700">
                Chose your Colors
              </p>
              <Space wrap>
                {allColors.map((color) => {
                  // const isAvailable = availableColors.includes(color);
                  const isActive = selectedColor === color;
                  return (
                    <Tooltip title={color} key={color}>
                      <Button
                        key={color}
                        style={{
                          borderRadius: 50,
                          padding: "0 15px",
                          background: isActive ? "#cb384e" : "#fdf3f3",
                          border: "2px solid #cb384e",
                          color: isActive ? "white" : "black",
                        }}
                        // size="small"
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </Button>
                    </Tooltip>
                  );
                })}
              </Space>
            </div>

            {/* <p className="text-gray-600 text-lg">{crochet.description}</p> */}

            <div className="mt-4 flex flex-col gap-4">
              <Space style={{ columnGap: 0 }}>
                <Button
                  onClick={() => setCartQty((prev) => Math.max(0, prev - 1))}
                  style={{
                    ...buttonStyles,
                    borderTopLeftRadius: 15,
                    borderBottomLeftRadius: 15,
                    borderRight: 0,
                  }}
                >
                  <MinusOutlined />
                </Button>
                <Input value={cartQty} style={inputStyles} min={0} />
                <Button
                  onClick={() => setCartQty((prev) => prev + 1)}
                  style={{
                    ...buttonStyles,
                    borderTopRightRadius: 15,
                    borderBottomRightRadius: 15,
                    borderLeft: 0,
                  }}
                >
                  <PlusOutlined />
                </Button>
              </Space>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button
                  type="primary"
                  onClick={handleAddToCart}
                  loading={loadingAddToCart}
                  icon={<PlusOutlined />}
                  style={{ borderRadius: 50 }}
                >
                  Place Order
                </Button>
                <Button
                  type="dashed"
                  danger
                  icon={<ContactsOutlined />}
                  style={{ borderRadius: 50 }}
                  href={`https://wa.me/237681077051?text=${text}`}
                  target="_blank"
                >
                  Contact Seller
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mt-6" variant={"borderless"}>
        <Descriptions
          title="Crochet Details"
          bordered
          layout="vertical"
          column={{ xs: 1, sm: 1, md: 2, lg: 4 }}
          size="small"
        >
          <Descriptions.Item label="Crochet Name">
            {crochet.name}
          </Descriptions.Item>
          <Descriptions.Item label="Crochet Design">
            {crochet?.crochetType?.name}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {crochet.description}
          </Descriptions.Item>
          <Descriptions.Item label="Price">{convertedPrice}</Descriptions.Item>
          {crochet.color && (
            <Descriptions.Item label="Color">{crochet.color}</Descriptions.Item>
          )}
        </Descriptions>
      </Card>
    </div>
  );
}
