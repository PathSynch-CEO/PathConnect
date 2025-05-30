import { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import {
  Cat1Options,
  Cat2Options,
  Cat3Options,
  Cat4Options,
  Cat5Options,
  Cat6Options,
  Cat7Options,
  Cat8Options,
  Cat9Options,
  Cat10Options,
  Cat11Options,
  Cat12Options,
} from "./constants";
import classnames from "classnames";
import FillBtn from "./FillBtn";
import OutlineBtn from "./OutlineBtn";
import SubHeading from "./SubHeading";
import TopBar from "../../../Topbar";
import { Link, useNavigate } from "react-router-dom";

const Onboardingss = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const [expanded, setExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);
  const [currentDictionary, setCurrentDictionary] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [subCategoriesArray, setSubCategoriesArray] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [serviceTypeArray, setServiceTypeArray] = useState([]);
  const [searchField, setSearchField] = useState("");

  const [modal, setModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails") || '{}');
  console.log(paymentDetails)

  // Toggle function to show/hide modal
  const toggleModal = () => {
    setInputValue("");
    setModal(!modal);
  };
    const [loading, setLoading] = useState(false);
    
  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle the Add button click
  const handleAdd = () => {
    if (!inputValue) return;
    const tempServiceTypeArray = serviceTypeArray;
    const newService = tempServiceTypeArray.find(
      (item) => item.service === "new_service"
    );

    if (newService) {
      newService.sub_service.push(inputValue);
    } else {
      // If the service does not exist, add a new object with the service and sub_service
      tempServiceTypeArray.push({
        service: "new_service",
        sub_service: [inputValue],
      });
    }

    setServiceTypeArray([...tempServiceTypeArray]);
    const tempSelectedServices = [...selectedServices, inputValue];
    setSelectedServices(tempSelectedServices);
    expanded && setVisibleCount(serviceTypeArray[0].sub_service.length);
    setModal(false);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  // const handleFinishClick = () => {
  //   console.log("Finish clicked with data:", {
  //     category: selectedCategory,
  //     servicesTypes: selectedServiceTypes,
  //     services: selectedServices,
  //   });
  // };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedServiceTypes([]);
    setServiceTypeArray([]);
  };

  const handleSubCategoryClick = (category) => {
    const tempCategories = selectedServiceTypes;
    const index = tempCategories.indexOf(category);

    if (index !== -1) tempCategories.splice(index, 1);
    else tempCategories.push(category);
    setSelectedServiceTypes([...tempCategories]);

    const tempServiceType = serviceTypeArray;
    const indexServiceType = serviceTypeArray.findIndex(
      (cat) => cat.service === category
    );

    if (indexServiceType !== -1) tempServiceType.splice(index, 1);
    else
      tempServiceType.push({
        service: category,
        sub_service: getSubcategories(category, currentDictionary),
      });

    setServiceTypeArray([...tempServiceType]);
  };

  const handleServiceTypeClick = (service) => {
    const tempServiceType = selectedServices;
    const index = tempServiceType.indexOf(service);
    if (index !== -1) {
      tempServiceType.splice(index, 1);
    } else {
      tempServiceType.push(service);
    }
    setSelectedServices([...tempServiceType]);
  };

  const handleNextClick = () => {
    let tempArray = [];
    if (selectedCategory === "Food & Restaurants") {
      tempArray = [...Cat1Options.map((item) => item.category)];
      setCurrentDictionary(Cat1Options);
    } else if (selectedCategory === "Food Type") {
      tempArray = [...Cat2Options.map((item) => item.category)];
      setCurrentDictionary(Cat2Options);
    } else if (selectedCategory === "Health & Wellness") {
      tempArray = [...Cat3Options.map((item) => item.category)];
      setCurrentDictionary(Cat3Options);
    } else if (selectedCategory === "Beauty & Spas") {
      tempArray = [...Cat4Options.map((item) => item.category)];
      setCurrentDictionary(Cat4Options);
    } else if (selectedCategory === "Arts & Entertiment") {
      tempArray = [...Cat5Options.map((item) => item.category)];
      setCurrentDictionary(Cat5Options);
    } else if (selectedCategory === "Active Lifesytle") {
      tempArray = [...Cat6Options.map((item) => item.category)];
      setCurrentDictionary(Cat6Options);
    } else if (selectedCategory === "Hotels & Travel") {
      tempArray = [...Cat7Options.map((item) => item.category)];
      setCurrentDictionary(Cat7Options);
    } else if (selectedCategory === "Goods & Shopping") {
      tempArray = [...Cat8Options.map((item) => item.category)];
      setCurrentDictionary(Cat8Options);
    } else if (selectedCategory === "Event Planning & Services") {
      tempArray = [...Cat9Options.map((item) => item.category)];
      setCurrentDictionary(Cat9Options);
    } else if (selectedCategory === "Professional Services") {
      tempArray = [...Cat10Options.map((item) => item.category)];
      setCurrentDictionary(Cat10Options);
    } else if (selectedCategory === "Pets") {
      tempArray = [...Cat11Options.map((item) => item.category)];
      setCurrentDictionary(Cat11Options);
    } else if (selectedCategory === "Nightlife") {
      tempArray = [...Cat12Options.map((item) => item.category)];
      setCurrentDictionary(Cat12Options);
    }

    setSubCategoriesArray(tempArray);
    setActiveTab(2);
    window.scrollTo(0, 0);
  };

  const handleShowMore = (count) => {
    setExpanded(!expanded);
    setVisibleCount(expanded ? 6 : count);
  };

  const getSubcategories = (category, data) => {
    const result = data.find((item) => item.category === category);
    return result ? result.subcategories : [];
  };

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value.length) setExpanded(false);
  };
  const handleFinishClick = async () => {
    setLoading(true);
    try {
      const merchantId = localStorage.getItem('merchantId')
      const apiUrl = `https://api.pathsynch.com/v2/auth/merchant/business/${merchantId}`;
      
      const requestData = {
        category: selectedCategory,
        servicesTypes: selectedServiceTypes,
        services: selectedServices,
        status:paymentDetails?.status,
        date:paymentDetails?.date,
        amount:paymentDetails.amount,
        businessName:paymentDetails?.businessName,
        card:paymentDetails?.product?.plan

      };
console.log(paymentDetails,"jhweishfhb")
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit business data");
      }

      const data = await response.json();
      console.log("Success:", data);
      window.location.href = "https://pathmanager.pathsynch.com";
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='signup-wrap'>
     {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

    <Link className="text-start d-block mt-3" to={"/"}>
           <img
             src="LOGO.png"
             alt={"website-logo"}
             style={{ verticalAlign: "sub", width: "180px", marginLeft: "20px" }}
           />
         </Link>
    <Container className="py-5">
   
      <Nav tabs className="d-flex justify-content-center">
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 1 })}
            onClick={() => {
              toggle(1);
            }}
          >
            <div
              className={`w-25 px-5 py-1 BorderRadius ${
                activeTab === 1 ? "bgYellow" : "whiteTransparentBg"
              }`}
            ></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 2 })}
            onClick={() => {
              if (selectedServiceTypes.length) {
                toggle(2);
              }
            }}
          >
            <div
              className={`w-25 px-5 py-1 BorderRadius ${
                activeTab === 2 ? "bgYellow" : "whiteTransparentBg"
              }`}
            ></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 3 })}
            onClick={() => {
              if (selectedServiceTypes.length) {
                toggle(3);
              }
            }}
          >
            <div
              className={`w-25 px-5 py-1 BorderRadius ${
                activeTab === 3 ? "bgYellow" : "whiteTransparentBg"
              }`}
            ></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 4 })}
            onClick={() => {
              if (selectedServiceTypes.length + selectedServices.length) {
                toggle(4);
              }
            }}
          >
            <div
              className={`w-25 px-5 py-1 BorderRadius ${
                activeTab === 4 ? "bgYellow" : "whiteTransparentBg"
              }`}
            ></div>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 5 })}
            onClick={() => {
              if (selectedServices.length) {
                toggle(5);
              }
            }}
          >
            <div
              className={`w-25 px-5 py-1 BorderRadius ${
                activeTab === 5 ? "bgYellow" : "whiteTransparentBg"
              }`}
            ></div>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={1}>
          <Row className="d-flex text-center justify-content-center">
            <Col md={12}>
              <SubHeading
                headingText="Which category best describes your business? "
                categoryText=""
                className="textYellow py-4"
              />
            </Col>
            <Col
              md={6}
              style={{
                height: "400px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Food & Restaurants"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Food & Restaurants")}
              >
                <h4 className="mb-0">Food & Restaurants</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Food Type"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Food Type")}
              >
                <h4 className="mb-0">Food Type</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Health & Wellness"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Health & Wellness")}
              >
                <h4 className="mb-0">Health & Wellness</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Beauty & Spas"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Beauty & Spas")}
              >
                <h4 className="mb-0">Beauty & Spas</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Arts & Entertiment"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Arts & Entertiment")}
              >
                <h4 className="mb-0">Arts & Entertiment</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Active Lifesytle"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Active Lifesytle")}
              >
                <h4 className="mb-0">Active Lifesytle</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Hotels & Travel"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Hotels & Travel")}
              >
                <h4 className="mb-0">Hotels & Travel</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Goods & Shopping"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Goods & Shopping")}
              >
                <h4 className="mb-0">Goods & Shopping</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Event Planning & Services"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Event Planning & Services")}
              >
                <h4 className="mb-0">Event Planning & Services</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Professional Services"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Professional Services")}
              >
                <h4 className="mb-0">Professional Services</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Pets"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Pets")}
              >
                <h4 className="mb-0">Pets</h4>
              </div>
              <div
                className={`p-3 BorderRadius text-start mb-2 ${
                  selectedCategory === "Nightlife"
                    ? "categorySelectedBg"
                    : "categoryTransparentBg"
                }`}
                onClick={() => handleCategoryClick("Nightlife")}
              >
                <h4 className="mb-0">Nightlife</h4>
              </div>
            </Col>
            <Col md={12} className="text-end">
              <FillBtn
                text="Next"
                className={"py-2 px-5 fs-4"}
                disabled={selectedCategory === "" ? true : false}
                handleOnClick={handleNextClick}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={2}>
          <Row className="d-flex text-center justify-content-center">
            <Col md={12}>
              <SubHeading
                headingText="Which type of services do you offer?"
                categoryText=""
                className="textYellow py-4"
              />
            </Col>
            <Col
              md={6}
              style={{
                height: "400px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              {subCategoriesArray.map((subCat, index) => {
                return (
                  <Col md={12} key={index}>
                    <div
                      className={`p-3 BorderRadius text-start mb-2 ${
                        selectedServiceTypes.includes(subCat)
                          ? "categorySelectedBg"
                          : "categoryTransparentBg"
                      }`}
                      style={{ border: "1px solid white !important" }}
                      onClick={() => handleSubCategoryClick(subCat)}
                    >
                      <h4 className="mb-0">{subCat}</h4>
                    </div>
                  </Col>
                );
              })}
            </Col>
            <Col md={12} className="d-flex justify-content-between py-4">
              <OutlineBtn
                text="Previous"
                className={"py-2 px-5 fs-4"}
                handleOnClick={() => setActiveTab(1)}
              />
              <FillBtn
                text="Next"
                className={"py-2 px-5 fs-4"}
                disabled={selectedServiceTypes.length === 0 ? true : false}
                handleOnClick={() => toggle(3)}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={3}>
          <Row className="d-flex text-center justify-content-center">
            <Col md={12}>
              <SubHeading
                style={{}}
                headingText="Add services"
                categoryText=""
                className="textYellow py-4"
              />
            </Col>
            <Col md={12} className="text-center">
              <p style={{ color: "#fff" }}>
                Select all the services you offer. Search our full service list
                if you're unable to find your service listed below.
              </p>
            </Col>
            <Row>
              <Col md={2}></Col>
              <Col md={8} className="text-center p-4">
                <Input
                  style={{
                    height: "3rem",
                    borderRadius: "1.5rem",
                    background: "#61666b",
                    border: "#61666b",
                  }}
                  type="text"
                  onChange={onSearchChange}
                  placeholder="Search for services to add"
                  className="categoryTransparentBg custom-placeholder "
                ></Input>
              </Col>
              <Col md={2}></Col>
            </Row>

            <Row>
              <Col md={2}></Col>
              <Col
                md={4}
                className="text-left"
                style={{ color: "#fff", textAlign: "left" }}
              >
                <SubHeading
                  headingText={`Types of services (${
                    selectedServiceTypes.length +
                    selectedServices.length
                  })`}
                  categoryText=""
                  className="textWhite py-4"
                />
              </Col>
              <Col
                md={4}
                className="text-right p-4"
                style={{ color: "#FFE816", textAlign: "right" }}
                onClick={toggleModal}
              >
                <p
                  style={{
                    paddingTop: "3px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  + Add another type of service
                </p>
              </Col>
            </Row>

            {serviceTypeArray?.map((element, index) => (
              <>
                <Row key={element}>
                  <Col md={2}></Col>
                  <Col
                    md={10}
                    className="text-left"
                    style={{ color: "#fff", textAlign: "left" }}
                  >
                    <h5 className="textWhite py-4">
                      {element.service == "new_service" ? "" : element.service}
                    </h5>
                  </Col>
                </Row>
                <Row key={index}>
                  {element?.sub_service
                    ?.filter(
                      (service) =>
                        !searchField ||
                        service
                          .toLowerCase()
                          .includes(searchField.toLowerCase())
                    )
                    ?.slice(0, visibleCount)
                    .map((service, index) => {
                      return (
                        <>
                          {index % 2 === 0 && <Col md={2}></Col>}
                          <Col md={4} key={index}>
                            <div
                              className={`p-3 BorderRadius text-start mb-2 custom-border ${
                                selectedServices?.includes(service)
                                  ? "categorySelectedBg"
                                  : "categoryTransparentBg"
                              }`}
                              onClick={() => handleServiceTypeClick(service)}
                            >
                              <h4 className="mb-0">{service} </h4>
                            </div>
                          </Col>
                          {index % 2 !== 0 && <Col md={2}></Col>}
                        </>
                      );
                    })}
                </Row>
                {element?.sub_service?.filter(
                  (service) =>
                    !searchField ||
                    service.toLowerCase().includes(searchField.toLowerCase())
                )?.length ? (
                  element?.sub_service?.filter(
                    (service) =>
                      !searchField ||
                      service.toLowerCase().includes(searchField.toLowerCase())
                  )?.length > 6 && (
                    <Col
                      className="d-flex text-center justify-content-center textYellow cursorPointer"
                      onClick={() =>
                        handleShowMore(
                          element.sub_service?.filter(
                            (service) =>
                              !searchField ||
                              service
                                .toLowerCase()
                                .includes(searchField.toLowerCase())
                          ).length
                        )
                      }
                    >
                      {expanded ? "Show Less" : "Show More"} {element.service}
                    </Col>
                  )
                ) : (
                  <Col className="d-flex text-center justify-content-center textYellow">
                    No services available for {element.service}
                  </Col>
                )}
              </>
            ))}

            <Col md={12} className="d-flex justify-content-between py-4">
              <OutlineBtn
                text="Previous"
                className={"py-2 px-5 fs-4"}
                handleOnClick={() => setActiveTab(2)}
              />
              <FillBtn
                text="Next"
                className={"py-2 px-5 fs-4"}
                disabled={
                  selectedServiceTypes.length + selectedServices.length === 0
                    ? true
                    : false
                }
                handleOnClick={() => toggle(4)}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={4}>
          <Row className="d-flex text-center justify-content-center">
            <Col md={12}>
              <SubHeading
                headingText={`You added ${
                  selectedServiceTypes.length + selectedServices.length
                }  services!`}
                categoryText=""
                className="textYellow pt-4"
              />
            </Col>
            <Col
              md={12}
              className="d-flex text-center justify-content-center font14"
            >
              <p style={{ color: "#fff", fontSize: "25px" }}>
                {" "}
                Select <span className="textYellow">Continue</span> to build a
                campaign.
              </p>
            </Col>

            <Col
              md={6}
              style={{
                height: "400px",
                overflowY: "auto",
                scrollBehavior: "smooth",
              }}
            >
              <svg
                width="262"
                height="262"
                viewBox="0 0 262 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_344_3135)">
                  <mask
                    id="mask0_344_3135"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="262"
                    height="262"
                  >
                    <path d="M262 0H0V262H262V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_344_3135)">
                    <path
                      d="M131 54.9355L140.488 84.1352H171.19L146.351 102.181L155.839 131.381L131 113.335L106.162 131.381L115.649 102.181L90.8104 84.1352H121.513L131 54.9355Z"
                      fill="#FFE816"
                    />
                    <path
                      d="M218.115 95.7366L224.076 87.942L217.149 81.0154L221.718 72.3449L213.702 66.6627L216.74 57.3454L207.881 53.0879L209.273 43.3775L199.849 40.6838L199.571 30.8588L189.844 29.8108L187.936 20.2069L178.111 20.7964L174.615 11.6837L165.052 13.9107L160.082 5.51854L151.019 9.32569L144.665 1.86686L136.412 7.16419L128.839 0.892578L121.634 7.4917L113.144 2.57921L107.158 10.3328L97.9638 6.93494L93.3543 15.5891L83.7094 13.796L80.631 23.0725L70.8059 22.9333L69.3403 32.6028L59.6382 34.1093L59.8347 43.9342L50.591 47.0537L52.4004 56.6822L43.7708 61.349L47.1932 70.5272L39.497 76.5696L44.4094 85.0028L37.8594 92.2487L44.1557 99.7812L38.932 108.018L46.3662 114.363L42.5673 123.451L51.0085 128.364L48.7815 137.902L57.968 141.382L57.3948 151.15L67.0315 153.041L68.1205 162.792L77.7817 163.005L45.0317 243.906C44.7108 244.687 44.6393 245.548 44.8269 246.371C45.0145 247.194 45.4521 247.939 46.0797 248.504C46.7073 249.069 47.4942 249.426 48.3326 249.526C49.171 249.626 50.0199 249.465 50.7629 249.064L84.3317 231.412L99.0692 258.872C99.4195 259.523 99.9393 260.067 100.574 260.446C101.208 260.825 101.933 261.025 102.672 261.026H102.893C103.67 260.984 104.42 260.722 105.054 260.27C105.687 259.817 106.179 259.193 106.471 258.471L133.137 192.726L157.946 258.348C158.219 259.078 158.694 259.714 159.317 260.182C159.939 260.651 160.682 260.932 161.458 260.993H161.777C162.501 260.993 163.212 260.802 163.838 260.438C164.463 260.074 164.981 259.551 165.339 258.922L180.805 231.608L213.956 249.719C214.592 250.055 215.302 250.224 216.021 250.211C216.739 250.197 217.443 250.001 218.065 249.641C218.687 249.281 219.208 248.768 219.577 248.152C219.947 247.535 220.154 246.835 220.179 246.116C220.179 245.231 219.891 244.369 219.36 243.66L187.846 160.393L197.041 159.738L197.712 149.979L207.267 147.645L206.227 137.894L215.233 134.013L212.597 124.581L220.785 119.202L216.552 110.343L223.748 103.67L218.115 95.7366ZM102.164 247.369L89.6127 224.01C89.1019 223.057 88.235 222.345 87.2011 222.029C86.1673 221.713 85.0504 221.819 84.0942 222.324L56.8462 236.66L82.989 172.159L90.3577 171.062L94.6316 179.871L103.965 176.817L109.697 184.792L118.351 180.207L125.318 187.052L127.177 185.619L102.164 247.369ZM208.184 237.282L181.165 222.545C180.222 222.028 179.114 221.904 178.08 222.198C177.046 222.492 176.169 223.181 175.639 224.117L162.49 247.336L139.041 185.308L141.087 186.741L147.752 179.503L156.611 183.67L161.966 175.483L171.398 178.078L174.844 170.063H175.017C175.54 170.157 176.077 170.141 176.593 170.014C177.11 169.887 177.593 169.652 178.013 169.326L182.606 169.784L208.184 237.282ZM202.133 101.492L196.615 106.626L199.89 113.413L193.618 117.507L195.641 124.729L188.73 127.725L189.549 135.208L182.279 136.977L181.763 144.477L174.247 145.017L172.511 152.304L165.044 151.559L162.08 158.453L154.851 156.463L150.757 162.768L143.945 159.558L138.852 165.093L132.712 160.786L126.727 165.379L121.356 160.107L114.748 163.603L110.384 157.503L103.228 159.845L99.9534 153.074L92.5273 154.179L90.4396 146.949L82.9316 146.777L82.1129 139.327L74.7441 137.869L75.1862 130.386L68.145 127.709L69.8562 120.34L63.3635 116.541L66.2536 109.639L60.5224 104.776L64.5425 98.4385L59.7201 92.7072L64.7963 87.1233L60.9973 80.6552L66.8678 76.0456L64.2314 68.9962L70.8386 65.4182L69.455 58.0495L76.5945 55.6342L76.4389 48.1344L83.865 46.98L84.9949 39.5458L92.5028 39.6604L94.869 32.5454L102.238 33.9209L105.767 27.2891L112.849 29.9009L117.426 23.965L123.926 27.7148L129.461 22.6386L135.266 27.4364L141.546 23.4L146.393 29.0903L153.336 26.1756L157.143 32.6191L164.512 30.8998L167.197 37.9082L174.722 37.4497L176.195 44.8185L183.654 45.6372L183.867 53.1288L191.08 55.192L190.008 62.6509L196.779 65.9259L194.454 73.0654L200.594 77.4211L197.09 84.0857L202.412 89.4076L197.851 95.3681L202.133 101.492Z"
                      fill="#FFE816"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_344_3135">
                    <rect width="262" height="262" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </Col>
            <Col
              md={12}
              className="d-flex justify-content-center"
              style={{ paddingTop: "10px" }}
            >
              <FillBtn
                text="Continue"
                className={"py-2 px-5 fs-4"}
                handleOnClick={() => toggle(5)}
              />
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId={5}>
          <Row className="d-flex text-center justify-content-center">
            <Row style={{ textAlign: "left" }}>
              <Col md={2}></Col>
              <Col md={10}>
                <SubHeading
                  headingText="Let's build a campaign! Which service would you like to offer?"
                  categoryText=""
                  className="textYellow py-4"
                />
              </Col>
            </Row>

            <Row style={{ textAlign: "left", color: "#fff", fontSize: "25px" }}>
              <Col md={2}></Col>
              <Col md={10}>
                <SubHeading
                  style={{ marginLeft: "15%" }}
                  headingText="Choose one. You can always create additional campaigns for other
                services you offer."
                  categoryText=""
                />
              </Col>
            </Row>

            <Row>
              <Col md={2}></Col>
              <Col
                md={4}
                className="text-left"
                style={{ color: "#fff", textAlign: "left" }}
              >
                <SubHeading
                  headingText={`Available services (${
                    selectedServiceTypes.length + selectedServices.length
                  })`}
                  categoryText=""
                  className="textWhite py-4"
                />
              </Col>
              <Col
                md={4}
                className="text-right p-4"
                style={{ color: "#FFE816", textAlign: "right" }}
                onClick={() => toggle(2)}
              >
                <p
                  style={{
                    paddingTop: "3px",
                    cursor: "pointer",
                    marginTop: "15px",
                  }}
                >
                  + Add services
                </p>
              </Col>
            </Row>

            <Row>
              {[...selectedServiceTypes, ...selectedServices].map(
                (service, index) => {
                  return (
                    <>
                      {<Col md={2}></Col>}
                      <Col md={8} key={index}>
                        <div
                          className={`p-3 BorderRadius text-start mb-2 custom-border categoryTransparentBg`}
                        >
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            fill="none"
                            style={{ verticalAlign: "middle" }}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="16"
                              r="12"
                              fill="white"
                              stroke="#FFE816"
                              strokeWidth="8"
                            />
                          </svg>

                          <h4
                            className="mb-0 pl-1"
                            style={{
                              display: "inline-block",
                              paddingLeft: "1%",
                              verticalAlign: "middle",
                            }}
                          >
                            {service}
                          </h4>
                        </div>
                      </Col>
                      {<Col md={2}></Col>}
                    </>
                  );
                }
              )}
            </Row>

            <Col md={12} className="d-flex justify-content-between py-4">
              <OutlineBtn
                text="Previous"
                className={"py-2 px-5 fs-4"}
                handleOnClick={() => setActiveTab(4)}
              />
              <FillBtn
                text="Finish"
                className={"py-2 px-5 fs-4"}
                disabled={
                  selectedServiceTypes.length + selectedServices.length === 0    ? true
                  : false
              }
              handleOnClick={handleFinishClick}
            />
          </Col>
        </Row>
      </TabPane>
    </TabContent>

    <Modal
      isOpen={modal}
      toggle={toggleModal}
      style={{ marginTop: "15%", color: "#396746" }}
    >
      <ModalHeader toggle={toggleModal}>Add new type of service</ModalHeader>
      <ModalBody>
        <Input
          type="text"
          placeholder="Enter service name"
          value={inputValue}
          onChange={handleInputChange}
          invalid={inputValue === ""}
        />
      </ModalBody>

      <Row className="d-flex justify-content-center">
        <ModalFooter className={"edit-contact-modal-footer-content"}>
          <Col md={5}>
            <Button
              style={{ width: "100%" }}
              className={`py-1 fs-4 edit-contact-info`}
              onClick={toggleModal}
              disabled={false}
              type="button"
            >
              Cancel
            </Button>
          </Col>
          <Col md={6} style={{ paddingLeft: "2%" }}>
            <Button
              style={{ width: "100%" }}
              className={`py-1 fs-4 edit-contact-info-continue`}
              onClick={handleAdd}
              disabled={false}
              type="button"
            >
              Add
            </Button>
          </Col>
        </ModalFooter>
      </Row>
    </Modal>
  </Container>
  </div>
  
);
};
export default Onboardingss;

