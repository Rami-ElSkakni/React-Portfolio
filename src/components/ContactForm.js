import React, { useRef, useState } from "react";
import { Container, Alert } from "react-bootstrap";
import classes from "./ContactForm.module.css";
import Button from "../UI/Button";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isMessageValid, setIsMessageValid] = useState(false);

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const name = useRef();
  const email = useRef();
  const message = useRef();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredMessage = message.current.value;

    if (enteredName === "" && enteredEmail === "" && enteredMessage === "") {
      setIsNameValid(true);
      setIsEmailValid(true);
      setIsMessageValid(true);
    } else if (
      enteredName === "" &&
      enteredEmail === "" &&
      enteredMessage !== ""
    ) {
      setIsNameValid(true);
      setIsEmailValid(true);
      setIsMessageValid(false);
    } else if (
      enteredName === "" &&
      enteredEmail !== "" &&
      enteredMessage === ""
    ) {
      setIsNameValid(true);
      setIsEmailValid(false);
      setIsMessageValid(true);
    } else if (
      enteredName === "" &&
      enteredEmail !== "" &&
      enteredMessage !== ""
    ) {
      setIsNameValid(true);
      setIsEmailValid(false);
      setIsMessageValid(false);
    } else if (
      enteredName !== "" &&
      enteredEmail === "" &&
      enteredMessage === ""
    ) {
      setIsNameValid(false);
      setIsEmailValid(true);
      setIsMessageValid(true);
    } else if (
      enteredName !== "" &&
      enteredEmail === "" &&
      enteredMessage !== ""
    ) {
      setIsNameValid(false);
      setIsEmailValid(true);
      setIsMessageValid(false);
    } else if (
      enteredName !== "" &&
      enteredEmail !== "" &&
      enteredMessage === ""
    ) {
      setIsNameValid(false);
      setIsEmailValid(false);
      setIsMessageValid(true);
    } else if (
      enteredName !== "" &&
      enteredEmail !== "" &&
      enteredMessage !== ""
    ) {
      setIsNameValid(false);
      setIsEmailValid(false);
      setIsMessageValid(false);
    }

    if (enteredName && enteredEmail && enteredMessage) {
      setLoading(true)
      emailjs.sendForm('service_lqvdu5q', 'template_0u0l1po', form.current, '1F_gLECR_ezmkYvj-')
      .then((result) => {
          console.log(result.text);
          setSuccess(true);
          setLoading(false)
      }, (error) => {
          setFailure(true)
          setLoading(false)
          console.log(error.text);
      });

      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    }
  };

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <div className={classes.form}>
          <h1 className="text-white text-center">Let's Get in Touch</h1>
          {loading && <p className="text-center" style={{color: '#81E6D9'}}>Loading...</p>}
          {success && (
            <Alert variant='success' className="text-center mt-3" onClose={() => setSuccess(false)} dismissible>
              Your message has been sent succesfully!
            </Alert>
          )}
          {failure && (
            <Alert variant='danger' className="text-center mt-3" onClose={() => setFailure(false)} dismissible>
              Something went Wrong. Please try again!
            </Alert>
          )}
          <form
            className="d-flex flex-column align-items-center mt-3"
            onSubmit={sendEmail}
            ref={form}
          >
            <div className={`mt-5 ${classes.inputContainer}`}>
              <input
                type="name"
                placeholder="Name:"
                className={classes.input}
                ref={name}
                name = "name"
              />
              {isNameValid && (
                <p className={classes.error}>Please enter a valid name</p>
              )}
            </div>
            <div className={classes.inputContainer}>
              <input
                type="email"
                className={classes.input}
                placeholder="name@example.com"
                ref={email}
                name="email"
              />
              {isEmailValid && (
                <p className={classes.error}>Please enter a valid Email</p>
              )}
            </div>
            <div className={classes.inputContainer}>
              <textarea
                className={classes.input}
                rows="3"
                placeholder="Your message:"
                ref={message}
                name="message"
              ></textarea>
              {isMessageValid && (
                <p className={classes.error}>Please enter a valid Message</p>
              )}
            </div>
            <Button>Submit</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}
