<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
    import Header from '#lib/components/Header.svelte';
    import Sidebar from '#lib/components/Sidebar.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="layout">
	<Header />

	<div class="main-layout">
		<Sidebar open={false} />

		<div class="layout-main-content">
			{@render children()}
		</div>
	</div>
</div>
<style lang="scss">
	:global(*) {
		box-sizing: border-box;

	}

	.layout {
		display: flex;
		flex-direction: column;
	}

	.main-layout {
		display: flex;
		flex-direction: row;
	}

	.layout-main-content {
		flex-grow: 1;
	}

	:root {
		--std-br: 12px;

		--font-color: rgb(31, 31, 31);

		--page-bg: #f8fafd;
		--outset-bg: #fff;

		--std-bc: #c4c7c5;
		--std-bs: .0625rem;
		--card-border: var(--std-bs) solid var(--std-bc);

		--us-hover: #444746;

		--link-color: rgb(11, 87, 208);
		--link-hover: #0b57d0;
		--light-link-hover: rgb(194, 231, 255);
		--link-fill: #004a77;
	}

	:global(body) {
		background-color: var(--page-bg);
		margin: 0;
	}

	:global(._c_title) {
		font-family: "GoogleSans";

		font-size: 1.5rem;
		font-weight: 400;
		line-height: 2rem;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(._c_subtitle) {
		font-size: .75rem;
		font-weight: bold;
		line-height: 1rem;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(._c_details) {
		font-size: .75rem;
		
		line-height: 1rem;

		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:global(._link) {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
			transition: all 0.03 ease-in-out;
			line-height: 1.4rem;

			text-decoration-thickness: 2px;      
			text-underline-offset: 4px; 
			text-decoration-skip-ink: none; 
			
		}
	}

	:global(.symbol) {
        font-family: "GoogleSymbols";
        block-size: 24px;
        font-size: 24px;
        inline-size: 24px;
        
        display: flex;
        align-items: center;

        color: var(--font-color);
    }

	@font-face {
		font-family: "GoogleSans";
		src: url("/fonts/GoogleSans.ttf");
	}

	@font-face {
		font-family: "GoogleSymbols";
		src: url("/fonts/GoogleSymbols.ttf");
	}
</style>