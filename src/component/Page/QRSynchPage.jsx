import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

import "./QRSynchPage.scss"; // Import the new SCSS file

// --- Helper Components ---
const Button = ({
  variant = "default",
  size = "default",
  className = "",
  children,
  ...props
}) => {
  // Define custom colors based on the screenshot
  const primaryGreen = "#1E3932"; // Dark green for background and main text
  const accentYellow = "#FFE816"; // Bright yellow for buttons and highlights

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background transform hover:-translate-y-0.5";

  const variants = {
    default: `bg-[${accentYellow}] text-[${primaryGreen}] hover:bg-yellow-400 shadow-md hover:shadow-lg`,
    outline: `border-2 border-[${primaryGreen}] text-[${primaryGreen}] bg-transparent hover:bg-green-100/50`,
    secondary: `bg-white text-[${primaryGreen}] hover:bg-gray-200/90 shadow-md hover:shadow-lg`,
    ghost: "hover:bg-green-100/50",
  };

  const sizes = {
    default: "h-10 py-2 px-5",
    lg: "h-12 px-8 text-base",
  };

  const appliedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={appliedClasses} {...props}>
      {children}
    </button>
  );
};

// --- SVG Icons ---
// Icons updated to use the primaryGreen color where appropriate
const ScanLineIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    <path d="M7 12h10" />
  </svg>
);
const LinkIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
  </svg>
);
const GlobeIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const BarChart3Icon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);
const LayoutDashboardIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="3" y="16" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
  </svg>
);
const ZapIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const XCircleIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
);
const ChevronDownIcon = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

// --- Data ---
const features = [
  {
    icon: <ScanLineIcon className="w-8 h-8" />,
    title: "Dynamic QR Codes",
    description:
      "Create QR codes that you can update anytime, even after printing.",
  },
  {
    icon: <LinkIcon className="w-8 h-8" />,
    title: "Branded Short Links",
    description: "Boost brand recognition and trust with custom short URLs.",
  },
  {
    icon: <GlobeIcon className="w-8 h-8" />,
    title: "Custom Landing Pages",
    description:
      "Build simple, mobile-first landing pages for your campaigns in minutes.",
  },
  {
    icon: <BarChart3Icon className="w-8 h-8" />,
    title: "In-Depth Analytics",
    description:
      "Track every scan and click to understand your audience and measure ROI.",
  },
  {
    icon: <LayoutDashboardIcon className="w-8 h-8" />,
    title: "Campaign Management",
    description:
      "Organize your assets by campaign for easy management and reporting.",
  },
  {
    icon: <ZapIcon className="w-8 h-8" />,
    title: "Blazing Fast Redirects",
    description:
      "Ensure a smooth user experience with our globally distributed network.",
  },
];

const faqData = [
  {
    q: "What is a Dynamic QR Code?",
    a: "A Dynamic QR Code allows you to change the destination URL at any time without having to reprint the code. This is perfect for marketing campaigns, business cards, and any situation where the linked content might change.",
  },
  {
    q: "Can I use my own domain name?",
    a: "Yes! On our Starter, Growth, and Power User plans, you can connect your own custom domain to create branded short links, which helps increase brand trust and click-through rates.",
  },
  {
    q: "What kind of analytics do you provide?",
    a: "We provide a range of analytics from basic click counts to detailed city-level and device data, depending on your plan. This helps you understand how your QR codes and links are performing.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer various plans to get you started. You can upgrade at any time to unlock more powerful features.",
  },
];

const comparisonData = [
  { feature: "Dynamic QR Codes", qrsynch: true, bitly: true },
  {
    feature: "Custom QR Design (Colors, Logo)",
    qrsynch: true,
    bitly: "limited",
  },
  { feature: "Custom Landing Pages", qrsynch: true, bitly: true },
  { feature: "UTM Campaign Builder", qrsynch: true, bitly: "limited" },
  { feature: "AI Co-Pilot", qrsynch: true, bitly: false },
  {
    feature: "Bulk Link Creation",
    qrsynch: "From Growth Plan",
    bitly: "From Core Plan",
  },
  {
    feature: "Analytics Retention",
    qrsynch: "Up to 2 Years",
    bitly: "Up to 90 Days",
  },
  {
    feature: "Priority Support",
    qrsynch: "From Power User Plan",
    bitly: "From Premium Plan",
  },
];

const pricingTiers = [
  {
    name: "Free",
    planId: "free",
    price: "$0",
    period: "/ month",
    description: "For Trial.",
    features: [
      "Ads",
      "2 QR Codes/month",
      "5 Short Links/month",
      "Unlimited Link Clicks",
      "Email Only Support",
    ],
    cta: "Get Started",
    popular: false,
    link: "https://pathsynch.com/free-signup",
  },
  {
    name: "Starter",
    planId:"qrsynchstarter",
    price: "$14",
    period: "/ month",
    description: "For professionals and small teams.",
    features: [
      "No Ads",
      "5 QR Codes/month",
      "100 Short Links/month",
      "Unlimited Link Clicks",
      "200 custom back-halves/month",
      "30 Days Analytics Retention",
      "AI Co-Pilot",
      "Basic Analytics",
      "Help Center",
      "Email Only Support",
      "Pro UTM Builder",
      "Set Link Expiration Dates",
      "Integrate FlashSynch at 10% off",
    ],
    cta: "Get Started",
    popular: false,
    link: null,
  },
  {
    name: "Growth",
    planId:"qrsynchgrowth",
    price: "$35",
    period: "/ month",
    description: "For growing businesses.",
    features: [
      "No Ads",
      "10 QR Codes/month",
      "1,000 Short Links/month",
      "Unlimited Link Clicks",
      "1,000 custom back-halves/month",
      "6 Months Analytics Retention",
      "AI Co-Pilot",
      "Pro Analytics",
      "Help Center",
      "Email / Chat Support",
      "Pro UTM Builder",
      "Set Link Expiration Dates",
      "Click Reports PDF",
      "Bulk link & QR Code creation 100/upload",
      "Integrate FlashSynch at 15% off",
    ],
    cta: "Choose Growth",
    popular: true,
    link: null,
  },
  {
    name: "Power User",
    planId:"qrsynchpoweruser",
    price: "$129",
    period: "/ month",
    description: "For agencies and power users.",
    features: [
      "No Ads",
      "200 QR Codes/month",
      "5,000 Short Links/month",
      "Unlimited Link Clicks",
      "5,000 custom back-halves/month",
      "2 Years Analytics Retention",
      "AI Co-Pilot",
      "Pro Analytics",
      "Help Center",
      "Priority Support",
      "Pro UTM Builder",
      "Set Link Expiration Dates",
      "Click Reports PDF",
      "Bulk link & QR Code creation 4000/upload",
      "City-level and device type data",
      "Mobile deep linking",
      "End-to-end encryption",
      "Link cloaking & Referrer hiding",
      "Free .vip domain",
    ],
    cta: "Get Started",
    popular: false,
    link: null,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    planId:"enterprise",
    period: "",
    description: "Custom solutions for enterprise clients.",
    features: [
      "20,000 Short Links/month",
      "Unlimited Link Clicks",
      "4 Years Analytics Retention",
      "Basic Analytics",
      "Basic UTM Builder",
      "Microsite",
      "Dedicated Account Manager",
      "Emergency Phone Support",
      "SLA Uptime Guarantee",
    ],
    cta: "Get a Qoute",
    popular: false,
    link: "/contactus",
  },
];

// --- Sub-Components ---
const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item">
      <button onClick={() => setIsOpen(!isOpen)} className="faq-button">
        <h3>{q}</h3>
        <ChevronDownIcon className={`faq-icon ${isOpen ? "open" : ""}`} />
      </button>
      <div className={`faq-answer ${isOpen ? "open" : "closed"}`}>
        <p>{a}</p>
      </div>
    </div>
  );
};

const ComparisonRow = ({ feature, qrsynch, bitly }) => {
  const renderValue = (value) => {
    if (value === true)
      return <CheckCircleIcon className="w-6 h-6 text-green-500 center-text" />;
    if (value === false)
      return <XCircleIcon className="w-6 h-6 text-red-400 center-text" />;
    if (value === "limited")
      return (
        <CheckCircleIcon className="w-6 h-6 text-yellow-500 center-text" />
      );
    return <span className="center-text">{value}</span>;
  };

  return (
    <React.Fragment>
      <div className="table-row-feature">{feature}</div>
      <div className="table-row-value center-text">{renderValue(qrsynch)}</div>
      <div className="table-row-value center-text">{renderValue(bitly)}</div>
    </React.Fragment>
  );
};

const nonEnterprise = pricingTiers.filter((t) => !/enterprise/i.test(t.name));
const enterpriseTier = pricingTiers.find((t) => /enterprise/i.test(t.name));

// --- Main App Component ---
export default function QRSynchPage() {
  const [activeTab, setActiveTab] = useState("link");
  const navigate = useNavigate();

    const handleLinkButtonClick = (tier) => {
        // Enterprise still goes to Contact page
        if (tier?.planId === "qrsynchenterprise") {
          navigate("/contactus");
          return;
        }
    
        // Only route paid QRsynch plans (Starter/Growth/Power User) to /landing-page
        // Match Pricing2: send { totalPrice, selectedPlanAmount, plan }
        if (tier?.planId && /^qrsynch/.test(tier.planId)) {
          // Extract numeric price even if it's a string like "$14"
          const numeric = typeof tier.price === "string"
            ? Number(tier.price.replace(/[^0-9.]/g, ""))
            : tier.price;
    
          navigate("/landing-page", {
            state: {
              totalPrice: numeric,
              selectedPlanAmount: numeric,
              plan: tier.planId,
            },
          });
          return;
        }
    
        // Keep existing behavior for Free or any tiers with external links
        if (tier?.link) {
          window.location.href = tier.link;
        }
      };

  return (
    // Outer container for the dark green background
    <div>
      <Header />
      <div className="qrsynch-page-container">
        {/* Main Content Card */}
        <div className="qrsynch-main-card">
          <main>
            {/* --- Hero Section --- */}
            <section className="qrsynch-hero-section">
              <div className="hero-content-wrapper">
                <h1 className="hero-heading">
                  <span>QRsynch:</span> The Link Between Your Physical & Digital
                  Worlds
                </h1>
                <p className="hero-subheading">
                  QRsynch is the all-in-one platform for creating, managing, and
                  tracking dynamic QR codes and short links. Turn every scan
                  into a meaningful connection.
                </p>

                {/* --- Interactive Link/QR Box --- */}
                <div className="qrsynch-interactive-box">
                  <p className="input-label">Enter your long link here</p>
                  <div className="input-card">
                    <div className="tab-buttons">
                      <button
                        onClick={() => setActiveTab("link")}
                        className={activeTab === "link" ? "active" : "inactive"}
                      >
                        <LinkIcon className="w-5 h-5" />
                        Short Link
                      </button>
                      <button
                        onClick={() => setActiveTab("qr")}
                        className={activeTab === "qr" ? "active" : "inactive"}
                      >
                        <ScanLineIcon className="w-5 h-5" />
                        QR Code
                      </button>
                    </div>
                    <div className="input-content">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="https://example.com/url"
                        />
                        <Button
                          size="lg"
                          className="action-button"
                          onClick={() =>
                            handleLinkButtonClick({
                              planId: "free",
                              link: "https://pathsynch.com/free-signup",
                            })
                          }
                        >
                          Get your link
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --- What is QRsynch Section --- */}
            <section className="qrsynch-solution-section">
              <div className="content-grid">
                <div className="text-content">
                  <h2 className="section-heading">
                    What is the QRsynch Solution?
                  </h2>
                  <p className="section-paragraph">
                    QRsynch is PathSynch’s cutting-edge link management engine
                    designed to transform customer engagement. It provides
                    marketers and businesses with powerful tools to create
                    dynamic QR codes, branded short links, and track performance
                    with in-depth analytics. QRsynch bridges the gap between
                    digital and physical customer interactions, ensuring
                    seamless and impactful engagement that drives retention,
                    satisfaction, and revenue growth.
                  </p>
                </div>
                <div className="image-content">
                  <img
                    src="/QRsynch-power.png" // Updated image path
                    alt="QRsynch Illustration"
                  />
                </div>
              </div>
            </section>

            {/* --- How It Works Section --- */}
            <section id="how-it-works" className="qrsynch-how-it-works-section">
              <div className="section-header">
                <h2 className="section-title">
                  Create, Share, and Track in 3 Simple Steps
                </h2>
                <p className="section-description">
                  Launch your campaigns in minutes with our intuitive platform.
                </p>
              </div>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-circle">
                    <span>1</span>
                  </div>
                  <h3 className="step-title">Create</h3>
                  <p className="step-description">
                    Generate a dynamic QR code or a branded short link and point
                    it to your website, app, or any online destination.
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-circle">
                    <span>2</span>
                  </div>
                  <h3 className="step-title">Share</h3>
                  <p className="step-description">
                    Place your QR code on print materials, packaging, or digital
                    ads. Use your short links on social media and in emails.
                  </p>
                </div>
                <div className="step-item">
                  <div className="step-circle">
                    <span>3</span>
                  </div>
                  <h3 className="step-title">Track</h3>
                  <p className="step-description">
                    Measure performance in real-time with our analytics
                    dashboard. Gain insights to optimize your campaigns for
                    better results.
                  </p>
                </div>
              </div>
            </section>

            {/* --- Features Section --- */}
            <section id="features" className="qrsynch-features-section">
              <div className="section-header">
                <h2 className="section-title">
                  The Ultimate Toolkit for Modern Marketing
                </h2>
                <p className="section-description">
                  Go beyond simple links and QR codes with features designed for
                  growth.
                </p>
              </div>
              <div className="features-grid">
                {features.map((f, i) => (
                  <div key={i} className="feature-card">
                    <span className="card-number">0{i + 1}</span>
                    <div className="icon-wrapper">{f.icon}</div>
                    <h3 className="feature-title">{f.title}</h3>
                    <p className="feature-description">{f.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Comparison Section --- */}
            <section id="compare" className="qrsynch-comparison-section">
              <div className="section-header">
                <h2 className="section-title">QRsynch vs. Bitly</h2>
                <p className="section-description">
                  See how we stack up against the competition and why QRsynch
                  gives you more power and flexibility.
                </p>
              </div>
              <div className="comparison-table">
                <div className="table-header">
                  <div>Feature</div>
                  <div className="center-text">QRsynch</div>
                  <div className="center-text">Bitly</div>
                </div>
                <div className="table-row">
                  {comparisonData.map((item, index) => (
                    <ComparisonRow key={index} {...item} />
                  ))}
                </div>
              </div>
            </section>

            {/* --- Pricing Section --- */}
            <section id="pricing" className="qrsynch-pricing-section">
              <div className="section-header">
                <h2 className="section-title">Find the Perfect Plan</h2>
                <p className="section-description">
                  Start for free, then scale as you grow. All plans are flexible
                  and designed to fit your needs.
                </p>
              </div>
              <div>
                {/* Regular plans */}
                <div className="pricing-grid">
                  {nonEnterprise.map((tier, i) => (
                    <div
                      key={i}
                      className={`pricing-card ${
                        tier.popular ? "popular" : ""
                      }`}
                    >
                      {tier.popular && (
                        <div className="popular-badge">MOST POPULAR</div>
                      )}
                      <h3 className="plan-name">{tier.name}</h3>
                      <p className="plan-description">{tier.description}</p>

                      <div className="price-display">
                        <span className="price-value">{tier.price}</span>
                        <span className="price-period">{tier.period}</span>
                      </div>

                      <ul className="feature-list">
                        {tier.features.map((feature, j) => (
                          <li key={j}>
                            <CheckCircleIcon className="w-5 h-5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        size="lg"
                        className="cta-button"
                        onClick={() => handleLinkButtonClick(tier)}
                      >
                        {tier.cta}
                      </Button>
                    </div>
                  ))}
                </div>
                <br/>
                {/* Enterprise band (Bitly style) */}
                {enterpriseTier && (
                  <section className="enterprise-band">
                    <div className="enterprise-inner">
                      <div className="enterprise-col enterprise-intro">
                        <h3 className="enterprise-title">Enterprise</h3>
                        <p className="enterprise-sub">
                          One platform for teams to collaborate on short links,
                          QR codes, and landing pages at scale — with advanced
                          analytics, seamless integrations, and trusted
                          security.
                        </p>

                        <Button
                          size="lg"
                          className="enterprise-cta"
                          onClick={() =>
                            handleLinkButtonClick(enterpriseTier)
                          }
                        >
                          Get a Quote
                        </Button>
                      </div>

                      <div className="enterprise-col">
                        <h4 className="enterprise-heading">Custom pricing</h4>
                        <p className="enterprise-copy">
                          Custom number of links, QR codes, and landing pages.
                        </p>
                      </div>

                      <div className="enterprise-col">
                        <h4 className="enterprise-heading">
                          Everything in{" "}
                          {nonEnterprise[nonEnterprise.length - 1]?.name ||
                            "Premium"}
                          , plus:
                        </h4>
                        <ul className="enterprise-list">
                          {[
                            "Multiple users & group permission management",
                            "At-scale link & QR code generation",
                            "Advanced performance tracking",
                            "Customized onboarding & priority support",
                          ].map((f, i) => (
                            <li key={i}>
                              <CheckCircleIcon className="li-icon" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="enterprise-col">
                        <ul className="enterprise-list">
                          {[
                            "Dedicated account manager",
                            "High-volume API & webhook access",
                            "99.9% SLA uptime",
                            "SSO logins",
                          ].map((f, i) => (
                            <li key={i}>
                              <CheckCircleIcon className="li-icon" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </section>

            {/* --- FAQ Section --- */}
            <section id="faq" className="qrsynch-faq-section">
              <div className="section-header">
                <h2 className="section-title">Frequently Asked Questions</h2>
              </div>
              <div className="faq-list">
                {faqData.map((faq, i) => (
                  <FaqItem key={i} {...faq} />
                ))}
              </div>
            </section>

            {/* --- CTA Section --- */}
            <section className="qrsynch-cta-section">
              <div className="section-content">
                <h2 className="section-title">
                  Ready to Boost Your Engagement?
                </h2>
                <p className="section-paragraph">
                  Join thousands of businesses using QRsynch to connect with
                  their customers. Get started in seconds.
                </p>
                <Button
                  size="lg"
                  className="cta-button"
                  onClick={() =>
                    handleLinkButtonClick({
                      planId: "free",
                      link: "https://pathsynch.com/free-signup",
                    })
                  }
                >
                  Get Started Today
                </Button>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
