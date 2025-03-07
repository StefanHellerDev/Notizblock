function getNoteTemplate(indexNote) {
  return `<div class="displayNote">
    <p class="noteTitle">${allNotes.notesTitles[indexNote]}</p>
    <p>${allNotes.notes[indexNote]}</p>
    <div ="noteButtons">
      <button class="btn" onclick="pushToTrash(${indexNote})">X</button>
    </div>
  </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="displayNote">
  <p class="noteTitle">${allNotes.trashNotesTitles[indexTrashNote]}</p>
  <p>${allNotes.trashNotes[indexTrashNote]}</p>
  <div ="noteButtons">
    <button onclick="restoreTrashedNote(${indexTrashNote})">N</button>
    <button class="btn" onclick="deleteNote(${indexTrashNote})">X</button>
  </div>
  </div>`;
}
