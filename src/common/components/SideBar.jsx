import React, { useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import NavW from './Nav';
import ListIcon from '@mui/icons-material/List';
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const drawerWidth = 240;

const roter = [
  { name: "Menu", link: "/Main", SVG: <PlayArrowIcon />},
  { name: "Monitorin Plan", link: "/Main/MonitorinPlan", SVG: <PlayArrowIcon /> },
  { name: "Residence", link: "/Main/Residence", SVG:<PlayArrowIcon /> },
  { name: "Alarm", link: "/Main/Alarm", SVG: <PlayArrowIcon /> }
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideBar({ children }) {
  const theme = useTheme();
  const history = useNavigate();
  const [open, setOpen] = useState(false);

  const { exito,User } = useSelector((state) => ({
    exito: state.Login.exito,
    User: state.Login.User,

  })) 

  useEffect(()=>{
    console.log(User)
    if(Object.keys(User).length === 0){
      history('/')
    }
  },[])

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className= " h-screen w-full overflow-hidden" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar className=' bg-BlueHeader text-black'>
          <span className='w-6 h-6 cursor-pointer' onClick={handleDrawerOpen}>{<ListIcon />}</span>
          <NavW />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={{ '& .MuiDrawer-paper': { backgroundColor: "#a0c4c4" } }}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {roter.map((text, index) => (
            <>
            <Link to={`${text.link}`} key={text.name}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    '& .MuiListItemText-primary': { fontSize: '2rem' },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color:"white",
                      '& .MuiSvgIcon-root': { fontSize: '2rem' },
                    }}
                  >
                    {text.SVG}
                  </ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0, color:"white", '& .MuiSvgIcon-root': { fontSize: '2rem' },whiteSpace: 'normal', }} />
                </ListItemButton>
              </ListItem>
            </Link>
            <Divider />
            </>
          ))}
        </List>
      </Drawer>
      <Box className=' h-full w-full' component="main" sx={{ flexGrow: 1, p: 0 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired
};