import { Badge, Box, Drawer, IconButton, List, ListItem, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

const navItems = [{
    title: 'Home',
    path: '/'
}, {
    title: 'About',
    path: '/about'
}, {
    title: 'Contact',
    path: '/contact'
}];

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    //state
    const [isOpenNav, setIsOpenNav] = useState(false);

    const handleDrawerToggle = () => {
        setIsOpenNav((prev: boolean) => !prev);
    }

    return (
        <header className='w-full flex items-center justify-between py-4 md:px-12 border-b border-gray-300'>
            {!isMobile && <div>
                <Typography variant='h6' fontWeight={600}>Trang Si Ban</Typography>
            </div>}

            {isMobile && <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>}

            {!isMobile && <nav className='flex items-center gap-6'>
                {navItems.map((item) => (
                    <NavLink
                        key={item.title}
                        to={item.path}
                        className={({ isActive }) =>
                            `relative py-1 text-sm font-medium transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 ${isActive
                                ? '!text-black after:w-full'
                                : '!text-black after:w-0 hover:text-black'
                            }`
                        }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>}

            {<div className='flex items-center gap-x-2 pr-2'>
                <IconButton>
                    <FavoriteBorderIcon />
                </IconButton>

                <IconButton>
                    <Badge
                        badgeContent={2}
                        color="error"
                        sx={{
                            '& .MuiBadge-badge': {
                                fontSize: '0.65rem',
                                height: '18px',
                                minWidth: '18px',
                            },
                        }}
                    >
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
            </div>}

            {isMobile && <Drawer
                anchor="left"
                open={isOpenNav}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                PaperProps={{ sx: { width: '280px' } }}
            >
                <Box className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b border-gray-300 p-4">
                        <Typography variant="h6" fontWeight={700}>Trang Si Ban Shop</Typography>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon sx={{
                                fontSize: 18
                            }} />
                        </IconButton>
                    </div>

                    <List className='!py-0'>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                                onClick={handleDrawerToggle}
                                sx={{
                                    '&.active': {
                                        bgcolor: 'rgba(37, 99, 235, 0.08)',
                                        borderLeft: '4px solid #2563eb',
                                        color: '#2563eb',
                                    },
                                    color: 'text.secondary',
                                    mb: 1
                                }}
                            >
                                <ListItemText
                                    primary={item.title}
                                    primaryTypographyProps={{ fontWeight: 500, fontSize: '1.1rem' }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Box className="mt-auto border-t border-gray-300 p-4 text-center">
                        <Typography variant="caption" color="textSecondary">
                            © 2026 Trang Si Ban
                        </Typography>
                    </Box>
                </Box>
            </Drawer>}
        </header>
    )
}

export default Header