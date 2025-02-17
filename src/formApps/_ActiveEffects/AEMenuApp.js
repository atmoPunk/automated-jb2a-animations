import { SvelteApplication }    from "@typhonjs-fvtt/runtime/svelte/application";

import { AEAppShell } from "./components";
import { showAutorecMenu } from "../_AutorecMenu/showUI";

import ItemInfoDialog from "./components/animation/itemInfoDialog.js"

import { aaSessionStorage } from "../../sessionStorage";
import { sessionConstants } from "../../constants.js";

export default class AEMenuApp extends SvelteApplication {
    /** @inheritDoc */
    constructor(item)
    {
        super({
            title: `A-A Item Menu`,
            id: `AA-ae-settings`,
            zIndex: 102,
            svelte: {
                class: AEAppShell,
                target: document.body,
                props: {
                    item,
                    itemFlags: item.flags,
                    storageStore: aaSessionStorage.getStore(sessionConstants.activeEffectAppState)
                }
            },
        });

        try 
        {
            //Attempt to parse session storage item and set application state.
            this.state.set(aaSessionStorage.getItem(sessionConstants.activeEffectAppState));
        }
        catch (err) { /**/ }
    }

    /**
     *
     */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            resizable: true,
            minimizable: true,
            width: 600,
            height: 750,
            minWidth: 550,
        });
    }

    _getHeaderButtons()
    {
        const buttons = super._getHeaderButtons(); 
        buttons.unshift({
            icon: 'fas fa-circle-info',
            title: 'Item Information',
            label: "Info",
            styles: { color: 'lightblue', position: "relative", right: "5px" },
   
            onclick: function()
            {
                if (
                    Object.values(ui.windows).find(
                       (w) => w.id === `Options-Information`
                    )
                 ) { return; }
                 new ItemInfoDialog().render(true)           
            }
         });

        buttons.unshift({
            class: 'autorec-shortcut',
            icon: 'fas fa-globe',
            title: 'Launch Autorec',
            label: "Global Automatic Recognition Menu",
            styles: { color: 'lightblue', position: "relative", right: "30px" },
   
            onclick: function()
            {
                if (game.user.isGM) {
                    new showAutorecMenu()
                }
            }
         });
         
         
         return buttons;
       }
    /**
     * @inheritDoc
     */
    async close(options) {
        Object.values(ui.windows).filter(app => app.id === "Options-Information" ||
         app.id === "Autorec-Video-Preview" || app.id === "Autorec-Menu-Manager" || 
         app.id === "Item-Information" || app.id === "AA-Copy-Item-To-Global").forEach(app => app.close());

        return super.close(options);
    }
}
