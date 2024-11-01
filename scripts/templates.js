// Sammel hier alle Funktionen ohne richtigen JS code also nur Funktionen die HTML-Templates ausspucken

function getNoteTemplate(i) {
    return `<div class="note normalNote">
    <div class="note__info">
        <h3>${noteTitles[i]}</h3>
        <p>${notes[i]}</p>
    </div>
    <div class="note__control">
        <button class="stdBtn trashBtn" onclick="trashNote(${i},'fromNotes')">T</button>
        <button class="stdBtn archiveBtn" onclick="archiveNote(${i},'fromNotes')">A</button>
    </div>
</div>`;
}

function getTrashNoteTemplate(i) {
    return `<div class="note trashNote">
                <div class="note__info">
                    <h3>${trashNoteTitles[i]}</h3>
                    <p>${trashNotes[i]}</p>
                </div>
                <div class="note__control">
                    <button class="stdBtn deleteBtn" onclick="deleteNote(${i}, 'fromTrash')">X</button>
                    <button class="stdBtn archiveBtn" onclick="archiveNote(${i},'fromTrash')">A</button>
                    <button class="stdBtn noteBtn" onclick="recoverNote(${i},'fromTrash')">N</button>
                </div>
            </div>`;
}

function getArchiveNoteTemplate(i) {
    return `<div class="note archiveNote">
                <div class="note__info">
                    <h3>${archiveNoteTitles[i]}</h3>
                    <p>${archiveNotes[i]}</p>
                </div>
                <div class="note__control">
                    <button class="stdBtn trashBtn" onclick="trashNote(${i}, 'fromArchive')">T</button>
                    <button class="stdBtn noteBtn" onclick="recoverNote(${i}, 'fromArchive')">N</button>
                </div>
            </div>`;
}