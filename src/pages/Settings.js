import React from "react";
import { useState } from "react";
import Select from "react-select";
import { m } from "framer-motion";
import Page from "../components/Page";
import {
  Box,
  Button,
  Grid,
  Typography,
  styled,
  Breadcrumbs,
  Link,
  Alert,
} from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import { FormProvider, RHFTextField } from "src/components/hook-form";
import { db } from "src/Config/Firebase";
import * as Yup from "yup";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import countryList from "react-select-country-list";
import Avatar from "@mui/material/Avatar";
import { storage } from "src/Config/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

//----------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 0, 0),
}));

//----------------------------------------------------------------

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (country) => {
    setCountry(country);
    delete country.value;
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string().required("User name is required"),
    email: Yup.string().required("Email is required"),
  });

  const defaultValues = {
    name: "",
  };

  const methods = useForm({
    resolver: yupResolver(UserSchema),
    defaultValues,
  });

  const {
    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  const userinfo = collection(db, "userDetails");

  const onSubmit = async (data) => {
    if (name.length == 0 || email.length == 0) {
      setError("afterSubmit", { message: "Name and Email required" });
      return;
    }
    try {
      await addDoc(userinfo, {
        Name: name,
        Email: email,
        PhoneNumber: Number(phoneNumber),
        Address: address,
        Country: country,
        State: state,
        City: city,
        ZipCode: zipCode,
        About: about,
      });

      alert("Saved Successfully");
    } catch (error) {
      setError("afterSubmit", { ...error, message: error.message });
    }

    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Page title="Settings">
      <ContentStyle>
        <m.div>
          <Typography variant="h3" paragraph>
            Account
          </Typography>
        </m.div>
      </ContentStyle>

      <Box>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Link underline="hover" color="inherit" href="/">
            User
          </Link>
          <Typography color="text.primary">Account Settings</Typography>
        </Breadcrumbs>
      </Box>

      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ paddingTop: "50px" }}
        >
          <Grid
            item
            md={3}
            sx={{
              backgroundColor: "#F2f3f3",
              textAlign: "center",
              minHeight: "250px",
            }}
          >
            <Avatar
              src={url}
              sx={{ width: 150, height: 150, margin: "5px 0 0 50px" }}
            />{" "}
            <br />
            <label
              htmlFor="filePicker"
              style={{
                backgroundColor: "#A2a6a6",
                padding: "5px 25px 5px 25px",
              }}
            >
              Choose Image
            </label>
            <input
              id="filePicker"
              style={{ visibility: "hidden" }}
              type={"file"}
              onChange={handleImageChange}
            />
          </Grid>
          {/* <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          sx={{ paddingTop: "50px" }}
        > */}
          <Grid item md={4}>
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Select
              color="secondary"
              style={{ backgroundColor: "white" }}
              //value={country}
              onChange={changeHandler}
              options={options}
              placeholder="Select Country"
            />
          </Grid>
          <Grid item md={4}>
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="State/Region"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <RHFTextField
              sx={{ paddingBottom: "20px" }}
              label="Zip/Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </Grid>
          {/* </Grid> */}
          <RHFTextField
            label="About"
            multiline
            rows={4}
            sx={{ paddingRight: "10px" }}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </Grid>

        <Box sx={{ padding: "40px", textAlign: "right" }}>
          <Button variant="contained" href="#" onClick={onSubmit}>
            {" "}
            Save Changes{" "}
          </Button>
        </Box>
      </FormProvider>
    </Page>
  );
}
