
function newImage() {
    let img = document.createElement('img')
    img.src = 'assets/green-character.gif'
    img.style.position = 'fixed'
    img.style.left = '100px'
    img.style.bottom = '100px'
    document.body.append(img)

    let img1 = document.createElement('img')
    img1.src = 'assets/pine-tree.png'
    img1.style.position = 'fixed'
    img1.style.left = '350px'
    img1.style.bottom = '175px'
    document.body.append(img1)
}
newImage()
