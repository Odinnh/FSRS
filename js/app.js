/**
 *
 * @param {loadout} loadout
 */
let propigate = async (loadout) => {
    document.querySelector(".loadout-title").innerHTML = loadout.title
    document.querySelector(".loadout-desc").innerHTML = loadout.desc
    document.querySelector(".loadout-author").innerHTML = loadout.author

    for (slot in loadout.items) {
        let inventory = document.querySelectorAll(`.${loadout.items[slot].slot}`)[0]
        let summary = document.querySelectorAll(`.${loadout.items[slot].slot}`)[1]

        if (inventory.lastElementChild) inventory.removeChild(inventory.lastElementChild)
        if (inventory.href) inventory.removeAttribute('href')
        if (inventory.target) inventory.removeAttribute('target')
        if (loadout.items[slot].item != '') {
            load_pic(loadout.items[slot].item, inventory)
        }

        summary.innerHTML = `${loadout.items[slot].slot}: ${loadout.items[slot].item ? loadout.items[slot].item : "empty"}`
    }
}

let load_pic = async (target, parent) => {
    let uri = target.replaceAll(" ", "_")
    uri = uri.replaceAll("'", "%27")
    const url = `https://oldschool.runescape.wiki/images/${uri}.png`
    
    const options = {
        method: "GET"
    }

    await fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error("image not found")
            } else {
                return response.blob();
            }
            return -1
        })
        .then((myBlob) => {
            if (myBlob !== -1) {
                const imageBlob = myBlob
                const imageObjectURL = URL.createObjectURL(imageBlob);
                
                const image = document.createElement('img')
                image.src = imageObjectURL
                parent.append(image)
                parent.href = `https://oldschool.runescape.wiki/${uri}`
                parent.target = "_blank"
            }
        }).catch(
            (err) => { console.log(err) }
        )
}