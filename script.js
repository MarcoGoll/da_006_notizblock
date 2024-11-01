let noteTitles = [];
let notes = [];

let trashNoteTitles = [];
let trashNotes = [];

let archiveNoteTitles = [];
let archiveNotes = [];

function init() {
    loadFromLocalStorage();
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

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

function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archiveContent');
    archiveContentRef.innerHTML = '';
    for (let i = 0; i < archiveNotes.length; i++) {
        archiveContentRef.innerHTML += getArchiveNoteTemplate(i);
    }
}

function addNote() {
    let noteInputRef = document.getElementById('inpNewNote');
    let noteInput = noteInputRef.value;
    let noteInputTitleRef = document.getElementById('inpNewNoteTitle');
    let noteInputTitle = noteInputTitleRef.value;

    noteTitles.push(noteInputTitle);
    notes.push(noteInput);
    renderNotes();
    noteInputRef.value = '';
    noteInputTitleRef.value = '';
}

//
function recoverNote(index, from) {
    let note = '';
    let noteTitle = '';
    if (from == "fromTrash") {
        note = trashNotes.splice(index, 1);
        noteTitle = trashNoteTitles.splice(index, 1);

    } else if (from == "fromArchive") {
        note = archiveNotes.splice(index, 1);
        noteTitle = archiveNoteTitles.splice(index, 1);
    }
    notes.push(note[0]);
    noteTitles.push(noteTitle[0]);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function trashNote(index, from) {
    let trashNote = '';
    let trashNoteTitle = '';
    if (from == "fromNotes") {
        trashNote = notes.splice(index, 1);
        trashNoteTitle = noteTitles.splice(index, 1);

    } else if (from == "fromArchive") {
        trashNote = archiveNotes.splice(index, 1);
        trashNoteTitle = archiveNoteTitles.splice(index, 1);
    }
    trashNotes.push(trashNote[0]);
    trashNoteTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function deleteNote(index) {
    trashNotes.splice(index, 1); // Löschen geht nur vom Trash
    renderTrashNotes();
}

function archiveNote(index, from) {
    let archiveNote = '';
    let archiveNoteTitle = '';
    if (from == "fromNotes") {
        archiveNote = notes.splice(index, 1);
        archiveNoteTitle = noteTitles.splice(index, 1);
    } else if (from == "fromTrash") {
        archiveNote = trashNotes.splice(index, 1);
        archiveNoteTitle = trashNoteTitles.splice(index, 1);
    }
    archiveNotes.push(archiveNote[0]); // tbd ifelse add to welchem Array?!
    archiveNoteTitles.push(archiveNoteTitle[0]); // tbd ifelse add to welchem Array?!
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("noteTitles", JSON.stringify(noteTitles)); /*JSON.stringify(myData) ==> Array wird als string abgespeichert, da die Funktion ein String verlangt TODO: doku lesen / in Dev-Knowledge aufnehmen*/
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
    localStorage.setItem("archiveNoteTitles", JSON.stringify(archiveNoteTitles));
    localStorage.setItem("archiveNotes", JSON.stringify(archiveNotes));
}

function loadFromLocalStorage() {
    let loadedNoteTitle = JSON.parse(localStorage.getItem("noteTitles"));
    let loadedNote = JSON.parse(localStorage.getItem("notes"));
    let loadedTrashNoteTitle = JSON.parse(localStorage.getItem("trashNoteTitles"));
    let loadedTrashNote = JSON.parse(localStorage.getItem("trashNotes"));
    let loadedArchiveNoteTitle = JSON.parse(localStorage.getItem("archiveNoteTitles"));
    let loadedArchiveNote = JSON.parse(localStorage.getItem("archiveNotes"));

    if (loadedNoteTitle == null || loadedNote == null || loadedTrashNoteTitle == null || loadedTrashNote == null || loadedArchiveNoteTitle == null || loadedArchiveNote == null) {
        console.info("Mindestens eines der local gespeicherten Notiz-Daten ist nicht vorhanden. Die Notizen wurden daher nicht geladen.");
    } else {
        noteTitles = loadedNoteTitle;
        notes = loadedNote;
        trashNoteTitles = loadedTrashNoteTitle;
        trashNotes = loadedTrashNote;
        archiveNoteTitles = loadedArchiveNoteTitle;
        archiveNotes = loadedArchiveNote;
    }
}
