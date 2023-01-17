import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Alert,
  AlertTitle,
  TextField,
  Button,
  Avatar,
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


const UserDetails = () => {
  // const [image, setImage] = useState("");
  const [profileCreated, setProfileCreated] = useState(false);
  const [showUserPage,setShowUserPage] = useState(true)
  // const handleImageChange = (e) => {
  //   setImage(URL.createObjectURL(e.target.files[0]));
  // };
  // const handleUpload = async () => {
  //   // code to update the image to server by sending it to the local drive
  // };

  const  handleUserDetail = ()=>{
    setProfileCreated(true);
    setShowUserPage(false)
  }

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
                  height: "40vh",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "block",
                  minHeight: "350px",
                  backgroundColor: "white",
                }}
                >
                {
                  showUserPage && (

                <Grid
                  style={{
                    display: "grid",
                    justifyContent: "center",
                    marginTop: "40px",
                  }}
                >
                  <Typography variant="h9">
                    👋Hi,Tell us a little bit about yourself
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Avatar
                    
                      variant="rounded"
                      style={{
                        borderRadius: "50%",
                        height: "5vh",
                        width: "5vh",
                      }}
                    />
                  </Box>
                  
                  <br />

                  {/* to upload Profile Picture */}
                  {/* <input
                  
                    accept="image/*"
                    
                    id="contained-button-file"
                    type="file"
                    onChange={handleImageChange}
                  /> */}
                  <Button
                          style={{ marginTop: "10px" }}
                          size="small"
                          variant="outlined"
                          component="label"
                        >
                          Set Profile Pic
                          <input hidden accept="image/*" multiple type="file" />
                        </Button>
                  
                  <TextField size="small" label="Your Name"  style={{marginTop:'20px'}}/>
                  <TextField size="large" label="Short Bio"  style={{marginTop:'20px',}}/>
                  <TextField size="small" label="Add social Media URL"  style={{marginTop:'20px'}}/>

                  <Button
                    size="large"
                    variant="contained"
                    style={{marginTop:'20px'}}
                    onClick={handleUserDetail}
                    
                    color="primary"
                
                  >
                    Proceed
                  </Button>
                 


                

                </Grid>
              )
            }
             {profileCreated && (
                      <Box style={{marginTop:"19vh",minHeight:"200px"}}>
                        <Alert style={{ padding: "10vh" }} severity="success">
                          <AlertTitle>Congratulations!!!</AlertTitle>
                          Account Created Successfully
                        </Alert>
                      </Box>
                    )}
              </Box>
            </Grid>
          </Grid>
          
        </Box>
      </div>
    </>
  );
};
export default UserDetails;
