
/* window.onload = (event) => {
    console.log("page is fully loaded");

  fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    for(project of data){
      if(project.uuid == 1){
        console.log("parsed project " + project);
      }
    }

    document.getElementsByClassName("coverProject").src  = project.image; 
    document.getElementsByClassName("projectTitle").innerText  = project.name; 
    document.getElementsByClassName("projectDescription").innerText  = project.description; 
    

    
  })
  .catch((err) => console.log(err));

  };


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  } */




  window.onload = (event) => {
    console.log("page is fully loaded");
  
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (project of data) {
          if (project.uuid == 3) {
            console.log("parsed project " + project);
  
            document.getElementsByClassName("coverProject")[0].src = project.image;
            document.getElementsByClassName("projectTitle")[0].innerText = project.name;
            document.getElementsByClassName("projectDescription")[0].innerText = project.description;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }