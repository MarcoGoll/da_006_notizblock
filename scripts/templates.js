// Sammel hier alle Funktionen ohne richtigen JS code also nur Funktionen die HTML-Templates ausspucken

function getNoteTemplate(i) {
    return `<p class="note"><b>${noteTitles[i]}:</b> + ${notes[i]}<button class="closeBtn" onclick="trashNote(${i})">x</button></p>`;
}

function getTrashNoteTemplate(i) {
    return `<p class="note"><b>${trashNoteTitles[i]}:</b> + ${trashNotes[i]}<button class="closeBtn" onclick="deleteNote(${i})">x</button></p>`;
}
