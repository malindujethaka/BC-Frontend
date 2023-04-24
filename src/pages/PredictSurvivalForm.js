import * as React from "react";
import { useState } from "react";
// @mui
import {
  Box,
  Button,
  Typography,
  IconButton,
  styled,
  Grid,
  Paper,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
// components
import * as Yup from "yup";
// form
import { useFormik, Form, FormikProvider } from "formik";
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

export default function PredictSurvivalForm() {
  const [age, setAge] = React.useState("");
  const [surgery, setSergery] = React.useState("");
  const [cancerType, setCancerType] = React.useState("");
  const [cellularity, setCellularity] = React.useState("");
  const [chemotherapy, setChemotherapy] = React.useState("");
  const [ER, setER] = React.useState("");
  const [HER2, setHER2] = React.useState("");
  const [hormone, setHormone] = React.useState("");
  const [radio, setRadio] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [tumorSize, setTumorSize] = React.useState("");
  const [tumorStage, setTumorStage] = React.useState("");
  const [result, setResult] = React.useState(0);

  const onSubmit = async (input) => {
    console.log(input);

    //set relavant data to the request body from input
    const reqBody = {
      ageAtDiagnosis: 0,
      typeOfBreastSurgery: 0,
      cancerType: 0,
      cancerTypeDetailed: 0,
      Cellularity: 0,
      Chemotherapy: 0,
      Pam50ClaudinLowSubtype: 0,
      cohort: 0,
      erStatusMeasuredByIHC: 0,
      erStatus: 0,
      neoplasmHistologicGrade: 0,
      her2StatusMeasuredBySNP6: 0,
      her2Status: 0,
      tumorOtherHistologicSubtype: 0,
      hormoneTherapy: 0,
      inferredMenopausalState: 0,
      integrativeCluster: 0,
      primaryTumorLaterality: 0,
      lymphNodesExaminedPositive: 0,
      mutationCount: 0,
      nottinghamPrognosticIndex: 0,
      oncotreeCode: 0,
      overallSurvivalMonths: 0,
      overallSurvivalStatus: 0,
      prStatus: 0,
      radioTherapy: 0,
      relapseFreeStatusMonths: 0,
      relapseFreeStatus: 0,
      numberOfSamplesPerPatient: 0,
      sex: '',
      threeGeneClassifierSubtype: 0,
      tmbNonsynonymous: 0,
      tumorSize: '',
      tumorStage: '',
    };
    axiosInstance
      .post("/component/3", JSON.stringify(reqBody))
      .then((response) => {
        setResult(response.data.prob);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [loading, setLoading] = useState(false);

  const LoginSchema = Yup.object().shape({
    ageAtDiagnosis: Yup.string().required("Required"),
    typeOfBreastSurgery: Yup.string().required("Required"),
    cancerTypeDetailed: Yup.string().required("Required"),
    Cellularity: Yup.string().required("Required"),
    Chemotherapy: Yup.string().required("Required"),
    erStatus: Yup.string().required("Required"),
    her2Status: Yup.string().required("Required"),
    hormoneTherapy: Yup.string().required("Required"),
    radioTherapy: Yup.string().required("Required"),
    sex: Yup.string().required("Required"),
    tumorSize: Yup.string().required("Required"),
    tumorStage: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      ageAtDiagnosis: '',
      typeOfBreastSurgery: '',
      cancerType: 0,
      cancerTypeDetailed: '',
      Cellularity: '',
      Chemotherapy: '',
      Pam50ClaudinLowSubtype: 0,
      cohort: 0,
      erStatusMeasuredByIHC: 0,
      erStatus: '',
      neoplasmHistologicGrade: 0,
      her2StatusMeasuredBySNP6: 0,
      her2Status: '',
      tumorOtherHistologicSubtype: 0,
      hormoneTherapy: '',
      inferredMenopausalState: 0,
      integrativeCluster: 0,
      primaryTumorLaterality: 0,
      lymphNodesExaminedPositive: 0,
      mutationCount: 0,
      nottinghamPrognosticIndex: 0,
      oncotreeCode: 0,
      overallSurvivalMonths: 0,
      overallSurvivalStatus: 0,
      prStatus: 0,
      radioTherapy: '',
      relapseFreeStatusMonths: 0,
      relapseFreeStatus: 0,
      numberOfSamplesPerPatient: 0,
      sex: '',
      threeGeneClassifierSubtype: 0,
      tmbNonsynonymous: 0,
      tumorSize: '',
      tumorStage: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      console.log(values);
      setLoading(true);
      axiosInstance
        .post("/component/3", values, { timeout: 20000 })
        .then((response) => {
          setResult(response.data.prob);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setErrors(error);
          alert(error.message)
          setLoading(false);
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

  return (
    <Page title="Predict Survival Form">
      <ContentStyle>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <IconButton>
              <ArrowCircleLeftOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h3" paragraph>
              Predict Survival
            </Typography>
          </Grid>
        </Grid>
      </ContentStyle>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
                    <h3 style={{ paddingTop: "20px" }}>Age at Diadnosis</h3>

                    <TextField
                      fullWidth
                      type="number"
                      label="Enter your age..."
                      value={values.ageAtDiagnosis}
                      onChange={(event) => setFieldValue('ageAtDiagnosis',event.target.value)}
                      variant="outlined"
                      error={Boolean(touched.ageAtDiagnosis && errors.ageAtDiagnosis)}
                      sx={{ backgroundColor: "white" }}
                    ></TextField>

                    <h3 style={{ paddingTop: "20px" }}>
                      Type of Breast Surgery
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>
                        Select your type of breast surgery...
                      </InputLabel>
                      <Select
                        value={values.typeOfBreastSurgery}
                        label="Select your type of breast surgery..."
                        onChange={(event) => setFieldValue("typeOfBreastSurgery",event.target.value)}
                        sx={{ backgroundColor: "white" }}
                        error={Boolean(touched.typeOfBreastSurgery && errors.typeOfBreastSurgery)}
                      >
                        <MenuItem value={0}> MASTECTOMY</MenuItem>
                        <MenuItem value={1}> BREAST CONSERVING</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Cancer Type Surgery</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select your type detailed...</InputLabel>
                      <Select
                        value={values.cancerTypeDetailed}
                        label="Select your type detailed..."
                        error={Boolean(touched.cancerTypeDetailed && errors.cancerTypeDetailed)}
                        onChange={(event) => setFieldValue('cancerTypeDetailed',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> Breast</MenuItem>
                        <MenuItem value={1}> Breast Angiosarcoma</MenuItem>
                        <MenuItem value={2}> Breast Invasive Ductal Carcinoma</MenuItem>
                        <MenuItem value={3}> Breast Invasive Lobular Carcinoma</MenuItem>
                        <MenuItem value={4}> Breast Invasive Mixed Mucinous Carcinoma</MenuItem>
                        <MenuItem value={5}> Breast Mixed Ductal and Lobular Carcinoma</MenuItem>
                        <MenuItem value={6}> Metaplastic Breast Cancer</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Cellularity form</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select cellularity...</InputLabel>
                      <Select
                        value={values.Cellularity}
                        label="Select cellularity..."
                        error={Boolean(touched.Cellularity && errors.Cellularity)}
                        onChange={(event) => setFieldValue('Cellularity',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> High</MenuItem>
                        <MenuItem value={1}> Low</MenuItem>
                        <MenuItem value={2}> Moderate</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Has chemotherapy been done?
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select...</InputLabel>
                      <Select
                        value={values.Chemotherapy}
                        label="Select..."
                        onChange={(event) =>
                          setFieldValue('Chemotherapy',event.target.value)
                        }
                        error={Boolean(touched.Chemotherapy && errors.Chemotherapy)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={1}> YES</MenuItem>
                        <MenuItem value={0}> NO</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>ER status</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select ER status...</InputLabel>
                      <Select
                        value={values.erStatus}
                        label="Select ER status..."
                        error={Boolean(touched.erStatus && errors.erStatus)}
                        onChange={(event) => setFieldValue('erStatus',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> POSITIVE</MenuItem>
                        <MenuItem value={1}> NEGATIVE</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={5}>
                    <h3 style={{ paddingTop: "20px" }}>HER2 Status</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select HER2 Status...</InputLabel>
                      <Select
                        value={values.her2Status}
                        label="Select HER2 Status..."
                        error={Boolean(touched.her2Status && errors.her2Status)}
                        onChange={(event) => setFieldValue('her2Status',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> GAIN</MenuItem>
                        <MenuItem value={1}> LOSS</MenuItem>
                        <MenuItem value={2}> NEUTRAL</MenuItem>
                        <MenuItem value={3}> UNDEF</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Has Hormone Therapy been done?
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select...</InputLabel>
                      <Select
                        value={values.hormoneTherapy}
                        label="Select..."
                        error={Boolean(touched.hormoneTherapy && errors.hormoneTherapy)}
                        onChange={(event) => setFieldValue('hormoneTherapy',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> YES</MenuItem>
                        <MenuItem value={1}> NO</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>
                      Has Radio Therapy been done?
                    </h3>
                    <FormControl fullWidth>
                      <InputLabel>Select...</InputLabel>
                      <Select
                        value={values.radioTherapy}
                        error={Boolean(touched.radioTherapy && errors.radioTherapy)}
                        label="Select..."
                        onChange={(event) => setFieldValue('radioTherapy',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> YES</MenuItem>
                        <MenuItem value={1}> NO</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Sex</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select sex...</InputLabel>
                      <Select
                        value={values.sex}
                        label="Select sex..."
                        error={Boolean(touched.sex && errors.sex)}
                        onChange={(event) => setFieldValue('sex',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> FEMALE</MenuItem>
                        <MenuItem value={1}> MALE</MenuItem>
                      </Select>
                    </FormControl>

                    <h3 style={{ paddingTop: "20px" }}>Tumor Size</h3>
                      <TextField
                        fullWidth
                        type="number"
                        value={values.tumorSize}
                        error={Boolean(touched.tumorSize && errors.tumorSize)}
                        label="Select tumor size..."
                        onChange={(event) => setFieldValue('tumorSize',event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                      </TextField>

                    <h3 style={{ paddingTop: "20px" }}>Tumor Stage</h3>
                    <FormControl fullWidth>
                      <InputLabel>Select tumor stage...</InputLabel>
                      <Select
                        value={values.tumorStage}
                        label="Select tumor stage..."
                        error={Boolean(touched.tumorStage && errors.tumorStage)}
                        onChange={(event) => setFieldValue("tumorStage",event.target.value)}
                        sx={{ backgroundColor: "white" }}
                      >
                        <MenuItem value={0}> 1</MenuItem>
                        <MenuItem value={1}> 2</MenuItem>
                        <MenuItem value={2}> 3</MenuItem>
                        <MenuItem value={3}> 4</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Box style={{ padding: "20px", textAlign: "center" }}>
                  {/* <Button
                variant="contained"
                href="#"
                style={{ textAlign: "center" }}
                onClick={onSubmit}
              >
                {" "}
                Predict Survial{" "} 
              </Button> */}

                  <LoadingButton
                    size="large"
                    type="submit"
                    variant="contained"
                    loading={loading}
                  >
                    {" "}
                    Predict Survial{" "}
                  </LoadingButton>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
      <Link href="#" underline="hover" color="error" padding={"0 0 50px 120px"}>
        <b>
          {"Result :"} {result}
        </b>
      </Link>
    </Page>
  );
}
