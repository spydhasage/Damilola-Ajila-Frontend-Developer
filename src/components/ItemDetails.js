import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const ItemDetails = ({ item, onClose }) => {
  const [modal, setModal] = React.useState(true);

  const toggle = () => {
    setModal(!modal);
    onClose();
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Details for {item.name}</ModalHeader>
        <ModalBody>
          <pre>{JSON.stringify(item, null, 2)}</pre>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ItemDetails;
