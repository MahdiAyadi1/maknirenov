import React from "react";
import { Button, Modal } from "react-bootstrap";

const SuccessPopUp = (props: any) => {
  return (
    <div>
      <Modal
        show={props.showSuccessModal}
        onHide={props.handleCloseSuccessModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your email has been sent successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.handleCloseSuccessModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SuccessPopUp;
