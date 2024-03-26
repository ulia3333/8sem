import {useState} from "react";

export function Form({notes, setNotes, date}) {

    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const addButtonHandler = (e) => {
        setNotes([...notes, {
            noteDate: date,
            noteTitle: title,
            noteDesc: text
        }])
    }

    const deleteAllButtonHandler = (e) => {
        setNotes(notes.filter(note => note.noteDate.valueOf() !== date.valueOf()));
    }

    const deleteFirstNoteButtonHandler = (e) => {
        const noteToDelete = notes.findIndex(note => note.noteDate.valueOf() === date.valueOf());

        setNotes(notes.filter((note, index) => index !== noteToDelete));

        
    }
    const deleteLastNoteButtonHandler = (e) => {
        let arr = [...notes];

       arr.reverse();
        const noteToDelete = arr.length-1 - arr.findIndex(note => note.noteDate.valueOf() === date.valueOf());

        setNotes(notes.filter((note, index) => index !== noteToDelete));
    }


    return (

        <form className="myNoteForm">

            <div className="date">{date.toLocaleDateString()}</div>

            <input className="myInput" type="text" placeholder="title"
                   value={title} onChange={(event => setTitle(event.target.value))}
            />

            <textarea className="myInput myTextarea"
                      value={text} onChange={(event => setText(event.target.value))}
                      placeholder="description"
            />


            <div className="buttons">
                <input type="button" className="button" onClick={addButtonHandler} value="Добавить заметку"/>
                <input type="button" className="button" onClick={deleteAllButtonHandler} value="Удалить все"/>
                <input type="button" className="button" onClick={deleteFirstNoteButtonHandler} value="Удалить первую"/>
                <input type="button"  className="button" onClick={deleteLastNoteButtonHandler} value="Удалить последнюю        "/>
            </div>


        </form>

    );
}