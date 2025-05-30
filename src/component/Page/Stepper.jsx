import React, { useState, useEffect } from "react";

const CategorySelector = ({
  categories,
  selectedCategories,
  onSelect,
  isSingleSelect = false,
  title = "",
  onServiceSelect
}) => {
  const handleSelect = (category) => {
    if (isSingleSelect) {
      onSelect([category]);
      if (onServiceSelect) {
        onServiceSelect(category);
      }
    } else {
      if (selectedCategories.includes(category)) {
        onSelect(selectedCategories.filter((item) => item !== category));
      } else {
        onSelect([...selectedCategories, category]);
      }
    }
  };

  return (
    <div className="category-container">
      {title && <h2>{title}</h2>}
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${selectedCategories.includes(category) ? "selected" : ""}`}
            onClick={() => handleSelect(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

const AddServices = ({ selectedServices, onSelect, availableServices, initialSelected = [] }) => {
  const [localSelected, setLocalSelected] = useState(initialSelected);

  useEffect(() => {
    setLocalSelected(initialSelected);
  }, [initialSelected]);

  const handleServiceSelect = (service) => {
    if (localSelected.some(s => s.name === service.name)) {
      setLocalSelected(localSelected.filter(s => s.name !== service.name));
    } else {
      setLocalSelected([...localSelected, service]);
    }
  };

  // Update parent when local selection changes
  useEffect(() => {
    onSelect(localSelected);
  }, [localSelected]);

  return (
    <div className="add-services-container">
      <p>
        Select all the services you offer. Search our full service list if you're unable to find your service listed below.
      </p>
      <h2>Types of services ({localSelected.length})</h2>
      
    
      
      {localSelected.length > 0 && (
        <>
          {/* <h3>Selected Services:</h3> */}
          <ul className="service-list">
            {localSelected.map((service, index) => (
              <li key={index} className="service-item selected">
                <span>{service.name}</span>
                <span className="service-status">
                  {service.available ? "Services available" : `No services available for ${service.name}`}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      <button className="add-service-btn">+ Add another type of service</button>
    </div>
  );
};

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [mainCategory, setMainCategory] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [step2Selections, setStep2Selections] = useState([]);

  const stepCategories = [
    ["Food & Restaurants", "Health & Wellness", "Beauty & Spas", "Arts & Entertainment", "Active Lifestyle"],
    mainCategory === "Food & Restaurants"
      ? ["Afghan", "African", "American (New)", "Andalusian"]
      : mainCategory === "Health & Wellness"
      ? ["Yoga", "Meditation", "Nutrition", "Fitness"]
      : mainCategory === "Beauty & Spas"
      ? ["Hair Salons", "Nail Salons", "Massage", "Skin Care"]
      : mainCategory === "Arts & Entertainment"
      ? ["Theaters", "Museums", "Galleries", "Concerts"]
      : ["Gyms", "Sports", "Outdoor Activities", "Adventure"],
    ["Tech & Gadgets", "Education", "Fitness"],
    ["Travel & Tourism", "E-commerce", "Finance"],
  ];

  const allServices = {
    "Food & Restaurants": [
      { name: "Afghan", available: true },
      { name: "African", available: true },
      { name: "American (New)", available: true },
      { name: "Andalusian", available: false },
    ],
    "Health & Wellness": [
      { name: "Yoga", available: true },
      { name: "Meditation", available: true },
      { name: "Nutrition", available: true },
      { name: "Fitness", available: false },
    ],
    "Beauty & Spas": [
      { name: "Hair Salons", available: true },
      { name: "Nail Salons", available: false },
      { name: "Massage", available: true },
      { name: "Skin Care", available: true },
    ],
    "Arts & Entertainment": [
      { name: "Theaters", available: true },
      { name: "Museums", available: true },
      { name: "Galleries", available: false },
      { name: "Concerts", available: true },
    ],
    "Active Lifestyle": [
      { name: "Gyms", available: true },
      { name: "Sports", available: true },
      { name: "Outdoor Activities", available: false },
      { name: "Adventure", available: true },
    ],
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Which category best describes your business?";
      case 2:
        return `Which type of ${mainCategory} services do you offer?`;
      case 3:
        return "Add Services";
      case 5:
        return "Let's build a campaign! Which service would you like to offer?";
      default:
        return "";
    }
  };

  const nextStep = () => {
    if (currentStep === 1) {
      setMainCategory(selectedCategories[0]);
      setSelectedCategories([]);
    }
    if (currentStep === 2) {
      // Convert selected categories to service objects
      const servicesFromCategories = selectedCategories.map(category => {
        const service = allServices[mainCategory].find(s => s.name === category);
        return service || { name: category, available: true };
      });
      setStep2Selections(servicesFromCategories);
    }
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getAvailableServices = () => {
    return allServices[mainCategory] || [];
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        {[1, 2, 3, 4, 5].map((step) => (
          <div key={step} className={`step ${step <= currentStep ? "active" : ""}`}>
            <div className="circle"></div>
          </div>
        ))}
      </div>

      <div className="step-content">
        {currentStep === 1 && (
          <CategorySelector
            categories={stepCategories[0]}
            selectedCategories={selectedCategories}
            onSelect={setSelectedCategories}
            isSingleSelect={true}
            title={getStepTitle()}
          />
        )}
        {currentStep === 2 && (
          <CategorySelector
            categories={stepCategories[1]}
            selectedCategories={selectedCategories}
            onSelect={setSelectedCategories}
            title={getStepTitle()}
          />
        )}
        {currentStep === 3 && (
          <AddServices
            selectedServices={selectedServices}
            onSelect={setSelectedServices}
            availableServices={getAvailableServices()}
            initialSelected={step2Selections}
          />
        )}
        {currentStep === 4 && (
          <div className="service-added-section">
            <h2>
              <span className="highlight">You added {selectedServices.length} services!</span>
            </h2>
            <p>
              Select <span className="highlight">Continue</span> to build a campaign.
            </p>
            <div className="medal-icon">🏅</div>
            <button className="continue-btn" onClick={nextStep}>Continue</button>
          </div>
        )}
        {currentStep === 5 && (
          <div className="final-step">
            <h3>
              Choose one. You can always create additional campaigns for other
              services you offer.
            </h3>
            <div className="heading-step">
              <h3>Available services ({selectedServices.filter(s => s.available).length})</h3>
              <p>+ Add Services</p>
            </div>
            <div className="service-list">
              {selectedServices.filter(service => service.available).map((service, index) => (
                <div key={index} className="service-item-wrap">
                  <span className="service-icon"><img src="listd.svg" alt=""/></span>
                  <span>{service.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="step-buttons">
        <button
          className={`prev-btn ${currentStep > 1 ? "active" : ""}`}
          onClick={prevStep}
          disabled={currentStep === 1}
        >
          Previous
        </button>
        <button
          className={`next-btn ${selectedCategories.length > 0 || currentStep === 3 || currentStep === 4 ? "active" : ""}`}
          onClick={nextStep}
          disabled={selectedCategories.length === 0 && currentStep !== 3 && currentStep !== 4}
        >
          {currentStep === 5 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;