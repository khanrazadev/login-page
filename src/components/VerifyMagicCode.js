import React, { useState } from "react";
import UserDetail from "./UserDetails";
import {
  Grid,
  Box,
  Card,
  Typography,
  Container,
  TextField,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import bgImage from "./back.jpg";
import UserData from "./UserData.json";
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

const VerifyMagicCode = ({ setShowVerify, phone, email }) => {
  const [inputMagicCode, setInputMagicCode] = useState("");
  const [showMagicCode, setShowMagicCode] = useState(true);
  const [inputVerifyPhone, setInputVerifyPhone] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [emailMagicCode, setEmailMagicCode] = useState("");
  const [showVerifyEmail, setShowVerifyEmail] = useState(false);
  const [showEmailMagicCode, setShowEmailMagicCode] = useState(false);
  const [showExistingUser, setShowExistingUser] = useState(false);
  const [showExistingEmail, setShowExistingEmail] = useState(false);
  const [showVerifyPhone, setShowVerifyPhone] = useState(false);
  const [showUserPage, setShowUserPage] = useState(false);


  const handleMagicCodeChange = (e) => {
    setInputMagicCode(e.target.value);
  };
  const handleEmailMagicChange = (e) => {
    setEmailMagicCode(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleVerifyPhoneChange =(e)=>{
    setInputVerifyPhone(e.target.value);

  }

  //verify Phone here
  const handleClick = () => {
    const existPhone = UserData.find((user) => user.phone === phone);
    if (inputMagicCode === "3419") {
      if (existPhone) {
        //existing user

        setShowExistingUser(true);
        setShowMagicCode(false);
    } else {
          
        setShowVerifyEmail(true);
        setShowVerifyPhone(false)
        setShowMagicCode(false);
      }
    } else {
      alert("invalid input");
    }
  };


  const handleEmailClick = () => {
    alert("your magic code is 7878");
    setShowVerifyEmail(false);
    setShowEmailMagicCode(true);
    setShowExistingUser(false);

    setInputMagicCode("");
  };
  const handleEmailMagicClick = () => {
    const existEmail = UserData.find((user) => user.email === emailInput);
    if (existEmail) {
      setShowExistingEmail(true);
      setShowEmailMagicCode(false);
    } else {
      setShowUserPage(true);
      setShowEmailMagicCode(false)
    }
  };

  const handleExistingUserClick = () => {
    setShowVerifyEmail(true);
    setShowExistingUser(false);
  };

  const handleExistingEmailClick = ()=>{
    alert("your magic code is : 7979")
    setShowExistingEmail(false);
    setShowVerifyPhone(true)


  }
  const handleVerifyPhoneClick = ()=>{
    if(inputVerifyPhone === "7979"){
        setShowUserPage(true)


    }
    else{
        alert("Invalid Magic Code")
    }

  }



  return (

    
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

                  {/* Text field  */}

                  <Box style={{ marginLeft: "50px", marginTop: "10px" }}>
                    <Box
                      style={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "left",
                      }}
                    ></Box>

                    {/*                       
                      Verify Magic for Phone number  */}

                    {showMagicCode && (
                      <Box>
                        <Box style={{ marginLeft: "7vh", marginBottom: "3vh" }}>
                          <Typography variant="h6">
                            Verify Your Magic Code.
                          </Typography>
                        </Box>
                        <Typography variant="h7">
                          Please enter the magic code sent on {phone}
                        </Typography>
                        <TextField
                          size="small"
                          type="text"
                          value={inputMagicCode}
                          onChange={handleMagicCodeChange}
                          style={{ marginTop: "10px", width: "300px" }}
                          placeholder="Enter magic code"
                        ></TextField>

                        <Button
                          onClick={handleClick}
                          style={{ marginTop: "15px", width: "300px" }}
                          variant="contained"
                        >
                          Confirm
                        </Button>
                      </Box>
                    )}
                    {/* Verify Phone if Email verification is completed */}

                    {/* verify Email if Phone Verification is successfull */}

                    {showVerifyEmail && (
                      <Box>
                        <Alert
                          style={{
                            marginBottom: "15px",
                            marginTop: "10px",
                            width: "265px",
                          }}
                          severity="success"
                        >
                          Mobile Verified Successfully
                        </Alert>
                        <Typography variant="h7">Verify your Email.</Typography>
                        <TextField
                          size="small"
                          type="text"
                          value={emailInput}
                          onChange={handleEmailChange}
                          style={{ marginTop: "10px", width: "300px" }}
                          placeholder="Enter Email Address"
                        ></TextField>

                        <Button
                          onClick={handleEmailClick}
                          style={{ marginTop: "15px", width: "300px" }}
                          variant="contained"
                        >
                          Request Magic Code
                        </Button>
                      </Box>
                    )}
                     {
                showVerifyPhone && (
                    <Box>
                    <Alert
                      style={{
                        marginBottom: "15px",
                        marginTop: "10px",
                        width: "265px",
                      }}
                      severity="success"
                    >
                      Mobile Verified Successfully
                    </Alert>
                    <Typography variant="h7">Please enter the magic code sent on {phone}.</Typography>
                    <TextField
                      size="small"
                      type="text"
                      value={inputVerifyPhone}
                      onChange={handleVerifyPhoneChange}
                      style={{ marginTop: "10px", width: "300px" }}
                      placeholder="Enter Magic Code"
                    ></TextField>

                    <Button
                      onClick={handleVerifyPhoneClick}
                      style={{ marginTop: "15px", width: "300px" }}
                      variant="contained"
                    >
                      Confirm
                    </Button>
                  </Box>


                )
              }
                    {showEmailMagicCode && (
                      <Box>
                        <Box style={{ marginLeft: "2vh", marginBottom: "3vh" }}>
                          <Typography variant="h6">
                            Verify Your Email Magic Code.
                          </Typography>
                        </Box>
                        <Typography variant="h7">
                          Please enter the magic code.
                        </Typography>
                        <TextField
                          size="small"
                          type="text"
                          value={emailMagicCode}
                          onChange={handleEmailMagicChange}
                          style={{ marginTop: "10px", width: "300px" }}
                          placeholder="Enter magic code"
                        ></TextField>

                        <Button
                          onClick={handleEmailMagicClick}
                          style={{ marginTop: "15px", width: "300px" }}
                          variant="contained"
                        >
                          Confirm
                        </Button>
                      </Box>
                    )}
                  </Box>
                </Container>
              </Grid>
              {/* Existing user detail */}

              {showExistingEmail && (
                <Card
                  style={{
                    width: "50vh",
                    height: "40vh",
                    padding: "2vh",
                    marginLeft: "3vh",
                    marginBottom: "1vh",
                    textAlign: "center",
                  }}
                  variant="outlined"
                >
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Alert severity="warning">
                      <AlertTitle>Warning</AlertTitle>
                      Account with {emailInput} already Exist! Try other email or
                      override magic code
                      <b />
                    </Alert>
                    <Button
                    style={{marginLeft:'10px'}}
                      size="small"
                      variant="contained"
                      onClick={handleExistingEmailClick}
                    >
                      Magic Code
                    </Button>
                  </Box>
                </Card>
              )}

              {showExistingUser && (
                <Card
                  style={{
                    width: "50vh",
                    height: "40vh",
                    padding: "2vh",
                    marginLeft: "3vh",
                    marginBottom: "1vh",
                    textAlign: "center",
                  }}
                  variant="outlined"
                >
                  <Box style={{ display: "flex", justifyContent: "center" }}>
                    <Alert severity="warning">
                      <AlertTitle>Warning</AlertTitle>
                      Account with {phone} already Exist! Try other number or
                      override otp
                      <b />
                    </Alert>
                    <Button
                    style={{marginLeft:'10px'}}
                      size="small"
                      variant="contained"
                      onClick={handleExistingUserClick}
                    >
                      Send
                    </Button>
                  </Box>
                </Card>
              )}
              
             
            </Box>
          </Grid>
        </Grid>
      </Box>
      {
        showUserPage && (
            
            <UserDetail setShowUserPage={setShowUserPage}/>
        )
}
    </Box>
  );
};

export default VerifyMagicCode;
