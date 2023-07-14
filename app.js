function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("bulbon"))
    {
        img.src="./assets/bulboff.jpg"
    }
    else{
        img.src="./assets/bulbon.jpg"
    }
}