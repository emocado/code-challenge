function validate() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          modal.classList.add("open-modal");
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
}
const prevDefault = (e) => {
  e.preventDefault()
  return false
}
validate()

const modal = document.querySelector(".modal-overlay");
const submitBtn = document.querySelector("#btn");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
