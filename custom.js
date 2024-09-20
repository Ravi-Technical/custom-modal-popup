
  var btn = document.querySelector('.btn');
  var modalWraper = document.querySelector('.modal-wraper');
  var modalContent = document.querySelector('.modal-content');
  var close = document.querySelector('.close');
  
  
  // Remove Popup
  function removePopup(){
	  modalWraper.classList.remove('modal-visible');
  }
  
  // Modal Container
  modalWraper.addEventListener('click', function(e){
	  removePopup();
  });
  
 // Modal visible Class 
  btn.addEventListener('click', function(e){
	    modalWraper.classList.add('modal-visible');
	  
  });
  
  // Modal Content
  modalContent.addEventListener('click', function(e){
	  e.stopPropagation();
	  window.open('https://vcart-frontend.onrender.com/', '_blank');
  });
  
  // Close Popup
  close.addEventListener('click', function(e){
	  e.stopPropagation();
	  removePopup();
  });