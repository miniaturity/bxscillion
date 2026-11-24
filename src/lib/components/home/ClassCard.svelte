<script lang="ts">
    import type { IClassCard } from "#lib/data.ts";

    let { id, title, subtitle, teacher, icon }: IClassCard = $props();
</script>

<div class="class-card">
    <div class="header">
        <div class="h-content">
            <a class="hc-title" href={`/set/${id}`}>
                {title}
            </a>
            <div class="_c_subtitle hc-subtitle">
                {subtitle}
            </div>

            {#if teacher}
                <div class="_c_details hc-subtitle">
                    {teacher}
                </div>
            {/if}

        </div>

        <div class="h-bg_container"></div>
    </div>

    <div class="content">
        <img class="pfp" alt="" src={icon ?? "/images/default_pfp.jpg"}/>
    </div>

    <div class="footer">
        <div class="f-content">
            <div class="f-button">
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path><path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path></svg>
            </div>

            <div class="f-button">
                <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></svg>
            </div>

            <div class="f-button">
                <span class="symbol">more_vert</span>    
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    /* #region LAYOUT */

    .class-card {
        --w: calc(25% - .75rem);
        --h: 18.5rem;
        --br: var(--std-br);

        width: var(--w); height: var(--h);
        background-color: var(--outset-bg);

        
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        
        text-align: left;

        @media screen and (max-width: 80rem) {
            width: calc(33.33333333% - .66666667rem);
        }

        @media screen and (max-width: 60rem) {
            width: calc(50% - .5rem);
        }

        @media screen and (max-width: 40rem) {
            width: 100%;
        }

        border: 2px solid red;
        border: var(--card-border);
        border-radius: var(--br);
        
        font-family: "GoogleSans";
    }

    .header {
        min-height: 6.25rem;
        position: relative;
        z-index: 2;
    }

    .content {
        flex-grow: 1;
        min-height: 0;
    }

    .footer {
        border-top: var(--card-border);
        gap: 1rem;
        line-height: 0;
        padding: .5rem .25rem;

        flex-shrink: 0;
    }
    
    /* #endregion */
    
    /* #region HEADER */
    .h-bg_container {
        background-color: #5360ee;
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        z-index: -1;
    }

    .h-content {
        padding: 1rem 1rem .5rem;
        display: flex;
        flex-direction: column;
        gap: .25rem;

        color: #fff;
    }

    .hc-title {
        color: #fff;
        
        font-size: 1.5rem;
		font-weight: 400;
		line-height: 2rem;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
        text-decoration: none;

        &:hover {
			text-decoration: underline;
			transition: all 0.03 ease-in-out;

			text-decoration-thickness: 2px;    
						
		}
    }

    
    /* #endregion */

    /* #region FOOTER */
        .f-content {
            padding: 8px 4px;
            height: 40px;

            
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            gap: 1rem;
        }

        .f-button {
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
    /* #endregion */

    /* #region CONTENT */
        .pfp {
            border-radius: 50%;
            float: right;
            height: 4.5rem;
            margin-right: 1rem;
            margin-top: -2.25rem;
            position: relative;
            width: 4.5rem;
            z-index: 3;
        }
    /* #endregion */
</style>