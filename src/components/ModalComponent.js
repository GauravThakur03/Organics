import React from 'react';
import {Modal} from 'react-bootstrap';

const ModalComponent = (props) => {
    return (
        <Modal
          {...props}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            
          </Modal.Header>
          <Modal.Body>
            {props.children}
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      );
}
 
export default ModalComponent;