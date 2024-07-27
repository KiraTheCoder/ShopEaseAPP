
import * as Yup from "yup";

const phoneNumberOrEmailValidate = Yup.mixed()
  .required("This field is required")
  .test(
    "is-phone-or-email",
    "Must be a valid phone number or email",
    function (value) {
      if (!value) return false; // Value is required
      const isPhoneNumber = /^\d{10}$/.test(value);
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

      return isPhoneNumber || isEmail;
    }
  );

const passwordValidate = Yup.string()
  .required("required")
  .min(4, "atleast 4 character")
  .max(8, "atmost 8 character");

const nameValidate = Yup.string()
  .required("required")
  .min(3, "atleast 3 character")
  .max(15, "atmost 15 character");

const LoginForm = {
  initialVaues: {
    phoneNumberOrEmail: "",
    password: "",
  },

  validationSchema: Yup.object({
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
    password: passwordValidate,
  }),
};

const signUpForm = {
  initialVaues: {
    name: "",
    phoneNumberOrEmail: "",
    password: "",
  },

  validationSchema: Yup.object({
    name: nameValidate,
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
    password: passwordValidate,
  }),
};

export {LoginForm,signUpForm}