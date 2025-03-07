// let notesTitles = ["Ba", "Aufgabe"];
// let notes = ["Banana", "Rasen mähen"];
// let trashNotesTitles = [];
// let trashNotes = [];
// let archivNotesTitles = [];
// let archivNotes = [];

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

function pushToTrash(indexNote) {
  let trashNote = allNotes.notes.splice(indexNote, 1);
  allNotes.trashNotes.push(trashNote[0]);
  let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
  allNotes.trashNotesTitles.push(trashNoteTitle[0]);
  renderNotes();
  renderTrashNotes();
}

function restoreTrashedNote(indexTrashNote) {
  let trashedNoteTitle = allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  allNotes.notesTitles.push(trashedNoteTitle[0]);
  let trashedNote = allNotes.trashNotes.splice(indexTrashNote, 1);
  allNotes.notes.push(trashedNote[0]);
  renderNotes();
  renderTrashNotes();
}

function deleteNote(indexTrashNote) {
  allNotes.trashNotes.splice(indexTrashNote, 1);
  renderTrashNotes();
}

function archiveNotes() {
  localStorage.setItem("notesTitles", JSON.stringify(allNotes.notesTitles));
  localStorage.setItem("notes", JSON.stringify(allNotes.notes));
}

function getFromLocalStorage() {
  allNotes.archivNotesTitles = JSON.parse(localStorage.getItem("notesTitles"));
  allNotes.archivNotes = JSON.parse(localStorage.getItem("notes"));

  if (allNotes.archivNotes != null) {
    allNotes.notesTitles = allNotes.archivNotesTitles;
    allNotes.notes = allNotes.archivNotes;
  }
}
