
function newImage(name, left, bottom) {
    let img = document.createElement('img')
    img.src = name
    img.style.position = 'fixed'
    img.style.left = left + 'px'
    img.style.bottom = bottom + 'px'
    document.body.append(img)
    return img
}
function newItem(name, left, bottom) {
    let tool = newImage(name, left, bottom)

    tool.addEventListener('click', function() {
        tool.remove();
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)


