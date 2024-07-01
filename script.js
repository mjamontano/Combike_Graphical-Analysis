// Function to open modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Close the modal when clicking on close button or outside the modal
var modals = document.querySelectorAll('.modal');
modals.forEach(function(modal) {
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Close the modal when clicking on close button
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(closeButton) {
  closeButton.addEventListener('click', function() {
    var modal = closeButton.closest('.modal');
    modal.style.display = "none";
  });
});
