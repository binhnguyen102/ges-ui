import React from "react";
import {
  Grid,
  Box,
  TextField,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import {
  NumberInput,
  Show,
  SimpleForm,
  TextInput,
  useRecordContext,
} from "react-admin";
import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(styles);

const History = (props) => {
  const classes = useStyles();
  return (
    <Show {...props}>
      <SimpleForm toolbar={false}>
        <Box
          sx={{
            background: "#c4c4ce",
            borderRadius: "10px",
            marginTop: "20px",
            height: "50px",
            width: "100%",
            alignItems: "center",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Typography ml={2} component="div" children="THÔNG TIN NGƯỜI DÙNG" />
        </Box>
        <TextInput
          autoFocus
          source="name"
          label="Tên người dùng"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <TextInput
          autoFocus
          source="phone"
          label="T Số điện thoại"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />
        <br />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />

        <Box
          sx={{
            background: "#c4c4ce",
            borderRadius: "10px",
            marginTop: "20px",
            height: "50px",
            width: "100%",
            alignItems: "center",
            display: "flex",
            marginBottom: "10px",
          }}
        >
          <Typography ml={2} component="div" children="THÔNG TIN NGƯỜI DÙNG" />
        </Box>
        <TextInput
          autoFocus
          source="name"
          label="Tên người dùng"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <TextInput
          autoFocus
          source="phone"
          label="T Số điện thoại"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />
        <br />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />
        <br />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />
        <br />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.nextInGroup}
          // validate={required()}
          disabled
        />
        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroupcopy}
          // validate={required()}
          disabled
        />
      </SimpleForm>
    </Show>
  );
};

export default History;
