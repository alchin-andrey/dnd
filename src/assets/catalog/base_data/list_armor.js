import armory from "./kinds_armor.js";

export default {
    leather: {
        name: "armor_leather",
        details: "armor_leather_details",
        type: [armory.light],
        armor_bonus: 1, // 11 + DEX
        cost: 1000,
        weight: 5,
    },
    shield: {
        name: "armor_shield",
        details: "armor_shield_details",
        type: [armory.shields],
        armor_bonus: 2,
        cost: 1000,
        weight: 6,
    },
    chainmail: {
        name: "armor_chainmail",
        details: "armor_chainmail_details",
        type: [armory.heavy],
        armor_class: 16,
        cost: 1000,
        weight: 6,
    },
}