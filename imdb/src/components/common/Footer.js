import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter, YouTube, } from "@mui/icons-material";
import { Box, Button, styled } from "@mui/material";
import { createTheme } from '@mui/material/styles';




export default function Footer() {

    const ButtonDiv = styled(Grid)`
        padding: 0  ;
    `;

    const Icon= styled(Box)`
   
     color:#FFFFFF`;


    

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#121212",
        p: 5,
        mt:21
      }}
    >
    <Container maxWidth="lg"  >
       
          <ButtonDiv  mt={1} align="center">
            <Button variant="contained" sx={{backgroundColor:"#F2BE22"}} >
            <Typography color="#121212"sx={{ pl: 1, pr: 1,pt:1,pb:1 }}>SignIn for more access</Typography>
            </Button>
          </ButtonDiv> 
         
          <Icon mt={4} >
            
            <Link href="https://www.facebook.com/" color="inherit"sx={{ pl: 50, pr: 5 }}>
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 5, pr: 5 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit" sx={{ pl: 5, pr: 5 }}>
              <Twitter />
            </Link>
            <Link href="https://www.youtube.com/" color="inherit"sx={{ pl: 5, pr: 5 }}>
              <YouTube />
            </Link>
          </Icon>
       
        <Box mt={3}>
          <Typography variant="body2" color="#FFFFFF" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              IMDb Cone
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
