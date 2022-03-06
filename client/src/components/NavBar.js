import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavBar({isAuthenticated, setIsAuthenticated, user, setUser}) {

    function logout() {
        fetch('/logout',{
            method:'DELETE'
        })
        .then(()=>{
            setIsAuthenticated(false)
            setUser(null)
        })
    }

    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Home" {...a11yProps(0)} component={Link} to='/home' />
            
            {user?<Tab onClick={logout} label="Logout" {...a11yProps(1)} />:<Tab label="Login" {...a11yProps(2)} component={Link} to='/login' />}
            
        </Tabs>
      </Box>
    </Box>
  );

//   return (
//     <div>
//         <nav className="nav">
//             <a href="#/nav">
//                 <NavLink to="/sign-up" exact >
//                     Sign-Up
//                 </NavLink>
//             </a>{' '} |
//             <a href="#/nav">
//                {user? <li onClick={logout}> Logout </li> : 
//                <NavLink to="/login" exact>
//                     Login
//                 </NavLink>} 
//             </a>{' '} |
//             <a href="#/nav">
//                 <NavLink to="/home" exact>
//                     Home
//                 </NavLink>
//             </a>
//             {isAuthenticated?             
//             <li>
//                 <NavLink to="/Films" exact>
//                    Film
//                 </NavLink>
//             </li>:
//             <p> </p>}
//         </nav>
//     </div>
//   )
}

export default NavBar;