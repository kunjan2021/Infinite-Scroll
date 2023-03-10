const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'zzcjGAf3efmWVceEuMQshb-kHC8Z_R4aAuPf-UV21mM';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
	photosArray.forEach((photo) => {
		// create <a> to link to Unsplash
	  const item = document.createElement('a');
	  item.setAttribute('href', photo.links.html);
	  item.setAttribute('target', '_blank');
	  const img = docment.createElement('img');
	  img.setAttribute('src', photo.urls.regular);
	  img.setAttribute('alt', photo.alt_description);
	  img.setAttribute('title', photo.alt_description);
	  // put <img> inside <a>, then put both inside iamgeContainer Element
	  item.appendChild(img);
	  imageContainer.appendChild(item);
	});
}



// Get photos from API
async function getPhotos () {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		displayPhotos();
	} catch (error) {
		//catch error here
	}
}

//on Load
getPhotos();