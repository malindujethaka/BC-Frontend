import * as Yup from "yup";
import { useState } from "react";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// @mui
import { Stack, IconButton, InputAdornment, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Checkbox from "@mui/material/Checkbox";
// hooks
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
// components
import Iconify from "../../../components/Iconify";
import { FormProvider, RHFTextField } from "../../../components/hook-form";
//firebase
import { auth, db } from "src/Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
// ----------------------------------------------------------------------

export default function RegisterForm() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const { register } = useAuth();

  const isMountedRef = useIsMountedRef();

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [ageCBox, setAgeCBox] = useState(false);
  const [termsCBox, setTermsCBox] = useState(false);
  const [policyCBox, setPolicyCBox] = useState(false);

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("User name is required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    rePassword: Yup.string().required(""),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    rePassword: "",
    ageCBox: true,
    termsCBox: true,
    policyCBox: true,
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    if (data.password != data.rePassword) {
      setError("afterSubmit", { message: "Password does not match" });
      return;
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      delete data.password;
      delete data.rePassword;
      delete data.ageCBox;
      delete data.termsCBox;
      delete data.policyCBox;

      const ref = doc(db, "userinfo", result.user.uid);
      const docRef = await setDoc(ref, data);
      alert("Registered Successfully");
      reset();
    } catch (error) {
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>
        <p>
          First and last names are optional, and will not be shared publicly.{" "}
        </p>

        <RHFTextField name="username" label="User Name" />
        <Alert severity="info" sx={{ mb: 3 }}>
          Usernames will display publicly on the site. To protect your privacy,
          we strongly recommend you do not use a personally identifiable name.
        </Alert>

        <RHFTextField name="email" label="Email address" />
        <div>
          <Checkbox {...label} /> Yes, I would like to receive emails from{" "}
          <a href="#">Breastcancer.org </a> with the latest content
          updates,educational events and ways to support the organization.
        </div>

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <p>
          {" "}
          Must be 6 to 20 characters and include at least 1 lower case letter, 1
          upper case letter,1 number,and 1 special character.
        </p>
        <RHFTextField
          name="rePassword"
          label="Re-enter Password"
          type={showRePassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowRePassword(!showRePassword)}
                >
                  <Iconify
                    icon={showRePassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div>
          <ul>
            {" "}
            <Checkbox
              checked={ageCBox}
              onChange={(event) => setAgeCBox(event.target.checked)}
            />{" "}
            I am 18 years of age or older.
          </ul>
          <ul>
            {" "}
            <Checkbox
              checked={termsCBox}
              onChange={(event) => setTermsCBox(event.target.checked)}
            />{" "}
            I agree to the <a href="#">Terms of Use and Rules of Conduct. </a>
          </ul>
          <ul>
            <Checkbox
              checked={policyCBox}
              onChange={(event) => setPolicyCBox(event.target.checked)}
            />{" "}
            I agree to the <a href="#">Privacy Policy</a>{" "}
          </ul>
        </div>
        <LoadingButton
          disabled={!ageCBox || !termsCBox || !policyCBox}
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Join Now
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
