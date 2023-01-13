import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import bgImage from "./back.jpg";

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "60%",
  height: "70%",
  backgroundColor: "background.paper",
  boxShadow: 24,
};
const center = {
  display: "flex",
  justifyContent: "center",
};

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Box sx={boxStyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  height: "70vh",
                  color: "whitesmoke",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "block",
                  minHeight: "450px",
                  backgroundColor: "white",
                }}
              >
                <Container>
                  <Box height={35} />
                  <Box sx={center}>
                    <Typography variant="h5">Login</Typography>
                  </Box>
                  <Box
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="h7">
                      Continue with mobilbe numnber.
                    </Typography>
                  </Box>

                  {/* phone input */}

                  <Box style={{ marginLeft: "50px", marginTop: "10px" }}>
                    <PhoneInput
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                    <Button
                      style={{ marginTop: "10px", width: "300px" }}
                      variant="contained"
                    >
                      Get Started
                    </Button>
                    <Box style={{paddingLeft:'20vh',margingTop:'20px'}}>
                        <Typography variant="h7">or</Typography>
                    </Box>
                  
                  </Box>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Home;
