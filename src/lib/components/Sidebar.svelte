<script lang="ts">
    let {
        open
    }: {
        open: boolean
    } = $props();

</script>

<aside class="sidebar">
    {#if open}
        <div class="sb-content-open">

        </div>
    {:else}
        <div class="sb-content-open">

        </div>
    {/if}
</aside>

<style lang="scss">
    
</style>