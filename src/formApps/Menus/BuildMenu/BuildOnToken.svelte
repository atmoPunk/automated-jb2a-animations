<script>
    import { getContext }   from "svelte";
    import * as settings    from "../Components";
    import * as options     from "../Components/options"

    //export let animation;
    //export let idx = 0;
    //export let category;
    export let fromMenu = 'autorec';
    let { animation } = getContext('animation-data');

    $: show3d = false;

    let title =
        game.i18n.localize("autoanimations.menus.primary") +
        " " +
        game.i18n.localize("autoanimations.menus.animation");

    $: soundOnly = $animation.soundOnly.sound.enable;
    $: macroEnabled = $animation.macro.enable;
    $: macroPlay = $animation.macro.playWhen;
</script>

<svelte:component this={settings.SectionButtons01} bind:show3d type={fromMenu}/>
{#if show3d && !soundOnly}
    <svelte:component this={settings.Canvas3D} />
{:else}
    <div hidden={!soundOnly}>
        <svelte:component this={settings.SoundOnly} />
    </div>
    <div hidden={!macroEnabled}>
        <svelte:component this={settings.Macro} />
    </div>
    <div hidden={soundOnly || (macroEnabled && macroPlay === "2")}>
        <svelte:component this={settings.Source} />
        <div class="aa-primary-border">
            <svelte:component this={settings.Video} {title} section="primary"/>
            <svelte:component this={options.OnToken} />
            <svelte:component this={settings.Sound} section="primary" />
        </div>
        <svelte:component this={settings.Secondary} />
        <div class={$animation.primary.options.playOn === "source" ? "aa-disableOpacity" : ""}>
            <svelte:component this={settings.Target} />
        </div>
</div>
{/if}

<style lang="scss">
</style>
