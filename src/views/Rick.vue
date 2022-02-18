<template>
<main class="About" id="app">
    <div>
        <div style="display: flex">
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" @click="toggleNav()">&times;</a>
                <router-link to="/Weather.vue" @click="toggleNav()">Weather</router-link>
                <router-link to="/Rick.vue" @click="toggleNav()">Music Streaming</router-link>
                <router-link to="Recipe.vue" @click="toggleNav()">Recipe Book</router-link>
            </div>
            <div id="main">
                <button class="openbtn" @click="toggleNav()">&#9778;</button>
            </div> 
        </div>
    </div><div id="getRickRolled">
    <iframe  src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=42"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay;&autoplay=1;&loop=1;; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
</main>
</template>

<script>
export default {

    methods: {
        /* --------------------   toggle Sidebar   -----------------------*/
        toggleNav() {
            if (!this.isActive) {
                document.getElementById("mySidebar").style.width = "250px";
                document.getElementById("main").style.marginLeft = "250px";
                this.isActive = true;
            } else {
                document.getElementById("mySidebar").style.width = "0";
                document.getElementById("main").style.marginLeft = "0";
                this.isActive = false;
            }
        },

    }
};
</script>
