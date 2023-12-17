
 // Url = "https://dog.ceo/api/breeds/image/random/4";


fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((resp) => {
    if (!resp.ok) {
      throw new Error(`Network response was not ok: ${resp.status}`);
    }
    return resp.json();
  })
  .then((data) => renderImg(data.message))
  .catch((error) => console.error('Fetch error:', error));

  // data.message is an array containing urls of images

  function renderImg (urlArray) {
 // forEach  to get each url from the array

   let divForImg = document.getElementById('dog-image-container')
    urlArray.forEach(url => {
        let imgTag = document.createElement('img');
        imgTag.src = url
       
        divForImg.append(imgTag)
    });
  }


  fetch("https://dog.ceo/api/breeds/list/all")
  .then((resp) => resp.json())
  .then((data) => renderBreeds(Object.keys(data.message)))
  .then((data) => filterBreed(Object.keys(data.message)))


  function renderBreeds(breedsArray) { 
    let ul = document.getElementById('dog-breeds')
    breedsArray.forEach(breed => {
        let li = document.createElement('li');
        li.textContent = breed
        ul.appendChild(li)
    })
  }

//   // if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a

function filterBreed(data) {
    let breedsArray = Object.keys(data.message);
  
    function handleChange(e) {
      let filtered = breedsArray.filter((breed) => breed.startsWith(e.target.value));
      let ul = document.getElementById('dog-breeds');
      ul.textContent = "";
      
      renderBreeds(filtered);
    }
  
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', handleChange);
  
  
    handleChange({ target: { value: breedDropdown.value } });
  }
  
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => filterBreed(data));
