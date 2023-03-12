function validateForm() {
    let x = document.forms["contact-Us-form"]["firstname"].value;
    if (x == "ironhack") {
      alert("You cannot be Ironhack, because I am Ironhack.");
      return false;
    }
  } 