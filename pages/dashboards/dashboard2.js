import { Grid, Typography, Box } from "@mui/material";
import {
  EarningsShop,
  TopCards,
  TopCards2,
  ProductPerformance,
  WeeklyStats,
  RecentTransactions,
  Earnings,
  YearlySales,
  ProductsTable,
  MedicalproBranding,
  BlogCard,
} from "../../src/components/dashboard/dashboard2";

const Dashboard2 = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12} sx={{ ml: 1, pl: 1 }}>
        <Typography variant="h3" gutterBottom>
          This Year
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <EarningsShop />
      </Grid>
      <Grid item xs={12} lg={8}>
        <TopCards />
      </Grid>
      <Grid item xs={12} lg={12} sx={{ ml: 1, mt: 2, pl: 1 }}>
        <Typography variant="h3" gutterBottom>
          This Month
        </Typography>
      </Grid>
      <Grid item xs={12} lg={4}>
        <EarningsShop />
      </Grid>
      <Grid item xs={12} lg={8}>
        <TopCards2 />
      </Grid>
      <Grid item xs={12} lg={12}>
        <ProductPerformance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <ProductsTable />
      </Grid>
    </Grid>
  );
};

export default Dashboard2;
