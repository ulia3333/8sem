import React, { useState } from "react";
import Select from 'react-select';

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
        break;
      }
    }
  };

  const handleOperatorChange = (event) => {
    setSelectedOperator(event.target.value);
  };

  const options = countryData.map(country => ({
    value: country.country,
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {country.emoji}
        <span style={{ marginLeft: '10px' }}>{country.country}</span>
      </div>
    )
  }));

  const handleCountryChange = selectedOption => {
    const selectedCountry = countryData.find(
      country => country.country === selectedOption.value
    );
    setCountryInfo(selectedCountry || {});
    if (selectedCountry) {
      setPhoneNumber('+' + selectedCountry.countryCode + ' ');
    } else {
      setPhoneNumber('');
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
      {countryInfo.country && (
        <div>
          <p>Страна: {countryInfo.country}</p>
          <p>Операторы:</p>
          {countryInfo.operators.map((operator) => (
            <label key={operator}>
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
          <p>Флаг страны: {countryInfo.emoji}</p>
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Select
    options={options}
    onChange={handleCountryChange}
    getOptionLabel={option => option.label}
    placeholder="Выберите страну"
    styles={{ control: (base) => ({ ...base, width: '180px' }) }}
  />
</div>

    </div>
  );
}

export default PhoneNumberFormatter;

