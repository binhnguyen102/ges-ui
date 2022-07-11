import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
  Show,
} from "react-admin";
import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
const RateShow = (props) => {
  const classes = useStyles();
  return (
    <Show {...props}>
      <SimpleForm toolbar={false}>
        <TextInput
          autoFocus
          source="name"
          className={classes.two}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.firstInGroup}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <RadioButtonGroupInput
          disabled
          source="appType"
          choices={[
            { id: "Advisor", name: "Advisor" },
            { id: "Customer", name: "Customer" },
          ]}
        />
      </SimpleForm>
    </Show>
  );
};

export default RateShow;
