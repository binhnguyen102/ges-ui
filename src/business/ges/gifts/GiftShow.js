import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Show,
  useRecordContext,
  SimpleShowLayout,
  TextField,
  NumberField,
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
      <Typography variant="caption" color={"GrayText"} children="Hình ảnh" />
      <Box
        sx={{
          width: "40%",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <img
          style={{ width: "100%" }}
          src={record.providerGiftImage}
          alt={record.name}
        />
      </Box>
    </Box>
  );
};

const GiftShow = (props) => {
  const classes = useStyles();
  const resource = "resources.gm/admin/gifts.fields";
  return (
    <Show {...props} title="resources.gm/admin/gifts.titles.show">
      <SimpleShowLayout className={classes.show}>
        <Box>
          <SimpleShowLayout fontSize={20} className={classes.showRow}>
            <TextField
              emptyText="-"
              source="id"
              className={classes.textFiled}
              label={`${resource}.id`}
               style={{fontSize: "18px", }}
            />
            <TextField
              emptyText="-"
              source="providerGiftTitle"
              className={classes.textFiled}
              label={`${resource}.providerGiftTitle`}
              style={{fontSize: "18px"}}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            <NumberField
              fontSize={20}
              emptyText="-"
              source="providerGiftPrice"
              className={classes.textFiled}
              label={`${resource}.providerGiftPrice`}
              style={{fontSize: "18px"}}
            />
            <NumberField
              emptyText="-"
              source="providerGiftQuantity"
              className={classes.textFiled}
              label={`${resource}.providerGiftQuantity`}
              style={{fontSize: "18px"}}
            />
          </SimpleShowLayout>
          <SimpleShowLayout className={classes.showRow}>
            <TextField
              emptyText="-"
              source="provider"
              className={classes.textFiled}
              label={`${resource}.provider`}
              style={{fontSize: "18px"}}
            />
            <TextField
              emptyText="-"
              source="catName"
              className={classes.textFiled}
              label={`${resource}.catName`}
              style={{fontSize: "18px"}}
            />
          </SimpleShowLayout>
        </Box>
        <Box>
          <SimpleShowLayout>
            <Image />
          </SimpleShowLayout>
        </Box>
      </SimpleShowLayout>
    </Show>
  );
};
export default GiftShow;
