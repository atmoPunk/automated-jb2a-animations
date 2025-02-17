import * as common from "./common";

export const preset = [
   {
      ...common.main({ label: "mistystep" }),
      menu: "preset",
      metaData: {default: true},
      presetType: "teleportation",
      macro: common.macro(),
      data: {
         options: {
            range: 30,
            hideFromPlayers: false,
            measureType: "alternating",
            teleport: true,
            speed: 120,
            delayMove: 1000,
            alpha: 0,
            delayFade: 750,
            delayReturn: 250,
         },   
         start: {
            dbSection: "static",
            enable: true,
            menuType: "spell",
            animation: "mistystep",
            variant: "01",   
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               delay: 0,
               elevation: 1000,
               fadeIn: 250,
               fadeOut: 250,
               isMasked: false,
               opacity: 1,
               isRadius: false,
               size: 1.5,
            },
         },
         end: {
            dbSection: "static",
            enable: true,
            menuType: "spell",
            animation: "mistystep",
            variant: "02",
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               delay: 500,
               elevation: 1000,
               fadeIn: 250,
               fadeOut: 250,
               isMasked: false,
               isRadius: false,
               opacity: 1,
               size: 1.5,
            },
         },
         between: {
            dbSection: "range",
            enable: false,
            menuType: "spell",
            animation: "chainlightning",
            variant: "primary",
            color: "blue",
            enableCustom: false,
            customPath: "",
            options: {
               delay: 0,
               elevation: 1000,
               opacity: 1,
               playbackRate: 1,
            },
         },
         sound: common.sound(),
      },
   },
   {
      ...common.main({ label: "fireball" }),
      menu: "preset",
      metaData: {default: true},
      presetType: "proToTemp",
      macro: common.macro(),
      data: {
         projectile: {
            dbSection: "range",
            menuType: "spell",
            animation: "fireballbeam",
            variant: "01",
            color: "orange",
            customPath: "",
            enableCustom: false,
            options: {
               elevation: 1000,
               opacity: 1,
               removeTemplate: false,
               repeat: 1,
               repeatDelay: 250,
               wait: -1800,
            },
            sound: common.sound(),
         },
         preExplosion: {
            enable: false,
            dbSection: "static",
            menuType: "spell",
            animation: "curewounds",
            variant: "01",
            color: "blue",
            customPath: "",
            enableCustom: false,
            options: {
               elevation: 1000,
               opacity: 1,
               repeat: 1,
               repeatDelay: 250,
               scale: 1.5,
               wait: 0,
         },
            sound: common.sound(),
         },
         explosion: {
            dbSection: "static",
            menuType: "spell",
            animation: "fireball",
            variant: "explode",
            color: "orange",
            enableCustom: false,
            customPath: "",
            options: {
               elevation: 1000,
               opacity: 1,
               repeat: 1,
               repeatDelay: 250,
               scale: 1.25,
               wait: -1000,
         },
            sound: common.sound(),
         },
         afterImage: {
            enable: false,
            customPath: "",
            options: {
               elevation: 0,
               persistent: false,
               scale: 1,
            }
        }    
      },
      secondary: common.secondary(),
      target: common.target()
   }
];
