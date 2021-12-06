import { AppBar, Toolbar, Container, Link, Box, Button } from '@material-ui/core';
import { Email } from '@material-ui/icons';


const Navbar = () => {
  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar >
          <Box sx={{ flexGrow: 1, mx: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;