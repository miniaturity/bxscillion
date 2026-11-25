<script lang="ts">
    let {
        input = $bindable(),
        time
    }: {
        input: string;
        time: number;
    } = $props();
</script>

<div class="input-wrapper">
    <div class="time">
        {time}
    </div>
    <input class="input" type="text" bind:value={input} placeholder="Type your answer...">
    <button class="submit">
        <span class="symbol_a">arrow_upward</span>
    </button>
</div>

<style lang="scss">

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

    .time {
        height: 45px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;

        z-index: 3;
        background-color: var(--link-color);
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: "GoogleSans";
        color: #fff;
        user-select: none;
    }

    .submit {
        height: 45px;
        aspect-ratio: 1 / 1;
        border-radius: 100%;

        z-index: 3;
        border: none;
        background-color: var(--link-color);
        display: flex;
        cursor: pointer;

        transition: background-color 0.07s ease-in-out;

        & .symbol_a {
            color: #fff;
            font-size: 2rem;
            text-align: center;
            margin: auto;
            font-family: "GoogleSymbols";
        }

        &:hover {
            background-color: var(--light-link-hover);
        }
    }

    .input-wrapper {
        width: 100%;
        height: 85%;
        min-width: 10rem;
        max-width: 40rem;
        overflow: visible;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .75rem;
        justify-content: center;
        position: relative;

        border-radius: calc(.85 * 7rem);
        background-color: var(--outset-bg);
        padding: 1rem;

        &::before {
            content: "";
            position: absolute;
            width: 100%; height: 100%;

            top: 10%;
            opacity: 0.7;
            filter: blur(20px);
            background: conic-gradient(from var(--rotation), #f45f5f, #589cfc, #f6d02a, #aafbc0, #d070f0);
            animation: rotate 5s linear infinite;
            z-index: -1;
        }
    }

    .input {
        border: none;
        position: relative;
        width: 100%; height: 100%;

        font-family: "GoogleSans";
        font-size: 1.5rem;
        background: none;

        margin-left: .5rem;

        &:focus {
            outline: none;
        }
    }
</style>