import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
  Toolbar,
  minLength,
  maxLength,
} from "react-admin";
import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@mui/material";
import { APP_TYPE } from "./constant";

const validateFirstName = [required(), minLength(5), maxLength(100)];
const useStyles = makeStyles(styles);
const ToobarCreateRate = (props) => {
  return (
    <Toolbar {...props}>
      <Box sx={{ marginRight: 3 }}>
        <Button
          onClick={() => props.handleSubmit()}
          variant="contained"
          color="primary"
        >
          Lưu
        </Button>
      </Box>
    </Toolbar>
  );
};
const RateCreate = (props) => {
  const classes = useStyles();

  return (
    <Create
      {...props}
      path="rates"
      title="resources.gm/admin/rates.titles.create"
      redirect="list"
    >
      <SimpleForm toolbar={<ToobarCreateRate />}  redirect="list">
        <TextInput style={{ marginLeft: 10 }}
          variant="outlined"
          source="name"
          className={classes.two}
          validate={validateFirstName}
        />
        <NumberInput style={{ marginLeft: 10 }}
          variant="outlined"
          source="price"
          formClassName={classes.firstInGroup}
          validate={required()}
        />

        <NumberInput style={{ marginLeft: 10 }}
          variant="outlined"
          source="point"
          formClassName={classes.nextInGroup}
          validate={required()}
        />
        <RadioButtonGroupInput style={{ marginLeft: 10 }}
          validate={required()}
          source="appType"
          choices={APP_TYPE}
          defaultValue="Advisor"
        />
      </SimpleForm>
    </Create>
  );
};

export default RateCreate;
