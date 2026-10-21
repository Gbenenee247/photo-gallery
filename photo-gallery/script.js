const btnElem = document.getElementById("loadBtn");
const gallerySection = document.getElementById("gallery-box");


// creat a function to fecth the data from the api endpoint

async function loadphotos() {
    // when we don't have our data yet, we want to display "loading"
    gallerySection.innerHTML = "<p>Loading...</p>";
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos");

        if(!response.ok) {
            throw new Error("server error:" + response.status);
        }

        const photos = await response.json();
        console.log(photos);

        const galleryCard = photos.map((photo) => {
            return`
            <div class="card">
              <h3 class"photo-title">${photo.id}. ${photo.title}</h3>
              <img src="${photo.url}" alt="" class="photo-img">
            </div>
        `
        }).join("");
        gallerySection.innerHTML = galleryCard;
    } catch (error) {
        gallerySection.innerHTML = `<p>Something went wrong: ${error.message}</p>`
    }
}

// attach event listener to the load Gallery button 
btnElem.addEventListener("click", loadphotos);