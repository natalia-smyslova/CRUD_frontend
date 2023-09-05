import { useEffect, useState } from 'react';
import './App.css';
import Note from './components/Note';
import Button from './components/Button';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNoteText, setNewNoteText] = useState('');

  const port = 'http://localhost:7070';

  const updateNotes = async () => {
    const request = await fetch(port + '/notes');
    const response = await request.json();
    setNotes(response);
  };
  useEffect(() => updateNotes, []);

  const onChange = (e) => {
    setNewNoteText(e.target.value);
  };

  const addNote = async (e) => {
    e.preventDefault();
    let formContent = document.querySelector('textarea');
    formContent.textContent = ' ';
    await fetch(port + '/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ newNoteText }),
    });
    await updateNotes();
    setNewNoteText(' ');
  };

  const deleteNote = async (id) => {
    await fetch(port + `/notes/${id}`, {
      method: 'DELETE',
    });
    await updateNotes();
  };

  return (
    <div className="notes">
      <header className="header">
        <h1 className="header__title">Notes</h1>
        <Button icon="&#8634;" color="#25df25" fontSize="1.5rem" callback={updateNotes} />
      </header>

      <ul className="notes__list">
        {notes.map(n => <li className="notes__item" key={n.id}><Note note={n} deleteNote={deleteNote} /></li>)}
      </ul>

      <footer className="footer">
        <h2 className="footer__title">New Note</h2>
        <form className="footer-wrapper" onSubmit={addNote}>
          <textarea className="footer__text" cols="30" rows="5" onChange={onChange} value={newNoteText}></textarea>
          <Button icon="&#10148;" color="black" fontSize="1.5rem" element="footer" />
        </form>
      </footer>
    </div>
  );
}

export default App