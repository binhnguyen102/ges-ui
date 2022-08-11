import React from "react";
import { Box, Chip } from "@mui/material";
import {
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
  Filter,
  CreateButton,
  DateInput,
  StatusField,
  
} from "react-admin";

const Show = () => {
  const record = useRecordContext();
  return <ShowButton record={record} label={null} />;
};

const ApplyList = (props) => (
  <List
    {...props}
    bulkActionButtons={false}
    exporter={false}
    title="resources.gm/admin/transaction.titles.list"
  >
    <Datagrid>
      <TextField showTime source="provider" textAlign="center" emptyText="-" />
      <TextField source="giftInfo.providerGiftTitle" label="Tên món quà" textAlign="center" emptyText="-" />
      <NumberField source="totalPrice" textAlign="center" emptyText="-" />
      <NumberField source="totalPoint" textAlign="center" emptyText="-" />
      <TextField source="billingBalance"textAlign="center" emptyText="-" />
      <NumberField source="providerCodeExpire" textAlign="center" emptyText="-" />
      <TextField source="createdBy" emptyText="-" />
      <ChipField source="appType" textAlign="center" emptyText="-" />
      <TextField source="status" textAlign="center" emptyText="-" />
      <Show  textAlign="center" label="resources.gm/admin/transaction.fields.action"
      />
    </Datagrid>
  </List>
);

export default ApplyList;
