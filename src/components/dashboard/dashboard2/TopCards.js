import React from 'react';
import { Card, CardContent, Typography, Fab, Box, Grid } from '@mui/material';
import FeatherIcon from 'feather-icons-react';

const sales = [
  {
    btnbg: 'primary.light',
    btntext: 'primary.main',
    icon: 'users',
    digits: '39354',
    subtext: 'Users',
    profit: '-9',
    type: 'loss',
  },
  {
    btnbg: 'warning.light',
    btntext: 'warning.main',
    icon: 'check-circle',
    digits: '43960',
    subtext: 'Bookings',
    profit: '+23',
    type: 'profit',
  },
  {
    btnbg: 'error.light',
    btntext: 'error.main',
    icon: 'dollar-sign',
    digits: '25489',
    subtext: 'Credit Purchase',
    profit: '+38',
    type: 'profit',
  },
  {
    btnbg: 'success.light',
    btntext: 'success.main',
    icon: 'refresh-cw',
    digits: '8358',
    subtext: 'Subscriptions',
    profit: '-12',
    type: 'loss',
  },
];

const TopCards = () => (
  <Card
    sx={{
      p: 0,
    }}
  >
    <Grid container spacing={0}>
      {sales.map((topcard) => (
        <Grid item xs={6} lg={3} sm={3} key={topcard.digits}>
          <CardContent
            sx={{
              borderRight: {
                xs: '0',
                sm: '1px solid rgba(0,0,0,0.1)',
              },
              padding: '30px',
              '& :last-child': {
                borderRight: '0',
              },
            }}
          >
            <Fab
              size="large"
              aria-label="top-cards"
              sx={{
                backgroundColor: topcard.btnbg,
                color: topcard.btntext,
                boxShadow: 'none',
                "&:hover": {
                  backgroundColor: topcard.btnbg,
                }
              }}
            >
              <FeatherIcon icon={topcard.icon} />
            </Fab>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                mt: 2,
              }}
            >
              <Typography variant="h3">{topcard.digits}</Typography>
              {/* <Typography
                color={topcard.type === 'profit' ? 'success.main' : 'error.main'}
                variant="caption"
                fontWeight="400"
                sx={{
                  ml: 1,
                }}
              >
                {topcard.profit}%
              </Typography> */}
            </Box>
            <Typography color="textSecondary" variant="h6" fontWeight="400">
              {topcard.subtext}
            </Typography>
          </CardContent>
        </Grid>
      ))}
    </Grid>
  </Card>
);

export default TopCards;
