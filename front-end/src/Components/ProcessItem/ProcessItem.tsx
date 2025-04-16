import React from "react";
import "./ProcessItem.scss";
import { MdLightbulb, MdTouchApp } from "react-icons/md";
import { IconType } from "react-icons";

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
  return (
    <div className={`process-item ${process_class_name}`}>
      <div className="top-row">
        {process_icon}
        <h4>{process_name}</h4>
      </div>
      <div className="bottom-row">
        <span>
          <p>Click Me</p>
          <MdTouchApp />
        </span>
      </div>
    </div>
  );
};

export default ProcessItem;
