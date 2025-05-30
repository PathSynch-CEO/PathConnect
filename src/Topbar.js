import {
    Navbar as ReactstrapNavbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
  } from "reactstrap";
  import PropTypes from "prop-types";
  import { FaBars } from "react-icons/fa";
  import styles from "./component/Page/Onboarding/styles.module.scss";
  import { Link, useNavigate } from "react-router-dom";
  import { useState, useEffect, memo, useCallback } from "react";
import FillBtn from "./component/Page/Onboarding/FillBtn";
  
  const TopBar = memo(function TopBar() {
    const navigate = useNavigate();
  
    useEffect(() => {
      setCollapsed(false);
    }, []);
  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [stopScrolling, setStopScrolling] = useState(false);
  
    const handleMouseOver = () => {
      setStopScrolling(true);
      document.body.style.overflow = "hidden";
    };
  
    const textClass = "text-white";
  
    const handleDownloadClick = useCallback(() => {
      navigate("/appLink");
    }, [navigate]);
  
    const toggleNavbar = () => {
      setCollapsed(!collapsed);
      setStopScrolling(false);
      document.body.style.overflow = "auto";
    };
  
    const handleMouseEnter = () => {
      setIsDropdownOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsDropdownOpen(false);
    };
  
    return (
      <div>
        <ReactstrapNavbar className={`${styles.navbar} px-3`} expand="lg" fixed="top">
          <Link className="text-start d-block mt-3" to={"/"}>
            <img
              src="LOGO.png"
              alt={"website-logo"}
              style={{ verticalAlign: "sub", width: "180px" }}
            />
          </Link>
  
          <NavbarToggler
            className={"textYellow d-md-none d-block pb-2"}
            onClick={toggleNavbar}
          >
            <FaBars />
          </NavbarToggler>
  
          <Nav className={`d-lg-flex align-items-end d-none gap-4`} navbar>
          
           
            <NavItem>
              <UncontrolledDropdown
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                isOpen={isDropdownOpen}
              >
                <DropdownToggle
                  className={`${styles.navLink} ${textClass} bg-transparent border-0 p-0 mb-0`}
                >
                  <div
                    className="rounded-circle"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundImage:"PlaceholderImg.png",
                    }}
                  ></div>
                </DropdownToggle>
                <DropdownMenu
                  className="border-0"
                  style={{
                    right: 0,
                    left: "auto",
                    opacity: isDropdownOpen ? 1 : 0,
                  }}
                >
                   <>
                        <DropdownItem onClick={() => navigate("/")}>
                          Home
                        </DropdownItem>
                        <DropdownItem
                          onClick={() => navigate("/merchant/dashboard")}
                        >
                          Dashboard
                        </DropdownItem>
                        <DropdownItem >
                          Logout
                        </DropdownItem>
                      </>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Nav>
  
          <Collapse
            isOpen={collapsed}
            className={`text-white w-100 ${styles.collapseScss}`}
          >
            <div
              className={`vh-100 bg-transparent ${
                stopScrolling ? "no-scroll" : "activeScroll"
              }`}
              onMouseOver={handleMouseOver}
            >
              <Nav
                className={`pt-2 ${styles.togglerNav} customBgDark caret`}
                navbar
              >
                <div className="mt-2">
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/">
                      <span className={`px-1`}>Home</span>
                    </Link>
                  </NavItem>
  
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="#">
                      <span className={`px-1`}>About</span>
                    </Link>
                  </NavItem>
  
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/contactUs">
                      <span className={`px-1`}>$PATH</span>
                    </Link>
                  </NavItem>
  
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/contactUs">
                      <span className={`px-1`}>FAQ</span>
                    </Link>
                  </NavItem>
  
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/marketplace">
                      <span className={`px-1`}>Marketplace</span>
                    </Link>
                  </NavItem>
  
                  <NavItem className={`${styles.navItem}`}>
                    <FillBtn
                      className="px-3 ms-1 shadow-none"
                      text={"Download App"}
                      handleOnClick={handleDownloadClick}
                    />
                  </NavItem>
                </div>
              </Nav>
            </div>
          </Collapse>
        </ReactstrapNavbar>
      </div>
    );
  });
  
  TopBar.propTypes = {
    isPublic: PropTypes.bool,
    isPrivate: PropTypes.bool,
  };
  
  export default TopBar;