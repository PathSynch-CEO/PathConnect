// import { useState, useEffect } from "react";
// import {
//   TabContent,
//   TabPane,
//   Nav,
//   NavItem,
//   NavLink,
//   Container,
//   Row,
//   Col,
//   Input,
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
// } from "reactstrap";
// import {
//   Cat1Options,
//   Cat2Options,
//   Cat3Options,
//   Cat4Options,
//   Cat5Options,
//   Cat6Options,
//   Cat7Options,
//   Cat8Options,
//   Cat9Options,
//   Cat10Options,
//   Cat11Options,
//   Cat12Options,
// } from "./constants";
// import classnames from "classnames";
// import FillBtn from "./FillBtn";
// import OutlineBtn from "./OutlineBtn";
// import SubHeading from "./SubHeading";
// import TopBar from "../../../Topbar";
// import GoogleConnect from "./GoogleConnect";
// import { Link, useNavigate } from "react-router-dom";

// // Helper map for tooltip content
// const serviceInfo = {
//   'google-business': {
//       title: 'About Google Business Profile',
//       text: 'By connecting your GMB profile, we can pull in your reviews and allow you to reply directly from PathSynch. We also analyze your local search performance to give you insights on how customers are finding you. We only request read-only access for data and management access for posting replies on your behalf.'
//   },
//   'search-console': {
//       title: 'About Google Search Console',
//       text: 'Connecting Search Console allows us to show you the exact search terms customers are using to discover your website. This helps you understand your organic search performance and identify new keyword opportunities. We only request read-only access.'
//   },
//   'analytics': {
//       title: 'About Google Analytics 4',
//       text: 'By connecting Google Analytics, we can show you a direct line between your online reputation and website traffic, helping you measure ROI. See how many website visitors your GMB profile drives and which pages they visit most. We only request read-only access.'
//   }
// };

// const GoogleServiceCard = ({ service, onToggle }) => {
//   const [isInfoVisible, setIsInfoVisible] = useState(false);

//   const toggleInfo = (e) => {
//       e.stopPropagation(); // Prevent card click
//       setIsInfoVisible(!isInfoVisible);
//   };

//   const cardClasses = `google-service-card ${service.enabled ? 'selected' : ''}`;
//   const iconContainerClasses = `icon-container ${service.enabled ? 'selected' : ''}`;
//   const toggleSwitchClasses = `toggle-switch ${service.enabled ? 'enabled' : ''}`;

//   return (
//       <Card onClick={() => onToggle(service.id)} className={cardClasses} style={{ cursor: 'pointer', borderRadius: '1rem' }}>
//           <CardBody>
//               <Row className="align-items-center">
//                   <Col xs="auto">
//                       <div className={iconContainerClasses}>
//                           {service.icon}
//                       </div>
//                   </Col>
//                   <Col>
//                       <h5 className="d-inline-block mr-2">{service.name}</h5>
//                       <Button color="link" size="sm" className="p-0 text-secondary" onClick={toggleInfo}>
//                           &#9432;
//                       </Button>
//                       <p className="text-muted small mb-0">{service.description}</p>
//                   </Col>
//                   <Col xs="auto">
//                       <div className={toggleSwitchClasses}>
//                           <div className="toggle-handle" />
//                       </div>
//                   </Col>
//               </Row>
//           </CardBody>
//           <Modal isOpen={isInfoVisible} toggle={toggleInfo}>
//               <ModalHeader toggle={toggleInfo}>{serviceInfo[service.id]?.title}</ModalHeader>
//               <ModalBody>
//                   {serviceInfo[service.id]?.text}
//               </ModalBody>
//               <ModalFooter>
//                   <Button style={{backgroundColor: "#3a6746", color:"white"}} onClick={toggleInfo}>Got it</Button>
//               </ModalFooter>
//           </Modal>
//       </Card>
//   );
// };

// // --- START: Integrated KnowledgeBox Input Field ---
// const KnowledgeBoxField = ({ label, helperText, placeholder, value, onChange, field, maxChars }) => {
//   const charCount = value.length;
//   const counterColor = charCount > maxChars ? 'text-danger' : 'text-muted';

//   return (
//       <div>
//           <label className="h5 text-white">{label}</label>
//           <p className="small text-white-50">{helperText}</p>
//           <div className="position-relative">
//               <Input
//                   type="textarea"
//                   rows="4"
//                   value={value}
//                   onChange={(e) => onChange(field, e.target.value)}
//                   placeholder={placeholder}
//                   className="categoryTransparentBg custom-placeholder"
//                   maxLength={maxChars + 20} // Allow typing over limit to show validation
//               />
//               <div className={`position-absolute bottom-0 right-0 p-2 small ${counterColor}`}>
//                   {charCount} / {maxChars}
//               </div>
//           </div>
//       </div>
//   );
// };

// const Onboardingss = () => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState(1);
//   const [expanded, setExpanded] = useState(false);
//   const [googleConnected, setGoogleConnected] = useState(false);
//   const [visibleCount, setVisibleCount] = useState(6);
//   const [currentDictionary, setCurrentDictionary] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
//   const [subCategoriesArray, setSubCategoriesArray] = useState([]);
//   const [selectedServices, setSelectedServices] = useState([]);
//   const [serviceTypeArray, setServiceTypeArray] = useState([]);
//   const [searchField, setSearchField] = useState("");

//   const [modal, setModal] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   const [loading, setLoading] = useState(false);

//     // --- START: State from GoogleServicesConsentScreen.tsx ---
//     const [googleServices, setGoogleServices] = useState([
//         {
//             id: 'google-business',
//             name: 'Google Business Profile',
//             icon: '🏢',
//             description: 'Improve visibility in local search and manage reviews.',
//             enabled: false
//         },
//         {
//             id: 'search-console',
//             name: 'Google Search Console',
//             icon: '📊',
//             description: 'Understand how customers discover your business on Google.',
//             enabled: false
//         },
//         {
//             id: 'analytics',
//             name: 'Google Analytics 4',
//             icon: '📈',
//             description: 'Track customer engagement and website performance.',
//             enabled: false
//         }
//     ]);

//     const selectedGoogleServices = googleServices.filter(s => s.enabled);
//     const hasSelectedGoogleServices = selectedGoogleServices.length > 0;
//     // --- END: State from GoogleServicesConsentScreen.tsx ---

//     // --- START: State from KnowledgeBoxOnboarding.tsx ---
//     const [knowledgeBox, setKnowledgeBox] = useState({
//         about: '',
//         features: '',
//         policies: '',
//         faqs: ''
//     });
//     const [isScanning, setIsScanning] = useState(false);
//     const [scanSuccess, setScanSuccess] = useState(false);
//     const MAX_CHARS = 1500;
//     const hasKnowledgeContent = Object.values(knowledgeBox).some(v => v.trim().length > 0);
//     // --- END: State from KnowledgeBoxOnboarding.tsx ---

//     // Updated number of total tabs
//     const totalTabs = 6;

//     // --- START: Handlers from integrated components ---
//     const handleGoogleServiceToggle = (serviceId) => {
//         setGoogleServices(prev =>
//             prev.map(service =>
//                 service.id === serviceId ? { ...service, enabled: !service.enabled } : service
//             )
//         );
//     };

//     const handleKnowledgeBoxChange = (field, value) => {
//         if (value.length > MAX_CHARS) return;
//         setKnowledgeBox(prev => ({ ...prev, [field]: value }));
//     };

//     const handleScanWebsite = () => {
//         setIsScanning(true);
//         setScanSuccess(false);
//         setTimeout(() => {
//             setKnowledgeBox({
//                 about: "We are a family-owned business established in 2010, specializing in high-quality artisanal products. Our mission is to provide exceptional customer service while supporting local communities through sustainable practices.",
//                 features: "• Free shipping on orders over $50\n• 30-day money-back guarantee\n• Handcrafted products made with premium materials\n• Personalized customer service\n• Eco-friendly packaging",
//                 policies: "Returns: 30-day return policy for unused items in original packaging.\nShipping: Orders processed within 1-2 business days, delivery in 3-5 business days.\nWarranty: 1-year warranty on all products against manufacturing defects.",
//                 faqs: "Q: How long does shipping take?\nA: Standard shipping takes 3-5 business days.\n\nQ: Do you offer international shipping?\nA: Currently we only ship within the United States."
//             });
//             setIsScanning(false);
//             setScanSuccess(true);
//         }, 2000);
//     };
//     // --- END: Handlers from integrated components ---

//   const goToNextTab = () => {
//     setActiveTab((prev) => prev + 1);
//   };

//   const goToPreviousTab = () => {
//     setActiveTab((prev) => prev - 1);
//   };
//   const paymentDetails = JSON.parse(
//     localStorage.getItem("paymentDetails") || "{}"
//   );

//   // Toggle function to show/hide modal
//   const toggleModal = () => {
//     setInputValue("");
//     setModal(!modal);
//   };

//   // Handle input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Handle the Add button click
//   const handleAdd = () => {
//     if (!inputValue) return;
//     const tempServiceTypeArray = serviceTypeArray;
//     const newService = tempServiceTypeArray.find(
//       (item) => item.service === "new_service"
//     );

//     if (newService) {
//       newService.sub_service.push(inputValue);
//     } else {
//       // If the service does not exist, add a new object with the service and sub_service
//       tempServiceTypeArray.push({
//         service: "new_service",
//         sub_service: [inputValue],
//       });
//     }

//     setServiceTypeArray([...tempServiceTypeArray]);
//     const tempSelectedServices = [...selectedServices, inputValue];
//     setSelectedServices(tempSelectedServices);
//     expanded && setVisibleCount(serviceTypeArray[0].sub_service.length);
//     setModal(false);
//   };

//   const toggle = (tab) => {
//     if (activeTab !== tab) setActiveTab(tab);
//     window.scrollTo(0, 0);
//   };

//   useEffect(() => {
//     const connected = localStorage.getItem("googleConnected") === "true";
//     setGoogleConnected(connected);
//   }, []);

//   // const handleFinishClick = () => {
//   //   console.log("Finish clicked with data:", {
//   //     category: selectedCategory,
//   //     servicesTypes: selectedServiceTypes,
//   //     services: selectedServices,
//   //   });
//   // };

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setSelectedServiceTypes([]);
//     setServiceTypeArray([]);
//   };

//   const handleSubCategoryClick = (category) => {
//     const tempCategories = selectedServiceTypes;
//     const index = tempCategories.indexOf(category);

//     if (index !== -1) tempCategories.splice(index, 1);
//     else tempCategories.push(category);
//     setSelectedServiceTypes([...tempCategories]);

//     const tempServiceType = serviceTypeArray;
//     const indexServiceType = serviceTypeArray.findIndex(
//       (cat) => cat.service === category
//     );

//     if (indexServiceType !== -1) tempServiceType.splice(index, 1);
//     else
//       tempServiceType.push({
//         service: category,
//         sub_service: getSubcategories(category, currentDictionary),
//       });

//     setServiceTypeArray([...tempServiceType]);
//   };

//   const handleServiceTypeClick = (service) => {
//     const tempServiceType = selectedServices;
//     const index = tempServiceType.indexOf(service);
//     if (index !== -1) tempServiceType.splice(index, 1);
//     else tempServiceType.push(service);
//     setSelectedServices([...tempServiceType]);
// };

// // This function now transitions from category selection to sub-category
// const handleCategoryNextClick = () => {
//     let tempArray = [];
//     const dictionaries = {
//         "Food & Restaurants": Cat1Options, "Food Type": Cat2Options, "Health & Wellness": Cat3Options,
//         "Beauty & Spas": Cat4Options, "Arts & Entertiment": Cat5Options, "Active Lifesytle": Cat6Options,
//         "Hotels & Travel": Cat7Options, "Goods & Shopping": Cat8Options, "Event Planning & Services": Cat9Options,
//         "Professional Services": Cat10Options, "Pets": Cat11Options, "Nightlife": Cat12Options,
//     };
//     const selectedDict = dictionaries[selectedCategory];
//     if (selectedDict) {
//         tempArray = [...selectedDict.map((item) => item.category)];
//         setCurrentDictionary(selectedDict);
//     }
//     setSubCategoriesArray(tempArray);
//     goToNextTab();
//     window.scrollTo(0, 0);
// };

// // --- Final Submit Handler ---
// const handleFinishClick = async () => {
//     setLoading(true);
//     try {
//         const merchantId = localStorage.getItem("merchantId");
//         const apiUrl = `https://api.pathsynch.com/v2/auth/merchant/business/${merchantId}`;

//         // --- Updated payload with new data ---
//         const requestData = {
//             googleServices: selectedGoogleServices.map(s => s.id),
//             knowledgeBox: knowledgeBox,
//             category: selectedCategory,
//             servicesTypes: selectedServiceTypes,
//             services: selectedServices,
//             status: paymentDetails?.status,
//             date: paymentDetails?.date,
//             amount: paymentDetails.amount,
//             businessName: paymentDetails?.businessName,
//             card: paymentDetails?.product?.plan,
//         };

//         console.log("Submitting data:", requestData);

//         const response = await fetch(apiUrl, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(requestData),
//         });

//         if (!response.ok) throw new Error("Failed to submit business data");

//         await response.json();
//         window.location.href = "https://pathsynch.com/login";
//     } catch (error) {
//         console.error("Error:", error);
//     } finally {
//         setLoading(false);
//     }
// };

//   const handleShowMore = (count) => {
//     setExpanded(!expanded);
//     setVisibleCount(expanded ? 6 : count);
//   };

//   const getSubcategories = (category, data) => {
//     const result = data.find((item) => item.category === category);
//     return result ? result.subcategories : [];
//   };

//   const onSearchChange = (e) => {
//     setSearchField(e.target.value);
//     if (e.target.value.length) setExpanded(false);
//   };

//   return (
//     <div className="signup-wrap">

//         {/* --- START: Styles for New Components --- */}
//         <style>{`
//             .google-service-card { transition: all 0.2s ease-in-out; border: 2px solid #e5e7eb; border-radius: 1rem; cursor: pointer; background-color: rgba(255, 255, 255, 0.9); color: #333; }
//             .google-service-card:hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
//             .google-service-card.selected { border-color: #3a6746; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
//             .icon-container { width: 48px; height: 48px; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; background-color: #f9fafb; transition: background-color 0.2s; font-size: 24px; }
//             .icon-container.selected { background-color: #d1fae5; color: #3a6746; }
//             .toggle-switch { position: relative; display: inline-flex; height: 24px; width: 44px; align-items: center; border-radius: 9999px; background-color: #e5e7eb; transition: background-color 0.2s; }
//             .toggle-switch.enabled { background-color: #3a6746; }
//             .toggle-handle { display: inline-block; width: 16px; height: 16px; transform: translateX(4px); border-radius: 9999px; background-color: white; transition: transform 0.2s; }
//             .toggle-switch.enabled .toggle-handle { transform: translateX(24px); }
//             .knowledge-box-card { background-color: rgba(255, 255, 255, 0.1); border-radius: 1rem; padding: 2rem; }
//         `}</style>
//         {/* --- END: Styles for New Components --- */}

//       {loading && (
//         <div className="loader-overlay">
//           <div className="loader"></div>
//         </div>
//       )}

//       <Link className="text-start d-block mt-0 pt-3" to={"/"}>
//         <img
//           src="/LOGO.png"
//           alt={"website-logo"}
//           style={{ verticalAlign: "sub", width: "180px", marginLeft: "20px" }}
//         />
//       </Link>
//       <Container className="py-5">
//         {/* --- START: Updated Navigation for 6 Tabs --- */}
//         <Nav tabs className="d-flex justify-content-center">
//             {[...Array(totalTabs)].map((_, i) => (
//                 <NavItem key={i}>
//                     <NavLink className={classnames({ active: activeTab === i + 1 })} onClick={() => toggle(i + 1)}>
//                         <div className={`w-25 px-5 py-1 BorderRadius ${activeTab === i + 1 ? "bgYellow" : "whiteTransparentBg"}`}></div>
//                     </NavLink>
//                 </NavItem>
//             ))}
//         </Nav>
//         {/* --- END: Updated Navigation --- */}

//         <TabContent activeTab={activeTab}>

//             {/* --- TAB 1: NEW Google Services Consent Screen --- */}
//             <TabPane tabId={1}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={10} lg={8} className="text-center mb-4">
//                         <h1 className="text-white">Connect Your Google Services</h1>
//                         <p style={{ color: "#fff", fontSize: "20px", maxWidth: "700px", margin: "auto" }}>
//                             Personalize your PathSynch insights and unlock powerful local data by securely syncing with your Google accounts.
//                         </p>
//                     </Col>
//                     <Col md={10} lg={8}>
//                         <div className="space-y-4">
//                             {googleServices.map((service) => (
//                                 <div key={service.id} className="mb-3">
//                                     <GoogleServiceCard service={service} onToggle={handleGoogleServiceToggle} />
//                                 </div>
//                             ))}
//                         </div>
//                     </Col>
//                     <Col md={12} className="d-flex justify-content-end align-items-center mt-4 px-5">
//                          <Button color="link" className="text-white-50 mr-4" onClick={goToNextTab}>Skip This Step</Button>
//                         <FillBtn text="Continue" className={"py-2 px-5 fs-4"} disabled={!hasSelectedGoogleServices} handleOnClick={goToNextTab} />
//                     </Col>
//                 </Row>
//             </TabPane>

//             {/* --- TAB 2: NEW Knowledge Box Onboarding --- */}
//             <TabPane tabId={2}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={10}>
//                         <h1 className="text-white mb-3">Customize Your AI Assistant</h1>
//                         <p className="text-white-50 mb-5">The more it knows, the better it represents your brand. Fill in what you can—you can always add more later.</p>

//                         <div className="knowledge-box-card mb-5 text-start">
//                             <h4 className="text-white">✨ Get a Head Start</h4>
//                             <p className="text-white-50 small">We can scan your website to automatically populate the fields below.</p>
//                             <div className="text-center">
//                                 <Button style={{backgroundColor: "#3a6746", color:"white"}} onClick={handleScanWebsite} disabled={isScanning}>
//                                     {isScanning ? "Scanning..." : "Scan My Website"}
//                                 </Button>
//                                 {scanSuccess && <p className="text-success mt-2 small">✅ Scan complete! Please review the information below.</p>}
//                             </div>
//                         </div>

//                         <div className="knowledge-box-card text-start">
//                             <h4 className="text-white mb-4">Business Knowledge</h4>
//                             <div className="d-flex flex-column" style={{gap: '2rem'}}>
//                                 <KnowledgeBoxField label="About Your Business" helperText="Company history, mission, core values, and unique qualities." placeholder="Tell us about your company's story..." field="about" value={knowledgeBox.about} onChange={handleKnowledgeBoxChange} maxChars={MAX_CHARS} />
//                                 <KnowledgeBoxField label="Unique Features & Promotions" helperText="Special offers, selling points, or standout features." placeholder="List your current promotions..." field="features" value={knowledgeBox.features} onChange={handleKnowledgeBoxChange} maxChars={MAX_CHARS} />
//                                 <KnowledgeBoxField label="Key Business Policies" helperText="Return, shipping, warranty, or other important policies." placeholder="Describe your return policy..." field="policies" value={knowledgeBox.policies} onChange={handleKnowledgeBoxChange} maxChars={MAX_CHARS} />
//                                 <KnowledgeBoxField label="Frequently Asked Questions (FAQs)" helperText="Common customer questions and their answers." placeholder="Q: How long does shipping take?..." field="faqs" value={knowledgeBox.faqs} onChange={handleKnowledgeBoxChange} maxChars={MAX_CHARS} />
//                             </div>
//                         </div>
//                     </Col>
//                     <Col md={12} className="d-flex justify-content-between py-4">
//                         <OutlineBtn text="Previous" className={"py-2 px-5 fs-4"} handleOnClick={goToPreviousTab} />
//                         <FillBtn text="Next" className={"py-2 px-5 fs-4"} handleOnClick={goToNextTab} />
//                     </Col>
//                 </Row>
//             </TabPane>

//             {/* --- TAB 3: Original "Which category" (was Tab 2) --- */}
//             <TabPane tabId={3}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={12}>
//                         <SubHeading headingText="Which category best describes your business?" categoryText="" className="textYellow py-4" />
//                     </Col>
//                     <Col md={6} style={{ height: "400px", overflowY: "auto", scrollBehavior: "smooth" }}>
//                         {["Food & Restaurants", "Food Type", "Health & Wellness", "Beauty & Spas", "Arts & Entertiment", "Active Lifesytle", "Hotels & Travel", "Goods & Shopping", "Event Planning & Services", "Professional Services", "Pets", "Nightlife"].map(cat => (
//                             <div key={cat} className={`p-3 BorderRadius text-start mb-2 ${selectedCategory === cat ? "categorySelectedBg" : "categoryTransparentBg"}`} onClick={() => handleCategoryClick(cat)}>
//                                 <h4 className="mb-0">{cat}</h4>
//                             </div>
//                         ))}
//                     </Col>
//                     <Col md={12} className="d-flex justify-content-between py-4">
//                         <OutlineBtn text="Previous" className={"py-2 px-5 fs-4"} handleOnClick={goToPreviousTab}/>
//                         <FillBtn text="Next" className={"py-2 px-5 fs-4"} disabled={!selectedCategory} handleOnClick={handleCategoryNextClick} />
//                     </Col>
//                 </Row>
//             </TabPane>

//             {/* --- TAB 4: Original "Which type of services" (was Tab 3) --- */}
//             <TabPane tabId={4}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={12}>
//                         <SubHeading headingText="Which type of services do you offer?" categoryText="" className="textYellow py-4" />
//                     </Col>
//                     <Col md={6} style={{ height: "400px", overflowY: "auto", scrollBehavior: "smooth" }}>
//                         {subCategoriesArray.map((subCat, index) => (
//                             <div key={index} className={`p-3 BorderRadius text-start mb-2 ${selectedServiceTypes.includes(subCat) ? "categorySelectedBg" : "categoryTransparentBg"}`} style={{ border: "1px solid white !important" }} onClick={() => handleSubCategoryClick(subCat)}>
//                                 <h4 className="mb-0">{subCat}</h4>
//                             </div>
//                         ))}
//                     </Col>
//                     <Col md={12} className="d-flex justify-content-between py-4">
//                         <OutlineBtn text="Previous" className={"py-2 px-5 fs-4"} handleOnClick={goToPreviousTab} />
//                         <FillBtn text="Next" className={"py-2 px-5 fs-4"} disabled={selectedServiceTypes.length === 0} handleOnClick={goToNextTab} />
//                     </Col>
//                 </Row>
//             </TabPane>

//             {/* --- TAB 5: Original "Add services" (was Tab 4) --- */}
//             <TabPane tabId={5}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={12}>
//                         <SubHeading style={{}} headingText="Add services" categoryText="" className="textYellow py-4"/>
//                     </Col>
//                     <Col md={12} className="text-center">
//                         <p style={{ color: "#fff" }}>Select all the services you offer. Search our full service list if you're unable to find your service listed below.</p>
//                     </Col>
//                     <Row>
//                         <Col md={2}></Col>
//                         <Col md={8} className="text-center p-4">
//                         <Input style={{ height: "3rem", borderRadius: "1.5rem", background: "#61666b", border: "#61666b" }} type="text" onChange={onSearchChange} placeholder="Search for services to add" className="categoryTransparentBg custom-placeholder "/>
//                         </Col>
//                         <Col md={2}></Col>
//                     </Row>
//                     {/* (Rest of original Tab 4 JSX for listing services, search, etc., continues here) */}
//                     <Col md={12} className="d-flex justify-content-between py-4">
//                         <OutlineBtn text="Previous" className={"py-2 px-5 fs-4"} handleOnClick={goToPreviousTab} />
//                         <FillBtn text="Next" className={"py-2 px-5 fs-4"} disabled={selectedServices.length === 0} handleOnClick={goToNextTab} />
//                     </Col>
//                 </Row>
//             </TabPane>

//             {/* --- TAB 6: Original "Finish" (was Tab 5) --- */}
//             <TabPane tabId={6}>
//                 <Row className="d-flex text-center justify-content-center">
//                     <Col md={12}>
//                         <SubHeading headingText={`You're all set!`} categoryText="" className="textYellow pt-4" />
//                     </Col>
//                     <Col md={12} className="d-flex text-center justify-content-center font14">
//                         <p style={{ color: "#fff", fontSize: "25px" }}>Select <span className="textYellow">Finish</span> to complete onboarding and start building your campaign.</p>
//                     </Col>
//                     <Col md={12} className="mt-4">
//                         <FillBtn text="Finish" className={"py-2 px-5 fs-4"} handleOnClick={handleFinishClick}/>
//                     </Col>
//                     <Col md={12} className="d-flex justify-content-start py-4">
//                         <OutlineBtn text="Previous" className={"py-2 px-5 fs-4"} handleOnClick={goToPreviousTab} />
//                     </Col>
//                 </Row>
//             </TabPane>

//         </TabContent>

//         {/* Modal for adding new service type remains unchanged */}
//         <Modal isOpen={modal} toggle={toggleModal} style={{ marginTop: "15%", color: "#396746" }}>
//             <ModalHeader toggle={toggleModal}>Add new type of service</ModalHeader>
//             <ModalBody>
//                 <Input type="text" placeholder="Enter service name" value={inputValue} onChange={handleInputChange} invalid={!inputValue} />
//             </ModalBody>
//             <ModalFooter>
//                 <Button color="secondary" onClick={toggleModal}>Cancel</Button>
//                 <Button style={{backgroundColor: "#3a6746", color:"white"}} onClick={handleAdd} disabled={!inputValue}>Add</Button>
//             </ModalFooter>
//         </Modal>

//       </Container>
//     </div>
//   );
// };
// export default Onboardingss;
import React, { useState, useEffect } from "react";
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
  Card,
  CardBody,
} from "reactstrap";
// Constants are no longer needed for the UI but kept for the final API call structure
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
import { Link } from "react-router-dom";
import GoogleConnect from "./GoogleConnect";

// --- Helper Components (GoogleServiceCard, KnowledgeBoxField) ---
// These remain unchanged.
const serviceInfo = {
  "google-business": {
    title: "About Google Business Profile",
    text: "By connecting your GMB profile, we can pull in your reviews and allow you to reply directly from PathSynch. We also analyze your local search performance to give you insights on how customers are finding you.",
  },
  "search-console": {
    title: "About Google Search Console",
    text: "Connecting Search Console allows us to show you the exact search terms customers are using to discover your website. This helps you understand your organic search performance and identify new keyword opportunities.",
  },
  "analytics": {
    title: "About Google Analytics 4",
    text: "By connecting Google Analytics, we can show you a direct line between your online reputation and website traffic, helping you measure ROI. See how many website visitors your GMB profile drives and which pages they visit most.",
  },
  "site-verification": {
    title: "About Google Site Verification",
    text: "By verifying your website with Google, we can unlock deeper crawling and indexing, enabling advanced search insights. This helps us connect more of your site’s content to your analytics, so you see a fuller picture of how visitors discover and engage with your brand online.",
  },
};

const GoogleServiceCard = ({ service, onToggle, disabled = false }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const toggleInfo = (e) => {
    e.stopPropagation();
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <Card
      onClick={disabled ? undefined : () => onToggle(service.id)}
      className={`google-service-card ${service.enabled ? "selected" : ""} ${
        disabled ? "disabled" : ""
      }`}
      style={{ cursor: disabled ? "default" : "pointer" }}
    >
      <CardBody>
        <Row className="align-items-center">
          <Col xs="auto">
            <div
              className={`icon-container ${service.enabled ? "selected" : ""}`}
            >
              {service.icon}
            </div>
          </Col>
          <Col>
            <h5 className="d-inline-block mr-2">{service.name}</h5>
            <Button
              color="link"
              size="sm"
              className="p-0 text-secondary"
              onClick={toggleInfo}
            >
              &#9432;
            </Button>
            <p className="text-muted small mb-0">{service.description}</p>
          </Col>
          <Col xs="auto">
            <div
              className={`toggle-switch ${service.enabled ? "enabled" : ""} ${
                disabled ? "disabled-toggle" : ""
              }`}
            >
              <div className="toggle-handle" />
            </div>
          </Col>
        </Row>
      </CardBody>
      {/* Modal JSX remains the same */}
      <Modal isOpen={isInfoVisible} toggle={toggleInfo}>
        <ModalHeader toggle={toggleInfo}>
          {serviceInfo[service.id]?.title}
        </ModalHeader>
        <ModalBody>{serviceInfo[service.id]?.text}</ModalBody>
        <ModalFooter>
          <Button
            style={{ backgroundColor: "#3a6746", color: "white" }}
            onClick={toggleInfo}
          >
            Got it
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
};
const KnowledgeBoxField = ({
  label,
  helperText,
  placeholder,
  value,
  onChange,
  field,
  maxChars,
}) => {
  const charCount = value.length;
  const counterColor = charCount > maxChars ? "text-danger" : "text-muted";
  return (
    <div>
      <label className="h5 text-white">{label}</label>
      <p className="small text-white-50">{helperText}</p>
      <>
        <Input
          type="textarea"
          rows="4"
          value={value}
          onChange={(e) => onChange(field, e.target.value)}
          placeholder={placeholder}
          className="categoryTransparentBg custom-placeholder text-white"
          maxLength={maxChars + 20}
        />
        {/* The counter is now outside the input's wrapper */}
        <div className={`text-end small mt-1 ${counterColor}`}>
          {charCount} / {maxChars}
        </div>
      </>
    </div>
  );
};

const Onboardingss = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [loading, setLoading] = useState(false);

  // --- State for the first 2 steps ---
  const [googleServices, setGoogleServices] = useState([
    {
      id: "google-business",
      name: "Google Business Profile",
      icon: "🏢",
      description: "Improve visibility in local search and manage reviews.",
      enabled: false,
    },
    {
      id: "search-console",
      name: "Google Search Console",
      icon: "📊",
      description: "Understand how customers discover your business on Google.",
      enabled: false,
    },
    {
      id: "analytics",
      name: "Google Analytics 4",
      icon: "📈",
      description: "Track customer engagement and website performance.",
      enabled: false,
    },
    {
      id: "site-verification",
      name: "Google Site Verification",
      icon: "🔗",
      description: "Verify website ownership to unlock advanced indexing and richer, domain-specific insights.",
      enabled: false,
    },
  ]);
  const selectedGoogleServices = googleServices.filter((s) => s.enabled);
  const hasSelectedGoogleServices = selectedGoogleServices.length > 0;

  const [knowledgeBox, setKnowledgeBox] = useState({
    about: "",
    features: "",
    policies: "",
    faqs: "",
  });
  const [isScanning, setIsScanning] = useState(false);
  const [scanSuccess, setScanSuccess] = useState(false);
  const MAX_CHARS = 1500;

  // --- State for the (now unused) steps. Kept for the final API call structure. ---
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  // inside the Onboardingss component, near your other useState declarations
  const [isGoogleConnected, setIsGoogleConnected] = useState(false);

  //useEffect hook inside the Onboardingss component
  useEffect(() => {
    const connected = localStorage.getItem("googleConnected") === "true";
    if (connected) {
      setIsGoogleConnected(true);

      // Re-hydrate the selected services from sessionStorage
      const pendingServices = JSON.parse(
        sessionStorage.getItem("pendingGoogleServices") || "[]"
      );
      if (pendingServices.length > 0) {
        setGoogleServices((prev) =>
          prev.map((s) => ({ ...s, enabled: pendingServices.includes(s.id) }))
        );
      }
    }
  }, []);

  const handleGoogleConnectionSuccess = () => {
    setIsGoogleConnected(true);
    // Note: We no longer call goToNextTab() here.
  };

  // --- Change 1: Updated the total number of tabs to 2 ---
  const totalTabs = 2;
  const paymentDetails = JSON.parse(
    localStorage.getItem("paymentDetails") || "{}"
  );

  const goToNextTab = () =>
    setActiveTab((prev) => Math.min(prev + 1, totalTabs));
  const goToPreviousTab = () => setActiveTab((prev) => Math.max(prev - 1, 1));
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
    window.scrollTo(0, 0);
  };

  // --- Handlers for the first 2 steps ---
  const handleGoogleServiceToggle = (serviceId) => {
    setGoogleServices((prev) =>
      prev.map((service) =>
        service.id === serviceId
          ? { ...service, enabled: !service.enabled }
          : service
      )
    );
  };
  const handleKnowledgeBoxChange = (field, value) => {
    if (value.length > MAX_CHARS) return;
    setKnowledgeBox((prev) => ({ ...prev, [field]: value }));
  };

  // Add this helper function right above mapReviewToState to keep the code clean.
  const extractSection = (fullText, startMarker, endMarker) => {
    const startIndex = fullText.indexOf(startMarker);
    if (startIndex === -1) return "";

    const contentStartIndex = startIndex + startMarker.length;

    // If an end marker is provided, find it; otherwise, go to the end of the text.
    const contentEndIndex = endMarker
      ? fullText.indexOf(endMarker, contentStartIndex)
      : fullText.length;

    return fullText.substring(contentStartIndex, contentEndIndex).trim();
  };

  // Replace your entire old mapReviewToState function with this new one.
  const mapReviewToState = (reviewText) => {
    // Define the exact headings from the AI response to use as markers
    const aboutMarker = "**1. About Your Business:**";
    const featuresMarker = "**2. Unique Features & Promotions:**";
    const policiesMarker = "**3. Key Business Policies:**";
    const faqsMarker = "**4. Frequently Asked Questions (FAQs):**";

    // Extract the content for each section using the helper function
    const about = extractSection(reviewText, aboutMarker, featuresMarker);

    let features = extractSection(reviewText, featuresMarker, policiesMarker);
    // Replace the asterisks from the AI response with standard bullet points
    features = features.replace(/\*/g, "•");

    let policies = extractSection(reviewText, policiesMarker, faqsMarker);
    // Remove the example text if it exists
    policies = policies.split("(Examples of policies to include:")[0].trim();

    let faqs = extractSection(reviewText, faqsMarker, null); // No end marker needed for the last section
    // Clean up the Q&A formatting
    faqs = faqs.replace(/\*\*Q:/g, "Q:").replace(/\*\*A:/g, "A:");

    return { about, features, policies, faqs };
  };
  // Replace your old handleScanWebsite function with this one
  const handleScanWebsite = async () => {
    if (!websiteUrl) {
      alert("Please enter a website URL to scan.");
      return;
    }
    setIsScanning(true);
    setScanSuccess(false);

    try {
      const response = await fetch(
        "https://api.pathsynch.com/v2/auth/onboarding/scanwebsite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ website: websiteUrl }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      const reviewText = responseData.data?.review;

      //console.log("resp, ", responseData, " : ", response);
      // Assuming your backend wrapper puts the data in a `data` property
      if (reviewText && typeof reviewText === "string") {
        const formattedData = mapReviewToState(reviewText); // Pass the string to be parsed
        setKnowledgeBox(formattedData);
        setScanSuccess(true);
      } else {
        throw new Error("Review data string not found in API response.");
      }
    } catch (error) {
      console.error("Error scanning website:", error);
      alert("Failed to scan the website. Please check the URL and try again.");
    } finally {
      setIsScanning(false);
    }
  };

  // --- Final API call function ---
  const handleFinishClick = async () => {
    setLoading(true);
    try {
      //   const apiUrl = `https://api.pathsynch.com/v2/auth/merchant/business/${merchantId}`;

      //   // The payload now sends data for the first 2 steps.
      //   // The rest will be empty arrays/strings, which is fine.
      //   const requestData = {
      //     googleServices: selectedGoogleServices.map((s) => s.id),
      //     knowledgeBox: knowledgeBox,
      //     category: selectedCategory,
      //     servicesTypes: selectedServiceTypes,
      //     services: selectedServices,
      //     status: paymentDetails?.status,
      //     date: paymentDetails?.date,
      //     amount: paymentDetails.amount,
      //     businessName: paymentDetails?.businessName,
      //     card: paymentDetails?.product?.plan,
      //   };
      // Get the merchant code from localStorage
      const merchantId = localStorage.getItem("merchantId") || "";
      //console.log("yo merch,",merchantId);
      if (!merchantId) {
        throw new Error("Merchant ID not found. Please log in again.");
      }

      // Define the new, correct API endpoint and request data
      const apiUrl = `https://api.pathsynch.com/v2/auth/onboarding/knowledgebox/${merchantId}`;
      // const apiUrl = `http://localhost:8181/v2/auth/onboarding/knowledgebox/${merchantId}`;
      const requestData = {
        knowledgeBox: knowledgeBox, // Send only the knowledgeBox state
      };

      const response = await fetch(apiUrl, {
        method: "PUT", // Use PUT as we are updating an existing resource
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to save onboarding data.");
      }

      // On success, redirect to the login page
      window.location.href = "https://pathsynch.com/login";
    } catch (error) {
      console.error("Error finishing onboarding:", error);
      alert(error.message); // Show a more specific error to the user
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-wrap">
      <style>{`
                .google-service-card { transition: all 0.2s ease-in-out; border: 2px solid #e5e7eb; border-radius: 1rem; cursor: pointer; background-color: rgba(255, 255, 255, 0.9); color: #333; }
                .google-service-card:hover { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1); }
                .google-service-card.selected { border-color: #3a6746; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
                .icon-container { width: 48px; height: 48px; border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; background-color: #f9fafb; transition: background-color 0.2s; font-size: 24px; }
                .icon-container.selected { background-color: #d1fae5; color: #3a6746; }
                .toggle-switch { position: relative; display: inline-flex; height: 24px; width: 44px; align-items: center; border-radius: 9999px; background-color: #e5e7eb; transition: background-color 0.2s; }
                .toggle-switch.enabled { background-color: #3a6746; }
                .toggle-handle { display: inline-block; width: 16px; height: 16px; transform: translateX(4px); border-radius: 9999px; background-color: white; transition: transform 0.2s; }
                .toggle-switch.enabled .toggle-handle { transform: translateX(24px); }
                .knowledge-box-card { background-color: rgba(255, 255, 255, 0.1); border-radius: 1rem; padding: 2rem; }
            `}</style>

      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <Link className="text-start d-block mt-0 pt-3" to={"/"}>
        <img
          src="/LOGO.png"
          alt="website-logo"
          style={{ verticalAlign: "sub", width: "180px", marginLeft: "20px" }}
        />
      </Link>

      <Container className="py-5">
        <Nav tabs className="d-flex justify-content-center">
          {[...Array(totalTabs)].map((_, i) => (
            <NavItem key={i}>
              <NavLink
                className={classnames({ active: activeTab === i + 1 })}
                onClick={() => toggle(i + 1)}
              >
                <div
                  className={`w-25 px-5 py-1 BorderRadius ${
                    activeTab === i + 1 ? "bgYellow" : "whiteTransparentBg"
                  }`}
                ></div>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {/* --- TAB 1: Google Services Consent Screen --- */}
          <TabPane tabId={1}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={10} lg={8} className="text-center mb-4">
                <h1 className="text-white">Connect Your Google Services</h1>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    maxWidth: "700px",
                    margin: "auto",
                  }}
                >
                  {isGoogleConnected
                    ? "Your selected services have been successfully connected. Click Next to continue."
                    : "Select the services you'd like to connect. This will grant us read-only access to help personalize your experience."}
                </p>
              </Col>
              <Col md={10} lg={8}>
                {googleServices.map((service) => (
                  <div key={service.id} className="mb-3">
                    <GoogleServiceCard
                      service={service}
                      onToggle={handleGoogleServiceToggle}
                      disabled={isGoogleConnected} // This disables the cards after connection
                    />
                  </div>
                ))}
                <div className="mt-5">
                  {isGoogleConnected ? (
                    <>
                      <Button
                        color="success"
                        disabled
                        style={{
                          cursor: "default",
                          fontSize: "18px",
                          padding: "12px 24px",
                        }}
                      >
                        Connected!
                      </Button>
                      <div className="mt-3">
                        <FillBtn
                          text="Next"
                          className={"py-2 px-5 fs-4"}
                          handleOnClick={goToNextTab}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <GoogleConnect
                        selectedServices={selectedGoogleServices.map(
                          (s) => s.id
                        )}
                        //disabled={!hasSelectedGoogleServices}
                        disabled={false}
                        onSuccess={handleGoogleConnectionSuccess} // Use the new handler
                        buttonText="Connect & Continue"
                      />
                      <Button
                        color="link"
                        className="text-white-50 mt-2"
                        onClick={goToNextTab}
                      >
                        Skip This Step
                      </Button>
                    </>
                  )}
                </div>
              </Col>
            </Row>
          </TabPane>

          {/* --- TAB 2: Knowledge Box Onboarding --- */}
          <TabPane tabId={2}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={10}>
                <h1 className="text-white mb-3">Customize Your AI Assistant</h1>
                <p className="text-white-50 mb-5">
                  The more it knows, the better it represents your brand. Fill
                  in what you can—you can always add more later.
                </p>
                <div className="knowledge-box-card mb-5 text-start">
                  <h4 className="text-white">✨ Get a Head Start</h4>
                  <p className="text-white-50 small">
                    We can scan your website to automatically populate the
                    fields below.
                  </p>
                  <Input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    placeholder="https://www.yourwebsite.com"
                    className="categoryTransparentBg custom-placeholder mb-3 text-white"
                    bsSize="lg"
                  />
                  <div className="text-center">
                    <Button
                      style={{ backgroundColor: "#3a6746", color: "white" }}
                      onClick={handleScanWebsite}
                      disabled={isScanning}
                    >
                      {isScanning ? "Scanning..." : "Scan My Website"}
                    </Button>
                    {scanSuccess && (
                      <p className="text-success mt-2 small">
                        ✅ Scan complete! Please review the information below.
                      </p>
                    )}
                  </div>
                </div>
                <div className="knowledge-box-card text-start">
                  <h4 className="text-white mb-4">Business Knowledge</h4>
                  <div className="d-flex flex-column" style={{ gap: "2rem" }}>
                    <KnowledgeBoxField
                      label="About Your Business"
                      helperText="Company history, mission, core values, and unique qualities."
                      placeholder="Tell us about your company's story..."
                      field="about"
                      value={knowledgeBox.about}
                      onChange={handleKnowledgeBoxChange}
                      maxChars={MAX_CHARS}
                    />
                    <KnowledgeBoxField
                      label="Unique Features & Promotions"
                      helperText="Special offers, selling points, or standout features."
                      placeholder="List your current promotions..."
                      field="features"
                      value={knowledgeBox.features}
                      onChange={handleKnowledgeBoxChange}
                      maxChars={MAX_CHARS}
                    />
                    <KnowledgeBoxField
                      label="Key Business Policies"
                      helperText="Return, shipping, warranty, or other important policies."
                      placeholder="Describe your return policy..."
                      field="policies"
                      value={knowledgeBox.policies}
                      onChange={handleKnowledgeBoxChange}
                      maxChars={MAX_CHARS}
                    />
                    <KnowledgeBoxField
                      label="Frequently Asked Questions (FAQs)"
                      helperText="Common customer questions and their answers."
                      placeholder="Q: How long does shipping take?..."
                      field="faqs"
                      value={knowledgeBox.faqs}
                      onChange={handleKnowledgeBoxChange}
                      maxChars={MAX_CHARS}
                    />
                  </div>
                </div>
              </Col>
              <Col md={12} className="d-flex justify-content-between py-4">
                <OutlineBtn
                  text="Previous"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={goToPreviousTab}
                />
                {/* --- Change 2: This button now calls handleFinishClick --- */}
                <FillBtn
                  text="Finish"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={handleFinishClick}
                />
              </Col>
            </Row>
          </TabPane>

          {/* --- Change : The rest of the tabs are commented out --- */}
          {/* --- TAB 3: Which category --- */}
          {/* 
          <TabPane tabId={3}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={12}>
                <SubHeading
                  headingText="Which category best describes your business?"
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
                {[
                  "Food & Restaurants",
                  "Food Type",
                  "Health & Wellness",
                  "Beauty & Spas",
                  "Arts & Entertiment",
                  "Active Lifesytle",
                  "Hotels & Travel",
                  "Goods & Shopping",
                  "Event Planning & Services",
                  "Professional Services",
                  "Pets",
                  "Nightlife",
                ].map((cat) => (
                  <div
                    key={cat}
                    className={`p-3 BorderRadius text-start mb-2 ${
                      selectedCategory === cat
                        ? "categorySelectedBg"
                        : "categoryTransparentBg"
                    }`}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    <h4 className="mb-0">{cat}</h4>
                  </div>
                ))}
              </Col>
              <Col md={12} className="d-flex justify-content-between py-4">
                <OutlineBtn
                  text="Previous"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={goToPreviousTab}
                />
                <FillBtn
                  text="Next"
                  className={"py-2 px-5 fs-4"}
                  disabled={!selectedCategory}
                  handleOnClick={handleCategoryNextClick}
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId={4}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={12}>
                <SubHeading
                  headingText="Which type of services do you offer?"
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
                {subCategoriesArray.map((subCat, index) => (
                  <div
                    key={index}
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
                ))}
              </Col>
              <Col md={12} className="d-flex justify-content-between py-4">
                <OutlineBtn
                  text="Previous"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={goToPreviousTab}
                />
                <FillBtn
                  text="Next"
                  className={"py-2 px-5 fs-4"}
                  disabled={selectedServiceTypes.length === 0}
                  handleOnClick={goToNextTab}
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId={5}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={12}>
                <SubHeading
                  headingText="Add services"
                  className="textYellow py-4"
                />
              </Col>
              <Col md={12} className="text-center">
                <p style={{ color: "#fff" }}>
                  Select all the services you offer. Search our full service
                  list if you're unable to find your service listed below.
                </p>
              </Col>
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
                />
              </Col>
              <Col md={12}>
                <Row>
                  <Col
                    md={{ size: 8, offset: 2 }}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <SubHeading
                      headingText={`Types of services (${selectedServices.length})`}
                      className="textWhite py-4 mb-0"
                    />
                    <p
                      style={{ color: "#FFE816", cursor: "pointer" }}
                      className="mb-0"
                      onClick={toggleModal}
                    >
                      + Add another type of service
                    </p>
                  </Col>
                </Row>
              </Col>
              {serviceTypeArray?.map((element) => (
                <Col md={{ size: 8, offset: 2 }} key={element.service}>
                  <Row>
                    <Col
                      md={12}
                      className="text-left"
                      style={{ color: "#fff", textAlign: "left" }}
                    >
                      <h5 className="textWhite py-4">
                        {element.service === "new_service"
                          ? "Custom Services"
                          : element.service}
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    {element?.sub_service
                      ?.filter(
                        (service) =>
                          !searchField ||
                          service
                            .toLowerCase()
                            .includes(searchField.toLowerCase())
                      )
                      .slice(0, visibleCount)
                      .map((service, index) => (
                        <Col md={6} key={index} className="mb-2">
                          <div
                            className={`p-3 BorderRadius text-start custom-border ${
                              selectedServices?.includes(service)
                                ? "categorySelectedBg"
                                : "categoryTransparentBg"
                            }`}
                            onClick={() => handleServiceTypeClick(service)}
                          >
                            <h4 className="mb-0">{service}</h4>
                          </div>
                        </Col>
                      ))}
                  </Row>
                </Col>
              ))}
              <Col md={12} className="d-flex justify-content-between py-4">
                <OutlineBtn
                  text="Previous"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={goToPreviousTab}
                />
                <FillBtn
                  text="Next"
                  className={"py-2 px-5 fs-4"}
                  disabled={selectedServices.length === 0}
                  handleOnClick={goToNextTab}
                />
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId={6}>
            <Row className="d-flex text-center justify-content-center">
              <Col md={12}>
                <SubHeading
                  headingText={`You're all set!`}
                  className="textYellow pt-4"
                />
              </Col>
              <Col md={12} className="font14">
                <p style={{ color: "#fff", fontSize: "25px" }}>
                  Select <span className="textYellow">Finish</span> to complete
                  onboarding and start building your campaign.
                </p>
              </Col>
              <Col md={12} className="mt-4">
                <FillBtn
                  text="Finish"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={handleFinishClick}
                />
              </Col>
              <Col md={12} className="d-flex justify-content-start py-4">
                <OutlineBtn
                  text="Previous"
                  className={"py-2 px-5 fs-4"}
                  handleOnClick={goToPreviousTab}
                />
              </Col>
            </Row>
          </TabPane> */}
        </TabContent>
      </Container>
    </div>
  );
};

export default Onboardingss;
