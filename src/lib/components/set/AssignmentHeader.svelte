<script lang="ts">
    let {
        header
    }: {
        header: string
    } = $props();
</script>

<header class="as-header">
    <div class="left">
        {header}
    </div>

    <div class="right">
        <div class="r-collapse">
            <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M17.29 15.71L12 10.41l-5.29 5.3-1.42-1.42L12 7.59l6.71 6.7z"></path></svg>
        </div>
    </div>
</header>

<style lang="scss">

    .as-header {
        font-family: "GoogleSans";
        font-size: 1.5rem;
        height: 4.5rem;
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .r-collapse {
        padding: 8px;
        width: 40px; height: 40px;
        position: relative;
        cursor: pointer;
        &:hover {
            &::before {
                content: "";
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                border-radius: 100%;
                background-color: var(--us-hover);
                opacity: 0.05;
                transition: opacity 0.04s ease-in-out;
            }
        }
    }
</style>