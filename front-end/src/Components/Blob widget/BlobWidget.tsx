import React from "react";
import "./BlobWidget.scss";

type Props = {};

const BlobWidget = (props: Props) => {
  return (
    <div className="Blob_widget">
      <div className="blob_outer"></div>
      <div className="blob_inner"></div>
    </div>
  );
};

export default BlobWidget;
