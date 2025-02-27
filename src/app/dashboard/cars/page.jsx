"use client";

import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Space, Table } from "antd";
import { useCars } from "../../../hooks/car.hook";

export default function CarList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  const {
    carEngineMap,
    carModelMap,
    carTransmissionMap,
    locationMap,
    isCarEnginesLoading,
    isCarModelsLoading,
    isCarTransmissionsLoading,
    islocationsLoading,
  } = useCars(tableProps);

  console.log("tableProps: ", tableProps)
  return (
    <>
      <PageBreadCrumbs items={["Roles", "Lists", "Create"]} />
      <List>
        <Table {...tableProps} rowKey="id">
          <Table.Column dataIndex="id" title={"ID"} />
          <Table.Column title="Car N0" dataIndex="carNum" />
          <Table.Column
            title="Model"
            dataIndex="carModelId"
            render={(carModelId) =>
              isCarModelsLoading
                ? "Loading..."
                : carModelMap?.[carModelId] ?? "Unknown"
            }
          />
          <Table.Column
            title="Transmission"
            dataIndex="transmissionId"
            render={(carTransmissionId) =>
              isCarTransmissionsLoading
                ? "Loading..."
                : carTransmissionMap?.[carTransmissionId] ?? "Unknown"
            }
          />

          <Table.Column
            title="Engine"
            dataIndex="engineId"
            render={(carEngineId) =>
              isCarEnginesLoading
                ? "Loading..."
                : carEngineMap?.[carEngineId] ?? "Unknown"
            }
          />
          <Table.Column
            title="Location"
            dataIndex="locationId"
            render={(locationId) =>
              islocationsLoading
                ? "Loading..."
                : locationMap?.[locationId] ?? "Unknown"
            }
          />
          <Table.Column title="Year" dataIndex="year" />
          {/* <Table.Column title="Color" dataIndex="color" /> */}
          {/* <Table.Column title="Seats" dataIndex="numOfSeats" /> */}
          {/* <Table.Column title="Rate/d" dataIndex="dailyRate" /> */}
          {/* <Table.Column title="S. Price" dataIndex="salesPrice" /> */}
          {/* <Table.Column title="Status" dataIndex="availabilityStatus" /> */}

          <Table.Column
            title={"Actions"}
            dataIndex="actions"
            render={(_, record) => (
              <Space>
                <EditButton hideText size="small" recordItemId={record.id} />
                <ShowButton hideText size="small" recordItemId={record.id} />
                <DeleteButton hideText size="small" recordItemId={record.id} />
              </Space>
            )}
          />
        </Table>
      </List>
    </>
  );
}
