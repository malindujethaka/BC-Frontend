import * as React from "react";
import { useState } from "react";
import * as Yup from "yup";
// form
import { useFormik, Form, FormikProvider } from "formik";
// @mui
import {
  Box,
  Button,
  IconButton,
  Typography,
  styled,
  Grid,
  Paper,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { LoadingButton } from "@mui/lab";
// components
import Page from "../components/Page";
import axiosInstance from "./../middleware/axiosInstance";

// ----------------------------------------------------------------------
const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 3, 0),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#F1F1F1",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function CalculateRiskForm() {

  const [loading,setLoading] = useState(false)

  const LoginSchema = Yup.object().shape({
    agegrp: Yup.string().required("Please select a age group"),
    menopause: Yup.string().required(
      "Please select whether you have experienced menopause"
    ),
    density: Yup.string().required("Please select your breast density"),
    race: Yup.string().required("Please select your race/ethnicity"),
    Hispanic: Yup.string().required(
      "Please select whether you are of Hispanic origin"
    ),
    bmi: Yup.string().required("Please select your BMI group"),
    agefirst: Yup.string().required("Please select your age at first birth"),
    nrelbc: Yup.string().required(
      "Please select your history of breast cancer in a first degree relative"
    ),
    brstproc: Yup.string().required(
      "Please select whether you have had a previous breast biopsy or aspiration"
    ),
    surgmeno: Yup.string().required(
      "Please select whether you have undergone surgical menopause"
    ),
    hrt: Yup.string().required(
      "Please select whether you have used hormone replacement therapy"
    ),
  });

  const formik = useFormik({
    initialValues: {
      menopause: "",
      agegrp: "",
      density: "",
      race: "",
      Hispanic: "",
      bmi: "",
      agefirst: "",
      nrelbc: "",
      brstproc: "",
      surgmeno: "",
      hrt: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      console.log(values);
      setLoading(true)
      axiosInstance
      .post("/component/2", values, { timeout: 20000 })
      .then((response) => {
        setResult(response.data.probabilityOfSurvice);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setErrors(error);
      });
    },
  });

  const {
    errors,
    touched,
    values,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;

  // const onSubmit = async (input) => {
  //   console.log(input);
  //   //set relavant data to the request body from input
  //   const reqBody = {

  //   };
  //   axiosInstance
  //     .post("/component/2", reqBody, { timeout: 20000 })
  //     .then((response) => {
  //       setResult(response.data.probabilityOfSurvice);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError("afterSubmit", { ...error, message: error.message });
  //     });
  // };

  // const [race, setRace] = React.useState(0);
  // const [history, setHistory] = React.useState(0);
  // const [ageMenarche, setAgeMenarche] = React.useState(0);
  // const [ageFBirth, setAgeFBirth] = React.useState(0);
  // const [bIRads, setBIRads] = React.useState(0);
  // const [hormone, setHormone] = React.useState(0);
  // const [monopausal, setMonopausal] = React.useState(0);
  // const [BMI, setBMI] = React.useState(0);
  // const [preBreast, setPreBreast] = React.useState(0);
  // const [priBreast, setPriBreast] = React.useState(0);

  const [result, setResult] = React.useState(0);

  return (
    <Page title="Calculate Risk Form">
      <ContentStyle>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            {" "}
            <IconButton>
              <ArrowCircleLeftOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3" paragraph>
              Calculate Risk Level
            </Typography>
          </Grid>
        </Grid>
      </ContentStyle>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          {/* {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )} */}
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
            style={{ paddingBottom: "40px" }}
          >
            <Grid item sm={10}>
              <Item>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-around"
                  alignItems="flex-start"
                >
                  <Grid item sm={5} style={{ paddingBottom: "20px" }}>
                    <h3 style={{ paddingTop: "20px" }}>Age Group</h3>
                    <FormControl fullWidth>
                      <InputLabel>Age</InputLabel>
                      <Select
                        name="agegrp"
                        {...getFieldProps("agegrp")}
                        label="Age Group"
                        onChange={(event) =>
                          setFieldValue("agegrp", event.target.value)
                        }
                        sx={{ backgroundColor: "white" }}
                        error={Boolean(touched.agegrp && errors.agegrp)}
                      >
                        <MenuItem value={1}>Age 18-29</MenuItem>
                        <MenuItem value={2}>Age 30-34</MenuItem>
                        <MenuItem value={3}>Age 35-39</MenuItem>
                        <MenuItem value={4}>Age 40-44</MenuItem>
                        <MenuItem value={5}>Age 45-49</MenuItem>
                        <MenuItem value={6}>Age 50-54</MenuItem>
                        <MenuItem value={7}>Age 55-59</MenuItem>
                        <MenuItem value={8}>Age 60-64</MenuItem>
                        <MenuItem value={9}>Age 65-69</MenuItem>
                        <MenuItem value={10}>Age 70-74</MenuItem>
                        <MenuItem value={11}>Age 75-79</MenuItem>
                        <MenuItem value={12}>Age 80-84</MenuItem>
                        <MenuItem value={13}>{`Age >85`}</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Race/Ethicity</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your age race...</InputLabel>
                      <Select
                        value={values.race}
                        error={Boolean(touched.race && errors.race)}
                        label="Select your age race..."
                        onChange={(event) => setFieldValue('race',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={1}> White</MenuItem>
                        <MenuItem value={2}> Asian/Pacific Islander</MenuItem>
                        <MenuItem value={3}> Black</MenuItem>
                        <MenuItem value={4}> Native American</MenuItem>
                        <MenuItem value={5}> Other/mixed</MenuItem>
                        <MenuItem value={9}> Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      History of breast cancer in a first degree relative
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your history</InputLabel>
                      <Select
                        value={values.nrelbc}
                        error={Boolean(touched.nrelbc && errors.nrelbc)}
                        label="Select your history"
                        onChange={(event) => setFieldValue('nrelbc',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> No</MenuItem>
                        <MenuItem value={1}> Yes</MenuItem>
                        <MenuItem value={9}> Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Age (years) at menarche
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your age...</InputLabel>
                      <Select
                        value={values.Hispanic}
                        error={Boolean(touched.Hispanic && errors.Hispanic)}
                        label="Select your age..."
                        onChange={(event) => setFieldValue('Hispanic',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> {`Age >14`}</MenuItem>
                        <MenuItem value={1}> Age 12-13</MenuItem>
                        <MenuItem value={2}> {`Age <12`}</MenuItem>
                        <MenuItem value={9}> Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Age (years) at first birth
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your age...</InputLabel>
                      <Select
                        value={values.agefirst}
                        label="Select your age..."
                        error={Boolean(touched.agefirst && errors.agefirst)}
                        onChange={(event) => setFieldValue('agefirst',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}>Age &lt; 20</MenuItem>
                        <MenuItem value={1}>Age 20-24</MenuItem>
                        <MenuItem value={2}>Age 25-29</MenuItem>
                        <MenuItem value={3}>Age &gt; 30</MenuItem>
                        <MenuItem value={4}>Nulliparous</MenuItem>
                        <MenuItem value={9}>Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      BI-RADS breast density
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your breast density...</InputLabel>
                      <Select
                        value={values.density}
                        error={Boolean(touched.density && errors.density)}
                        label="Select your breast density..."
                        onChange={(event) => setFieldValue('density',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={1}> Almost entirely fat</MenuItem>
                        <MenuItem value={2}>
                          {" "}
                          Scattered fibroglandular densities
                        </MenuItem>
                        <MenuItem value={3}> Heterogeneously dense</MenuItem>
                        <MenuItem value={4}> Extremely dense</MenuItem>
                        <MenuItem value={9}>
                          {" "}
                          Unknown or different measurement system
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={5}>
                    <h3 style={{ paddingTop: "20px" }}>
                      Use of hormone replacement therapy
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select value...</InputLabel>
                      <Select
                        value={values.hrt}
                        error={Boolean(touched.hrt && errors.hrt)}
                        label="Select value..."
                        onChange={(event) => setFieldValue('hrt',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> No</MenuItem>
                        <MenuItem value={1}> Yes</MenuItem>
                        <MenuItem value={9}>
                          {" "}
                          Unknown
                        </MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Monopausal status</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your monopausal status...</InputLabel>
                      <Select
                        value={values.menopause}
                        error={Boolean(touched.menopause && errors.menopause)}
                        label="Select your monopausal status..."
                        onChange={(event) => setFieldValue('menopause',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={1}>  Pre- or peri-menopausal</MenuItem>
                        <MenuItem value={2}>
                          Post-menopausal
                        </MenuItem>
                        <MenuItem value={3}>Surgical menopause</MenuItem>
                        <MenuItem value={9}>Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>BMI Group</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your BMI Group</InputLabel>
                      <Select
                        value={values.bmi}
                        label="Select your BMI Group"
                        error={Boolean(touched.bmi && errors.bmi)}
                        onChange={(event) => setFieldValue('bmi',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={1}> 10-24.99</MenuItem>
                        <MenuItem value={2}> 25-29.99</MenuItem>
                        <MenuItem value={3}> 30-34.99</MenuItem>
                        <MenuItem value={4}> 35 or more</MenuItem>
                        <MenuItem value={9}>Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Previous breast biopsy or aspiration
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your status...</InputLabel>
                      <Select
                        value={values.brstproc}
                        label="Select your status..."
                        onChange={(event) => setFieldValue('brstproc',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> No</MenuItem>
                        <MenuItem value={1}> Yes</MenuItem>
                        <MenuItem value={9}>Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Prior breast cancer diagnosis
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your status...</InputLabel>
                      <Select
                        value={values.surgmeno}
                        label="Select your status..."
                        onChange={(event) => setFieldValue('surgmeno',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> No</MenuItem>
                        <MenuItem value={1}> Yes</MenuItem>
                        <MenuItem value={9}>Unknown</MenuItem>
                      </Select>
                    </FormControl>

                    <Box sx={{ padding: "40px", textAlign: "center" }}>
                      <LoadingButton
                        size="large"
                        type="submit"
                        variant="contained"
                        loading={loading}
                      >
                        Calculate Risk Level{" "}
                      </LoadingButton>
                    </Box>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
      <Link href="#" underline="hover" color="error" padding={"0 0 50px 120px"}>
        <b>
          {"Result : "} {result}
        </b>
      </Link>
    </Page>
  );
}
