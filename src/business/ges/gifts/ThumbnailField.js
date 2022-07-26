import * as React from "react";
import { styled } from "@mui/material/styles";
import { useRecordContext } from "react-admin";

const Img = styled("img")({
  maxWidth: 200,
  maxHeight: 400,
  
});

const ThumbnailField = () => {
  const record = useRecordContext();
  if (!record) return null;
  return <Img src={record?.providerGiftImage} alt="" />;
};

export default ThumbnailField;
