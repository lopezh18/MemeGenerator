window.onload = function(){
    var memeForm = document.getElementById("formbox");
    var memecanvas = document.getElementById("meme");

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeButton = document.createElement("button");
        removeButton.innerText = "X";

        var newMeme = document.createElement("div");
        var memePhoto = document.getElementById("imageURL").value;
        newMeme.style.position = "relative"
        // newMeme.style.display = "inline"

        var img=new Image();
        img.src=memePhoto;
        img.style.width = "600px"
        img.style.zIndex ="2";
        newMeme.appendChild(img);
        newMeme.appendChild(removeButton);


        var topDiv = document.createElement("div");
        topDiv.className = "div1";
        var topText = document.getElementById("textOnTop").value;
        topDiv.innerText = topText;
        topDiv.style.position = "absolute";
        topDiv.style.top="10px";
        topDiv.style.width = "img.width";
        topDiv.style.left = "150px";
        topDiv.style.zIndex="3";
        topDiv.style.fontSize = "50px";
        topDiv.style.fontWeight = "bold";
        topDiv.style.fontFamily = "'Bangers, cursive";
        topDiv.style.color = "white";
        topDiv.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
        newMeme.appendChild(topDiv);


        var bottomDiv = document.createElement("div")
        bottomDiv.className = "div2";
        var bottomText = document.getElementById("textOnBottom").value;
        bottomDiv.innerText = bottomText;
        bottomDiv.style.position = "absolute";
        bottomDiv.style.bottom = "10px";
        bottomDiv.style.right = "50%"
        bottomDiv.style.zIndex = "3";
        bottomDiv.style.fontSize = "50px";
        bottomDiv.style.fontWeight = "bold";
        bottomDiv.style.fontFamily = "'Bangers, cursive";
        bottomDiv.style.color = "white";
        bottomDiv.style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
        newMeme.appendChild(bottomDiv);

        memecanvas.appendChild(newMeme);

        memeForm.reset();
    })

      memecanvas.addEventListener("click", function(event){
        if (event.target.tagName.toLowerCase() === 'button') {
            event.target.parentNode.remove();
        }
    })

}