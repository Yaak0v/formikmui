import React from "react";
import Header from "./Components/Header";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import Textfield from "./Components/FormsUI/Textfield";
import Select from "./Components/FormsUI/Select";
import countries from "./data/countries.json";
import DateTimePicker from "./Components/FormsUI/DataTimePicker";
import Checkbbox from "./Components/FormsUI/Checkbox";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
}));

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  addressline1: "",
  addressline2: "",
  city: "",
  state: "",
  country: "",
  arrivalDate: "",
  departureDate: "",
  message: "",
  termsOfService: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  addressLine1: Yup.string().required("Required"),
  addressLine2: Yup.string(),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  arrivalDate: Yup.date().required("Required"),
  departureDate: Yup.date().required("Required"),
  message: Yup.string().required("Required"),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms must be accepted.")
    .required("The terms must be accepted."),
});

const App = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Header />
      <Grid item xs={12}>
        <Container maxWidth="md">
          <div className={classes.formWrapper}>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Textfield name="firstName" label="First Name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Textfield name="lastName" label="Last Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="email" label="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="phone" label="Phone Number" />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Address</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine1" label="Address Line 1" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="addressLine2" label="Address Line 2" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="city" label="City" />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield name="state" label="State" />
                  </Grid>
                  <Grid item xs={12}>
                    <Select
                      name="country"
                      label="Country"
                      options={countries}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography>Booking Information</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker name="arrivalDate" label="Arrival Date" />
                  </Grid>
                  <Grid item xs={6}>
                    <DateTimePicker
                      name="departureDate"
                      label="Departure Date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Textfield
                      name="message"
                      label="Message"
                      multiline={true}
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  <Checkbbox name="termsOfService"
                  legend="Terms of Service"
                  label="I agree"/>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
};

export default App;
