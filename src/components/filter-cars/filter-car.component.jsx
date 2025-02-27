"use client";
import React, { useEffect, useState } from "react";
// import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
// import { PiCaretCircleDown } from "react-icons/pi";
import { Button, Space } from "antd";
import { FaFilter, FaRedo } from "react-icons/fa";
import CarModelSelect from "./car-model-select.component";
import CountrySelect from "./location.component";
import YearSelect from "./year.component";
import EngineSelect from "./engine.component";
import TransmissionSelect from "./transmission.component";
import { BASE_URL } from "../../constants/api-url";
import { carAPI } from "../../store/api/car_api";
import { useDispatch } from "react-redux";
import { resetFilters } from "../../store/slice/car.slice";

const FilterCars = () => {
  const dispatch = useDispatch();
  const filters = {};

  const [fetchFilteredCars] = carAPI.useLazyFetchAllCarsQuery();
  // const [price, setPrice] = useState({ value: { min: 2000, max: 45000 } });
  const [engineId, setEngineId] = useState("");
  const [transmissionId, setTransmissionID] = useState("");
  const [carModelId, setCarModelId] = useState("");
  const [locationId, setLocationId] = useState("");
  const [year, setYear] = useState("");

  // Reset all form values
  const handleFilterReset = () => {
    setEngineId("");
    setTransmissionID("");
    setCarModelId("");
    setLocationId("");
    setYear("");
  };

  const handleSubmit = async (event) => {
    dispatch(resetFilters());
    event.preventDefault();
    const filters = {};

    if (engineId) filters.engineId = engineId;
    if (transmissionId) filters.transmissionId = transmissionId;
    if (carModelId) filters.carModelId = carModelId;
    if (locationId) filters.locationId = locationId;
    if (year) filters.year = year.toString(); // Convert year to string

    const { data } = await fetchFilteredCars(filters);

    dispatch({ type: "cars/setFilteredCars", payload: data });
  };

  useEffect(() => {}, [dispatch]);

  return (
    <div className=" text-black py-10 px-8  md:px-10 lg:px-20 mt-[-100px] z-10">
      <div className="relative rounded-lg z-10 animate-fade-up">
        <form
          action={`${BASE_URL}/cars/filter`}
          method="GET"
          onSubmit={handleSubmit}
          className="bg-white shadow-md max-w-auto mx-auto p-5 rounded-md"
        >
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="text-left font-semibold">Looking For</label>
              <CarModelSelect
                setCarModelId={setCarModelId}
                carModelId={carModelId}
              />
            </div>

            <div>
              <label className="text-left font-semibold">Engine</label>
              <EngineSelect setEngineId={setEngineId} engineId={engineId} />
            </div>

            <div>
              <label className="text-left font-semibold">Transmission</label>
              <TransmissionSelect
                setTransmissionID={setTransmissionID}
                transmissionId={transmissionId}
              />
            </div>

            <div>
              <label className="text-left font-semibold">Location</label>
              <CountrySelect
                setLocationId={setLocationId}
                locationId={locationId}
              />
            </div>

            <div>
              <label className="text-left font-semibold">Year</label>
              <YearSelect setYear={setYear} year={year} />
            </div>

            {/* <div>
                  <label className="text-left font-semibold">Price</label>
                  <div className="relative border border-gray-300 rounded-lg p-2 flex justify-between items-center">
                    <span>
                      ${price.value.min} - ${price.value.max}
                    </span>
                    <PiCaretCircleDown />
                  </div>
                  <div className="mt-4">
                    <InputRange
                      formatLabel={() => ``}
                      maxValue={100000}
                      minValue={0}
                      value={price.value}
                      onChange={handleOnChange}
                      className="border-0"
                    />
                  </div>
                </div> */}

            <Space className="mb-0">
              <Button
                type="primary"
                icon={<FaFilter />}
                htmlType="submit"
                size="large"
                className="bg-[#eb6753] border-[#eb6753] hover:bg-[#eb6753] hover:border-[#eb6753]"
              />
              <Button
                icon={<FaRedo />}
                size="large"
                htmlType="button"
                className="ml-5"
                onClick={handleFilterReset}
              />
            </Space>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterCars;
