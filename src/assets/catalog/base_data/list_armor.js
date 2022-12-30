import armory from "./kinds_armor.js";

export default {
    leather: {
        name: "armor_leather",
        details: "armor_leather_details",
        type: [armory.light],
        armor_foo: null,
        armor_bonus: 1, // 11 + DEX
        armor_class: null,
        cost: 1000,
        weight: 5,
    },
    scalemail: {
        name: "armor_scalemail",
        details: "armor_scalemail_details",
        type: [armory.medium],
        armor_foo: "DEX_Max2",
        armor_bonus: 4,
        armor_class: null,
        cost: 1000,
        weight: 25,
    },
    chainmail: {
        name: "armor_chainmail",
        details: "armor_chainmail_details",
        type: [armory.heavy],
        armor_foo: null,
        armor_bonus: null,
        armor_class: 16,
        cost: 7500,
        weight: 28,
    },
}