import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
  Toolbar,
  useDataProvider,
  useNotify,
} from "react-admin";
import { useRedirect } from "react-admin";
import Checkbox from "@mui/material/Checkbox";

import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useFormState, useForm } from "react-final-form";
import { APP_TYPE } from "./constant";
import { get } from "lodash";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupConfirm = ({ open, handleClose, confirm, setConfirm }) => {
  const dataProvider = useDataProvider();
  const { values } = useFormState();
  const redirect = useRedirect();
  const notify = useNotify();

  const data = {
    id: get(values, "id"),
    name: get(values, "name"),
    price: get(values, "price"),
    point: get(values, "point"),
    appType: get(values, "appType"),
  };

  const handleApply = () => {
    dataProvider
      .create("gm/admin/rates/apply", {
        data,
      })
      .then((response) => {
        redirect("/gm/admin/rates");
        return response;
      })
      .catch((error) => {
        notify(error.message, { type: "warning" });
      });
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"THÔNG BÁO XÁC NHẬN?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Bạn có chắc chắn muốn áp dụng config tỉ lệ quy đổi này?
        </DialogContentText>

        <DialogContentText>
          <Checkbox
            onChange={(e, value) => setConfirm(value)}
            checked={confirm}
          />{" "}
          Tôi chắc chắn
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="error">
          ĐÓNG
        </Button>
        <Button
          variant="contained"
          color="success"
          disabled={!confirm}
          onClick={() => handleApply()}
        >
          ÁP DỤNG
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const ToobarCreateRate = (props) => {
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false);

  const { dirty } = useFormState();

  const handleClose = () => {
    setOpen(false);
    setConfirm(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Toolbar {...props}>
      <Box sx={{ marginRight: 3 }}>
        <Button
          onClick={() => props.handleSubmit()}
          variant="contained"
          color="primary"
          disabled={!dirty}
        >
          Lưu
        </Button>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="success"
          onClick={handleOpen}
          // disabled={!dirty}
        >
          ÁP DỤNG
        </Button>
      </Box>

      <PopupConfirm
        open={open}
        handleClose={handleClose}
        confirm={confirm}
        setConfirm={setConfirm}
      />
    </Toolbar>
  );
};
const RateEdit = (props) => {
  console.log(props);
  const classes = useStyles();

  return (
    <Edit
      {...props}
      title="resources.gm/admin/rates.titles.edit"
      hasShow={false}
      undoable={false}
    >
      <SimpleForm toolbar={<ToobarCreateRate />} redirect="list">
        <TextInput
          variant="outlined"
          source="name"
          className={classes.two}
          validate={required()}
        />
        <NumberInput
          variant="outlined"
          source="price"
          formClassName={classes.firstInGroup}
          validate={required()}
        />

        <NumberInput
          variant="outlined"
          source="point"
          formClassName={classes.nextInGroup}
          validate={required()}
        />
        <RadioButtonGroupInput
          source="appType"
          validate={required()}
          choices={APP_TYPE}
        />
      </SimpleForm>
    </Edit>
  );
};

export default RateEdit;
