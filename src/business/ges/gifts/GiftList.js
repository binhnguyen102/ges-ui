import React, { Fragment, useEffect, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ShowButton,
  SelectInput,
  FunctionField,
  SearchInput,
  Filter,
  useDataProvider,
  AutocompleteArrayInput,
  BooleanInput,
  useRecordContext,
} from "react-admin";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import {
  GRFT_APPLY,
  PROVIDER,
  PROVIDER_GRIFT_CODE_DISPLY_TYPE,
} from "./constant";
import { Form } from "react-final-form";
import ThumbnailField from "./ThumbnailField";

const useStyles = makeStyles({
  root: {
    "& .MuiPaper-root .MuiToolbar-root": {
      position: "sticky",
      zIndex: 9999,
      top: 0,
    },
    // "& .MuiTableCell-root": {
    //   top: "60px",
    // }
  },
});

const GiftFilter = ({ ...props }) => {
  // const { cartegory } = props;
  return (
    <Filter {...props}>
      <SearchInput source="q" alwaysOn variant="outlined" />

      <SelectInput
        variant="outlined"
        source="catId"
        alwaysOn
        choices={PROVIDER_GRIFT_CODE_DISPLY_TYPE}
      />
      <SelectInput
        variant="outlined"
        source="provider"
        alwaysOn
        choices={PROVIDER}
      />
    </Filter>
  );
};

const GiftShowApplication = ({ data }) => {
  const check = (value) => {
    return value === GRFT_APPLY[1].id;
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      {data?.map((item) => {
        return (
          item?.activated && (
            <Chip
              sx={{ margin: "2px", width: "fit-content" }}
              label={item?.appType}
              color={check(item?.appType) ? "warning" : "primary"}
            />
          )
        );
      })}
    </Box>
  );
};

const UpdateButton = ({ ...props }) => {
  const [showDialog, setShowDialog] = useState(false);
  const dataProvider = useDataProvider();

  const handleClick = () => {
    setShowDialog(true);
  };

  const handleClose = () => {
    setShowDialog(false);
  };

  const handleSubmit1 = (values) => {
    dataProvider
      .create("gm/admin/configGifts", {
        data: {
          configs: {
            advance: {
              activated: values?.activated,
              gifts: props?.selectedIds,
              appTypes: values?.appTypes,
            },
          },
        },
      })
      .then(() => {})
      .finally(() => {
        setShowDialog(false);
        window.location.reload();
      });
  };

  return (
    <Fragment>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ position: "sticky", zIndex: 9999 }}
        onClick={handleClick}
      >
        Chọn ứng dụng hiển thị
      </Button>
      <Dialog open={showDialog} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="button">Chọn ứng dụng hiển thị</Typography>
        </DialogTitle>
        <DialogContent style={{ width: "500px" }}>
          <Form
            onSubmit={(values) => handleSubmit1(values)}
            style={{ Width: "500px", height: "297px" }}
          >
            {(formProps) => {
              const { handleSubmit, dirty } = formProps;
              return (
                <form onSubmit={handleSubmit}>
                  <div>
                    <AutocompleteArrayInput
                      variant="outlined"
                      source="appTypes"
                      label="resources.gm/admin/gifts.fields.giftApply"
                      choices={GRFT_APPLY}
                      height={9}
                      fullWidth
                    />
                    <BooleanInput
                      defaultValue={false}
                      source="activated"
                      label="Kích hoạt"
                    />
                  </div>
                  <DialogActions>
                    <Button
                      variant="contained"
                      type="submit"
                      disabled={!dirty}
                      color="primary"
                    >
                      Áp dụng
                    </Button>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      color="warning"
                    >
                      Hủy
                    </Button>
                  </DialogActions>
                </form>
              );
            }}
          </Form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

const ConfigActionButtons = (props) => <UpdateButton {...props} />;

const Show = () => {
  const record = useRecordContext();
  return <ShowButton record={record} label={null} />;
};

const GiftList = (props) => {
  const [cartegory, setCartegory] = useState([]);
  const dataProvider = useDataProvider();
  useEffect(() => {
    const fetchCartegory = async () => {
      return dataProvider
        .getList("gm/admin/public/filters/gifts/categories", {
          pagination: { page: 1, perPage: 1000 },
          sort: {},
          filter: {},
        })
        .then((response) => {
          const { data } = response;
          console.log(data, "check");
          setCartegory(data);
        });
    };
    fetchCartegory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const classes = useStyles();

  return (
    <List
      {...props}
      filters={<GiftFilter cartegory={cartegory} />}
      exporter={false}
      bulkActionButtons={<ConfigActionButtons />}
      title="resources.gm/admin/gifts.titles.list"
      className={classes.root}
    >
      <Datagrid>
        <TextField
          source="providerGiftTitle"
          textAlign="center"
          emptyText="-"
        />
        <TextField source="provider" textAlign="center" emptyText="-" />
        <NumberField
          source="providerGiftPrice"
          textAlign="center"
          emptyText="-"
        />
        {/* <ImageField source="providerGiftImage" textAlign="center" /> */}
        <ThumbnailField
          textAlign="center"
          label="resources.gm/admin/gifts.fields.providerGiftImage"
        />
        <TextField source="catName" textAlign="center" emptyText="-" />
        <NumberField
          source="providerGiftQuantity"
          textAlign="center"
          emptyText="-"
        />
        <FunctionField
          emptyText="-"
          source="giftApply"
          render={(record) => {
            return <GiftShowApplication data={record.giftApply} />;
          }}
        />
        <Show
          textAlign="center"
          label="resources.gm/admin/gifts.fields.action"
        />
      </Datagrid>
    </List>
  );
};

export default GiftList;
