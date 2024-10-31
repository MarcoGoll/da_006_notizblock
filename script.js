let notes = ['Äpfel', 'Bannanen', 'Birnen'];
let trashNotes = [];


function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';
    for (let i = 0; i < notes.length; i++) {
        contentRef.innerHTML += getNoteTemplate(i);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashContent');
    trashContentRef.innerHTML = '';
    for (let i = 0; i < trashNotes.length; i++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(i);
    }
}

function getNoteTemplate(i) {
    return `<p class="note">+ ${notes[i]}<button class="closeBtn" onclick="trashNote(${i})">x</button></p>`;
}

function getTrashNoteTemplate(i) {
    return `<p class="note">+ ${trashNotes[i]}<button class="closeBtn" onclick="deleteNote(${i})">x</button></p>`;
}

function addNote() {
    let noteInputRef = document.getElementById('inpNewNote');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = '';
}

function trashNote(index) {
    let trashNote = notes.splice(index, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(index) {
    trashNotes.splice(index, 1);
    renderTrashNotes();
}

// notizen archivieren