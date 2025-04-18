import React from "react";
import "./ProcessItem.scss";
import { MdTouchApp } from "react-icons/md";
import ProcessPopUp from "../ProcessPopUp/ProcessPopUp";

type Props = {
  process_class_name: string;
  process_icon: any;
  process_name: string;
  process_description: string;
};

const ProcessItem: React.FC<Props> = ({
  process_class_name,
  process_name,
  process_icon,
  process_description,
}) => {
  const [showPopup, setShowPopup] = React.useState<boolean>(false);

  return (
    <>
      <div className={`process-item ${process_class_name}`}>
        <div className="top-row">
          <span>{process_icon}</span>
          <h4>{process_name}</h4>
        </div>
        <div className="bottom-row">
          <span onClick={() => setShowPopup(true)}>
            <p>Click Me</p>
            <MdTouchApp />
          </span>
        </div>
      </div>
      {showPopup && (
        <ProcessPopUp
          title={process_name}
          description={process_description}
          icon={process_icon}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default ProcessItem;
