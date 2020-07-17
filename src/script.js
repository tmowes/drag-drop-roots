/** help */
function log(message) {
  console.log('>: ', message);
}

/** app */
const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('drag', drag);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  // log('CARD: Start Drag');
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
  this.classList.add('is-dragging');
}
function drag() {
  // log('CARD: Is Dragging');
}
function dragend() {
  // log('CARD: End Drag');
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
  this.classList.remove('is-dragging');
}

dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', dragenter);
  dropzone.addEventListener('dragover', dragover);
  dropzone.addEventListener('dragleave', dragleave);
  dropzone.addEventListener('drop', drop);
});

function dragenter() {
  // log('DROPZONE: Enter Zone');
}
function dragover() {
  // log('DROPZONE: Over Zone');
  this.classList.add('over');
  const cardBeingDragged = document.querySelector('.is-dragging');

  this.appendChild(cardBeingDragged);
}
function dragleave() {
  // log('DROPZONE: Leave Zone');
  this.classList.remove('over');
}
function drop() {
  // log('DROPZONE: Dropped');
  this.classList.remove('over');

}
