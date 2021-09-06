<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	
	import AboutPage from "./pages/about/AboutPage.svelte";
	import CardsPage from "./pages/table/CardsPage.svelte";
import SideBar from "./side-bar/SideBar.svelte";

</script>

<main class="main">
	<Router url="" >
		
		<div class="side-bar">
			<SideBar />
		</div>
		

		<div class="content">
			<Route path="/">
				<CardsPage />
			</Route>
	
			<Route path="about">
				<AboutPage />
			</Route>
		</div>
		
		

	</Router>
	
</main>

<style>
	.main {
		display: flex;
		height: 100%;
		width: 100%;
	}

	.side-bar {
		width: 150px;
		padding-right: 5px;
	}

	.content {
		flex: 1;
	}
</style>