import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  RadioButtonGroupInput,
  required,
  Toolbar,
  SaveButton,
  useDataProvider,
} from "react-admin";
import { useRedirect } from "react-admin";
import Checkbox from "@mui/material/Checkbox";

import { styles } from "../../../styles";
import { makeStyles } from "@material-ui/core/styles";
import {
  backdropClasses,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };
// const handleClick = () => {
//       redirect('/dashboard');
//   }
const ToobarCreateRate = (props) => {
  const [open, setOpen] = React.useState(false);
  const [confirm, setConfirm] = React.useState(false)

  const handleConfirm = (value) => {
    setConfirm(value)
  }

  const handleClickOpen = () => {
    if (props.invalid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Toolbar {...props} >
      <SaveButton
        redirect="/list"
        label=" LƯU NHÁP"
        type="button"
        variant="outlined"
        style={{ backgroundColor: "#696CFF", color: "#fcfcfc" }}
      />
      <Button
        label="ÁP DỤNG"
        type="button"
        variant="outlined"
        style={{ backgroundColor: "#26A112", color: "#fcfcfc", margin: "20px" }}
        onClick={handleClickOpen}
      >
        ÁP DỤNG
      </Button>
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
          <Checkbox onChange={(e, value)=> handleConfirm(value)}/> Tôi chắc chắn
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            style={{ backgroundColor: "#696CFF", color: "#fcfcfc" }}
          >
            ĐÓNG
          </Button>
          <Button
            variant="contained"
            color="success"
            disabled={!confirm}
            onClick={props.handleSubmit}
            // style={{
            //   backgroundColor: "#26A112",
            //   color: "#fcfcfc",
            //   margin: "20px",
            // }}
          >
            ÁP DỤNG
          </Button>
        </DialogActions>
      </Dialog>
    </Toolbar>
  );
};
const RateCreate = (props) => {
  const classes = useStyles();

  return (
    <Create {...props} redirect="/list" title="resources.gm/rates.titles.create">
      <SimpleForm toolbar={<ToobarCreateRate />}>
        <TextInput
          autoFocus
          source="name"
          className={classes.two}
          validate={required()}
        />
        <NumberInput
          autoFocus
          source="price"
          formClassName={classes.firstInGroup}
          validate={required()}
        />

        <NumberInput
          autoFocus
          source="point"
          formClassName={classes.nextInGroup}
          validate={required()}
        />
        <RadioButtonGroupInput
          source="appType"
          choices={[
            { id: "Advisor", name: "Advisor" },
            { id: "Customer", name: "Customer" },
          ]}
        />
      </SimpleForm>
    </Create>
  );
};

export default RateCreate;
