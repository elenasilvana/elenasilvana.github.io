import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { sectionIds } from '../sections';
import SelectionContext from '../context/sectionContext';
import { Link, SvgIcon, useTheme } from '@mui/material';
import { LinkedIn, Mail } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';
import logo from '../img/elena-name.svg';
import frontDev from '../img/front-end-dev.svg'
import { Container as StyledContainer } from '../styles/common-components';


function EnhancedNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const { setSelectedSection, setIsBarNavigation, selectedSection } = React.useContext(SelectionContext)
  const theme = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (sectionId: string) => {
    setAnchorElNav(null);
    setSelectedSection(sectionId)
    setIsBarNavigation(true)
  };


  return (
    <AppBar style={{ background: theme.palette.midnightGraphite.main }} position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {sectionIds.map((sectionId) => (
                <MenuItem key={sectionId} onClick={() => handleCloseNavMenu(sectionId)}>
                  <Typography sx={{ textAlign: 'center' }}>{sectionId}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            <StyledContainer>
              <img height={50} width={150} src={logo} alt="elena casillas" />
              <img height={50} width={150} src={frontDev} alt="front end developer" />
            </StyledContainer>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row' }}>
            <StyledContainer flex flexDirection='row' alignSelf='center' height="fit-content">
              {sectionIds.map((sectionId) => (
                <Button
                  variant={selectedSection === sectionId ? 'outlined' : undefined}
                  key={sectionId}
                  onClick={() => handleCloseNavMenu(sectionId)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {sectionId}
                </Button>
              ))}
            </StyledContainer>
            <StyledContainer flex flexDirection='column'>
              <Link href='https://github.com/elenasilvana' underline="hover" target="_blank" rel="noopener">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="github button"
                  color="secondary"
                >
                  <GitHub />
                </IconButton>
              </Link>
              <Link href='https://www.linkedin.com/in/elena-silvana-c' underline="hover" target="_blank" rel="noopener">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="linkedin account"
                  color="secondary"
                >
                  <LinkedIn />
                </IconButton>
              </Link>
            </StyledContainer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default EnhancedNavBar;
