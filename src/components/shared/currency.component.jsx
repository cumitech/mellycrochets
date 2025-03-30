import { useCurrency } from "../../hooks/currency.hook";
import { Button, Dropdown } from "antd";
import React, { useEffect, useState } from "react";

const AppCurrency = () => {
  const { setCurrencyFun, currency: currencyVal } = useCurrency();
  const [currency, setCurrency] = useState({ label: "XAF", key: "XAF" });

  const items = [
    { label: "USD", key: "USD" },
    { label: "XAF", key: "XAF" },
  ];

  const handleMenuClick = (e) => {
    const selectedCurrency = items.find((item) => item.key === e.key);
    if (selectedCurrency) {
      setCurrency(selectedCurrency);
      setCurrencyFun(e.key); // Persist selection
    }
  };

  useEffect(() => {
    // const savedCurrency = localStorage.getItem("selectedCurrency");
    if (currencyVal) {
      const selectedCurrency = items.find((item) => item.key === currencyVal);
      if (selectedCurrency) setCurrency(selectedCurrency);
    }
  }, []);

  return (
    <Dropdown
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      placement="bottomLeft"
      className="cursor-pointer font-medium"
    >
      <Button size="middle" style={{ width: "30px" }}>
        {currency.label}
      </Button>
    </Dropdown>
  );
};

export default AppCurrency;
