import { FC } from "react";
import { TextField, Button, Typography, Box, Card,   FormControlLabel, Checkbox, Link } from "@mui/material";
import { styled } from "@mui/system";
import Applogo from '../../assets/app/appLogo.png';
import '../../styles/css/animation.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GoogleIcon from '../../assets/icons/social/google.png';
import MicrosoftIcon from '../../assets/icons/social/microsoft.png';


const GlassCard = styled(Card)({

  backgroundColor: "#ffffff00",
  padding: "2rem",
  borderRadius: "15px",
  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  width: "100%",
  textAlign: "center",
  border: "2px solid #80808000",
});

const BackgroundContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(47deg, #001eef, #01cee3, #db5779, #71c66c, #ff8000)",
  backgroundSize: "360% 360%",
  animation: "gradient-animation 36s ease infinite",
});


const SignIn: FC = () => {
  return (
    <BackgroundContainer>

      <GlassCard>

        <Box component={'img'} src={Applogo} alt="App Logo" sx={{ width: 100, height: 85 }} />
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
          Music Drive
        </Typography>
        <TextField fullWidth label="Email" variant="outlined" size="small" sx={{ mt: 2 }} />
        <TextField fullWidth label="Password" type="password" variant="outlined" size="small" sx={{ mt: 2 }} />
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 1, mb: 2,flexWrap:'wrap' }}>
          <FormControlLabel control={<Checkbox color="primary" />} label="Remember me" />
          <Link href="#" variant="body2">Forgot password?</Link>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} endIcon={<ArrowForwardIcon />} >
          Continue
        </Button>
        <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
          Or Signin with
        </Typography>
        <Box display="flex" sx={{ mt: 2,justifyContent:'center',alignItems:'center',gap:1 }}>
          <Box sx={{p:1,cursor:'pointer' }}>
            <Box component={'img'} src={GoogleIcon} sx={{ height: 50,  }} />
          </Box>
          <Box sx={{p:1,cursor:'pointer' }}>
            <Box component={'img'} src={MicrosoftIcon} sx={{ height: 30, }} />
          </Box>
        </Box>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account? <Link href="#">Sign Up</Link>
        </Typography>
      </GlassCard>
    </BackgroundContainer>
  );
};

export default SignIn;
