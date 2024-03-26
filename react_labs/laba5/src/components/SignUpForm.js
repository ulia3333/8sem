import React, { useState } from "react";
import SignUpEmailInput from "./SignUpEmailInput.js";
import SignUpPasswordInput from "./SignUpPasswordInput.js";
import PhoneNumberFormatter from './PhoneNumberFormatter';

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Регистрация завершена");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Почта</h3>
      <SignUpEmailInput
        setEmail={setEmail}
        setIsValidEmail={setIsValidEmail}
      />
      <h3>Пароль</h3>
      <SignUpPasswordInput
        setPassword={setPassword}
        setIsValidPassword={setIsValidPassword}
      />
      <h3>ФИО</h3>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Фамилия"
      />
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Имя"
      />
      <input
        type="text"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        placeholder="Отчество"
      />
      <h3>Гендер</h3>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          Мужской
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          Женский
        </label>
      </div>
      <h3>День Рождения</h3>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <h3>Номер телефона</h3>
      <PhoneNumberFormatter/>
      <button type="submit" disabled={!isValidEmail || !isValidPassword}>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default SignUpForm;