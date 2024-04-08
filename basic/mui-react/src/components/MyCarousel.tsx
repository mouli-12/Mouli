import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded'; // Importing the Carousel component
import RadioButtonUncheckedOutlinedIcon from '@mui/icons-material/RadioButtonUncheckedOutlined';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

const MyCarousel: React.FC = () => {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Carousel sx={{ height: '400px' }} >
          <div>
            <Typography variant="h6" gutterBottom>
              Private/Public Limited
            </Typography><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Certificate of incorporation
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    AOA Document
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    MOA Document
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Company Pan
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    GSTIN Certificate
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    AADHAR Card
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    PAN Card
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <FileCopyRoundedIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    Address Proof
                  </Typography>
                </Grid>
              </Grid><br />
          </div>
          <div>
          <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    User Registration
                  </Typography>
                  <Typography>
                    20-MAR-2024,10:34 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    Started KYB/KYC Process
                  </Typography>
                  <Typography>
                    20-MAR-2024,11:30 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <RadioButtonUncheckedOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography>
                    KYB/KYC process in draft
                  </Typography>
                  <Typography>
                    20-MAR-2024,12:00 PM
                  </Typography>
                </Grid>
              </Grid><br />
          </div>
          <div>
          <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    User Registration
                  </Typography>
                  <Typography>
                    20-MAR-2024,10:34 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    Started KYB/KYC Process
                  </Typography>
                  <Typography>
                    20-MAR-2024,11:30 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    KYB/KYC Process in Draft
                  </Typography>
                  <Typography>
                    20-MAR-2024,12:00 PM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    KYB/KYC Process Completed
                  </Typography>
                  <Typography>
                    21-MAR-2024,11:20 PM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                <RadioButtonUncheckedOutlinedIcon />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    KYB/KYC Process In-Review
                  </Typography>
                  <Typography>
                    21-MAR-2024,11:20 PM
                  </Typography>
                </Grid>
              </Grid><br />
          </div>
          <div>
          <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    User Registration
                  </Typography>
                  <Typography>
                    20-MAR-2024,10:34 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    Started KYB/KYC Process
                  </Typography>
                  <Typography>
                    20-MAR-2024,11:30 AM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    KYB/KYC Process in Draft
                  </Typography>
                  <Typography>
                    20-MAR-2024,12:00 PM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography>
                    KYB/KYC Process Completed
                  </Typography>
                  <Typography>
                    21-MAR-2024,11:20 PM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    KYB/KYC Process In-Review
                  </Typography>
                  <Typography>
                    21-MAR-2024,11:20 PM
                  </Typography>
                </Grid>
              </Grid><br />
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                <CheckCircleIcon color='primary' />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    KYC Verification Completed
                  </Typography>
                  <Typography>
                    25-MAR-2024,10:30 PM
                  </Typography>
                </Grid>
              </Grid><br />
          </div>
        </Carousel>
      
      </CardContent>
    </Card>
  );
};

export default MyCarousel;
