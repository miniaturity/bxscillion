<script lang="ts">
    let {
        title,
        due,
        isDue = false,
        selected = false,
    }: {
        title: string,
        due: string,
        isDue?: boolean,
        selected?: boolean
        isMaterial?: boolean
    } = $props();

</script>

<div class={`assignment ${selected ? "selected" : ""} ${isDue ? "due" : ""} `}>
    <div class="left">
        <div class="icon">
            <span class="symbol">assignment</span>
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
            <span class="symbol">more_vert</span>
        </div>
    </div>
</div>

<style lang="scss">
    .assignment {
        width: 100%;
        height: 3.75rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        font-family: "GoogleSans";

        transition: background-color 0.05s ease-in-out;
        cursor: pointer;

        border-bottom: 1px solid var(--std-bc);


        &:hover {
            background-color: rgba(from var(--us-hover) r g b / 0.075);
        }
        

    }

    .assignment.due {
        & .left > .icon {
            border: none;
            background-color: var(--light-link-hover);
            
            & .symbol {
                color: var(--link-fill);
            }
        }
    }
    

    .left {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .right {
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: .5rem;
        align-items: center;
    }

    .icon {
        margin-left: 1.5rem;
        margin-right: 1rem;
        border-radius: 100%;

        border: 2px solid var(--icon-bc);
        padding: .375rem;

        .symbol {
            color: var(--icon-bc);
        }
    }


    .more {
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