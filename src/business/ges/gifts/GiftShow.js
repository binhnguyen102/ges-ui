import React from "react";
import {
  Grid,
  Box,
  TextField,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";
import { Show, useRecordContext } from "react-admin";

const Text = () => {
  const record = useRecordContext();
  return (
    <Box mt={2} sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item sm={6}>
          <Grid container>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="ID"
                value={record.id}
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                id="outlined-basic"
                label="Name"
                value={record.name}
                variant="outlined"
              />
            </Grid>
            <Grid mt={3} item sm={6}>
              <TextField
                id="outlined-basic"
                label="price"
                value={record.price}
                variant="outlined"
              />
            </Grid>
            <Grid mt={3} item sm={6}>
              <TextField
                id="outlined-basic"
                label="total"
                value={record.total}
                variant="outlined"
              />
            </Grid>
            <Grid mt={3} item sm={6}>
              <TextField
                id="outlined-basic"
                label="supplier"
                value={record.supplier}
                variant="outlined"
              />
            </Grid>
            <Grid mt={3} item sm={6}>
              <TextField
                id="outlined-basic"
                label="classify"
                value={record.classify}
                variant="outlined"
              />
            </Grid>
            <Grid mt={3} item sm={6}>
              <Typography component="div" children="Hình Ảnh" />
              <Card
                sx={{
                  display: "flex",
                  maxWidth: "71%",
                  maxHeight: "350px",
                }}
              >
                <CardMedia
                  component="img"
                  src={record.image}
                  alt={record.name}
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}></Grid>
      </Grid>
    </Box>
  );
};

const GiftShow = (props) => 
(
  <Show {...props}>
    <Text />
  </Show>
);
export default GiftShow;
