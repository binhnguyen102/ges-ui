import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  ShowButton,
  ImageField,
  TextInput,
  SelectField,
  SelectInput,
} from "react-admin";
const postFilters = [
  // <TextInput label="Search" source="q" alwaysOn />,
  // <Date /
  <SelectInput
    source="application"
    label="Ứng dụng hiển thị"
    value="All"
    
    style={{width: "200px"}}
    alwaysOn
    choices={[
      { id: "All", name: "Tất cả" },
      { id: "Customer", name: "Customer" },
      { id: "Agent", name: "Agent" },
    ]}
  />,
  <SelectInput
    source="classify"
    label= "Phân loại"
    value="Education"
    alwaysOn
    choices={[
      { id: "Education", name: "Giáo dục " },
      { id: "Health", name: "Sức khỏe" },
      { id: "Service", name: "Dịch vụ" },
    ]}
  />,
  <SelectInput
    source="Nhà cung cấp"
    value="Công ty 1"
    alwaysOn
    choices={[
      { id: "Company one", name: "Công ty 1" },
      { id: "Company two", name: "Công ty 2" },
    ]}
  />,
];

const GiftList = (props) => (
  <List {...props} filters={postFilters}>
    <Datagrid>
      <TextField source="providerGiftCatTitle" textAlign="center" label="Tên món quà" />
      <TextField source="supplier" textAlign="center" label="Nhà cung cấp" />
      <NumberField source="providerGiftPrice" textAlign="center" label="Mệnh giá (VND)" />
      <ImageField source="providerGiftImage" textAlign="center" label="Hình ảnh" />
      <TextField source="classify" textAlign="center" label="Phân loại" />
      <NumberField source="total" textAlign="center" label="Tổng số quà" />
      <TextField  source="application" textAlign="center" label="Ứng dụng hiển thị"
      />

      <ShowButton />
    </Datagrid>
  </List>
);

export default GiftList;
