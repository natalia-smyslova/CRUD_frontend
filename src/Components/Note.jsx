import Button from './Button';
import PropTypes from 'prop-types';

function Note({ note, deleteNote }) {
  return (
    <div className="note">
      <p className="note__text">{note.newNoteText}</p>
      <Button icon="&#10006;" color="red" fontSize="1.2rem" element="note" callback={() => deleteNote(note.id)} />
    </div>
  );
}


Note.propTypes = {
    note: PropTypes.object,
    deleteNote: PropTypes.func,
    newNoteText: PropTypes.string,
    id: PropTypes.string,
  }

export default Note