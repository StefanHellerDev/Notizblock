function getNoteTemplate(indexNote) {
  return `<p>+ Title: ${notesTitles[indexNote]} --> ${notes[indexNote]} <button class="btn" onclick="pushToTrash(${indexNote})">X</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+ Title: ${trashNotesTitles[indexTrashNote]} --> ${trashNotes[indexTrashNote]} <button onclick="restoreTrashedNote(${indexTrashNote})">Wiederherstellen</button> <button class="btn" onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}
