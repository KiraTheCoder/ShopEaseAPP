
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

const confirm_passwordValidation = Yup.string()
  .required("required")
  .oneOf([Yup.ref("password"), null], "password must match")
  .min(4, "atleast 4 character")
  .max(8, "atmost 8 character");

const nameValidate = Yup.string()
  .required("required")
  .min(3, "atleast 3 character")
  .max(15, "atmost 15 character");

const otpValidate = Yup.string().required("required");

const textareaValidate = Yup.string().required("required");

// upload product image
const productNameValidation= Yup.string().required("product name is required")
const priceValidation=Yup.string().required("product price is required")
const stockvalidation=Yup.string().required("required")
const categoryValidation= Yup.string().required("required")
const imageValidation= Yup.string().required("product image is required")

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
    confirm_password: "",
    otp: "",
    // otpID:"",
  },

  validationSchema: Yup.object({
    name: nameValidate,
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
    password: passwordValidate,
    confirm_password: confirm_passwordValidation,
    otp: otpValidate,
    // otpID:otpIDValidate
  }),
};

//  send otp form +++++++++++++++++
const otpForm = {
  initialVaues: {
    phoneNumberOrEmail: "",
  },

  validationSchema: Yup.object({
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
  }),
};

// send text message form start
const sendMessageForm = {
  initialVaues: {
    name: "",
    phone: "",
    email: "",
    textarea: "",
  },
  validationSchema: Yup.object({
    name: nameValidate,
    phone: phoneNumberOrEmailValidate,
    email: phoneNumberOrEmailValidate,
    textarea: textareaValidate,
  }),
};

// change password form +++++++++++++++++
const changePassword={
  initialVaues:{
    phoneNumberOrEmail:"",
    password:"",
    confirm_password: "",   
    otp:""
  },

  validationSchema: Yup.object({
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
    password: passwordValidate,
    confirm_password: confirm_passwordValidation,
    otp: otpValidate,
  }),
}


//  Update /Add Email or PhoneNumber
const updateAddemailPhoneNumber={
  initialValues:{
    phoneNumberOrEmail:"",
    password:"",
    otp:""
  },

  validationSchema: Yup.object({
    phoneNumberOrEmail: phoneNumberOrEmailValidate,
    otp: otpValidate,
  }),
}

//  product uploaded 
const productUpload={
  initialValues:{
    productName:"",
    description:"",
    price: "",
    stock:"",
    category:"",
    image:"",
  },

  validationSchema: Yup.object({
    productName:productNameValidation,
    description:textareaValidate,
    price:priceValidation,
    stock:stockvalidation,
    category:categoryValidation,
    image:imageValidation,
  }),
}

export { LoginForm, signUpForm, otpForm, sendMessageForm,changePassword,updateAddemailPhoneNumber, productUpload };
