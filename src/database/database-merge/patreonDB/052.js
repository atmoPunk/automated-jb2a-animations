export async function db052(path) {

    const BASE = `${path}/Library/`
    const prefix = (str) => (strs, ...exprs) => `${BASE}${str}/${strs.reduce((a, c, i) => a + exprs[i - 1] + c)}`
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
    const patreonDB052 = {
        range: {
            generic: {
                poison: {
                    '01': {
                        greenyellow: {
                            '05ft': [lg`RangedSpell/ProjectilePoison01_01_Regular_GreenYellow_05ft_600x400.webm`],
                            '15ft': [lg`RangedSpell/ProjectilePoison01_01_Regular_GreenYellow_15ft_1000x400.webm`],
                            '30ft': [lg`RangedSpell/ProjectilePoison01_01_Regular_GreenYellow_30ft_1600x400.webm`],
                            '60ft': [lg`RangedSpell/ProjectilePoison01_01_Regular_GreenYellow_60ft_2800x400.webm`],
                            '90ft': [lg`RangedSpell/ProjectilePoison01_01_Regular_GreenYellow_90ft_4000x400.webm`],
                        },
                    },
                },
            },
        },
        melee: {
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
                        greenyellow: [lg`Weapon_Attacks/Melee/GenericSlash01_01_Regular_GreenYellow_800x600.webm`],
                        purpleblue: [lg`Weapon_Attacks/Melee/GenericSlash01_01_Regular_BluePurple_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_01_Regular_Orange_800x600.webm`],
                    },
                    '02': {
                        greenyellow: [lg`Weapon_Attacks/Melee/GenericSlash01_02_Regular_GreenYellow_800x600.webm`],
                        purpleblue: [lg`Weapon_Attacks/Melee/GenericSlash01_02_Regular_BluePurple_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_02_Regular_Orange_800x600.webm`],
                    },
                    '03': {
                        greenyellow: [lg`Weapon_Attacks/Melee/GenericSlash01_03_Regular_GreenYellow_800x600.webm`],
                        purpleblue: [lg`Weapon_Attacks/Melee/GenericSlash01_03_Regular_BluePurple_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/GenericSlash01_03_Regular_Orange_800x600.webm`],
                    } ,
                },
                whirlwind: {
                    '01': {
                        greenyellow: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_01_Regular_GreenYellow_800x600.webm`],
                        purpleblue: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_01_Regular_BluePurple_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_01_Regular_Orange_800x600.webm`],
                    },
                    '02': {
                        greenyellow: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_02_Regular_GreenYellow_800x600.webm`],
                        purpleblue: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_02_Regular_BluePurple_800x600.webm`],
                        orange: [lg`Weapon_Attacks/Melee/GenericWhirlwind01_02_Regular_Orange_800x600.webm`],
                    },
                },
            }
        },
        static: {
            fire: {
                groundcrack: {
                    '01': {
                        white: [lg`Fire/GroundCrackLoop_01_Regular_White_600x600.webm`],
                    },
                    '02': {
                        white: [lg`Fire/GroundCrackLoop_02_Regular_White_600x600.webm`],
                    },
                    '03': {
                        white: [lg`Fire/GroundCrackLoop_03_Regular_White_600x600.webm`],
                    },
                },    
            },
            impact: {
                frost: {
                    '01': {
                        blue: [lg`Impact/FrostImpact_01_Regular_Blue_600x600.webm`],
                        green: [lg`Impact/FrostImpact_01_Regular_Green_600x600.webm`],
                        orange: [lg`Impact/FrostImpact_01_Regular_Orange_600x600.webm`],
                        purple: [lg`Impact/FrostImpact_01_Regular_Purple_600x600.webm`],
                        white: [lg`Impact/FrostImpact_01_Regular_White_600x600.webm`],
                    },
                },
                groundcrack: {
                    '01': {
                        blue: [
                            lg`Impact/GroundCrackImpact_01_Regular_Blue_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_Blue_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_Blue_600x600.webm`,
                        ],
                        green: [
                            lg`Impact/GroundCrackImpact_01_Regular_Green_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_Green_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_Green_600x600.webm`,
                        ],
                        orange: [
                            lg`Impact/GroundCrackImpact_01_Regular_Orange_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_Orange_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_Orange_600x600.webm`,
                        ],
                        purple: [
                            lg`Impact/GroundCrackImpact_01_Regular_Purple_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_Purple_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_Purple_600x600.webm`,
                        ],
                        white: [
                            lg`Impact/GroundCrackImpact_01_Regular_White_600x600.webm`,
                            lg`Impact/GroundCrackImpact_02_Regular_White_600x600.webm`,
                            lg`Impact/GroundCrackImpact_03_Regular_White_600x600.webm`,
                        ],
                    },
                    frost: {
                        blue: [lg`Impact/GroundCrackFrostImpact_01_Regular_Blue_600x600.webm`],
                        green: [lg`Impact/GroundCrackFrostImpact_01_Regular_Green_600x600.webm`],
                        orange: [lg`Impact/GroundCrackFrostImpact_01_Regular_Orange_600x600.webm`],
                        purple: [lg`Impact/GroundCrackFrostImpact_01_Regular_Purple_600x600.webm`],
                        white: [lg`Impact/GroundCrackFrostImpact_01_Regular_White_600x600.webm`],
                    },
                },
                poison: {
                    '01': {
                        green: [lg`Impact/ImpactPoison01_01_Regular_GreenYellow_400x400.webm`]
                    },
                },
            },
            magicsign: {
                abjuration: {
                    complete: {
                        darkblue: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/AbjurationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                conjuration: {
                    complete: {
                        darkblue: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/ConjurationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                divination: {
                    complete: {
                        darkblue: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/DivinationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                enchantment: {
                    complete: {
                        darkblue: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/EnchantmentCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                illusion: {
                    complete: {
                        darkblue: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/IllusionCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                necromancy: {
                    complete: {
                        darkblue: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/NecromancyCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },
                transmutation: {
                    complete: {
                        darkblue: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Blue_800x800.webm`],
                        darkgreen: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Green_800x800.webm`],
                        darkpink: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Pink_800x800.webm`],
                        darkpurple: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Purple_800x800.webm`],
                        darkred: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Red_800x800.webm`],
                        darkyellow: [lg`Magic_Signs/TransmutationCircleComplete_02_Dark_Yellow_800x800.webm`],
                    },
                },

            },
            sideImpact: {
                poison: {
                    regular: {
                        greenyellow: [lg`Impact/SideImpactPoison01_01_Regular_GreenYellow_600x600.webm`],
                    },
                    slow: {
                        purplepink: [lg`Impact/PartSideImpactSlowPoison01_01_Regular_GreenYellow_600x600.webm`]
                    }
                }
            },
        },
    }
    return patreonDB052;
}