<script lang="ts">
    import ClassCard from "#lib/components/home/ClassCard.svelte";
	import { ExampleClass } from "#lib/data.ts";

</script>

<div class="page">
	<main>
		<section id="classes">
			<div class="s-wrapper">
				<header class="s-header">
					<div class="s-title">Question Sets</div>
					<div class="s-buttons">
						<div class="add-class">
							<span class="add add-symbol">add</span>
							<span class="add add-text">Add Class</span>
						</div>
					</div>
				</header>
				<div class="s-content">
					<ClassCard {...ExampleClass} />
				</div>
			</div>
		</section>
	</main>
</div>

<style lang="scss">
	main {
		padding: 0 .5rem;
		width: 100%; height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 1.5rem; 
	}

	section {
		display: flex;
		flex-direction: column;
		max-width: 1280px;
	
		width: 100%;
		
		gap: 1.5rem;

		border-radius: 1.75rem;
		padding: 0.5rem;
	}

	.add-class {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: .25rem;
		position: relative;
		cursor: pointer;

		&:hover {
			&::before {
				--p: 8px;
				content: "";
				position: absolute;
				top: calc(var(--p) * -1); left: calc(var(--p) * -1);
				padding: var(--p);
				width: 100%; height: 100%;
				border-radius: 20px;
				background-color: var(--link-hover);
				opacity: 0.1;
				transition: opacity 0.04s ease-in-out;
			}
		}
	}

	.add {
		color: var(--link-color);
		user-select: none;
	}

	.add-symbol {
		font-size: 18px;
		font-family: "GoogleSymbols";
		font-weight: bold;
		margin-bottom: 2px;

		
	}

	.add-text {
		font-family: "GoogleSans";
		font-weight: bold;
	}

	.s-header {
		height: 3rem;

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.s-buttons {
		display: flex;
		flex-direction: row;
	}

	.s-title {
		font-size: 1.375rem;
		font-family: "GoogleSans";
	}

	.s-wrapper {
		display: flex;
		flex-direction: column;
	
		width: 100%;
		
		padding: 0.5rem 1.5rem 1.5rem 1.5rem;

		border-radius: 1.75rem;
		gap: 1.5rem;
		background-color: var(--outset-bg);
	}

</style>
