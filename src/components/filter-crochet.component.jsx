"use client";
import React, { useState } from "react";
import "react-input-range/lib/css/index.css";
import { Button, message, Space } from "antd";
import { FaFilter, FaRedo } from "react-icons/fa";
import { BASE_URL } from "../constants/api-url";
import { crochetAPI } from "../store/api/crochet_api";
import { useFilter } from "../hooks/filter.hook";
import CrochetTypeSelect from "./filter-product/crochet-type-select.component";
import SizeSelect from "./filter-product/size.component";
import { crochetTypeAPI } from "../store/api/crochet_type_api";
import { sizeAPI } from "../store/api/size_api";
import { useTranslations } from "next-intl";

const FilterCrochets = () => {
  const { setFilteredCrochets, resetFilter } = useFilter();
  const t = useTranslations("filtercrochet");
  const [fetchFilteredCrochets] =
    crochetAPI.useLazyFetchFilteredCrochetsQuery();
  const [size, setSize] = useState("");
  const [crochetTypeId, setCrochetTypeId] = useState("");

  const { data: crochetTypes, isLoading: isLoadingCrochetType } =
    crochetTypeAPI.useFetchAllCrochetTypesQuery(1);

  const { data: sizes, isLoading: isLoadingSize } =
    sizeAPI.useFetchAllSizesQuery(1);

  const [loading, setLoading] = useState(false);

  const handleFilterReset = () => {
    setSize("");
    setCrochetTypeId("");
    resetFilter();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const filters = {};

      if (size) filters.size = size;
      if (crochetTypeId) filters.crochetTypeId = crochetTypeId;

      const { data } = await fetchFilteredCrochets(filters);
      setFilteredCrochets(data);
      message.success(`${data.length} Crochets returned!`);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  if (isLoadingCrochetType || isLoadingCrochetType) {
    return (
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-lg text-center">Details loading...</p>
      </div>
    );
  }

  return (
    <div className="text-black px-8  md:px-10 lg:px-20 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="bg-white max-w-auto mx-auto p-5 rounded-md relative animate-fade-up">
        <div className="flex justify-center items-center">
          <form
            action={`${BASE_URL}/crochets/filter`}
            method="GET"
            onSubmit={handleSubmit}
            className="w-full max-w-6xl mx-auto"
          >
            {/* <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4"> */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-left font-semibold">
                  {t("crochetDesigns")}
                </label>
                <CrochetTypeSelect
                  setCrochetTypeId={setCrochetTypeId}
                  crochetTypeId={crochetTypeId}
                  loading={loading}
                  isLoading={isLoadingCrochetType}
                  crochetTypes={crochetTypes}
                />
              </div>

              <div>
                <label className="text-left font-semibold">{t("size")}</label>
                <SizeSelect
                  setSize={setSize}
                  size={size}
                  loading={loading}
                  sizes={sizes}
                  isLoading={isLoadingSize}
                />
              </div>

              <Space className="mb-0 mt-5">
                <Button
                  // type="primary"
                  icon={<FaFilter />}
                  htmlType="submit"
                  size="large"
                  disabled={loading}
                />
                <Button
                  icon={<FaRedo />}
                  size="large"
                  htmlType="button"
                  className="ml-5"
                  onClick={handleFilterReset}
                  disabled={loading}
                />
              </Space>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterCrochets;
