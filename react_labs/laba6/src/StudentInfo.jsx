import React from 'react';

const StudentInfo = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" name="fullName" placeholder="ФИО" required />
      <input type="date" name="birthDate" placeholder="Дата рождения" required />
      <input type="number" name="admissionYear" placeholder="Год поступления" required />
      <input type="text" name="faculty" placeholder="Факультет" required />
      <input type="text" name="group" placeholder="Группа" required />
      <input type="text" name="specialty" placeholder="Специальность" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone" placeholder="Телефон" required />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default StudentInfo;
