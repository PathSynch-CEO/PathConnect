import { Formik } from "formik";
import { Form } from "reactstrap";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import InputField from "./InputField";
import SubHeading from "../Onboarding/SubHeading";
import { MERCHANT_SIGNUP_SCHEMA } from "./validation";
import { MERCHANT_SIGNUP_INITIAL_VALUES } from "./initialValue";
import { useState } from "react";
import Toaster from "./Toaster";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CustomGoogleButton from "./CustomGoogleButton";
import FillBtn from "../Onboarding/FillBtn";
import { GOOGLE_CLIENT_ID } from "../Onboarding/constants";

const MerchantSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [merchantEmail, setMerchantEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [UPDATEDMERCHANTSIGNUPINITIALVALUES, setUPDATEDMERCHANTSIGNUPINITIALVALUES] = 
    useState(MERCHANT_SIGNUP_INITIAL_VALUES);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSignupSubmit = (values, resetForm) => {
    setLoading(true);
    // Simulate API call with timeout
    setTimeout(() => {
      setLoading(false);
      if (values?.sub) {
        // For Google auth, store sample tokens
        localStorage.setItem('merchantTokens', JSON.stringify({
          accesstoken: 'sample-access-token',
          refreshtoken: 'sample-refresh-token',
          pubId: 'sample-pub-id',
          user: {
            email: values.email,
            name: `${values.fname} ${values.lname}`
          },
          isCompletedOnboarding: false
        }));
        navigate("/merchantSignup/onboarding");
      } else {
        setEmail(values.email);
        window.scrollTo(0, 0);
      }
      resetForm();
    }, 1500);
  };

  const handleSignUpInitialSubmit = () => {
    if (!merchantEmail) {
      Toaster.error("Please enter a valid email");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(merchantEmail)) {
      Toaster.error("Please enter a valid email address");
      return;
    }

    const domain = merchantEmail
      .substring(merchantEmail.lastIndexOf("@") + 1)
      .toLowerCase();
    
    const publicDomains = [
      "yahoo.com", "hotmail.com", "outlook.com", 
      "aol.com", "icloud.com", "protonmail.com", 
      "zoho.com", "yopmail.com"
    ];
    
    if (publicDomains.includes(domain)) {
      Toaster.error("Public email domains are not allowed. Please use your work email.");
      return;
    }

    setStep(1);
    setUPDATEDMERCHANTSIGNUPINITIALVALUES({
      ...MERCHANT_SIGNUP_INITIAL_VALUES,
      email: merchantEmail,
    });
  };

  if (step === 0) handleScrollToTop();

  return step === 0 ? (
    <Container fluid>
      <Row
        className="mx-md-5 px-md-5 justify-content-center"
        style={{ paddingTop: "8%", paddingBottom: "16.9%" }}
      >
        <Col md={6}>
          <Row style={{ marginTop: "0%" }}>
            <Col md={8}>
              <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <CustomGoogleButton
                  MERCHANT_SIGNUP_INITIAL_VALUES={MERCHANT_SIGNUP_INITIAL_VALUES}
                  setUPDATEDMERCHANTSIGNUPINITIALVALUES={setUPDATEDMERCHANTSIGNUPINITIALVALUES}
                  setStep={setStep}
                />
              </GoogleOAuthProvider>
            </Col>
          </Row>

          <br />

          <Row>
            <Col md={8} className="mb-4">
              <div className="divider subHeading">
                <span style={{ fontSize: "1.3rem", color: "#fff" }}>OR</span>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mb-4">
              <InputField
                className="py-1 px-2"
                type="text"
                name="email"
                placeholder={"Enter your work email"}
                value={merchantEmail}
                style={{ cursor: "pointer" }}
                onChangeHandle={(e) => setMerchantEmail(e.target.value)}
              />
            </Col>
          </Row>

          <Row>
            <Col md={8} className="mb-4">
              <h5 className={`subHeading`} style={{ color: "#fff", fontSize: "1rem" }}>
                By Signing up, I accept the PathSynch
                <Link target="_blank" to="/termUse">
                  <span style={{ color: "#ffe816" }}> Terms of Conditions</span>
                </Link> and acknowledge the{" "}
                <Link target="_blank" to="/privacyPolicy">
                  <span style={{ color: "#ffe816" }}> privacy policy</span>
                </Link>
              </h5>
            </Col>
          </Row>

          <Row style={{ marginTop: "0%" }}>
            <Col md={8}>
              <h5
                className={`subHeading bgYellow`}
                style={{
                  cursor: "pointer",
                  textAlign: "center",
                  borderRadius: "10px",
                  padding: "10px",
                  color: "#396746",
                  fontSize: "1.5rem",
                }}
                onClick={handleSignUpInitialSubmit}
              >
                Continue
              </h5>
            </Col>
          </Row>

          <Row style={{ marginTop: "5%" }}>
            <Col md={8} className="mb-4">
              <Link className="textYellow" to="/merchantSignIn">
                <h5
                  className={`subHeading`}
                  style={{ color: "#fff", fontSize: "1.2rem" }}
                >
                  Already have an PathSynch account?
                  <span style={{ color: "#ffe816" }}> Log in</span>
                </h5>
              </Link>
            </Col>
          </Row>
        </Col>

        <Col md={6}>
          <h5
            className={`subHeading`}
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: "1.8rem",
            }}
          >
            Let's start you off on
            <br /> the right path
            <br />
            Get started - it's free. Customers await
            <br />
          </h5>
          <h2
            className={`subHeading`}
            style={{
              marginTop: "5rem",
              textAlign: "center",
              color: "#fff",
              fontSize: "5rem",
            }}
          >
            <span style={{ fontWeight: 300 }}>Path</span>
            <span style={{ fontWeight: 600 }}>Synch</span>
          </h2>
        </Col>
      </Row>
    </Container>
  ) : !email ? (
    <Container fluid className={`${styles.signupWrapper}`}>
      <Row className="mx-md-5 px-md-5 pt-2">
        <SubHeading
          headingText={"Promote your Business with PathSynch Merchant"}
          categoryText={""}
          className={"text-start text-white"}
        />
        <p className="text-white fs-5 mt-2 mb-0">
          Reach New Customers. Build Loyalty. Become a True Destination.
        </p>
        <p className="text-white fs-5">
          Get Started Today with $0 Upfront Costs!
        </p>
        <Col md={6} className={`${styles.signupForm} mb-4`}>
          <Formik
            initialValues={UPDATEDMERCHANTSIGNUPINITIALVALUES}
            validationSchema={MERCHANT_SIGNUP_SCHEMA}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true);
              handleSignupSubmit(values, resetForm);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="justify-content-center">
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="buisnessname"
                      placeholder={"Business Name"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.buisnessname}
                    />
                    <p className="errorField">
                      {errors.buisnessname && touched.buisnessname && errors.buisnessname}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="address"
                      placeholder={"Business Address"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.address}
                    />
                    <p className="errorField">
                      {errors.address && touched.address && errors.address}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="city"
                      placeholder={"City"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.city}
                    />
                    <p className="errorField">
                      {errors.city && touched.city && errors.city}
                    </p>
                  </Col>
                  <Col md={6} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="state"
                      placeholder={"State"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.state}
                    />
                    <p className="errorField">
                      {errors.state && touched.state && errors.state}
                    </p>
                  </Col>
                  <Col md={6} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="number"
                      name="zip"
                      placeholder={"Zip"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.zip}
                    />
                    <p className="errorField">
                      {errors.zip && touched.zip && errors.zip}
                    </p>
                  </Col>
                  <Col md={6} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="fname"
                      placeholder={"First name"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.fname}
                      readOnly={values.sub || false}
                    />
                    <p className="errorField">
                      {errors.fname && touched.fname && errors.fname}
                    </p>
                  </Col>
                  <Col md={6} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="text"
                      name="lname"
                      placeholder={"Last name"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.lname}
                      readOnly={values.sub || false}
                    />
                    <p className="errorField">
                      {errors.lname && touched.lname && errors.lname}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="email"
                      name="email"
                      placeholder={"Business Email"}
                      onChangeHandle={(e) => {
                        handleChange(e);
                        setMerchantEmail(e.target.value);
                      }}
                      onBlurHandle={handleBlur}
                      value={merchantEmail || values.email}
                      readOnly={values.sub || false}
                    />
                    <p className="errorField">
                      {errors.email && touched.email && errors.email}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="tel"
                      name="landline"
                      placeholder={"Business Number"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.landline}
                    />
                    <p className="errorField">
                      {errors.landline && touched.landline && errors.landline}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="password"
                      name="password"
                      placeholder={"Password"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.password}
                    />
                    <p className="errorField">
                      {errors.password && touched.password && errors.password}
                    </p>
                  </Col>
                  <Col md={12} className="mb-4">
                    <InputField
                      className="py-1 px-2"
                      type="password"
                      name="confirmPassword"
                      placeholder={"Confirm Password"}
                      onChangeHandle={handleChange}
                      onBlurHandle={handleBlur}
                      value={values.confirmPassword}
                    />
                    <p className="errorField">
                      {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                    </p>
                  </Col>
                  <Col md={12} sm={12} className="mt-5 text-center">
                    <FillBtn
                      className="w-25 py-2 fs-5"
                      text={loading ? "Processing..." : "Sign Up"}
                      disabled={loading}
                      type={"submit"}
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </Col>
        <Col md={6}>
          <img className="img-fluid" src="SignUpImage.png" width={800} alt="Signup illustration" />
        </Col>
      </Row>
    </Container>
  ) : (
    <Container fluid>
      <Row className="mx-md-5 px-md-5" style={{ paddingTop: "4%" }}>
        <Row>
          <Col md={9} style={{ paddingBottom: "2%" }}>
            <h4
              className={`subHeading bgYellow`}
              style={{
                textAlign: "left",
                borderRadius: "10px",
                padding: "15px",
                paddingLeft: "5%",
                color: "#396746",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.21988 0.98584C7.41664 0.98584 5.6539 1.52056 4.15456 2.52239C2.65522 3.52421 1.48663 4.94815 0.796559 6.61412C0.106489 8.2801 -0.0740642 10.1133 0.27773 11.8819C0.629525 13.6505 1.49787 15.275 2.77295 16.5501C4.04803 17.8252 5.67259 18.6935 7.44118 19.0453C9.20977 19.3971 11.043 19.2166 12.7089 18.5265C14.3749 17.8364 15.7988 16.6678 16.8007 15.1685C17.8025 13.6692 18.3372 11.9064 18.3372 10.1032C18.3372 8.90587 18.1014 7.72029 17.6432 6.61412C17.185 5.50796 16.5134 4.50287 15.6668 3.65625C14.8202 2.80962 13.8151 2.13804 12.7089 1.67986C11.6028 1.22167 10.4172 0.98584 9.21988 0.98584ZM14.3949 8.49579L8.92448 13.5103C8.75128 13.6691 8.52345 13.7549 8.28852 13.7499C8.05359 13.7448 7.8297 13.6491 7.66355 13.483L4.92835 10.7478C4.84127 10.6637 4.77181 10.5631 4.72403 10.4518C4.67625 10.3406 4.65109 10.221 4.65004 10.0999C4.64899 9.97884 4.67206 9.85878 4.7179 9.74673C4.76374 9.63468 4.83144 9.53289 4.91705 9.44728C5.00265 9.36168 5.10445 9.29398 5.2165 9.24813C5.32855 9.20229 5.44861 9.17922 5.56966 9.18027C5.69072 9.18133 5.81036 9.20648 5.9216 9.25426C6.03283 9.30204 6.13344 9.3715 6.21754 9.45858L8.3355 11.5765L13.1622 7.15189C13.3404 6.98843 13.5763 6.90246 13.8179 6.91289C14.0595 6.92332 14.287 7.0293 14.4505 7.20751C14.614 7.38572 14.6999 7.62157 14.6895 7.86317C14.6791 8.10477 14.5731 8.33233 14.3949 8.49579Z"
                  fill="#396746"
                />
              </svg>
              Submitted Successfully
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md={9} style={{ paddingBottom: "2%" }}>
            <h1
              className={`subHeading`}
              style={{
                textAlign: "left",
                borderRadius: "10px",
                padding: "5px",
                color: "#fff",
                fontSize: "2.5rem",
              }}
            >
              Check Your email
            </h1>
          </Col>
        </Row>

        <Row>
          <Col
            md={9}
            style={{ fontSize: "2rem", color: "white", fontWeight: "200" }}
          >
            <p style={{ paddingLeft: "10px" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1956 3.63155L13.1895 5.28793C11.5136 6.21138 10.6757 6.67315 9.78827 6.85418C9.00283 7.01435 8.19274 7.01435 7.4073 6.85418C6.51991 6.67315 5.68195 6.21138 4.00602 5.28793L1 3.63155M3.70143 12.8419H13.4941C14.4397 12.8419 14.9126 12.8419 15.2737 12.6594C15.5914 12.4989 15.8497 12.2427 16.0115 11.9276C16.1956 11.5694 16.1956 11.1004 16.1956 10.1625V3.79901C16.1956 2.86114 16.1956 2.3922 16.0115 2.03398C15.8497 1.71888 15.5914 1.4627 15.2737 1.30215C14.9126 1.11963 14.4397 1.11963 13.4941 1.11963H3.70143C2.75585 1.11963 2.28305 1.11963 1.92188 1.30215C1.60418 1.4627 1.34589 1.71888 1.18403 2.03398C1 2.3922 1 2.86113 1 3.79901V10.1625C1 11.1004 1 11.5694 1.18403 11.9276C1.34589 12.2427 1.60418 12.4989 1.92188 12.6594C2.28305 12.8419 2.75584 12.8419 3.70143 12.8419Z"
                  stroke="#FFE816"
                />
              </svg>
              <span> {email}</span>
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={9} style={{ paddingLeft: "0px", fontWeight: "200" }}>
            <div className="p-4 text-white text-start mb-4">
              <p className="fs-4">
                Check your email and use the link provided to create your
                Merchant Center account. Then, use our guided Campaign Builder
                to create your PathSynch campaign.
              </p>
              <p className="fs-4">
                Be sure to double-check your spam folder if you didn't receive
                this email.
              </p>
              <p className="fs-4">
                We're looking forward to seeing your deal page live on the
                PathSynch platform!
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default MerchantSignup;