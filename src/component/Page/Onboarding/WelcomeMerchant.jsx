import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";
import FillBtn from "./FillBtn";
import SubHeading from "./SubHeading";
import { Link, useNavigate } from "react-router-dom";

const WelcomeMerchant = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    buisnessName: "",
    email: "",
    name: { fname: "", lname: "" },
    landline: ""
  });

  const [modal, setModal] = useState(true);
  const [edit, setEdit] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const fetchMerchantDetails = async () => {
      try {
        const merchantId = localStorage.getItem('merchantId') || 'default-id';
        
        const response = await fetch('https://api.pathsynch.com/v2/mcnt/onboard-details/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            flag: true,
            id: merchantId
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch merchant details');
        }

        const data = await response.json();
        setUserData(data.data.details);
        setContactName(`${data.data.details.name.fname} ${data.data.details.name.lname}`);
        setContactPhone(data.data.details.landline);
      } catch (error) {
        console.error('Error fetching merchant details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMerchantDetails();
  }, []);

  const handleUpdateContactInfo = async () => {
    try {
      // Split the contact name back into first and last names
      const [fname, lname] = contactName.split(' ');
      
      // Prepare updated data
      const updatedData = {
        ...userData,
        name: { fname, lname },
        landline: contactPhone
      };

      // Here you would typically make an API call to update the contact info
      // For example:
      /*
      const response = await fetch('https://api.pathsynch.com/v2/mcnt/update-details/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData)
      });

      if (!response.ok) {
        throw new Error('Failed to update contact info');
      }
      */

      // For now, we'll just update the local state
      setUserData(updatedData);
      setEdit(false);
      
    } catch (error) {
      console.error('Error updating contact info:', error);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
     <div className='signup-wrap'>
      <Link className="text-start d-block mt-3" to={"/"}>
        <img
          src="LOGO.png"
          alt={"website-logo"}
          style={{ verticalAlign: "sub", width: "180px", marginLeft: "20px" }}
        />
      </Link>
      
      <Container fluid className={`${styles.privacyPolicyWrapper}`}>
        <Row className="mx-md-5 px-md-5 pt-2">
          <SubHeading
            headingText={"Welcome to PathSynch "}
            categoryText={"Merchant!"}
            className={"text-center text-white"}
          />
          <p className="text-center text-white fs-4">
            Select <span className="textYellow">Get Started</span> to build your
            campaign.
          </p>
          <Row style={{ paddingRight: "5%", paddingLeft: "5%" }}>
            <Col md={12} className="mb-2 mt-2">
              <SubHeading
                headingText={"Meet Campaign Builder"}
                categoryText={""}
                className={"textYellow"}
              />
              <p className="text-white textFont">
                Launch your PathSynch campaign in no time using Campaign Builder.
                Just tell us what services your business offers, and we'll help
                you build a campaign you have full control over-customize your
                deal's pricing, discounts, marketing copy, photos, and more using
                Campaign Builder's data-driven guidance.
              </p>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "3rem",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <Col md={2}>
              <svg
                width="77"
                height="61"
                viewBox="0 0 77 61"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M38.9918 44.0447C36.148 44.0447 33.8345 41.7312 33.8345 38.8874C33.8345 38.7677 33.8368 38.6457 33.8462 38.5284L16.3047 31.2992C15.4671 30.952 15.0682 29.9876 15.4131 29.1523C15.6665 28.5352 16.2625 28.1387 16.9289 28.1387C17.1471 28.1387 17.3583 28.1809 17.5554 28.2607L35.1015 35.4945C36.0752 34.3847 37.5159 33.7277 38.9918 33.7277C39.8975 33.7277 40.6319 34.4621 40.6319 35.3678C40.6319 36.2712 39.8975 37.0056 38.9918 37.0056C38.2972 37.0056 37.6614 37.3904 37.3305 38.0075C37.2625 38.2445 37.2109 38.3407 37.1522 38.4392C37.1358 38.5331 37.11 38.7184 37.11 38.8874C37.11 39.9221 37.9547 40.7668 38.9918 40.7668C40.0289 40.7668 40.8712 39.9245 40.8712 38.8874C40.8712 37.9817 41.6056 37.2473 42.5113 37.2473C43.417 37.2473 44.1514 37.9817 44.1514 38.8874C44.1514 41.7312 41.8379 44.0447 38.9918 44.0447Z"
                  fill="#FFE816"
                />
                <path
                  d="M69.4029 60.4719C69.0814 60.4719 68.767 60.3781 68.4949 60.1998C68.1288 59.9581 67.8777 59.5921 67.7909 59.165C67.7018 58.7333 67.7862 58.2945 68.0326 57.9285C68.9219 56.5699 69.722 55.141 70.4142 53.6769L67.629 52.5295C67.2184 52.3559 66.9017 52.0391 66.7374 51.6332C66.5732 51.2249 66.5732 50.7791 66.7445 50.3779C66.9908 49.7631 67.5891 49.3666 68.2602 49.3666C68.4737 49.3666 68.6825 49.4088 68.882 49.4886L71.6718 50.6454C72.8427 47.3886 73.5161 43.9864 73.6756 40.5255H70.6676C69.7642 40.5255 69.0298 39.7911 69.0298 38.8877C69.0298 37.982 69.7642 37.2476 70.6676 37.2476H73.678C73.5184 33.7679 72.8474 30.3634 71.6789 27.1254L68.8867 28.2821C68.6943 28.3643 68.4808 28.4065 68.2579 28.4065C67.5891 28.4065 66.9932 28.01 66.7398 27.3929C66.5732 26.9893 66.5732 26.5435 66.7398 26.1376C66.9064 25.734 67.2208 25.4172 67.629 25.2483L70.4282 24.0868C68.9524 20.9709 67.0213 18.0895 64.6773 15.5226L62.5492 17.6484C62.2418 17.9581 61.8288 18.1271 61.3924 18.1271C60.9513 18.1271 60.5383 17.9581 60.2309 17.6484C59.9212 17.341 59.7499 16.9257 59.7499 16.4869C59.7499 16.0482 59.9212 15.6352 60.2333 15.3255L62.3591 13.1997C59.7922 10.8604 56.9108 8.92929 53.7925 7.45343L52.6334 10.2526C52.3776 10.8674 51.7817 11.2639 51.1176 11.2639C50.9018 11.2639 50.6883 11.2217 50.4888 11.1419C50.0829 10.9753 49.7661 10.6586 49.5972 10.2503C49.433 9.84438 49.4306 9.40091 49.5949 8.99499L50.7563 6.19812C47.5136 5.03432 44.1114 4.36561 40.6341 4.20371V7.2141C40.6341 8.11745 39.8997 8.85186 38.994 8.85186C38.0906 8.85186 37.3562 8.11745 37.3562 7.2141V4.20136C33.8648 4.36092 30.4626 5.03198 27.2316 6.19577L28.3954 8.99265C28.7356 9.82795 28.3344 10.7923 27.4991 11.1396C27.2973 11.2193 27.0862 11.2592 26.8703 11.2592C26.2086 11.2592 25.6126 10.865 25.3569 10.255L24.1931 7.45108C21.0748 8.9246 18.1934 10.8557 15.6265 13.1973L17.7547 15.3278C18.062 15.6352 18.2357 16.0458 18.2357 16.4846C18.2357 16.9257 18.0644 17.3363 17.7547 17.646C17.4496 17.9558 17.0367 18.1247 16.5932 18.1247C16.1497 18.1247 15.7368 17.9558 15.4317 17.646L13.3012 15.5202C10.9549 18.0965 9.02382 20.9732 7.55734 24.0845L10.3542 25.2436C10.7578 25.4102 11.0745 25.7246 11.2411 26.1305C11.4101 26.5364 11.4124 26.9822 11.2411 27.3905C10.9877 28.0076 10.3917 28.4041 9.72538 28.4041C9.50013 28.4041 9.28661 28.3596 9.08951 28.2751L6.29968 27.1207C5.13589 30.3563 4.46482 33.7609 4.30293 37.2453H7.31566C8.22136 37.2453 8.95812 37.9797 8.95812 38.8854C8.95812 39.7887 8.22136 40.5231 7.31566 40.5231H4.30293C4.46482 43.9958 5.14058 47.398 6.31142 50.643L9.09655 49.4863C9.30303 49.4065 9.51186 49.3642 9.72303 49.3642C10.3917 49.3642 10.9901 49.7631 11.2435 50.3802C11.4124 50.7838 11.4124 51.2273 11.2435 51.6332C11.0769 52.0391 10.7601 52.3559 10.3566 52.5248L7.57142 53.6745C8.26125 55.1363 9.0637 56.5652 9.95767 57.9285C10.1993 58.2922 10.2815 58.7333 10.1923 59.1603C10.1031 59.5897 9.85208 59.9581 9.48605 60.1974C9.22091 60.3734 8.9065 60.4673 8.58505 60.4673C8.0313 60.4673 7.51745 60.1904 7.21242 59.7258C3.13443 53.529 0.980469 46.321 0.980469 38.8877C0.980469 28.7326 4.9341 19.1876 12.114 12.0101C19.2915 4.83019 28.8365 0.878906 38.9916 0.878906C49.1514 0.878906 58.6964 4.83254 65.8693 12.0101C73.0491 19.1876 77.0004 28.7326 77.0004 38.8877C77.0004 46.3233 74.8488 53.529 70.7755 59.7305C70.4705 60.1951 69.9566 60.4719 69.4029 60.4719Z"
                  fill="#FFE816"
                />
              </svg>
            </Col>
            <Col>
              <SubHeading
                headingText={"How long does it take?"}
                categoryText={""}
                className={"textYellow"}
              />
              <p className="text-white textFont">
                Building a new campaign typically takes 30 minutes. After you
                submit your campaign, we'll review it within 1 business day.
              </p>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "3rem",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <Col md={2}>
              <svg
                width="75"
                height="75"
                viewBox="0 0 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.5 5.23256C19.6792 5.23256 5.23256 19.6792 5.23256 37.5C5.23256 55.3207 19.6792 69.7674 37.5 69.7674C55.3207 69.7674 69.7674 55.3207 69.7674 37.5C69.7674 19.6792 55.3207 5.23256 37.5 5.23256ZM0 37.5C0 16.7893 16.7893 0 37.5 0C58.2108 0 75 16.7893 75 37.5C75 58.2108 58.2108 75 37.5 75C16.7893 75 0 58.2108 0 37.5ZM37.5 13.9535C38.9449 13.9535 40.1163 15.1248 40.1163 16.5698V17.6746C45.8037 18.693 50.5814 22.9661 50.5814 28.7791C50.5814 30.224 49.41 31.3953 47.9651 31.3953C46.5202 31.3953 45.3488 30.224 45.3488 28.7791C45.3488 25.8339 42.3017 22.6744 37.5 22.6744C32.6983 22.6744 29.6512 25.8339 29.6512 28.7791C29.6512 31.7243 32.6983 34.8837 37.5 34.8837C44.2577 34.8837 50.5814 39.533 50.5814 46.2209C50.5814 52.034 45.8037 56.3069 40.1163 57.3255V58.4302C40.1163 59.8751 38.9449 61.0465 37.5 61.0465C36.0551 61.0465 34.8837 59.8751 34.8837 58.4302V57.3255C29.1962 56.3069 24.4186 52.034 24.4186 46.2209C24.4186 44.776 25.59 43.6047 27.0349 43.6047C28.4798 43.6047 29.6512 44.776 29.6512 46.2209C29.6512 49.1662 32.6983 52.3256 37.5 52.3256C42.3017 52.3256 45.3488 49.1662 45.3488 46.2209C45.3488 43.2757 42.3017 40.1163 37.5 40.1163C30.7423 40.1163 24.4186 35.467 24.4186 28.7791C24.4186 22.9661 29.1962 18.693 34.8837 17.6746V16.5698C34.8837 15.1248 36.0551 13.9535 37.5 13.9535Z"
                  fill="#FFE816"
                />
              </svg>
            </Col>
            <Col>
              <SubHeading
                headingText={"What does it cost?"}
                categoryText={""}
                className={"textYellow"}
              />
              <p className="text-white textFont">
                There's zero upfront cost to build a campaign.
              </p>
            </Col>
          </Row>
          <Row
            style={{
              marginBottom: "3rem",
              paddingRight: "5%",
              paddingLeft: "5%",
            }}
          >
            <Col md={2} style={{ marginTop: "1%" }}>
              <svg
                width="78"
                height="68"
                viewBox="0 0 78 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M53.2266 52.3827L58.4171 57.5728L70.0055 45.9844"
                  stroke="#FFE816"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M60.8346 67.0003C69.7632 67.0003 77.0013 59.7623 77.0013 50.8337C77.0013 41.9051 69.7632 34.667 60.8346 34.667C51.906 34.667 44.668 41.9051 44.668 50.8337C44.668 59.7623 51.906 67.0003 60.8346 67.0003Z"
                  stroke="#FFE816"
                  strokeWidth="2"
                />
                <line
                  x1="1.5"
                  y1="1.5"
                  x2="58.5"
                  y2="1.5"
                  stroke="#FFE816"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="14.5"
                  x2="58.5"
                  y2="14.5"
                  stroke="#FFE816"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="27.5"
                  x2="58.5"
                  y2="27.5"
                  stroke="#FFE816"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="40.5"
                  x2="40.5"
                  y2="40.5"
                  stroke="#FFE816"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="1.5"
                  y1="53.5"
                  x2="37.5"
                  y2="53.5"
                  stroke="#FFE816"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </Col>
            <Col>
              <SubHeading
                headingText={"Do I need anything before I get started?"}
                categoryText={""}
                className={"textYellow"}
              />
              <p className="text-white textFont">
                Have the following documents ready-you'll need this information to
                complete the next steps:
              </p>
              <ul className="text-white textFont">
                <li className="with-style">
                  Photos of your business and services or goods
                </li>
                <li className="with-style">
                  Licenses (depending on your business)
                </li>
                <li className="with-style">Payment/banking info</li>
                <li className="with-style">SSN or EIN</li>
              </ul>
            </Col>
          </Row>
          <Row style={{ paddingRight: "5%", paddingLeft: "5%" }}>
            <Col md={12} className="mb-4">
              <Row>
                <Col md={9}></Col>
                <Col md={3} className="mb-3">
                  <FillBtn
                    text={"Next"}
                    handleOnClick={() => {
                      navigate("/merchantSignup/onboarding");
                    }}
                    className="py-2 fs-4 w-100"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
        {modal && (
          <Modal
            style={{ marginTop: "10%", maxWidth: "50%", color: "#396746" }}
            isOpen={modal}
            toggle={toggleModal}
          >
            <ModalHeader style={{ marginLeft: "5%" }} toggle={toggleModal}>
              <h2 className={`subHeading}`} style={{ fontWeight: "300" }}>
                Double-check your contact info
              </h2>
            </ModalHeader>
            <ModalBody style={{ marginLeft: "5%", marginTop: "-2%" }}>
              <Row>
                <Col md={2}>
                  <img
                    height={"100px"}
                    width={"100px"}
                    style={{ borderRadius: "3.5rem" }}
                    src="https://pathsync-bucket.s3.us-east-1.amazonaws.com/user.jpg"
                    alt="image"
                  />
                </Col>
                <Col md={10} style={{ marginTop: "5%" }}>
                  <h4>{userData?.buisnessName}</h4>
                </Col>
              </Row>

              <Row style={{ fontWeight: "300" }}>
                <Col md={2}></Col>
                <Col>
                  <svg
                    width="15"
                    height="22"
                    viewBox="0 0 25 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 30C2 23.9862 6.70102 19.1111 12.5 19.1111C18.299 19.1111 23 23.9862 23 30M18.5 8.22222C18.5 11.6587 15.8137 14.4444 12.5 14.4444C9.18629 14.4444 6.5 11.6587 6.5 8.22222C6.5 4.78578 9.18629 2 12.5 2C15.8137 2 18.5 4.78578 18.5 8.22222Z"
                      stroke="#396746"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {!edit ? (
                    <span style={{ paddingLeft: "1.5rem" }}>{contactName}</span>
                  ) : (
                    <Input
                      style={{ display: "inline", width: "auto", marginLeft: "0.7rem", border: "none" }}
                      onChange={(e) => setContactName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={contactName}
                    />
                  )}
                </Col>
              </Row>

              <Row style={{ fontWeight: "300" }}>
                <Col md={2}></Col>
                <Col>
                  <svg
                    width="21"
                    height="15"
                    viewBox="0 0 31 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 6.5L23.6588 9.46733C20.681 11.1216 19.1921 11.9489 17.6153 12.2732C16.2197 12.5601 14.7803 12.5601 13.3847 12.2732C11.808 11.9489 10.319 11.1216 7.3412 9.46733L2 6.5M6.8 23H24.2C25.8801 23 26.7203 23 27.362 22.673C27.9265 22.3854 28.3854 21.9265 28.673 21.362C29 20.7203 29 19.8802 29 18.2V6.8C29 5.11985 29 4.27976 28.673 3.63803C28.3854 3.07354 27.9265 2.61459 27.362 2.32698C26.7203 2 25.8801 2 24.2 2H6.8C5.11985 2 4.27976 2 3.63803 2.32698C3.07354 2.61459 2.61459 3.07354 2.32698 3.63803C2 4.27976 2 5.11983 2 6.8V18.2C2 19.8802 2 20.7203 2.32698 21.362C2.61459 21.9265 3.07354 22.3854 3.63803 22.673C4.27976 23 5.11983 23 6.8 23Z"
                      stroke="#396746"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ paddingLeft: "1.1rem" }}>{userData?.email}</span>
                </Col>
              </Row>

              <Row style={{ fontWeight: "300" }}>
                <Col md={2}></Col>
                <Col>
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 31 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.88889C2 19.2051 12.4094 30 25.25 30C25.8293 30 26.4037 29.9781 26.9725 29.9348C27.6251 29.8852 27.9514 29.8605 28.2485 29.6831C28.4945 29.5363 28.7277 29.2759 28.851 29.0107C29 28.6905 29 28.317 29 27.5702V23.1878C29 22.5596 29 22.2456 28.9003 21.9764C28.8124 21.7386 28.6692 21.5269 28.4838 21.3598C28.274 21.1707 27.9893 21.0633 27.4202 20.8487L22.61 19.0347C21.9477 18.7851 21.6166 18.6602 21.3025 18.6813C21.0254 18.7 20.7589 18.7981 20.5324 18.9646C20.2756 19.1533 20.0944 19.4666 19.7318 20.0933L18.5 22.2222C14.5252 20.3554 11.3029 17.0094 9.5 12.8889L11.5529 11.6115C12.1572 11.2355 12.4593 11.0475 12.6413 10.7812C12.8018 10.5463 12.8965 10.2699 12.9145 9.98264C12.9349 9.65686 12.8144 9.31349 12.5736 8.62674L10.8245 3.63833C10.6175 3.04807 10.514 2.75294 10.3316 2.53527C10.1705 2.34298 9.96634 2.19468 9.73703 2.10337C9.47744 2 9.17462 2 8.56898 2H4.34301C3.62282 2 3.26271 2 2.95397 2.15439C2.69825 2.28227 2.44721 2.52424 2.30555 2.77938C2.13452 3.08744 2.11062 3.42585 2.06283 4.10269C2.02119 4.69245 2 5.2881 2 5.88889Z"
                      stroke="#396746"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {!edit ? (
                    <span style={{ paddingLeft: "1.5rem" }}>{contactPhone}</span>
                  ) : (
                    <Input
                      style={{ display: "inline", width: "auto", marginLeft: "0.7rem", border: "none" }}
                      onChange={(e) => setContactPhone(e.target.value)}
                      type="text"
                      name="phone"
                      id="phone"
                      defaultValue={contactPhone}
                    />
                  )}
                </Col>
              </Row>
            </ModalBody>
            <Row>
              <ModalFooter
                className={"edit-contact-modal-footer-content"}
                style={{ paddingRight: "5%", borderTop: "" }}
              >
                <Col md={3}></Col>
                <Col md={5}>
                  <Button
                    className={`py-1 fs-4 w-100 edit-contact-info`}
                    onClick={() => edit ? handleUpdateContactInfo() : setEdit(true)}
                    disabled={false}
                    type="button"
                  >
                    {edit ? "Update contact info" : "Edit contact info"}
                  </Button>
                </Col>
                <Col md={3} style={{ paddingLeft: "2%" }}>
                  <Button
                    className={`py-1 fs-4 w-100 edit-contact-info-continue`}
                    onClick={toggleModal}
                    disabled={false}
                    type="button"
                  >
                    Continue
                  </Button>
                </Col>
              </ModalFooter>
            </Row>
          </Modal>
        )}
      </Container>
    </div>
  );
};

export default WelcomeMerchant;