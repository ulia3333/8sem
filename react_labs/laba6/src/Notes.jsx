import React, { useState } from 'react';
import './Notes.css';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const title = formData.get('title');
    const date = formData.get('date');
    const text = formData.get('text');

    setNotes([...notes, { title, date, text }]);
    event.target.reset();
  };

  const handleDeleteFirst = () => {
    setNotes(notes.slice(1));
  };

  const handleDeleteLast = () => {
    setNotes(notes.slice(0, -1));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Заголовок заметки" required />
        <input type="date" name="date" placeholder="Дата заметки" required />
        <textarea name="text" placeholder="Текст заметки" required></textarea>
        <button type="submit">Добавить заметку</button>
      </form>
      {notes.map((note, index) => (
        <div key={index} className={index >= 7 ? 'note red' : 'note'}>
          <h3>{note.title}</h3>
          <p>{note.date}</p>
          <p>{note.text}</p>
          {index === 7 && <p>У вас слишком много заметок</p>}
        </div>
      ))}
      {notes.length > 3 && (
        <>
          <button onClick={handleDeleteFirst}>Удалить первую заметку</button>
          <button onClick={handleDeleteLast}>Удалить последнюю заметку</button>
        </>
      )}
    </>
  );
};

export default Notes;
