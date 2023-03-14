


window.onload = (event) => {
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

    document.getElementById("cardProject1Img").src  = project.image; 
    document.getElementById("cardProject1Name").innerText  = project.name; 
    document.getElementById("cardProject1Description").innerText  = project.description; 
    document.getElementById("cardProject1Link").href  = "2.html?projectId=" + project.uuid; 
    
    let project2Index = randomIntFromInterval(0, 4);
    let project2 = data[project2Index];
    document.getElementById("cardProject2Img").src  = project2.image; 
    document.getElementById("cardProject2Name").innerText  = project2.name; 
    document.getElementById("cardProject2Description").innerText  = project2.description; 
    document.getElementById("cardProject2Link").href  = "2.html?projectId=" + project2.uuid; 

    let project3Index = randomIntFromInterval(0, 4);
    let project3 = data[project3Index];
    document.getElementById("cardProject3Img").src  = project3.image; 
    document.getElementById("cardProject3Name").innerText  = project3.name; 
    document.getElementById("cardProject3Description").innerText  = project3.description; 
    document.getElementById("cardProject3Link").href = "2.html?projectId=" + project3.uuid; 

    let project4Index = randomIntFromInterval(0, 4);
    let project4 = data[project4Index];
    document.getElementById("cardProject4Img").src  = project4.image; 
    document.getElementById("cardProject4Name").innerText  = project4.name; 
    document.getElementById("cardProject4Description").innerText  = project4.description; 
    document.getElementById("cardProject4Link").href = "2.html?projectId=" + project4.uuid; 
    
  })
  .catch((err) => console.log(err));

  };


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }



/* 

  window.onload = (event) => {
    console.log("page is fully loaded");
  
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        for (project of data) {
          if (project.uuid == 1) {
            console.log("parsed project " + project);
  
            document.getElementsByClassName("coverProject")[0].src = project.image;
            document.getElementsByClassName("projectTitle")[0].innerText = project.name;
            document.getElementsByClassName("completedDate")[0].innerText = project.completed_on;
            document.getElementsByClassName("contentProject")[0].innerText = project.description;
          }
        }
      })
      .catch((err) => console.log(err));
  };
  
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  */