// import { AppBar, Button, Toolbar, Typography } from '@mui/material';
// import React from 'react';

// interface HeaderProps {
//   name: string;
//   email: string;
// }

// const Header: React.FC<HeaderProps> = ({ name, email }) => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
//           Truu Pe
//         </Typography>
//         <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
//           <Typography variant="body1" sx={{ mr: 2 }}>
//             {name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" sx={{ mr: 2 }}>
//             {email}
//           </Typography>
//           <Button variant="contained" color="success">
//             Getting Started
//           </Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider'; // Import Divider component
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import truupe from './truupe.png';
import unknown from './unknown.png';



const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white',height: '166px',font:'14px adobe-clean,sans-serif' }}>
      <Toolbar>
        <img src={truupe} alt="Logo" style={{ marginRight: '1000px' }} />
        <Typography variant="h6" component="div" sx={{ color: 'black', display: 'flex', alignItems: 'center' }}>
          <Link to="/your-route" style={{ textDecoration: 'none', color: 'inherit',font:'adobe-clean,sans-serif' }}> {/* Change "/your-route" to your desired route */}
            My Entities
          </Link>
          <ArrowDropDownIcon sx={{ marginLeft: '4px' }} />
          <div style={{ width: '1px', height: '30px', backgroundColor: 'black', marginLeft: '4px',marginRight:'50px'}}></div>
          <NotificationsNoneRoundedIcon sx={{ marginLeft: '4px',marginRight:'20px' }} />
          <SettingsOutlinedIcon sx={{ marginLeft: '4px',marginRight:'20px' }} />
          <HelpOutlineIcon sx={{ marginLeft: '4px',marginRight:'20px' }} />
          <Avatar sx={{ marginLeft: '4px', backgroundColor: 'purple', color: 'white' }}>BM</Avatar>
          <hr /> {/* Set the background color to purple */}
        </Typography>
        <hr />
      </Toolbar>
      <Divider /> {/* Horizontal line */}
      <Toolbar style={{ marginRight: '1000px' }}>
      <img src={unknown} alt="Logo" style={{marginLeft: '60px', marginRight: '10px',marginTop:'0px' }} />
      <div>
          <Typography variant="h6" component="div" sx={{ color: 'black', display: 'flex', alignItems: 'center',marginTop:'20px' }} >
            Hello, John Dew!
          </Typography>
          <Typography component="div" sx={{ color: 'black', display: 'flex', alignItems: 'center' }} >
            john.dew@gmail.com
          </Typography>
          <Divider style={{textDecoration: 'none'}} />
          <Typography component="div" sx={{ color: 'black', display: 'flex', alignItems: 'center' }} >
              <Link to="/getting-started" style={{ textDecoration: 'none', color: 'darkpink', borderBottom: '5px solid pink', marginLeft: '-66px' }}>Getting Started</Link> {/* Border only below "Getting Started" */}
            </Typography>
        </div>

      </Toolbar>
    </AppBar>
  );
};

export default Header;




