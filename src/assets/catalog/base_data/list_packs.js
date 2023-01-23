import items from "./list_items.js"

export default {

    explorers: {
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
        cost: 1000,
        weight: 29.5,
    },

    burglars: {
        name: "burglars_pack",
        details: "burglars_pack_details",
        items: [
            [items.backpack,1],
            [items.metal_ball_1000,1],
            [items.fishing_line,1],
            [items.bell,1],
            [items.candle,5],
            [items.crowbar,1],
            [items.item_hammer,1],
            [items.item_piton,10],
            [items.hooded_lantern,1],
            [items.oil_flask,2],
            [items.ration,5],
            [items.tinderbox,1],
            [items.waterskin,1],
            [items.hempen_rope,1]
        ],
        cost: 1600,
        weight: 17.5,
    },

    dungeoneers: {
        name: "dungeoneers_pack",
        details: "dungeoneers_pack_details",
        items: [
            [items.backpack,1],
            [items.crowbar,1],
            [items.item_hammer,1],
            [items.item_piton,10],
            [items.torch,10],
            [items.tinderbox,1],
            [items.ration,10],
            [items.waterskin,1],
            [items.hempen_rope,1],
        ],
        cost: 1200,
        weight: 17.5,
    },

    thieves: {
        name: "thieves_pack",
        details: "thieves_pack_details",
        items: [
            [items.small_rasp,1],
            [items.lockpick_set,1],
            [items.small_mirror,1],
            [items.scissors,1],
            [items.tweezers,1]
        ],
        cost: 2500,
        weight: 0.5,
    },

    priests: {
        name: "priests_pack",
        details: "priests_pack_details",
        items: [
            [items.backpack,1],
            [items.blanket,1],
            [items.candle,10],
            [items.tinderbox,1],
            [items.donation_box,1]
            [items.incense,2],
            [items.censer,1],
            [items.vestment,1]
            [items.ration,2],
            [items.waterskin,1],
        ],
        cost: 1900,
        weight: 7.5,
    },

    diplomats: {
        name: "diplomats_pack",
        details: "diplomats_pack_details",
        items:
        [
            [items.chest,1],//
            [items.scroll_tube,2],//
            [items.fine_clothes,1], //
            [items.ink,1], //
            [items.ink_pen,1], //
            [items.lamp,1], //
            [items.oil_flask,2],
            [items.paper,5], //
            [items.perfume,1], //
            [items.vax,1], //
            [items.soap,1] //
        ],
        cost: 3900,
        weight: 17.5,
    },

    entertainers: {
        name: "entertainers_pack",
        details: "entertainers_pack_details",
        items:
        [
            [items.backpack,1],
            [items.bedroll,1],
            [items.costume,2], //
            [items.candle,5],
            [items.ration,5],
            [items.waterskin,1],
            [items.disguise_kit,5],
        ],

        cost: 4000,
        weight: 12.5,
    },

    scholars: {
        name: "scholars_pack",
        details: "scholars_pack_details",
        items:
        [
            [items.backpack,1],
            [items.science_book,1],
            [items.ink,1], 
            [items.ink_pen,5],
            [items.paper,10], 
            [items.sand_pouch,1],
            [items.knife,1]
        ],

        cost: 4000,
        weight: 7.5,
    },
}