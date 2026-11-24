<script lang="ts">
    let {
        title,
        due,
        isMaterial = false
    }: {
        title: string,
        due: string,
        isMaterial?: boolean
    } = $props();

</script>

<div class="assignment">
    <div class="left">
        <div class="icon">
            {#if isMaterial}
                <span class="symbol">book</span>
            {:else}
                <span class="symbol">assignment</span>
            {/if}
        </div>
        <div class="title">
            {title}
        </div>
    </div>
    <div class="right">
        <div class="due">
            {due}
        </div>
        <div class="more">

        </div>
    </div>
</div>

<style lang="scss">
    .assignment {
        width: 100%;
        height: 3.75rem;
    }
</style>