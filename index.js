
function newImage(name, left, bottom) {
    let img = document.createElement('img')
    img.src = name
    img.style.position = 'fixed'
    img.style.left = left + 'px'
    img.style.bottom = bottom + 'px'
    document.body.append(img)
    return img
}

// const pic = ['assets/green-character.gif', 100, 100]

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 575, 275)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
