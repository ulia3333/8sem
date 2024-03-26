import React from 'react';
import StudentInfoHandler from './StudentInfoHandler';
import Notes from './Notes';
import './App.css';

function App() {
  return (
    <div>
      <h1>Информация о студенте</h1>
      <StudentInfoHandler />
      <h1>Заметки</h1>
      <Notes />
    </div>
  );
}

export default App;
