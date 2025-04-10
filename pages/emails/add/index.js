import React from "react";
import { Grid } from "@mui/material";
import {
  FbOrdinaryForm,
  FbDefaultForm,
  newNotification,
  FbNewEmail,
  FbBasicHeaderForm,
  FbReadonlyForm,
  FbDisabledForm,
  FbLeftIconForm,
  FbRightIconForm,
  FbInputVariants,
} from "../../../src/components/forms/fb-elements/index";

const FormLayouts = () => (
  <Grid container spacing={0}>
    <Grid item lg={12} md={12} xs={12}>
      <FbNewEmail />
    </Grid>
  </Grid>
);

export default FormLayouts;
