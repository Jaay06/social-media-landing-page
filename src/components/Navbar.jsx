import { Construction, Mail, Notificationsn } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { Box } from '@mui/system'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:'space-between'
})

const Search = styled('div')(({theme})=>({
    backgroundColor: 'white',
    padding: "0px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
        display: "none"
    }
}))

const Navbar = () => {
const [open, setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs: 'none', sm:'block'}}}>JAY SOCIALS</Typography>
            
            {/* The logo */}
            <Construction sx={{ display: { xs:'block', sm:'none'},}}/> 
            <Search><InputBase placeholder='Search...'   /></Search>
            <Icons>
                <Badge badgeContent={10} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={99} color="error">
                    <Notifications />
                </Badge>
                <Avatar sx={{ width:30, height: 30} } src=''
                onClick={e=>setOpen(true)}
                />
            </Icons>
            <UserBox onClick={e=>setOpen(true)}>
            <Avatar sx={{ width:30, height: 30, } } src=''/>Jay
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar