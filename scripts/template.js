function getNoteTemplate(indexNote) {
  return `<div class="displayNote">
    <p class="noteTitle">${allNotes.notesTitles[indexNote]}</p>
    <p>${allNotes.notes[indexNote]}</p>
    <div ="noteButtons">
      <button class="btn" onclick="moveNotes(${indexNote}, 'notes', 'trashNotes')">X</button>
    </div>
  </div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<div class="displayNote">
  <p class="noteTitle">${allNotes.trashNotesTitles[indexTrashNote]}</p>
  <p>${allNotes.trashNotes[indexTrashNote]}</p>
  <div ="noteButtons">
    <button onclick="moveNotes(${indexTrashNote}, 'trashNotes', 'notes')">N</button>
    <button class="btn" onclick="deleteNote(${indexTrashNote})">X</button>
  </div>
  </div>`;
}
