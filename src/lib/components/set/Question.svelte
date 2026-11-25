<script lang="ts">
    let {
        question,
        index,
        len
    }: {
        question: string,
        index: number,
        len: number
    } = $props();

</script>

<div class="q-wrapper">
    <div class="question">
        <header class="q-header">
            <div class="icon">
                <span class="symbol">assignment</span>
            </div>
            <span class="q-title">Question {index + 1}/{len}</span>
        </header>
        <main class="q-prompt">
            {question}
        </main>
    </div>
</div>

<style lang="scss">

    .icon {
        border-radius: 100%;

        padding: .375rem;

        background-color: var(--light-link-hover);

        .symbol {
            color: var(--link-fill);
        }
    }

    .q-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .75rem;

        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--std-bc);
    }

    .q-title {
        font-family: "GoogleSans";
        font-size: 1.3rem;
    }

    .q-prompt {
        padding: 1rem .5rem;
        font-family: "GoogleSans";
        font-size: 2rem;

        
    }

    @property --rotation {
        syntax: "<angle>";
        inherits: false;
        initial-value: 0deg;
    }

    @keyframes rotate {
        to {
            --rotation: 360deg;
        }
    }

    .question {
        position: relative;
        width: 100%; height: 100%;

        border-radius: var(--std-br);
        background: var(--outset-bg);

        padding: 1rem;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
    
            border-radius: inherit;
            
            opacity: 0.7;
            filter: blur(40px);
            background: conic-gradient(from var(--rotation), #f45f5f, #589cfc, #f6d02a, #aafbc0, #d070f0);
            animation: rotate 5s linear infinite;
            z-index: -1;
        }
    }

    .q-wrapper {

        min-width: 12rem;
        max-width: 35rem;
        width: 50vw;
        height: 13rem;
        z-index: 5;

        position: fixed;
        

        top: 50%;

        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>