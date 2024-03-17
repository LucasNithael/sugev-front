<template>
    <div class="relative flex min-h-screen">
        <SideBar />
		<div class="flex-1 bg-neutral-300">
            <Header />
			<router-view />
		</div>

    </div>
</template>

<script>
    import SideBar from './SideBar.vue'
    import Header from './Header.vue'
    export default {
        components: {
            SideBar,
            Header
        }
    }
</script>