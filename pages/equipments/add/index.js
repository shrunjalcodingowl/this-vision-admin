import React from 'react';
import Image from 'next/image';
import { Card, Grid, Typography, Button, Autocomplete, Box, FormControlLabel } from '@mui/material';

// import av1 from '../../../assets/images/users/upload.jpg';
import CustomTextField from '../../../src/components/forms/custom-elements/CustomTextField';
import CustomFormLabel from '../../../src/components/forms/custom-elements/CustomFormLabel';
import CustomSwitch from '../../../src/components/forms/custom-elements/CustomSwitch';

const Teams = [
  {
    id: 'eric',
    label: 'Eric',
  },
  {
    id: 'joao',
    label: 'Joao',
  },
  {
    id: 'tushly',
    label: 'Tushly',
  },
  {
    id: 'pnaji',
    label: 'Pnaji',
  },
];
const CustomerEdit = () => (
  
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ ml: 1, mt: 2, pl: 1 }}>
        <Typography variant="h3" gutterBottom>
          Add Equipment
        </Typography>
      </Grid>
      <Grid item lg={12} md={12} xs={12}>
        <Card
          sx={{
            p: 3,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            alt="Upload Image"
            src={'/images/users/upload.jpg'}
            width="210"
            height="210"
            className="roundedCircle"
          />
        </Card>
      </Grid>

      <Grid item lg={12} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={6}>
                <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
                <CustomTextField
                  id="name"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomFormLabel htmlFor="brand">Brand</CustomFormLabel>
                <CustomTextField
                  id="brand"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <CustomFormLabel htmlFor="model">Model (Year)</CustomFormLabel>
                <CustomTextField
                  id="model"
                  variant="outlined"
                  fullWidth
                  size="small"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <CustomFormLabel htmlFor="capacity">Rider Capacity</CustomFormLabel>
                <CustomTextField
                  id="capacity"
                  variant="outlined"
                  fullWidth
                  size="small"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <CustomFormLabel htmlFor="credits">Credits ( / day)</CustomFormLabel>
                <CustomTextField
                  id="credits"
                  variant="outlined"
                  fullWidth
                  size="small"
                  type="number"
                />
              </Grid>

              <Grid item xs={12} sm={4}>
                <FormControlLabel control={<CustomSwitch />} label="Tow Hook" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControlLabel control={<CustomSwitch />} label="Night Light" />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControlLabel control={<CustomSwitch />} label="EPIRB Onboard" />
              </Grid>

              <Grid item xs={12}>
                <CustomFormLabel htmlFor="product-information">Product Information</CustomFormLabel>
                <CustomTextField
                  id="product-information"
                  variant="outlined"
                  multiline
                  rows={7}
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>

      <Grid item lg={12} md={12} xs={12}>
        <Card sx={{ p: 3 }}>
          <form>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={12}>
                <CustomFormLabel htmlFor="availability">Availability</CustomFormLabel>
              </Grid>

              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Monday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Tuesday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Wednesday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Thursday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Friday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Saturday" />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControlLabel control={<CustomSwitch />} label="Sunday" />
              </Grid>

              <Grid item xs={12}>
                <Button color="primary" variant="contained">
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Grid>
);

export default CustomerEdit;