<script lang="ts">
    import Assignment from "#lib/components/set/Assignment.svelte";
    import AssignmentHeader from "#lib/components/set/AssignmentHeader.svelte";
    import Input from "#lib/components/set/Input.svelte";
    import Question from "#lib/components/set/Question.svelte";
    import { RARITY_VALUES } from "#lib/data.ts";
    import { GameManager } from "#lib/game/gamemanager.svelte.ts";
    import { QuestionSet_1 } from "#lib/game/questions.ts";

    let input = $state<string>("");

    const LEN = 175;
    const KRILLION = RARITY_VALUES["krillion"];

    const START_DATE = new Date(2027, 5, 18);
    const dateFormat = new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    function dueDate(i: number): string {
        const d = new Date(START_DATE);
        d.setDate(d.getDate() - i);
        return `Due ${dateFormat.format(d)}`;
    }

    const TOPICS: Record<number, string> = {
        7: "Unit 7 - Differential Equations",
        6: "Unit 6 - Integration & Accumulation of Chance",
        5: "Unit 5 - Analytical Applications of Differentiation",
        4: "Unit 4 - Contextual Applications of Differentiation",
        3: "Unit 3 - Differentiation: Composite, Implicit, and Inverse Functions",
        2: "Unit 2 - Differentiation: Definition and Basic Derivative Rules",
        1: "Unit 1 - Limits and Continuity"
    }

    let gm = $state<GameManager>(new GameManager(QuestionSet_1));
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

        {#if gm.questionSet && gm.question}
            <Question 
                question={gm.question.prompt} 
                index={gm.questionIndex}
                len={gm.questionSet.questions.length}    
            />
        {/if}

        <div class="center">

            <div class="assignment-list">
                
                {#each { length: LEN } as _, i}
                    {#if i % KRILLION === 0}
                        <AssignmentHeader 
                            header={`${TOPICS[(LEN / KRILLION) - (i / KRILLION)] ?? "No Topic"}`}
                        />
                    {/if}

                    <Assignment 
                        title={`HW #${Math.floor((LEN / KRILLION) - ((i - (KRILLION - 1)) / KRILLION))}.${KRILLION - (i % KRILLION)}`}
                        due={dueDate(i)}
                        isDue
                    />
                
                {/each}
            </div>

            <div class="tools">
                <Input bind:input time={gm.timer} />
            </div>
        </div>
    </main>
    </div>
</div>

<style lang="scss">
    .page {
        height: 100dvh;
        overflow: hidden;
    }

    .assignment-list {
        max-width: 58.25rem;
        width: 100%;
    }

    .tools {
        position: fixed;
        bottom: 0;
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 1rem;
        height: 7rem;
    }

    .p-wrapper {
        height: 100%;
        min-height: 0; 
    }

    .p-content {
        display: flex;
        flex-direction: column;
        position: relative;
        
        width: 100%;
        height: 100%;

		border-radius: 1.75rem;
		gap: 1.5rem;
		background-color: var(--outset-bg);
        overflow-y: clip;


    }

    .center {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
        background-color: var(--outset-bg);
        font-weight: 500;
        font-size: .875rem;

        position: sticky;
        top: 0;
        z-index: 9;
    }

    .left {
        margin: 0 .75rem;

        display: flex;
        flex-direction: row;
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