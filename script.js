let allNotes = {
  notesTitles: ["Ba", "Aufgabe"],
  notes: ["Banana", "Rasen mähen"],
  trashNotesTitles: [],
  trashNotes: [],
  archivNotesTitles: [],
  archivNotes: [],
};

function init() {
  getFromLocalStorage();
  renderNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function addNote() {
  let noteTitleInputRef = document.getElementById("noteTitleInput");
  let noteTitleInput = noteTitleInputRef.value;
  let noteInputRef = document.getElementById("noteInput");
  let noteInput = noteInputRef.value;

  allNotes.notesTitles.push(noteTitleInput);
  allNotes.notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
  noteTitleInputRef.value = "";
}

function moveNotes(indexNote, startKey, destinationKey) {
  let trashNote = allNotes[startKey].splice(indexNote, 1);
  allNotes[destinationKey].push(trashNote[0]);
  let trashNoteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
  allNotes[destinationKey + "Titles"].push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  renderTrashNotes();
}

function archiveNotes() {
  localStorage.setItem("notes", JSON.stringify(allNotes.notes));
  localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
}

function getFromLocalStorage() {
  allNotes.archivNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
  allNotes.archivNotes = JSON.parse(localStorage.getItem("notes"));

  if (allNotes.archivNotes != null) {
    allNotes.notesTitles = allNotes.archivNotesTitles;
    allNotes.notes = allNotes.archivNotes;
  }
}
