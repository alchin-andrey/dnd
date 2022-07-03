export default function () {
    return {
        stats: [
            {
                name: "strength",
                base: "strength_base",
                details: "strength_details",
            },
            {
                name: "dexterity",
                base: "dexterity_base",
                details: "dexterity_details",
            },
            {
                name: "constitution",
                base: "constitution_base",
                details: "constitution_details",
            },
            {
                name: "intelligence",
                base: "intelligence_base",
                details: "intelligence_details",
            },
            {
                name: "wisdom",
                base: "wisdom_base",
                details: "wisdom_details",
            },
            {
                name: "charisma",
                base: "charisma_base",
                details: "charisma_details",
            },
        ],
        races_stats: {
            halfling: [
                {
                    name: "dexterity",
                    value: 2,
                },
            ],
            gnome: [
                {
                    name: "intelligence",
                    value: 2,
                },
            ],
            dwarf: [
                {
                    name: "constitution",
                    value: 2,
                },
            ],
            human: [
                {
                    name: "strength",
                    value: 1,
                },
                {
                    name: "dexterity",
                    value: 1,
                },
                {
                    name: "constitution",
                    value: 1,
                },
                {
                    name: "intelligence",
                    value: 1,
                },
                {
                    name: "wisdom",
                    value: 1,
                },
                {
                    name: "charisma",
                    value: 1,
                },
            ],
            halfelf: [
                {
                    name: "charisma",
                    value: 2,
                },
            ],
            elf: [
                {
                    name: "dexterity",
                    value: 2,
                },
            ],
            tiefling: [
                {
                    name: "intelligence",
                    value: 1,
                },
                {
                    name: "charisma",
                    value: 2,
                },
            ],
            halforc: [
                {
                    name: "strength",
                    value: 2,
                },
                {
                    name: "constitution",
                    value: 1,
                },
            ],
            dragonborn: [
                {
                    name: "strength",
                    value: 2,
                },
                {
                    name: "charisma",
                    value: 1,
                },
            ],
        },
        ethnos_stats: {
            // halfling
            lightfoot: [
                {
                    name: "charisma",
                    value: 1,
                },
            ],
            stout: [
                {
                    name: "constitution",
                    value: 1,
                },
            ],
            ghost: [
                {
                    name: "wisdom",
                    value: 1,
                },
            ],
            // gnome
            rock: [
                {
                    name: "constitution",
                    value: 1,
                },
            ],
            deep: [
                {
                    name: "dexterity",
                    value: 1,
                },
            ],
            forest: [
                {
                    name: "dexterity",
                    value: 1,
                },
            ],
            // dwarf
            mountain: [
                {
                    name: "strength",
                    value: 2,
                },
            ],
            grey: [
                {
                    name: "strength",
                    value: 1,
                },
            ],
            hill: [
                {
                    name: "wisdom",
                    value: 1,
                },
            ],
            // human (Dont Have)
            // human: [],
            // halfelf (Dont Have)
            // halfelf: [],
            // elf
            forest: [
                {
                    name: "wisdom",
                    value: 1,
                },
            ],
        },
    };
}
