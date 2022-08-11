import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Show,
  useRecordContext,
  SimpleShowLayout,
  TextField,
  NumberField,
  DateField,
} from "react-admin";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textFiled: {
    display: "inline-block",
    width: "250px",
  },
  show: {
    display: "flex",
  },
  showRow: {
    marginBottom: "5px",
  },
}));

const Image = () => {
  const record = useRecordContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="caption"
        color={"GrayText"}
        children="Mã hình ảnh nhà cung cấp"
      />
      <Box
        sx={{
          width: "40%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={record.providerCodeImage}
          alt={record.name}
        />
      </Box>
    </Box>
  );
};

const ImageGift = () => {
  const record = useRecordContext();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        variant="caption"
        color={"GrayText"}
        children="Hình ảnh nhà cung cấp"
      />
      <Box
        sx={{
          width: "40%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={record.giftInfo.providerGiftImage}
          alt={record.name}
        />
      </Box>
    </Box>
  );
};

const TransactionShow = (props) => {
  const classes = useStyles();
  const resource = "resources.gm/admin/transaction.fields";
  return (
    <Show {...props} title="resources.gm/admin/transaction.titles.show">
      <SimpleShowLayout className={classes.show}>
        <Box>
          <SimpleShowLayout fontSize={20} className={classes.showRow}>
            <TextField
              emptyText="-"
              source="id"
              className={classes.textFiled}
              label={`${resource}.id`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="appType"
              className={classes.textFiled}
              label={`${resource}.appType`}
              style={{ fontSize: "18px" }}
            />
            {/* <TextField
              emptyText="-"
              source="clientTransactionId"
              className={classes.textFiled}
              label={`${resource}.clientTransactionId`}
              style={{ fontSize: "18px" }}
            /> */}
            <TextField
              emptyText="-"
              source="provider"
              className={classes.textFiled}
              label={`${resource}.provider`}
              style={{ fontSize: "18px" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            <NumberField
              fontSize={20}
              emptyText="-"
              source="totalPrice"
              className={classes.textFiled}
              label={`${resource}.totalPrice`}
              style={{ fontSize: "18px" }}
            />
            <NumberField
              emptyText="-"
              source="totalPoint"
              className={classes.textFiled}
              label={`${resource}.totalPoint`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="giftInfo.providerGiftTitle"
              className={classes.textFiled}
              label={`${resource}.giftInfo`}
              style={{ fontSize: "18px" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            <TextField
              emptyText="-"
              source="billingTransactionId"
              className={classes.textFiled}
              label={`${resource}.billingTransactionId`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="providerTotalPaid"
              className={classes.textFiled}
              label={`${resource}.providerTotalPaid`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="providerTransactionDetailId"
              className={classes.textFiled}
              label={`${resource}.providerTransactionDetailId`}
              style={{ fontSize: "18px" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            <TextField
              emptyText="-"
              source="providerGiftId"
              className={classes.textFiled}
              label={`${resource}.providerGiftId`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="providerCodeExpire"
              className={classes.textFiled}
              label={`${resource}.providerCodeExpire`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="status"
              className={classes.textFiled}
              label={`${resource}.status`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="providerToken"
              className={classes.textFiled}
              label={`${resource}.providerToken`}
              style={{ fontSize: "18px" }}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            {/* <TextField
              emptyText="-"
              source="providerGiftId"
              className={classes.textFiled}
              label={`${resource}.providerGiftId`}
              style={{ fontSize: "18px" }}
            /> */}
            <DateField
              emptyText="-"
              source="createdAt"
              className={classes.textFiled}
              label={`${resource}.createdAt`}
              style={{ fontSize: "18px" }}
            />

            <DateField
              emptyText="-"
              source="updatedAt"
              className={classes.textFiled}
              label={`${resource}.updatedAt`}
              style={{ fontSize: "18px" }}
            />
            <TextField
              emptyText="-"
              source="providerCode"
              className={classes.textFiled}
              label={`${resource}.providerCode`}
              style={{ fontSize: "18px" }}
            />
          </SimpleShowLayout>
        </Box>
        <Box>
          <SimpleShowLayout>
            <Image />
            <ImageGift />

            {/* <Image
              emptyText="-"
              source="providerGiftBrandLogoLoyalty"
              className={classes.textFiled}
              label={`${resource}.providerCode`}
              style={{ fontSize: "18px" }} */}
          </SimpleShowLayout>
        </Box>
      </SimpleShowLayout>
    </Show>
  );
};
export default TransactionShow;
