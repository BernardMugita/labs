import "./ProcessPopUp.scss";

type Props = {
  title: string;
  icon: any;
  description: string;
  onClose: () => void;
};

const ProcessPopUp: React.FC<Props> = ({
  title,
  icon,
  description,
  onClose,
}) => {
  return (
    <div className="ProcessPopUp">
      <div className="popup-body">
        <div className="process-head">
          <span>{icon}</span>
          <h2>{title}</h2>
        </div>
        <div className="process-body">
          <p>{description}</p>
          <button onClick={() => onClose()}> Close</button>
        </div>
      </div> 
    </div>
  );
};

export default ProcessPopUp;
