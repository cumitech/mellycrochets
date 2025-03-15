import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters } from "../store/slice/crochet.slice";
export const useFilter = () => {
  const dispatch = useDispatch();

  const filteredCrochets = useSelector(
    (state) => state.crochets.filteredCrochets
  );

  const setFilteredCrochets = (data) => {
    if (data && data.length > 0) {
      dispatch({ type: "crochets/setFilteredCrochets", payload: data });
    }
  };

  const resetFilter = () => {
    dispatch(resetFilters());
  };
  useEffect(() => {}, [filteredCrochets, dispatch]);

  return {
    setFilteredCrochets,
    filteredCrochets,
    resetFilter,
  };
};
