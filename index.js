console.log("Successfully fetched image");

async function loadNames() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const images = await response.json();
    console.log(images.message); 
  }

loadNames();