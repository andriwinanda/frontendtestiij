import { AppBar, Toolbar, Container, Link, Box, List, ListItem, ListItemText } from '@material-ui/core';
import { Email } from '@material-ui/icons';


const ResponsiveAppBar = () => {


  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="lg">
        <Toolbar >
          <img src="https://www.iij.ad.jp/global/overseas/ja/indonesia/common/img/header_img_01.png" />
          <Box sx={{ flexGrow: 1, mx: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#" underline="always" sx={{ color: 'text.disabled', margin: 0, display: 'block', flexWrap: 'wrap', alignItems: 'center' }}>
              &lsaquo; Overseas Bases
            </Link>
          </Box>

          {/* Right Nav */}
          <Box sx={{ flexGrow: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#" underline="always">
              &lsaquo; Contact Us
            </Link>
            
            <Email color="primary" fontSize="small" />
          </Box>
          <Box sx={{ mx: 2, flexGrow: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#" underline="always">
              Language
            </Link>
          </Box>
          <Box sx={{ mx: 1, flexGrow: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#">
              <img src="https://www.iij.ad.jp/global/overseas/en/indonesia/common/img/header_img_03_on.png"></img>
            </Link>
          </Box>
          <Box sx={{ mx: 1, flexGrow: 0, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="#">
              <img src="https://www.iij.ad.jp/global/overseas/ja/indonesia/common/img/header_img_02_on.png"></img>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;