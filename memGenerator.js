let img = document.querySelector("#image-file");
let form = document.querySelector("form")
let topTxt = document.querySelector("#top-text");
let bottomTxt = document.querySelector("#bottom-text");
const button = document.querySelector("#submit");
let buttonRemove = document.querySelector("button")

form.addEventListener("submit", function(event){
    event.preventDefault();
    const memeImage = document.createElement("div");
    const textTop= document.createElement("div");
    const textBottom = document.createElement("div");
    const imgFile = document.getElementById("image-file");

    imgFile.src = document.getElementById("image-file").value;
    textTop.classList.add("top-text");
    textTop.innerHTML = document.getElementById("top-text").value;

    textBottom.classList.add("bottom-text");
    textBottom.innerHTML = document.getElementById("bottom-text").value;
      

    memeImage.classList.add("memeImage");
    memeImage.append(textTop);
    memeImage.append(textBottom);
    memeImage.append(imgFile);
    let memeCanvas = document.getElementById("canvas");
    memeCanvas.append(memeImage);

form.reset()
   
    });

 
for (let btn of removeButtons) {
    btn.addEeventListener('click', function remove (e) {
    e.target.parentElement.remove();

}




    //remove function goes outside here------

    //remove button and function
    //make sure images are removed seperately
    //append
    //git pull, git pull, git commit
    //merge branch
    //learn terminal
    //function of javascript that adds a new element to container
    // difference between add and append is add will replace image
    //append will not remove image



