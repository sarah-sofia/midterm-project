window.onload = (event) => {
    console.log("page is fully loaded");


  fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
     for(project of data){
      if(project.uuid == 1){
      }
    } 

    document.getElementById("cardProject1Img").src  = project.image; 
    document.getElementById("cardProject1Name").innerText  = project.name; 
    document.getElementById("cardProject1Description").innerText  = project.description; 

    let project2Index = randomIntFromInterval(0, 3);
    let project2 = data[project2Index];
    document.getElementById("cardProject2Img").src  = project2.image; 
    document.getElementById("cardProject2Name").innerText  = project2.name; 
    document.getElementById("cardProject2Description").innerText  = project2.description; 

    let project3Index = randomIntFromInterval(0, 3);
    let project3 = data[project3Index];
    document.getElementById("cardProject3Img").src  = project3.image; 
    document.getElementById("cardProject3Name").innerText  = project3.name; 
    document.getElementById("cardProject3Description").innerText  = project3.description; 

  })
  .catch((err) => console.log(err));
  };

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }