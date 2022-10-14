import items from "./list_items.js"

export default {
    explorers : {
        name: "explorers_pack",
        details: "explorers_pack_details",
        items: [
            [items.backpack,1],
            [items.bedroll,1],
            [items.mess_kit,1],
            [items.tinderbox,1],
            [items.torch,10],
            [items.ration,10],
            [items.waterskin,1],
            [items.hempen_rope,1],
        ],
        cost: 100,
        weight: 29.5,
    },
}