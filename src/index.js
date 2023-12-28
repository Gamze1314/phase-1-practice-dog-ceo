
fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((resp) => resp.json())
  .then((data) => renderImg(data.message))
  // .catch((error) => console.error('Fetch error:', error))

  // data.message is an array containing urls of images

  function renderImg (urlArray) {
 // forEach  to get each url from the array
// grab dog-image-container
   let divForImg = document.getElementById('dog-image-container')
    urlArray.forEach(url => {
      // for each url create img tag
        let imgTag = document.createElement('img')
        imgTag.src = url // set src to url
        divForImg.append(imgTag) // append it to DOM
    });
  }

  function renderBreeds(breedsArray) { 
    let ul = document.getElementById('dog-breeds')
    breedsArray.forEach(breed => {
        let li = document.createElement('li')
        li.textContent = breed
        ul.appendChild(li)
    })
  }

//   // if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a

fetch("https://dog.ceo/api/breeds/list/all") // fetch dogs
.then((resp) => resp.json())
.then((data) => filterBreed(data)) // call filter function 

function filterBreed(data) {
    let breedsArray = Object.keys(data.message) //
    console.log(breedsArray)

  
    function handleChange(e) {

      let filtered = breedsArray.filter((breed) => breed.startsWith(e.target.value))
      let ul = document.getElementById('dog-breeds')
      ul.textContent = ""
      
      renderBreeds(filtered)
    }
  
    let breedDropdown = document.querySelector('#breed-dropdown')
    breedDropdown.addEventListener('change', handleChange)
  } 