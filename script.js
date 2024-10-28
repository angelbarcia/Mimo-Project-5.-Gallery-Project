let modal = document.querySelector("#modal");
let modalContent = document.querySelector("#modal-content");

function showModal(thumbnail){
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
}

function hideModal (){
  modal.style.display = "none";
}