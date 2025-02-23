let notesTitles = ["Ba", "Aufgabe"];
let notes = ["Banana", "Rasen mähen"];
let trashNotesTitles = [];
let trashNotes = [];

function init() {
  getFromLocalStorage();
  renderNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
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

  notesTitles.push(noteTitleInput);
  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
  noteTitleInputRef.value = "";
}

function pushToTrash(indexNote) {
  let trashNote = notes.splice(indexNote, 1);
  trashNotes.push(trashNote[0]);
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  trashNotesTitles.push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes();
}

function restoreTrashedNote(indexTrashNote) {
  let trashedNoteTitle = trashNotesTitles.splice(indexTrashNote, 1);
  notesTitles.push(trashedNoteTitle[0]);
  let trashedNote = trashNotes.splice(indexTrashNote, 1);
  notes.push(trashedNote[0]);
  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  trashNotes.splice(indexTrashNote, 1);
  renderTrashNotes();
}

function archiveNotes() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage() {
  let notesTitlesArchive = JSON.parse(localStorage.getItem("notesTitles"));
  let notesArchive = JSON.parse(localStorage.getItem("notes"));

  if (notesArchive != null) {
    notesTitles = notesTitlesArchive;
    notes = notesArchive;
  }
}
