function getNoteTemplate(indexNote) {
  return `<div class="displayNote">
    <p class="noteTitle">${notesTitles[indexNote]}</p>
    <p>${notes[indexNote]}</p>
    <div ="noteButtons">
      <button class="btn" onclick="pushToTrash(${indexNote})">X</button>
    </div>
  </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="displayNote">
  <p class="noteTitle">${trashNotesTitles[indexTrashNote]}</p>
  <p>${trashNotes[indexTrashNote]}</p>
  <div ="noteButtons">
    <button onclick="restoreTrashedNote(${indexTrashNote})">N</button>
    <button class="btn" onclick="deleteNote(${indexTrashNote})">X</button>
  </div>
  </div>`;
}
