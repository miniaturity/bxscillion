<header class="top-header">
    <div class="left">
        <button class="main-menu" title="Main Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class=" NMm5M"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>
        </button>

        <a href="/" class="header-link">
            <img src="/images/footer_logo.png" alt="" class="header-logo"/>
            <span class="hl-text _link">Bronx Science Krillion</span>
        </a> 
    </div>

    <div class="center">

    </div>

    <div class="right">

    </div>
</header>

<style lang="scss">
    .top-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 4rem;
    }

    .header-link {
        display: flex;
        flex-direction: row;
        align-items: center;

        font-family: "GoogleSans";
        text-decoration: none;

        margin-left: 8px;
    }

    .hl-text {
        margin-left: .5rem;
        color: var(--font-color);
        font-size: 1.5rem;
    }

    .header-logo {
        height: 32px;
    }

    .left {
        padding-left: 1.5rem;

        display: flex;
        flex-direction: row;
        align-items: center;

        @media not all and (max-width: 65.125rem) {
            flex: 1 1 0.0625rem;
            min-width: 0;
        }

        @media (max-width: 65.125rem) {
            flex-grow: 1;
            min-width: 0;
            overflow: hidden;
            margin-right: 1rem;
        }
    }

    .center {
        margin: 0 1rem;
        width: auto;
    }
    

    .main-menu {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;

        block-size: 40px;
        inline-size: 40px;
        width: 40px;
        margin: -8px;
        margin-right: 6px;

        position: relative;

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