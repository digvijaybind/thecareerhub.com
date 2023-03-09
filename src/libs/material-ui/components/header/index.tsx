import * as React from 'react';
import {AppBar} from '@mui/material';
import {Box} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonComponent from '../button';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Logo from '../../../../assets/logo/Logo4.webp'
import Image from 'next/image';
import styles from "./style.module.css";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{text:'Career Test',color:"white"}, {text:'Blog',color:"white"},{text: 'Login',color:"#fee040"}];

 export function DrawerAppBar(props: Props) {
  const { window,toggleModal } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
   <>
   
     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: any) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
           <ListItem key={navItems.length} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
          <ButtonComponent 
             // variant={"contained"}
        // color={"secondary"} 
        text={"Take a free test now"}
        onClick={()=>{alert("clicked")}}
        className={"Frame"}
          />
            </ListItemButton>
                </ListItem>

      </List>
    </Box>
   </>
  
  );
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    width: '300px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '300px',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#2b2b2b',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      float:"left",
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '100%',
        '&:focus': {
          width: '100%',
        },
      },
    },
  }));
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{backgroundColor:"#013388" ,boxShadow:"none",position:"relative"}}
      >
        <Toolbar className={styles.header}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: {  sm: 'block' } }}
          >
          
             <Image   src={Logo} alt="" width={170} height={25} />
{}
         
          </Typography>
          <Search  sx={{ display: { xs: 'none', sm: 'block' } }} style={{borderRadius:25}}>
            {/* <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper> */}
            <StyledInputBase
              placeholder="Search for your career"
              inputProps={{ 'aria-label': 'search' }}
            />
             <IconButton type="button" sx={{ p: '10px' }} >
        <SearchIcon  style={{float:"right"}}/>
      </IconButton>
          </Search>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
             <ButtonComponent endIcon={<ExpandMoreIcon/>}  text={"Explore"} style={{ color: '#fff',paddingLeft:25,paddingRight:25 }} 
             onClick={toggleModal}/>
            {navItems.map((item) => (
              <ButtonComponent key={item.text} text={item.text} style={{ color: item.color,paddingLeft:25,paddingRight:25  }} />
                
              
            ))}
          </Box>
          
          <ButtonComponent 
          sx={{ display: { xs: 'none', sm: 'block' } }}
             variant={"contained"}
        color={"secondary"} 
        text={"Take a free test now"}
        onClick={()=>{alert("clicked")}}
        style={{background:"#fee040",color:"#112152"}}
          />
           
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}
export default DrawerAppBar;