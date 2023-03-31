import React from "react";
import { Alert } from "react-bootstrap";

const AlertComp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <Alert variant="danger" className="d-flex justify-content-center align-items-center py-4 w-50">
        <h3>not found</h3>
      </Alert>
    </div>
  );
};

export default AlertComp;
