console.log("Successfully fetched image");

let copyVar;

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

function copyUrl() {
    // console.log(copyVar);
    navigator.clipboard.writeText(copyVar);
    document.getElementById("url").innerText = "Copied";
}

function nextImg() {
    loadImage();

    if(document.getElementById("btbn").innerText != "Waiting.."){
        document.getElementById("btbn").innerText = "Waiting..";
        btbn.setAttribute('disabled', '');
    }
    
}

loadImage();