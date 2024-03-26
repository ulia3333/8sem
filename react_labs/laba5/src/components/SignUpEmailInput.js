import React, { useState } from "react";

const SignUpEmailInput = ({ setEmail, setIsValidEmail }) => {
  const [email, setEmailLocal] = useState("");

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (e) => {
    setEmailLocal(e.target.value);
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  return (
    <input
      type="email"
      value={email}
      onChange={handleChange}
      placeholder="Введите Email"
      autocomplete="off"
    />
  );
};

export default SignUpEmailInput;
