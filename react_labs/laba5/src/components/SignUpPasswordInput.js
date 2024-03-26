import React, { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

const SignUpPasswordInput = ({ setPassword, setIsValidPassword }) => {
  const [password, setPasswordLocal] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const checkPasswordStrength = (password) => {
      let strength = 0;

      if (/[a-z]/.test(password)) strength++;
      if (/[A-Z]/.test(password)) strength++;
      if (/\d/.test(password)) strength++;
      if (/\W/.test(password)) strength++;

      setPasswordStrength(strength);
    };

    checkPasswordStrength(password);
  }, [password]);

  useEffect(() => {
    setIsValidPassword(password === confirmPassword && passwordStrength >= 1);
  }, [password, confirmPassword, passwordStrength, setIsValidPassword]);

  return (
    <>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPasswordLocal(e.target.value);
          setPassword(e.target.value);
        }}
        placeholder="Пароль"
        autocomplete="off"

      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Подтвердите пароль"
      />
      {password && confirmPassword && password !== confirmPassword && (
        <p>Пароли не совпадают</p>
      )}
      <ProgressBar value={passwordStrength * 25} />
    </>
  );
};

export default SignUpPasswordInput;
