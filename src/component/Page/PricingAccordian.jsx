import React from "react";
import Accordion from "react-bootstrap/Accordion";
const PricingAccordian = () => {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Etiam ut purus vehicula, porta dolor vitae?
          </Accordion.Header>
          <Accordion.Body>
            Donec ullamcorper orci et magna ultrices egestas. Sed convallis
            dignissim mi, et ornare nibh eleifend nec. Suspendisse posuere, est
            vitae mattis eleifend.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Aenean porta pretium tellus eget pulvinar?
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PricingAccordian;
