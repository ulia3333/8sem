import React, { useState } from "react";

// Определение структуры данных для хранения информации о странах и операторах
const countryData = [
  {
    country: "Беларусь",
    countryCode: "375",
    format: "(XX) XX-XX-XXX",
    operators: ["МТС", "A1", "life:)"],
    emoji: <img src="https://flagcdn.com/by.svg" height={"30px"}/>,
  },
  {
    country: "Россия",
    countryCode: "7",
    format: "(XXX) XXX-XX-XX",
    operators: ["Билайн", "Мегафон", "МТС", "Tele2"],
    emoji: <img src="https://flagcdn.com/ru.svg" height={"30px"}/>,
  },
  {
    country: "Украина",
    countryCode: "380",
    format: "(XX) XXX-XX-XX",
    operators: ["Lifecell", "Vodafone", "Київстар"],
    emoji: <img src="https://flagcdn.com/ua.svg" height={"30px"}/>,
  },
  {
    country: "Польша",
    countryCode: "48",
    format: "XXX-XXX-XXX",
    operators: ["Orange", "Play", "Plus", "T-mobile"],
    emoji: <img src="https://flagcdn.com/pl.svg" height={"30px"}/>,
  },
  {
    country: "Литва",
    countryCode: "370",
    format: "(XX) XXX-XX-XX",
    operators: ["Telia", "Bite", "Tele2"],
    emoji: <img src="https://flagcdn.com/lt.svg" height={"30px"}/>,
  },
  {
    country: "Латвия",
    countryCode: "371",
    format: "XXXX-XXXX",
    operators: ["LMT", "Tele2", "Bite"],
    emoji: <img src="https://flagcdn.com/lv.svg" height={"30px"}/>,
  },
];

function PhoneNumberFormatter() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryInfo, setCountryInfo] = useState({});
  const [selectedOperator, setSelectedOperator] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");


  const handleCountryChange = (event) => {
    if (event.target.value === "") {
      setPhoneNumber("");
      setCountryInfo({});
      setSelectedOperator(""); 
    } else {
      const selectedCountry = countryData.find(
        (country) => country.country === event.target.value
      );
      setCountryInfo(selectedCountry);
      setPhoneNumber("+" + selectedCountry.countryCode);
    }
  };
  

  const handleOperatorChange = (event) => {
    setSelectedOperator(event.target.value);
  };
  const formatPhoneNumber = (number, format) => {
    let result = "";
    let index = 0;

    for (const char of format) {
      if (char === "X") {
        result += number[index] || "";
        index++;
      } else {
        result += char;
      }
    }

    return result;
  };

  const handleBlur = (event) => {
    const inputNumber = event.target.value.replace(/\D+/g, "");
  
    for (const data of countryData) {
      if (inputNumber.startsWith(data.countryCode)) {
        const formattedNumber = formatPhoneNumber(
          inputNumber.slice(data.countryCode.length),
          data.format
        );
        setPhoneNumber("+" + data.countryCode + " " + formattedNumber);
        setCountryInfo(data);
        setSelectedCountry(data.country);
        break;
      }
    }
  };

  return (
    <div>
       <input
        type="text"
        placeholder="Введите номер телефона"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
        onBlur={handleBlur}
      />
      <select value={selectedCountry} onChange={handleCountryChange}>
  <option value="">Не указано</option>
  {countryData.map((country, index) => (
    <option key={index} value={country.country}>
      {country.country} {country.emoji}
    </option>
  ))}
</select>


      <div>
        {countryInfo.operators?.map((operator, index) => (
          <label key={index}>
            <input
              type="radio"
              name="operator"
              value={operator}
              checked={selectedOperator === operator}
              onChange={handleOperatorChange}
            />
            {operator}
          </label>
        ))}
      </div>
     
      {countryInfo.country && (
        <div>
      <p>Страна: {countryInfo.country}</p> 
      <p>Операторы: {countryInfo.operators.join(", ")}</p>
      <p>Флаг страны: {countryInfo.emoji}</p>
    </div>
  )}
</div>);
}

export default PhoneNumberFormatter;

