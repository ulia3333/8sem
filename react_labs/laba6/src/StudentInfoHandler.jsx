import React, { useState } from 'react';
import StudentInfo from './StudentInfo';

const StudentInfoHandler = () => {
  const [student, setStudent] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const fullName = formData.get('fullName');
    const birthDate = new Date(formData.get('birthDate'));
    const admissionYear = parseInt(formData.get('admissionYear'));
    const faculty = formData.get('faculty');
    const group = formData.get('group');
    const specialty = formData.get('specialty');
    const email = formData.get('email');
    const phone = formData.get('phone');

    const age = new Date().getFullYear() - birthDate.getFullYear();
    const course = new Date().getFullYear() - admissionYear;
    const courseText = course > 4 ? 'Окончил университет' : course;
    const emailProvider = email.split('@')[1];
    const phoneProvider = getPhoneProvider(phone);

    setStudent({
      fullName,
      age,
      faculty,
      course: courseText,
      group,
      specialty,
      email,
      emailProvider,
      phone,
      phoneProvider,
    });
  };

  const getPhoneProvider = (phone) => {
    const phoneNumber = phone.replace(/[-\s]/g, '');

    if (/^(?:\+375|80)29(?:1|3|6|9)\d{6}$/.test(phoneNumber) || /^(?:\+375|80)44\d{7}$/.test(phoneNumber)) {
      return 'A1 (Velcom)';
    } else if (/^(?:\+375|80)29(?:2|5|7|8)\d{6}$/.test(phoneNumber) || /^(?:\+375|80)33\d{7}$/.test(phoneNumber)) {
      return 'МТС';
    } else if (/^(?:\+375|80)25\d{7}$/.test(phoneNumber)) {
      return 'life:)';
    } else if (/^(?:\+375|80)17\d{7}$/.test(phoneNumber)) {
      return 'Белтелеком (городской)';
    } else {
      return 'Неизвестный оператор';
    }
  };

  return (
    <>
      <StudentInfo handleSubmit={handleSubmit} />
      {student && (
        <table>
          <tbody>
            <tr>
              <td>ФИО</td>
              <td>{student.fullName}</td>
            </tr>
            <tr>
              <td>Текущий возраст студента</td>
              <td>{student.age} лет</td>
            </tr>
            <tr>
              <td>Факультет, курс, группа</td>
              <td>{`${student.faculty}, ${student.course}, ${student.group}`}</td>
            </tr>
            <tr>
              <td>Специальность</td>
              <td>{student.specialty}</td>
            </tr>
            <tr>
              <td>Электронная почта</td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <td>Оператор услуг электронной почты</td>
              <td>{student.emailProvider}</td>
            </tr>
            <tr>
              <td>Номер телефона</td>
              <td>{student.phone}</td>
            </tr>
            <tr>
              <td>Оператор услуг мобильной связи</td>
              <td>{student.phoneProvider}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default StudentInfoHandler;
