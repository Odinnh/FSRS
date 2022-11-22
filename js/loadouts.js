/**
 * @typedef loadout equipment loadout of fashionscape
 * @type {object}
 * @property {string} title - name of the loadout
 * @property {string} desc - description about what the loadout is
 * @property {string} autro - the name of the author
 * @property {!items} items - item object
 */

/**
 * @typedef items
 * @type {object}
 * @property {capeSlot} cape     - item in the cape slot
 * @property {itemSlot} head     - items in the head slot
 * @property {itemSlot} body     - items in the body slot
 * @property {itemSlot} legs     - items in the legs slot
 * @property {itemSlot} gloves   - items in the gloves slot
 * @property {itemSlot} boots    - items in the boots slot
 * @property {itemSlot} ring     - items in the ring slot
 * @property {itemSlot} ammo     - items in the ammo slot
 * @property {itemSlot} shield   - items in the shield slot
 * @property {itemSlot} weapon   - items in the weapon slot
 * @property {itemSlot} necklace - items in the necklace slot
 */

/**
 * @typedef capeSlot
 * @type {object}
 * @property {!('cape')} slot - item slot
 * @property {item} item - item name
 */

//these are example loadouts
/** @type {loadout} */
let loadout1 = {
    title: "My gold tater sack",
    desc: "look at that smithing drip",
    author: "outfit by - Taters",
    items: {
        cape: {
            slot: "cape",
            item: `Crafting cape(t)`,
        },
        head: {
            slot: "head",
            item: `Bucket helm (g)`,
        },
        ammo: {
            slot: "ammo",
            item: ``,
        },
        necklace: {
            slot: "necklace",
            item: ``,
        },
        body: {
            slot: "body",
            item: `Smiths tunic`,
        },
        weapon: {
            slot: "weapon",
            item: `Imcando hammer`,
        },
        legs: {
            slot: "legs",
            item: `Smiths trousers`,
        },
        shield: {
            slot: "shield",
            item: ``,
        },
        gloves: {
            slot: "gloves",
            item: `Smiths gloves (i)`,
        },
        boots: {
            slot: "boots",
            item: `Smiths boots`,
        },
        ring: {
            slot: "ring",
            item: ``,
        },
    },
}
/** @type {loadout} */
let loadout2 = {
    title: "Wanderer",
    desc: "the perfect get-up for an explorer",
    author: "outfit by - First Odinn",
    items: {
        cape: {
            slot: "cape",
            item: `Hunter cape(t)`,
        },
        head: {
            slot: "head",
            item: `Hunter hood`,
        },
        ammo: {
            slot: "ammo",
            item: ``,
        },
        necklace: {
            slot: "necklace",
            item: `Witchwood icon`,
        },
        body: {
            slot: "body",
            item: `Desert top (overcoat)`,
        },
        weapon: {
            slot: "weapon",
            item: `Slayer's staff`,
        },
        legs: {
            slot: "legs",
            item: `Elven legwear`,
        },
        shield: {
            slot: "shield",
            item: `Black satchel`,
        },
        gloves: {
            slot: "gloves",
            item: `Barrows gloves`,
        },
        boots: {
            slot: "boots",
            item: `Adventurer's boots (t3)`,
        },
        ring: {
            slot: "ring",
            item: ``,
        },
    },
}
