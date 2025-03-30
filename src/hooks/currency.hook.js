// hooks/useCurrency.ts
import { useDispatch, useSelector } from "react-redux";
import { getGeolocation } from "../service/geolocation.service";
import { useEffect } from "react";
import { setCurrency } from "../store/slice/currency.slice";

export const useCurrency = () => {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.currency);

  const setCurrencyFun = (currency) => {
    dispatch(setCurrency(currency));
  };
  useEffect(() => {
    const fetchCurrency = async () => {
      const countryCode = await getGeolocation();
      if (countryCode === "CM") {
        setCurrencyFun("CFA");
      } else {
        setCurrencyFun("USD");
      }
    };

    fetchCurrency();
  }, []);

  return { currency, setCurrencyFun };
};
