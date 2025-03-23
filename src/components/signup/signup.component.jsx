"use client";

import { useEffect, useState } from "react";
import { Modal, Input, Button, Image, Card, message } from "antd";
import axios from "axios";
import { BASE_URL } from "../../constants/api-url";

export default function EmailSubscriptionPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const shown = localStorage.getItem("emailPopupShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/subscribers`, { email });
      if (response.status === 201) {
        localStorage.setItem("emailPopupShown", "true");
        message.success("Subscription successful!");
        setOpen(false);
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      message.error("Subscription failure!");
      console.log(error.message);
    }
  };

  return (
    <Modal
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
      title="Subscribe for Crochet Updates!"
      width={350}
      height={200}
    >
      <div className="w-full overflow-hidden">
        <Image
          src="/mellycrochets/29b694e67cf2b71447bbcd2bb5b4958d.jpg"
          alt="Advertisement of crochets"
          className="w-full h-full object-cover"
          style={{
            width: "100%",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
          preview={false}
        />
      </div>

      <p className="mb-3 text-gray-600">
        Get the latest styles and offers via email.
      </p>
      <Input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        size="large"
        style={{
          marginBottom: 10,
        }}
      />
      <Button size="large" type="primary" onClick={handleSubmit} block>
        Subscribe
      </Button>
    </Modal>
  );
}
