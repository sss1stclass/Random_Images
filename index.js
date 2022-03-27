let image = document.querySelector('img');
const button = document.querySelector('button');
let h2 = document.querySelector('h2');

button.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.unsplash.com/photos/random/?client_id=2ALR09MeDf3v44ty98LMUOBGDOm4Twy83hB1EvRdzls`);
    
    xhr.onload = function () {
      let imageData = JSON.parse(xhr.response);
      h2.innerText = `Image id is:- ${imageData.id}`;
      image.src = imageData.urls.small;
      
       
    };
    
    
    xhr.onloadend = function () {
        console.log("The site is completely loadeddd");
    
    };
    xhr.onerror = function () {
      console.log("Something went wrong");
    };
    
    xhr.send();
});


