import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const Popup = ({ isOpen, toggle, data }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Details</ModalHeader>
      <ModalBody>
        <p>Name: {data.name}</p>
        <p>Type: {data.type}</p>
        <p>Status: {data.status}</p>
        <p>Original Launch: {data.original_launch}</p>
        <p>Details: {data.details}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

Popup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Popup;
