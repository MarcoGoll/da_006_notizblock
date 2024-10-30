let notes = ['Äpfel', 'Bannanen', 'Birnen'];

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += getNoteTemplate(i);
    }
}

function getNoteTemplate(i) {
    return `<p class="note">+ ${notes[i]}<button class="closeBtn" onclick="deleteNote(${i})">x</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('inpNewNote');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = '';
}

function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
}
// notizen archivieren