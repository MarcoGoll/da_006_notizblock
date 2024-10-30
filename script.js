let notes = ['Äpfel', 'Bannanen', 'Birnen'];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        contentRef.innerHTML += getNoteTemplate(note);
    }
}

function getNoteTemplate(note) {
    return `<p class="note">+ ${note}</p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('inpNewNote');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = '';
}

// notizen löschen
// notizen archivieren