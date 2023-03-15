
/*
window.onload = (event) => {
    console.log("page is fully loaded");

  function setCardProperty (index) {
    document.getElementById(`cardProject${index}Img`).src  = project.image;
    document.getElementById(`cardProject${index}Name`).innerText  = project.name; 
    document.getElementById(`cardProject${index}Description`).innerText  = project.description; 
    document.getElementById(`cardProject${index}Link`).href  = "project.html?projectId=" + project.uuid; 
  }

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

    setCardProperty (1);
    setCardProperty (2);
    setCardProperty (3);

    
  })
  .catch((err) => console.log(err));
  };


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

*/




  window.onload = (event) => {
    console.log("page is fully loaded");


  fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
      for(project of data){
      if(project.uuid == 1){
       console.log("hi from then data, y este es project: " + project);
      }
    }  

    document.getElementById("cardProject1Img").src  = project.image; 
    document.getElementById("cardProject1Name").innerText  = project.name; 
    document.getElementById("cardProject1Description").innerText  = project.description; 
    document.getElementById("cardProject1Link").href  = "project/project.html"; 
    document.getElementById("contentProject").innerHTML = project.content;

    
    let project2Index = randomIntFromInterval(0, 3);
    let project2 = data[project2Index];
    document.getElementById("cardProject2Img").src  = project2.image; 
    document.getElementById("cardProject2Name").innerText  = project2.name; 
    document.getElementById("cardProject2Description").innerText  = project2.description; 
   /* document.getElementById("cardProject2Link").href  = "project.html?projectId=" + project2.uuid; */

    let project3Index = randomIntFromInterval(0, 3);
    let project3 = data[project3Index];
    document.getElementById("cardProject3Img").src  = project3.image; 
    document.getElementById("cardProject3Name").innerText  = project3.name; 
    document.getElementById("cardProject3Description").innerText  = project3.description; 
   /* document.getElementById("cardProject3Link").href = "project.html?projectId=" + project3.uuid; */
    
  })
  .catch((err) => console.log(err));

  };


  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }