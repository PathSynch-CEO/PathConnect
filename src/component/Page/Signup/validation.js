import * as Yup from "yup";

const publicDomains = [
  // 'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'protonmail.com',
  'zoho.com',
  'yopmail'
];
const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to 00:00 for precise date comparison

// Helper function to check if email belongs to a public domain
const isPublicDomain = (email) => {
  const domain = email.substring(email.lastIndexOf('@') + 1).toLowerCase();
  return publicDomains.includes(domain);
};


const firstNameValidation = Yup.string()
  .min(2, "Too short")
  .max(50, "Too long")
  .required("First Name is required");

const nameValidation = Yup.string()
  .min(2, "Too short")
  .max(50, "Too long")
  .required("Full Name is required");

const lastNameValidation = Yup.string()
  .min(2, "Too short")
  .max(50, "Too long")
  .required("Last Name is required");

const requiredValidation = Yup.string().required("Required");

const startDateValidation = Yup.date()
  .nullable()
  .notRequired()
  .min(today, "Start Date must be in the future") // Ensure start date is in the future
  .test("is-valid-start", "Start Date must be valid", (value) =>
    !value || !isNaN(new Date(value).getTime())
  );

const endDateValidation = Yup.date()
  .nullable()
  .notRequired()
  .typeError("End Date must be a valid date") // Ensures endDate must be a date
  .when("startDate", (startDate, schema) => {
    if (startDate && !isNaN(new Date(startDate).getTime())) {
      return schema.min(startDate, "End Date must be later than Start Date");
    }
    return schema;
  })
  .test("is-valid-end", "End Date must be a valid date", (value) =>
    !value || !isNaN(new Date(value).getTime())
  );

const businessEmailValidation = Yup.string()
  .matches(
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    'Email is invalid'
  )
  .test('is-not-public-domain', 'Public email domains are not allowed', (value) => {
    return value ? !isPublicDomain(value) : true;
  })
  .required('Email is required');

const emailValidation = Yup.string()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Email is invalid")
  .required("Email is required");

const phoneNumberValidaton = Yup.string().required("Phone is required");

const usPhoneNumberValidation = Yup.string()
  .required("Phone is required")
  .matches(
    /^\(\d{3}\) \d{3}-\d{4}$/,
    "Please enter a valid U.S. phone number in the format (123) 456-7890"
  );

const passwordValidation = Yup.string()
  .min(8, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*)")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/,
    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*)"
  )
  .required("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., !@#$%^&*)");

const confirmPasswordValidation = Yup.string()
  .oneOf([Yup.ref("password"), null], "Invalid confirm password")
  .required("Confirm password is required");

const picValidation = Yup.mixed()
  .required("Required")
  .test("certificateSize", "Size is greater", (value) => {
    if (value) {
      return value && value.size <= 2 * 1024 * 1024;
    } else {
      return true;
    }
  })
  .test("certificateFormat", "Invalid format", (value) => {
    if (value) {
      return (
        value && ["image/png", "image/jpeg", "image/jpg"].includes(value.type)
      );
    } else {
      return true;
    }
  });

export const CONTACT_US_SCHEMA = Yup.object().shape({
  email: emailValidation,
  mobile: phoneNumberValidaton,
  lname: lastNameValidation,
  fname: firstNameValidation,
});

export const SUPPORT_SCHEMA = Yup.object().shape({
  email: emailValidation,
  mobile: phoneNumberValidaton,
  name: nameValidation,
  company: requiredValidation,
  natureOfwork: requiredValidation,
  message: requiredValidation,
});

export const SEND_APP_LINK_SCHEMA = Yup.object().shape({
  mobile: phoneNumberValidaton,
});

export const MERCHANT_SIGNUP_SCHEMA = Yup.object().shape({
  email: businessEmailValidation,
  landline: usPhoneNumberValidation,
  fname: firstNameValidation,
  lname: lastNameValidation,
  password: passwordValidation,
  confirmPassword: confirmPasswordValidation,
  city: requiredValidation,
  state: requiredValidation,
  address: requiredValidation,
  zip: requiredValidation,
  buisnessname: requiredValidation,
  // trail: requiredValidation
});

export const SIGNIN_SCHEMA = Yup.object().shape({
  email: emailValidation,
  password: requiredValidation,
});

export const CREATE_CAMPAIGN_SCHEMA = Yup.object().shape({
  // tab 1 start
  value: requiredValidation,
  discount: requiredValidation,
  title: requiredValidation,
  description: requiredValidation,
  noOfcampaigns: requiredValidation,
  startDate: startDateValidation,
  endDate: endDateValidation,
  cover: picValidation,
  // CampaignsPurchasablePerCustomer: requiredValidation,
  // repurchaseCampaignAfter: requiredValidation,
  amountPaidNeverExpires: requiredValidation,
  holdername: requiredValidation, //new
  bankname: requiredValidation, //new
  businessAccount: requiredValidation, //new
  accNo: requiredValidation, //new
  ssn_taxid: requiredValidation, //new
  routingNo: requiredValidation,
  website: requiredValidation,
  details: requiredValidation,
  google_mybusiness: requiredValidation
  // menu: picValidation,
  // logo: picValidation,
  // linkedin: requiredValidation,
  // twitter: requiredValidation,
  // instagram: requiredValidation,
  // facebook: requiredValidation,
});

export const CREATE_CAMPAIGN_SCHEMA_EXISTS = Yup.object().shape({
  // tab 1 start
  value: requiredValidation,
  discount: requiredValidation,
  title: requiredValidation,
  description: requiredValidation,
  noOfcampaigns: requiredValidation,
  startDate: startDateValidation,
  endDate: endDateValidation,
  cover: picValidation,
  // CampaignsPurchasablePerCustomer: requiredValidation,
  // repurchaseCampaignAfter: requiredValidation,
  amountPaidNeverExpires: requiredValidation,
  // holdername: requiredValidation, //new
  // bankname: requiredValidation, //new
  // businessAccount: requiredValidation, //new
  // accNo: requiredValidation, //new
  // ssn_taxid: requiredValidation, //new
  // routingNo: "",
  // website: requiredValidation,
  // details: requiredValidation,
  // menu: picValidation,
  // logo: picValidation,
  // google_mybusiness: requiredValidation
  // linkedin: requiredValidation,
  // twitter: requiredValidation,
  // instagram: requiredValidation,
  // facebook: requiredValidation,
});

export const SOCIAL_MEDIA_SCHEMA = Yup.object().shape({
  // linkedin: requiredValidation,
  // twitter: requiredValidation,
  // instagram: requiredValidation,
  // facebook: requiredValidation,
  website: requiredValidation,
});
