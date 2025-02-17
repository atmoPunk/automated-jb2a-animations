export async function db052(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
    const l0 = prefix('Cantrip')
    const l1 = prefix('1st_Level')
    const l2 = prefix('2nd_Level')
    const l3 = prefix('3rd_Level')
    const l4 = prefix('4th_Level')
    const l5 = prefix('5th_Level')
    const l6 = prefix('6th_Level')
    const l7 = prefix('7th_Level')
    const lg = prefix('Generic')

    /**
     * Structure for the internal Select menus work as:
     * Type => Animation => Variant => Color
     * Example: Range Menu - Weapon => Arrow => Regular => Regular
     * 
     * Entries in each section type should have a localized Variable matching in the lang/en.json file under
     * the proper category.
     * Type relates to the MenuTypes section
     * Animation to animations
     * Variant to variants
     * Color to colors
     * 
     */
    const freeDB052 = {
        melee: {
            creature: {

            },
            weapon: {
                lasersword: {
                    '02': {
                        blue: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Blue_800x600.webm`],
                        blue02: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Blue02_800x600.webm`],
                        blue03: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Blue03_800x600.webm`],
                        darkred: [lg`Weapon_Attacks/Melee/LaserSword01_02_Dark_Red_800x600.webm`],
                        darkwhite: [lg`Weapon_Attacks/Melee/LaserSword01_02_Dark_White_800x600.webm`],
                        green: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Green_800x600.webm`],
                        green02: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Green02_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Orange_800x600.webm`],
                        purple: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Purple_800x600.webm`],
                        red: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Red_800x600.webm`],
                        white: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_White_800x600.webm`],
                        yellow: [lg`Weapon_Attacks/Melee/LaserSword01_02_Regular_Yellow_800x600.webm`],
                    },
                }    
            },
            generic: {
                slashing: {
                    '01': {
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_01_Regular_Orange_800x600.webm`],
                    },
                    '02': {
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_02_Regular_Orange_800x600.webm`],
                    },
                    '03': {
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_03_Regular_Orange_800x600.webm`],
                    } ,
                },
                whirlwind: {
                    '01': {
                        orange: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_01_Regular_Orange_800x600.webm`],
                    },
                    '02': {
                        orange: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_02_Regular_Orange_800x600.webm`],
                    },
                },
            }
        },
        static: {
            impact: {
                frost: {
                    '01': {
                        white: [lg`Impact/FrostImpact_01_Regular_White_600x600.webm`],
                    },
                },
                groundcrack: {
                    '01': {
                        orange: [
                            lg`Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
                        ],
                    },
                    frost: {
                        white: [lg`Impact/GroundCrackFrostImpact_01_Regular_White_600x600.webm`],
                    },
                },
            },
            lightning: {

            },
            liquid: {

            },
            magicsign: {
                abjuration: {
                    complete: {
                        darkblue: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Blue_800x800.webm`],
                    },
                },
                conjuration: {
                    complete: {
                        darkyellow: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                divination: {
                    complete: {
                        darkblue: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Blue_800x800.webm`],
                    },
                },
                enchantment: {
                    complete: {
                        darkpink: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Pink_800x800.webm`],
                    },
                },
                illusion: {
                    complete: {
                        darkpurple: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Purple_800x800.webm`],
                    },
                },
                necromancy: {
                    complete: {
                        darkgreen: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Green_800x800.webm`],
                    },
                },
                transmutation: {
                    complete: {
                        darkyellow: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },

            },
        },
    }
    return freeDB052;
}