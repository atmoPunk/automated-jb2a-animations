<script>
   import {
      ripple,
      rippleFocus }                 from "@typhonjs-fvtt/svelte-standard/action";

   import {
      TJSInput,
      TJSMenu,
      TJSSvgFolder,
      TJSIconButton,
      TJSToggleIconButton }         from "@typhonjs-fvtt/svelte-standard/component";

   import AdvancedQuickView from "./advancedSearch/AdvancedQuickView.svelte";

   import { createOverflowItems }   from "./createOverflowItems.js";

   import TJSSvgCustomFolder from "./TJSSvgCustomFolder.svelte";

   import { selectBuildMenu }       from "../../../Menus/BuildMenu/selectBuildMenu.js";
   import { setContext } from "svelte";

   /** @type {AnimationStore} */
   export let animation = void 0;

   /** @type {CategoryStore} */
   export let category = void 0;

   //** Menu builder set in the Category List. Determines which menu set will be rendered*/
   export let idx = void 0;

   setContext('animation-data', {animation, category, idx})

   /**
    * @type {object} Defines folder data for TJSIconFolder.
    */
   const folder = {
      options: { chevronOnly: true, noKeys: true },
      store: animation.stores.folderOpen
   };

   const input = {
      store: animation.stores.label,
      efx: rippleFocus(),
      placeholder: "autoanimations.menus.itemName",
      options: { cancelOnEscKey: true }
   };

   const buttonOverflow = {
      icon: 'fas fa-ellipsis-v',
      efx: ripple(),
      styles: { 'margin-left': '0.5em' },
      onClickPropagate: false   // Necessary to capture click for Firefox.
   };

   const menu = {
      items: createOverflowItems(animation, category),
   };

   $: isExactMatch = $animation.advanced?.exactMatch;
   $: excludedTerms = $animation.advanced?.excludedTerms;
   $: exactMatchButton = {
       icon: isExactMatch ? "fas fa-equals" : excludedTerms?.length ? "fas fa-not-equal" : "",
       title: isExactMatch ? "Exact Match" : excludedTerms?.length ? "Has Excluded Terms" : "",
    };
</script>

<div class=animation>
   <TJSSvgCustomFolder {folder}>
        <AdvancedQuickView info={exactMatchButton} slot=prepend/>
        <TJSInput {input} slot=label />
        <TJSToggleIconButton button={buttonOverflow} slot=summary-end>
            <TJSMenu {menu} />
        </TJSToggleIconButton>
        <svelte:component this={selectBuildMenu(category.key)} {animation} {idx} {category}/>
   </TJSSvgCustomFolder>
</div>

<style lang=scss>
  div {
    background: rgba(199, 199, 199, 0.85);
    border: 2px solid rgba(0, 0, 0, 0.75);
    border-radius: 0.75em;

    height: fit-content;
    width: 100%;

    // TJSIconFolder styles
    --tjs-summary-width: 98%;
    --tjs-summary-margin: 0 0 0 1%;

    // TJSInput styles
    --tjs-input-text-align: center;
    --tjs-input-border: 1.5px outset rgba(0, 0, 0, 0.5);
    --tjs-input-border-radius: 1em;
  }
</style>
