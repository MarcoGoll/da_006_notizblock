let noteTitles = [];
let notes = [];

let trashNoteTitles = [];
let trashNotes = [];


function init() {
    loadFromLocalStorage();
    renderNotes();
    renderTrashNotes();
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

function trashNote(index) {
    let trashNote = notes.splice(index, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = noteTitles.splice(index, 1);
    trashNoteTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(index) {
    trashNotes.splice(index, 1);
    renderTrashNotes();
}

function saveToLocalStorage() {
    localStorage.setItem("noteTitles", JSON.stringify(noteTitles)); /*JSON.stringify(myData) ==> Array wird als string abgespeichert, da die Funktion ein String verlangt TODO: doku lesen / in Dev-Knowledge aufnehmen*/
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trashNoteTitles", JSON.stringify(trashNoteTitles));
    localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
}

function loadFromLocalStorage() {
    let loadedNoteTitle = JSON.parse(localStorage.getItem("noteTitles"));
    let loadedNote = JSON.parse(localStorage.getItem("notes"));
    let loadedTrashNoteTitle = JSON.parse(localStorage.getItem("trashNoteTitles"));
    let loadedTrashNote = JSON.parse(localStorage.getItem("trashNotes"));

    if (loadedNoteTitle == null || loadedNote == null || loadedTrashNoteTitle == null || loadedTrashNote == null) {
        console.info("Mindestens eines der local gespeicherten Notiz-Daten ist nicht vorhanden. Die Notizen wurden daher nicht geladen.");
    } else {
        noteTitles = loadedNoteTitle;
        notes = loadedNote;
        trashNoteTitles = loadedTrashNoteTitle;
        trashNotes = loadedTrashNote;
    }
}

// notizen archivieren