import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';



const Side = () => {
  return (
    <Paper elevation={3} style={{ width: '220px', height: '800px', padding: '20px', marginRight: '20px',marginLeft:'100px' }}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Button component={Link} to="/link1" variant="text" sx={{ color: 'black' }}>
          <Typography sx={{ color: 'black',textTransform: 'none' }}>Company Information <CheckCircleIcon sx={{ color: 'green' }} /></Typography>
        </Button>
        <Button component={Link} to="/link2" variant="text" color="primary">
        <Typography sx={{ color: 'black',textTransform: 'none' }}>Director Information <CheckCircleIcon sx={{ color: 'green' }} /></Typography>
        </Button>
        <Button component={Link} to="/link3" variant="text" color="primary">
        <Typography sx={{ color: 'black',textTransform: 'none' }}>Banking Information <CheckCircleIcon sx={{ color: 'green' }} /></Typography>
        </Button>
        <Button component={Link} to="/link3" variant="text" color="primary">
        <Typography sx={{ color: 'black',textTransform: 'none' }}>Firm Documents <CheckCircleIcon sx={{ color: 'green' }} /></Typography>
        </Button>
        <Button component={Link} to="/link3" variant="text" color="primary">
        <Typography sx={{ color: 'black',textTransform: 'none' }}>Director Documents</Typography>
        </Button>
        {/* Add more buttons as needed */}
      </Box>
    </Paper>
  );
};

export default Side;
