window.onload = function(){
    var memeForm = document.getElementById("formbox");
    var memecanvas = document.getElementById("meme");
    memecanvas.style.position = "relative"

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeButton = document.createElement("button");
        removeButton.innerText = "X";

        var newMeme = document.createElement("div");
        var memePhoto = document.getElementById("imageURL").value;
        var img=new Image();
        img.src=memePhoto;
        img.style.position = "relative";
        img.style.zIndex ="2";
        memecanvas.appendChild(img);
        newMeme.appendChild(removeButton);


        var topDiv = document.createElement("div");
        topDiv.className = "div1";
        var topText=document.getElementById("textOnTop").value;
        // topText.innerText = document.getElementById("textOnTop").value;
        topDiv.style.backgroundColor = "teal";
        topDiv.style.position = "absolute";
        topDiv.style.top="10px";
        // topDiv.style.textAlign = "center";
        topDiv.style.zIndex="3";
        memecanvas.appendChild(topDiv);
        newMeme.appendChild(removeButton);

        // var bottomText = document.createElement("div");
        // bottomText.className = "div2";
        // bottomText.innerText = document.getElementById("textOnBottom").value;
        // memecanvas.appendChild(bottomText);
        // newMeme.appendChild(removeButton);

        memeForm.reset();
    })

    //   memecanvas.addEventListener("click", function(event){
    //     if (event.target.tagName.toLowerCase() === 'div') {
    //         event.target.style.textDecoration = "line-through";
    //     }
    //     else if (event.target.tagName.toLowerCase() === 'button') {
    //         event.target.parentNode.remove();
    //     }
    // })

    // memecanvas.addEventListener("mouseover", function(){
    //     var removeMeme = newMeme;
    //     memecanvas.innerText = event.target.className
    // })

}