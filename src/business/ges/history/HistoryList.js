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
  ShowButton,
  DateTimeInput,
} from "react-admin";
const postFilters = [<DateTimeInput source="exchangeTime" label="Thời gian đổi quà"  />];
const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
  </Filter>
);

const HistoryList = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid >
      <DateField showTime source="exchangeTime" textAlign="center" label="Thời gian đổi quà" />
      <TextField source="name" textAlign="center" label="Tên quà"  />
      <TextField source="price" textAlign="center" label="Mệnh Giá (VND)" />
      <TextField source="points" textAlign="center" label="Điểm quy đổi" />
      <TextField source="customer" textAlign="center" label="Khách đổi quà" />
      <NumberField source="phone" textAlign="center" label="Số điện thoại" />

      <ShowButton textAlign="center"  />
    </Datagrid>
  </List>
);

export default HistoryList;
