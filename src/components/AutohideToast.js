import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

import { useSelector } from "react-redux";
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useEffect } from 'react';
function AutohideToast() {
  const [toast, setToast] = useState({
    show:false,
    data:''
  });

  const data = useSelector((state)=> state.toast)

  useEffect(() => {
    if(data)
      setToast(data)
  }, [data])
  
  return (
    <Row>
      <Col xs={6}>
      <ToastContainer position="top-end" className="p-3">
        <Toast onClose={() => setToast({...toast, show:false})} closeButton={false} show={toast.show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">{toast.data}</strong>
          </Toast.Header>
          <Toast.Body>Se ha conectado</Toast.Body>
        </Toast>

      </ToastContainer>
      </Col>

    </Row>
  );
}

export default AutohideToast;