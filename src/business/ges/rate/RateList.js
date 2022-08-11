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
} from "react-admin";
import { APP_TYPE, RATE_STATUS } from "./constant";

const ActionFiled = () => {
  const record = useRecordContext();
  return (
    <span>
      {record.status === "df33630b-70fd-4883-9af0-1322b30fea9c" ? (
        <EditButton record={record} label={null} />
      ) : (
        <ShowButton record={record} label={null} />
      )}
    </span>
  );
};

const StatusField = () => {
  const record = useRecordContext();
  if (record.status === RATE_STATUS[0].id) {
    return <Chip label={RATE_STATUS[0].name} color="default" />;
  } else if (record.status === RATE_STATUS[2].id) {
    return <Chip label={RATE_STATUS[2].name} color="info" />;
  } else {
    return <Chip label={RATE_STATUS[1].name} color="success" />;
  }
};

// const RateFilter = (props) => {
//   return (
//     <Filter {...props}>
//       <DateInput source="startDate" alwaysOn/>
//       <DateInput source="endDate" alwaysOn/>
//       <SelectInput
//         variant="outlined"
//         source="appType"
//         style={{ width: "200px" }}
//         alwaysOn
//         choices={APP_TYPE}
//       />
//       <SelectInput
//         variant="outlined"
//         source="status"
//         alwaysOn
//         choices={RATE_STATUS}
//       />
//     </Filter>
//   );
// };

const RateFilter = [
  <DateInput variant="outlined" source="startDate" alwaysOn />,
  <DateInput variant="outlined" source="endDate" alwaysOn />,
  <SelectInput
    variant="outlined"
    source="appType"
    style={{ width: "200px" }}
    alwaysOn
    choices={APP_TYPE}
  />,
  <SelectInput
    variant="outlined"
    source="status"
    alwaysOn
    choices={RATE_STATUS}
  />,
];

const RateAction = (props) => {
  return (
    <Box m={2}>
      <CreateButton label="Tạo mới" />
    </Box>
  );
};

const RateList = (props) => (
  <List
    {...props}
    filters={RateFilter}
    actions={<RateAction />}
    bulkActionButtons={false}
    exporter={false}
    title="resources.gm/admin/rates.titles.list"
  >
    <Datagrid>
      <DateField showTime source="createdAt" textAlign="center" emptyText="-" />
      <DateField showTime source="startDate" textAlign="center" emptyText="-" />
      <DateField showTime source="endDate" textAlign="center" emptyText="-" />
      <TextField source="name" emptyText="-" />
      <NumberField source="price" textAlign="center" emptyText="-" />
      <NumberField source="point" textAlign="center" emptyText="-" />
      <ChipField source="appType" textAlign="center" emptyText="-" />
      <StatusField source="status" textAlign="center" emptyText="-" />
      <ActionFiled
        textAlign="center"
        label="resources.gm/admin/rates.fields.action"
      />
    </Datagrid>
  </List>
);

export default RateList;
