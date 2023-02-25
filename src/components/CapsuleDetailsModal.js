import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CapsuleDetailsModal = ({ isOpen, toggle, capsule }) => {
  const { capsule_id, status, original_launch, type, details } = capsule;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{capsule_id}</ModalHeader>
      <ModalBody>
        <p>Status: {status}</p>
        <p>Original Launch: {original_launch}</p>
        <p>Type: {type}</p>
        <p>Details: {details}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

CapsuleDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  capsule: PropTypes.shape({
    capsule_id: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    original_launch: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
};

export default CapsuleDetailsModal;
