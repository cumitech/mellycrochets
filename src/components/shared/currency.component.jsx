import { CURRENCY } from "../../constants/constant";
import { useCurrency } from "../../hooks/currency.hook";
import { Button, Dropdown } from "antd";
import React from "react";

const AppCurrency = () => {
  const { setCurrencyFun, currency: currencyVal } = useCurrency(); // Get currency state from Redux

  const items = [
    { label: CURRENCY.usd, key: CURRENCY.usd },
    { label: CURRENCY.cfa, key: CURRENCY.cfa },
  ];

  const handleMenuClick = (e) => {
    setCurrencyFun(e.key); // Update Redux store
  };

  // Find the selected currency object
  const selectedCurrency = items.find((item) => item.key === currencyVal);

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
        {selectedCurrency ? selectedCurrency.label : CURRENCY.cfa}
      </Button>
    </Dropdown> 
  );
};

export default AppCurrency;