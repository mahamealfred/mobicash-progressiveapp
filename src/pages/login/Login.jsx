import React from "react";
import {
    Avatar,
    Button,
    Checkbox,
    Link,
    FormControlLabel,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@mui/material";
  import Alert from '@mui/material/Alert';
  import Stack from '@mui/material/Stack';
 
  import LoginIcon from '@mui/icons-material/Login';
  import { Formik, Form, Field, ErrorMessage } from "formik";
  import * as Yup from "yup";
  
 
  import { useHistory } from "react-router-dom";
import TopNav from "../../components/topNav/topNav";
  
  export default function Login() {
    // const dispatch = useDispatch();
    
    const history = useHistory();
  
    const paperStyle = {
      padding: 20,
      height: "55vh",
      width: 300,
      margin: "80px auto",
    };
    const avatarStyle = {
      backgroundColor: "#3D426B",
      margin: "8px 0px",
    };
    const btnStyle = {
     backgroundColor: "#F9842C",
      //backgroundColor: "#3D426B",
      margin: "6px 0px",
      color:"#FFFF",
    };
    const textStyle = {
      margin: "30px 0px",
    };
    const forgotStyle = {
      color:"#3D426B",
      textDecoration: "none",
    };
    const initialValues = {
      email: "",
      password: "",
      remember: false,
    };
    const validationSchema = Yup.object().shape({
      email: Yup.string().email("Please enter valid email").required("Required"),
      password: Yup.string().required("Required"),
    });
    const onSubmit = (values, props) => {
      console.log(values);
    //   dispatch(loginAction(values, history));
    history.push('/dashboard',{push:true})
      
    };
    return (
      <Grid>
      <TopNav/>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LoginIcon />
            </Avatar>
            
          </Grid>
          <Grid style={textStyle}>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    label="Email"
                    name="email"
                    placeholder="Enter email"
                    variant="standard"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="email" />}
                  />
                 
                  <Field
                    as={TextField}
                    label="Password"
                    name="password"
                    placeholder="Enter password"
                    type="password"
                    variant="standard"
                    fullWidth
                    required
                    helperText={<ErrorMessage name="password" />}
                  />
  
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox color="primary" />}
                    label="Remember me"
                  />
                  {/* {
                    !userLogin.error? null:
                    <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="error">
                    {userLogin.error}
                     </Alert>
                     </Stack>
                  }
                   {/* <p>{userLogin.error}</p>
                  */} 
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={btnStyle}
                    // disabled={props.isSubmitting}
                  >
                      Sign In
                    {/* {userLogin.loading ? "Loading" : "Sign in"} */}
                  </Button>
                </Form>
    )}
            </Formik>
            <Typography>
              <Link href="#" style={forgotStyle}>
                Forgot password?
              </Link>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    );
                }   
  