import React from "react";
import { useState } from "react";
import LinkButton from "../../Components/LinkButton/LinkButton.js";
import styles from "./Register.module.css";
import Input from "../../Components/Input/Input.js";

function Register(props) {
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    const res = await fetch("http://localhost:3000/account/register", {
      method: "POST",
      body: {
        phoneNumber: e.closest('input[name="phonenumber"]').value,
        name: e.closest('input[name="name"]').value,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <article className={styles.article}>
      <form className={styles.form}>
        <Input
          placeholder="123-456-7890"
          text="Your phone number"
          name="phoneNumber"
          type="tel"
        />
        <Input
          placeholder="John Doe"
          text="Your name"
          name="name"
          type="text"
        />
        <LinkButton
          type="primary"
          text="Submit"
          style="secondary"
          onSubmit={handleSubmit}
        />
      </form>
    </article>
  );
}

export default Register;
