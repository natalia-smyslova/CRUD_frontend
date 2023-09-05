import { useEffect, useState } from 'react'
import './App.css'
import Note from './Components/Note'
import Button from './Components/Button'

function App() {

  const url = 'http://localhost:7070/';

  const [notes, setNotes] = useState([]);

  const [newNote, setNewNote] = useState('');

  const updateNotes = () => fetch(url + '/notes')
  .then(res => res.json())
  .then(json => setNotes(json));

useEffect(() => updateNotes, []);

  const onChange = (e) => setNewNote(e.target.value);

  const addNote = async (e) => {
    e.preventDefault();
    await fetch(url + '/notes', {
      method: 'POST',
      body: newNote,
    });
    await updateNotes();
  };


  // const addNote = async (e) => {
  //   e.preventDefault();

  //   const request = fetch(url + '/notes', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newNote),
  //   });

  //   const result = await request;
  //   const json = await result.json();
  //   console.log(json);
  //   const status = json.status;
  //   console.log(status);
  // };

  const deleteNote = async (id) => {
    const request = fetch(url + '/notes/${id}', {
      method: 'DELETE',
    })
  };

  return (
    <div className='notes'>

      <header className='header'>
        <h1 className='header__title'>Notes</h1>
        <Button element='header' icon="&#8634;" color="#25df25" fontSize="1.5rem" callback={updateNotes} />
      </header>

      <ul className='notes__list'>
        {notes.map((note, id) => <li className='note' key={id}>
          <Note note={note} deleteNote={deleteNote} />
        </li>)}
      </ul>

      <footer className='footer'>
        <h4 className='footer__title'>New Note</h4>
        <form className='footer__form' onSubmit={addNote}>
          <textarea className='footer__text' onChange={onChange}></textarea>
          <Button element='footer' icon="&#10148;" color="black" fontSize="1.5rem" />
        </form>
      </footer>

    </div>
  )
}

export default App
