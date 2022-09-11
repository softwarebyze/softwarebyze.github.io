// Add element
function addToBody(textstring) {
    document.body.append(textstring)
}
// addToBody("hii")

//Create element
// new_p = document.createElement('p')
// document.body.append(new_p)
// new_p.innerHTML = "tetst"

// Fetch
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));