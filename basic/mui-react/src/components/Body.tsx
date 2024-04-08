import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import MyCarousel from './MyCarousel';
import note from './note.png';

const Body: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Left side content */}
      <Grid item xs={9}>
        <Card variant="outlined" sx={{ height: '100%',paddingLeft:'75px' }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Welcome to Truu Pe!
            </Typography>
            <Typography variant="body1" gutterBottom>
              As you embark on your journey with us, we are thrilled to guide you through a seamless and secure experience. Our platform is designed to streamline our business dealings, from KYC/KYB compliance to smooth transactions.
            </Typography>

            <Grid item xs={12}> {/* Adjusted xs value */}
            <Card variant="outlined" style={{ backgroundColor: 'lightgrey' }} >
              <CardContent>
                <Grid container alignItems="center" spacing={0.1} style={{ backgroundColor: 'lightgrey' }}>
                  {/* Typography at the top */}
                  <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom sx={{paddingLeft:'140px' }}>
                      Start your KYC/KYB process now!
                    </Typography>
                  </Grid>

                  {/* Image */}
                  <Grid item>
                    <img src={note} alt="Image" style={{ width: '80%' }} />
                  </Grid>

                  {/* Content */}
                  <Grid item xs>
                    <Grid container direction="column" alignItems="center">
                      <Typography variant="body2">
                        Ready to kickstart your KYC/KYB journey with TruuPE? Click the button below to begin the process and unlock a world of possibilities for your business. Our intuitive platform guides you through each step, ensuring a smooth and hassle-free experience.
                      </Typography>
                    </Grid>
                  </Grid>

                  {/* Button */}
                  <Grid item xs={12}>
                    <Grid container justifyContent="center">
                      <Button variant="contained" color="primary">
                        Start KYC/KYB process now!
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>




            

            {/* Nested grid */}
            <Grid container spacing={0}>
              <Grid item xs={3}>
                <Card variant="outlined">
                  <CardContent>
                    <video width="110%" controls>
                      <source src="your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      See what you'll able to do with TruuPe!
                    </Typography>
                    <Typography variant="body2">
                      From streamlining your deal process to ensuring secure transactions,TruePE empowers businesses to thrive in today's competitive landscape. 
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card variant="outlined">
                  <CardContent>
                  <video width="110%" controls>
                      <source src="your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={3}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      See how to process KYC/KYB in TruuPe!
                    </Typography>
                    <Typography variant="body2">
                      Whether you're a new user or a seasoned professional or guide will equip you with the knowledge and tools to complete KYC/KYB process efficiently and securely.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      {/* Right side content */}
      <Grid item xs={3}>
'        <Card variant="outlined" sx={{ height: '100%',marginRight:'50px'}}>
'          <CardContent>
            <Typography variant="h6" gutterBottom>
              Required Documents for KYB/KYC process
            </Typography>
            <MyCarousel />
            <Grid container alignItems="center" spacing={1}>
              <Grid item>
                <Typography variant="body1">
                  Need any help in KYC process?
                </Typography>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Getting Started
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Body;
