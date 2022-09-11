// Add element
function addToBody(textstring) {
    document.body.append(textstring)
}
addToBody("hi")

//Create element
new_p = document.createElement('p')
document.body.append(new_p)
new_p.innerHTML = "tetst"