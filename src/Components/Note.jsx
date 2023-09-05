import Button from "./Button";

function Note({ note, deleteNote }) {

    return (
        <div className="note">
            <p className="note__text">{note.content}</p>
            <Button element='note' icon="&#10006;" color="red" fontSize="1.2rem" callback={deleteNote(note.id)} />
        </div>
    )
}

export default Note;