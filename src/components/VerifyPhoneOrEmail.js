import React, { useState } from "react";

import {
  Grid,
  Box,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import bgImage from "./back.jpg";
import VerifyMagicCode from "./VerifyMagicCode";

//Styling UI

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

const VerifyPhoneOrEmail = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [magicCode, setMagicCode] = useState("");
  const [showVerifyMagicCode, setShowVerifyMagicCode] = useState(false);
  const [showVerify,setShowVerify] = useState(true);
  

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
    // const generateCode = () => {
    //   const code=  Math.floor(1000 + Math.random() * 9000);
    //   setMagicCode(code)
    //   alert('your magic code is : '+ code)
      
    // }
    
    //check if user already Exist
    
    const handleSubmit = (e) => {
      e.preventDefault();
      if (phone.length > 0 || email.length > 0) {

        
        setMagicCode(3419)
      
      

      setShowVerifyMagicCode(true);
      setShowVerify(false)
      alert("Your Magic Code is : 3419")
    }
  };

  return (
    
    <Box>
      
      {
                    showVerify && (
        <Box
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
                    height: "40vh",
                    justifyContent: "center",

                    alignItems: "center",
                    display: "block",
                    minHeight: "400px",
                    backgroundColor: "white",
                  }}
                >
                  
                  
                  
                  <Grid style={{ display: "flex", justifyContent: "center" }}>
                    <Container style={{ marginTop: "10vh" }}>
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
                          Continue with Mobile number or Email.
                        </Typography>
                      </Box>

                      {/* phone input */}

                      <Box style={{ marginLeft: "50px", marginTop: "10px" }}>
                        <form onSubmit={handleSubmit}>
                          <TextField
                            size="small"
                            style={{ marginTop: "15px", width: "300px" }}
                            label="Mobile Number"
                            type="tel"
                            variant="outlined"
                            value={phone}
                            onChange={handlePhoneChange}
                          />
                          <Box
                            style={{ marginLeft: "18vh", marginTop: "10px" }}
                          >
                            <Typography>or</Typography>
                          </Box>
                          <TextField
                            size="small"
                            style={{ marginTop: "10px", width: "300px" }}
                            label="Email"
                            type="email"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                          />

                          <Button
                            size="large"
                            variant="contained"
                            style={{ marginTop: "25px", width: "300px" }}
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Get Started
                          </Button>
                        
                          
                        </form> 
                      
                      </Box>
                    </Container>
                    
                  
                  </Grid>
                

              
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
    )}
    {showVerifyMagicCode && (
      
      <VerifyMagicCode setShowVerify={setShowVerify} phone={phone} email={email}/>               
    )

    }
    
    </Box>

  );
};

export default VerifyPhoneOrEmail;
