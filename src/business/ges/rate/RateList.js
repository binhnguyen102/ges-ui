import React from "react";
import {
  Filter,
  TextInput,
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  ChipField,
  SelectInput,
  ShowButton,
  useRecordContext,
  EditButton,
} from "react-admin";

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);
const StatusField = () => {
  const record = useRecordContext();
 
  return (
    <span>
      {record.status === "Draft" ? (
        <EditButton record={record} label={null} />
      ) : (
        <ShowButton record={record} label={null} />
      )}
    </span>
  );
};

const BinField = () => {
  const record = useRecordContext();

  return (
  <span>{record.status === "Draft" ? "Draft" : "Use"&&"Used"}</span>
  );
};
const postFilters = [
  <SelectInput
    source="appType" label = "Đối tượng áp dụng"
    value="All"
    style={{width: "200px"}}
    alwaysOn
    choices={[
      { id: "Customer", name: "Customer" },
      { id: "Agent", name: "Agent" },
    ]}
  />,
  <SelectInput
    source="status" label = "Trạng thái"
    value="All"
    alwaysOn
    choices={[
      { id: "Draft", name: "Draft" },
      { id: "Use", name: "Use" },
      { id: "Used", name: "Used" },
    ]}
  />,
];
const RateList = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid>
      <DateField showTime source="createdAt" textAlign="center" label="Ngày tạo"/>
      <DateField showTime source="startDate" textAlign="center" label="Ngày áp dụng" />
      <DateField showTime source="endDate" textAlign="center" label="Ngày kết thúc"/>
      <TextField source="name" textAlign="center" label="Tên tỉ lệ " />
      <NumberField source="price" textAlign="center" label="Mệnh giá (VND)"/>
      <NumberField source="point" textAlign="center" label="Điểm Quy đổi"/>
      <TextField source="appType" textAlign="center" label="Đối tượng áp dụng"/>
      <BinField source="status" textAlign="center" label="Trạng Thái" />
      {/* <TextField source="status" textAlign="center" label="Trạng Thái"/> */}
      <StatusField textAlign="center" llabel="Hành động" />

      {/* <ShowButton /> */}
    </Datagrid>
  </List>
);

export default RateList;
