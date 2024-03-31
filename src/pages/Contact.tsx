import React, { useRef, useState } from "react";
import img11 from "./../assets/images/group1/1.png";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./styles/contact.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import RoomIcon from "@mui/icons-material/Room";
import SuccessPopUp from "../components/SuccessPopUp/SuccessPopUp";

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // Step 2: Create state variables
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Step 4: Validation logic
  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!userName.trim()) {
      errors.userName = "Nom requis";
    }

    if (!userEmail.trim()) {
      errors.userEmail = "E-mail requis";
    } else if (!/\S+@\S+\.\S+/.test(userEmail)) {
      errors.userEmail = "E-mail invalide";
    }

    if (!subject.trim()) {
      errors.subject = "Sujet requis";
    }

    if (!message.trim()) {
      errors.message = "Message requis";
    }

    setFormErrors(errors);

    // Step 5: Return true if no errors
    return Object.keys(errors).length === 0;
  };
  const service_name = process.env.REACT_APP_SERVICE_NAME + "";
  const template_name = process.env.REACT_APP_TEMPLATE_NAME + "";
  const public_key = process.env.REACT_APP_PUBLIC_KEY
    ? process.env.REACT_APP_PUBLIC_KEY
    : "";
  const sendEmail = (e: any) => {
    e.preventDefault();

    // Step 5: Validate the form
    const isValid = validateForm();

    if (isValid && form.current) {
      setIsLoading(true);
      emailjs
        .sendForm(service_name, template_name, form.current, {
          publicKey: public_key,
        })
        .then(
          () => {
            setShowSuccessModal(true);
            setIsLoading(false);
          },
          (error) => {
            setIsLoading(false);
          }
        );
    }
  };
  const handleCloseSuccessModal = () => {
    // Step 7: Close success modal and reset form
    setShowSuccessModal(false);
    setUserName("");
    setUserEmail("");
    setSubject("");
    setMessage("");
    setFormErrors({});
    setIsLoading(false);
  };

  return (
    <div>
      <div
        className="home--main"
        style={{
          backgroundImage: `url(${img11})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          height: "500px",
        }}
      >
        <div className="overlay"></div>
        <div className="home--main--text">
          <div className="home--main--text--head slide-sub-title">
            Contactez-Nous
          </div>
        </div>
      </div>
      <Container>
        <Row className="text-center">
          <Col>
            ...
            {/* <h2 className="realisations--title">Joindre notre bureau</h2> */}
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <RoomIcon />
              </span>
              <div className="ts-service-box-content">
                <h4>Visitez notre bureau</h4>
                <p>101 Boulevard Poniatowski 75012 PARIS</p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <EmailIcon />
              </span>
              <div className="ts-service-box-content">
                <h4>Contactez-nous par email</h4>
                <p>maknirenov@gmail.com</p>
              </div>
            </div>
          </Col>

          <Col md={4}>
            <div className="ts-service-box-bg text-center h-100">
              <span className="ts-service-icon icon-round">
                <PhoneIcon />
              </span>
              <div className="ts-service-box-content">
                <h4>Appelez-nous</h4>
                <p>0130255880 / 0631354880</p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2374185334797!2d2.4045545!3d48.8346099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6725e00beb279%3A0xab77753636de0835!2s101%20Bd%20Poniatowski%2C%2075012%20Paris%2C%20France!5e0!3m2!1sen!2stn!4v1708448385717!5m2!1sen!2stn"
            width="100%"
            height="600"
            loading="lazy"
          ></iframe>
        </div>

        <h3 className="column-title mb-5">Nous aimerions vous entendre</h3>
        <Row className="mb-5">
          <Col md={12}>
            <Form
              id="contact-form"
              action="#"
              method="post"
              role="form"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="error-container"></div>
              <Row>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Votre Nom</Form.Label>
                    <Form.Control
                      className={`form-control-name ${
                        formErrors.userName ? "is-invalid" : ""
                      }`}
                      name="user_name"
                      id="user_name"
                      placeholder=""
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    {formErrors.userName && (
                      <div className="invalid-feedback">
                        {formErrors.userName}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                      className={`form-control-email ${
                        formErrors.userEmail ? "is-invalid" : ""
                      }`}
                      name="user_email"
                      id="user_email"
                      placeholder=""
                      type="email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                    {formErrors.userEmail && (
                      <div className="invalid-feedback">
                        {formErrors.userEmail}
                      </div>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control
                      className={`form-control-subject ${
                        formErrors.subject ? "is-invalid" : ""
                      }`}
                      name="subject"
                      id="subject"
                      placeholder=""
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                    {formErrors.subject && (
                      <div className="invalid-feedback">
                        {formErrors.subject}
                      </div>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  className={`form-control-message ${
                    formErrors.message ? "is-invalid" : ""
                  }`}
                  name="message"
                  id="message"
                  placeholder=""
                  as="textarea"
                  rows={7}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {formErrors.message && (
                  <div className="invalid-feedback">{formErrors.message}</div>
                )}
              </Form.Group>
              <div className="text-right">
                <br />
                <Row>
                  <Col md={{ span: 4, offset: 8 }}>
                    <button
                      className="btn-primary"
                      type="submit"
                      disabled={isLoading}
                    >
                      Envoyer le message
                    </button>
                  </Col>
                </Row>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <SuccessPopUp
        handleCloseSuccessModal={handleCloseSuccessModal}
        showSuccessModal={showSuccessModal}
      />
    </div>
  );
};

export default Contact;
