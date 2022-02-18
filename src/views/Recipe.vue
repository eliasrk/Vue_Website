<template>
<main class="About" id="app">
    <div>
        <div style="display: flex">
            <div id="mySidebar" class="sidebar">
                <a href="javascript:void(0)" class="closebtn" @click="toggleNav()">&#10005;</a>
                <router-link to="/Weather.vue" @click="toggleNav()">Weather</router-link>
                <router-link to="/Rick.vue" @click="toggleNav()">Music Streaming</router-link>
                <router-link to="Recipe.vue" @click="toggleNav()">Recipe Book</router-link>
            </div>
            <div id="main">
                <button class="openbtn" @click="toggleNav()">&#9778;</button>
            </div>
        </div>
        <div class="grid-container">
            <div class="grid-item">
                <div><img src="@/assets/chicken.png" alt="Chicken"></div><a href="https://www.gordonramsay.com/gr/recipes/picklebrinedfriedchicken/" target="_blank">
                    <div>Chicken Recipe</div>
                </a>
            </div>
            <div class="grid-item">
                <div><img src="@/assets/noodles.png" alt="Noodles"></div><a href="https://www.yummly.com/recipe/Garden-Ramen-Noodles-2073354?prm-v1" target="_blank">
                    <div>Noodles Recipe</div>
                </a>
            </div>
            <div class="grid-item">
                <div><img src="@/assets/pizza.png" alt="Pizza"></div><a href="https://www.yummly.com/recipe/Perfect-Homemade-Pizza-2707122?prm-v1" target="_blank">
                    <div>Pizza Recipe</div>
                </a>
            </div>
            <div class="grid-item">
                <div><img src="@/assets/steak.png" alt="Steak"></div><a href="https://www.yummly.com/recipe/Marinated-Skirt-Steak-1635259?prm-v1" target="_blank">
                    <div>Steak Recipe</div>
                </a>
            </div>
            <div class="grid-item">
                <div><img src="@/assets/burger.png" alt="Burger"></div><a href="https://www.gordonramsay.com/gr/recipes/veganblt/" target="_blank">
                    <div>Burger Recipe</div>
                </a>
            </div>
             <div class="grid-item">
                <div><img src="@/assets/chicken.png" alt="Chicken"></div><a href="https://www.gordonramsay.com/gr/recipes/picklebrinedfriedchicken/" target="_blank">
                    <div>Chicken Recipe</div>
                </a>
            </div>
            <div class="grid-item">
                <div><img src="@/assets/burger.png" alt="Burger"></div><a href="https://www.gordonramsay.com/gr/recipes/veganblt/" target="_blank">
                    <div>Burger Recipe</div>
                </a>
            </div>
        </div>
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
