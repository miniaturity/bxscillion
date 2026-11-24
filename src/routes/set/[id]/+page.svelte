<script lang="ts">
    import Assignment from "#lib/components/set/Assignment.svelte";
    import AssignmentHeader from "#lib/components/set/AssignmentHeader.svelte";


</script>

<div class="page">
    <div class="p-wrapper">
    <main class="p-content">
        <div class="set-header">
            <div class="left">
                <div class="sh-button">
                    Stream
                </div>
                <div class="sh-button selected">
                    Classwork
                </div>
                <div class="sh-button">
                    People
                </div>
            </div>
        </div>

        <div class="assignment-list">
            <AssignmentHeader 
                header={"No Topic"}
            />
            <Assignment 
                title="HW #1.13"
                due="Due Oct 24, 2026"
            />
        </div>
    </main>
    </div>
</div>

<style lang="scss">
    .assignment-list {
        max-width: 58.25rem;
        height: 200vh;
    }

    .p-content {
        display: flex;
        flex-direction: column;

        width: 100%;
	

		border-radius: 1.75rem;
		gap: 1.5rem;
		background-color: var(--outset-bg);
        overflow: hidden;
    }

    .set-header {
        height: 3rem;
        margin-top: -.0625rem;
        border-bottom: .0625rem solid var(--std-bc); 

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        font-family: "GoogleSans";

        color: var(--font-color);
        font-weight: 500;
        font-size: .875rem;
    }

    .left {
        margin: 0 .75rem;

        display: flex;
        flex-direction: row;
    }

    .right {
        margin-right: .75rem;
    }

    .sh-button {
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;

        padding: 0 1.5rem;
        cursor: pointer;

        &:hover {
            background-color: rgba(from var(--font-color) r g b / 0.08);
        }
    }

    .sh-button.selected {
        color: var(--link-color);

        &::after {
            border-color: var(--gm3-sys-color-primary, #0b57d0);
            border-top-width: .25rem;
            border-top-style: solid;
            border-radius: .25rem .25rem 0 0;
            bottom: -.125rem;
            content: "";
            height: 0;  
            left: 0;
            position: absolute;
            right: 0;
        }

        &:hover {
            background-color: rgba(from var(--link-hover) r g b / .1);
        }
        
    }
</style> 