import React from "react";
import { SimpleForm, Show, TextField, NumberField } from "react-admin";
import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);
const RateShow = (props) => {
  const classes = useStyles();
  return (
    <Show
      {...props}
      hasEdit={false}
      title="resources.gm/admin/rates.titles.show"
    >
      <SimpleForm toolbar={false} style={{ marginLeft: 20 }}>
        <TextField
          source="name"
          className={classes.firstInGroup}
          style={{ fontSize: "18px" }}
        />

        <NumberField
          source="price"
          formClassName={classes.firstInGroup}
          style={{ fontSize: "18px" }}
        />
        <NumberField
          source="point"
          formClassName={classes.nextInGroup}
          style={{ fontSize: "18px" }}
        />

        <TextField source="appType" 
        style={{ fontSize: "18px" }} />
      </SimpleForm>
    </Show>
  );
};

export default RateShow;
