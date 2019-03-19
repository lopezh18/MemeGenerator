window.onload = function(){
    var memeForm = document.getElementById("formbox");
    var memecanvas = document.getElementById("meme");

    memeForm.addEventListener("submit", function(event){
        event.preventDefault();

        var removeButton = document.createElement("button");
        removeButton.innerText = "X";

        var newMeme = document.createElement("div");
        newMeme = document.getElementById("imageURL").value;
        var img=new Image();
        img.src=newMeme
        img.style.position = "relative"
        img.style.zIndex ="2"
        memecanvas.appendChild(img);
        newMeme.appendChild(removeButton);


        var topText = document.createElement("div");
        topText.className = "div1";
        topText.innerText = document.getElementById("textOnTop").value;
        topText.style.backgroundColor = "teal"
        // topText.style.position = "absolute"
        // topText.style.top="10px"
        topText.style.zIndex="3"
        memecanvas.appendChild(topText);
        newMeme.appendChild(removeButton);

        var bottomText = document.createElement("div");
        bottomText.className = "div2";
        bottomText.innerText = document.getElementById("textOnBottom").value;
        memecanvas.appendChild(bottomText);
        newMeme.appendChild(removeButton);

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