import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        handleClose(); // Cerrar el menú en dispositivos móviles si está abierto
    };

    const navItems = [
        { label: 'Inicio', id: 'home' },
        { label: 'Sobre Mí', id: 'about' },
        { label: 'Habilidades', id: 'skills' },
        { label: 'Proyectos', id: 'projects' },
        { label: 'Contacto', id: 'contact' }
    ];

    return (
        <AppBar position="sticky" sx={{ transition: 'background-color 0.3s ease' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Mi Portafolio
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem 
                                    key={item.id} 
                                    onClick={() => scrollToSection(item.id)}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    <Box sx={{ display: 'flex' }}>
                        {navItems.map((item) => (
                            <Button 
                                key={item.id} 
                                color="inherit" 
                                onClick={() => scrollToSection(item.id)}
                                sx={{ mx: 1 }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;