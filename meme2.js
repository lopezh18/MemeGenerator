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
        img.style.zIndex ="2";
        newMeme.appendChild(img);
        newMeme.appendChild(removeButton);


        var topDiv = document.createElement("div");
        topDiv.className = "div1";
        var topText = document.getElementById("textOnTop").value;
        topDiv.innerText = topText;
        topDiv.style.backgroundColor = "teal";
        topDiv.style.position = "absolute";
        topDiv.style.top="10px";
        topDiv.style.zIndex="3";
        newMeme.appendChild(topDiv);
        // memecanvas.appendChild(topDiv);


        var bottomDiv = document.createElement("div")
        bottomDiv.className = "div2";
        var bottomText = document.getElementById("textOnBottom").value;
        bottomDiv.innerText = bottomText
        bottomDiv.style.backgroundColor = "teal";
        bottomDiv.style.position = "absolute";
        bottomDiv.style.bottom = "30px";
        topDiv.style.zIndex = "3";
        newMeme.appendChild(bottomDiv);

        memecanvas.appendChild(newMeme);

        memeForm.reset();
    })

      memecanvas.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })

    // memecanvas.addEventListener("mouseover", function(){
    //     var removeMeme = newMeme;
    //     memecanvas.innerText = event.target.className
    // })

}