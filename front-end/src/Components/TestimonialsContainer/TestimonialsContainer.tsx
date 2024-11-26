import React from "react";
import "./TestimonialsContainer.scss";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

type Props = {};

const TestimonialsContainer = (props: Props) => {
  return (
    <div className="TestimonialsContainer">
      <div className="quote">
        <RiDoubleQuotesL id="icon_L" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
          voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
          voluptatum. Quisquam, voluptatum. Quisquam, voluptatum. Quisquam,
          voluptatum. Quisquam, voluptatum. Quisquam, voluptatum.
        </p>
        <RiDoubleQuotesR id="icon_R" />
      </div>
      <div className="details">
        <h4>John Doe</h4>
        <p>Board Member</p>
      </div>
    </div>
  );
};

export default TestimonialsContainer;
