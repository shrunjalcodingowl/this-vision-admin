import React from "react";
import {
  Grid,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import NextLink from "next/link";
import Image from "next/image";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import CustomCheckbox from "../../src/components/forms/custom-elements/CustomCheckbox";
import CustomTextField from "../../src/components/forms/custom-elements/CustomTextField";
import CustomFormLabel from "../../src/components/forms/custom-elements/CustomFormLabel";

import img1 from "../../assets/images/backgrounds/login-bg.svg";
import LogoIcon from "../../src/layouts/logo/LogoIcon";

const Login = () => (
  <Grid container sx={{ height: "100vh", justifyContent: "center" }}>
    <Grid
      item
      xs={12}
      sm={12}
      lg={6}
      sx={{
        background: (theme) =>
          `${theme.palette.mode === "dark" ? "#1c1f25" : "#ffffff"}`,
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            position: {
              xs: "relative",
              lg: "absolute",
            },
            height: { xs: "auto", lg: "100vh" },
            right: { xs: "auto", lg: "-50px" },
            margin: "0 auto",
          }}
        >
          <Image src={img1} alt="bg" maxWidth="812" />
        </Box>

        <Box
          sx={{
            p: 4,
            position: "absolute",
            top: "0",
          }}
        >
          <LogoIcon />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} sm={8} lg={6} display="flex" alignItems="center">
      <Grid container spacing={0} display="flex" justifyContent="center">
        <Grid item xs={12} lg={9} xl={6}>
          <Box
            sx={{
              p: 4,
            }}
          >
            <Typography fontWeight="700" variant="h2">
              Welcome Admin
            </Typography>
            <Box
              sx={{
                mt: 4,
              }}
            >
              <CustomFormLabel htmlFor="email">Email Address</CustomFormLabel>
              <CustomTextField id="email" variant="outlined" fullWidth />
              <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
              <CustomTextField
                id="password"
                type="password"
                variant="outlined"
                fullWidth
                sx={{
                  mb: 3,
                }}
              />
              <Box
                sx={{
                  display: {
                    xs: "block",
                    sm: "flex",
                    lg: "flex",
                  },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    ml: "auto",
                  }}
                >
                  <NextLink href="/authentication/reset-password">
                    <Typography
                      fontWeight="500"
                      sx={{
                        display: "block",
                        textDecoration: "none",
                        mb: "16px",
                        color: "primary.main",
                        cursor: "pointer",
                      }}
                    >
                      Forgot Password?
                    </Typography>
                  </NextLink>
                </Box>
              </Box>

              <NextLink href="/">
                <Button
                  color="primary"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    pt: "10px",
                    pb: "10px",
                  }}
                >
                  Sign In
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
Login.layout = "Blank";
export default Login;
