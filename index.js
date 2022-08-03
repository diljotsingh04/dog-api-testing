console.log("Successfully fetched image");
let copyVar;

// this is for custom breed select 
var x;
var sel = "random";

async function myFunction() {
    x = document.getElementById("mySelect").selectedIndex;
    sel = document.getElementsByTagName("option")[x].value;

    // console.log(sel);

    if(sel != "random"){

        sel = sel.split('-')[0]

        const response = await fetch(`https://dog.ceo/api/breed/${sel}/images/random`);
        const images = await response.json();

        
        var putImg = images.message;
        copyVar = putImg;

        // console.log(putImg);

        document.getElementById("dynamicImg").src = putImg;
        
        setTimeout(() => {
            document.getElementById("btbn").innerText = "Next Image";
            document.getElementById("url").innerText = "Get URL";
            btbn.removeAttribute('disabled', '');
        }, 1000);
    }
    else{
        loadImage();
    }
}


// this is for random image select
async function loadImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const images = await response.json();

    var putImg = images.message;

    copyVar = putImg;

    document.getElementById("dynamicImg").src = putImg;
    
    setTimeout(() => {
        document.getElementById("btbn").innerText = "Next Image";
        document.getElementById("url").innerText = "Get URL";
        btbn.removeAttribute('disabled', '');
    }, 1000);
}

// this is for copying the url in clipboard
function copyUrl() {
    // console.log(copyVar);
    navigator.clipboard.writeText(copyVar);
    document.getElementById("url").innerText = "Copied";
}

// this will word when we click on next img
function nextImg() {
    if(x == "random"){
        loadImage();
    }
    else{
        myFunction();
    }

    if(document.getElementById("btbn").innerText != "Waiting.."){
        document.getElementById("btbn").innerText = "Waiting..";
        btbn.setAttribute('disabled', '');
    }
    
}

loadImage();