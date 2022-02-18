<template>


<div>
    <main id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
        <div style="display: block">
            <div style="display: flex">
                <div id="mySidebar" class="sidebar">
                    <a href="javascript:void(0)" class="closebtn" @click="toggleNav()">&times;</a>
                    <!-- router link changes the page -->
                    <router-link to="/Weather.vue" @click="toggleNav()">Weather</router-link>
                    <router-link to="/Rick.vue" @click="toggleNav()">Music Streaming</router-link>
                    <router-link to="Recipe.vue" @click="toggleNav()">Recipe Book</router-link>
                </div>
                <div id="main">
                    <button class="openbtn" @click="toggleNav()">&#9778;</button>
                </div>
                <div class="search-box" id="inline">
                    <input type="text" class="search-bar" placeholder="Search For City Weather Data..." v-model="query" @keypress="fetchWeather" />
                </div>
            </div>
            <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
                <div class="location-box">
                    <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
                    <div class="date">{{ setDate() }}</div>
                </div>
                <div class="weather-box">
                    <div class="temp">{{ Math.round(weather.main.temp) }}°c</div>
                    <div class="weather">{{ weather.weather[0].main }}</div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            /* ------------------------   Data for the weather fetch to use  -----------------------*/
            api_key: "faeaea62adc77098f2411345b4eecd7c",
            url_base: "https://api.openweathermap.org/data/2.5/",
            query: "",
            weather: {},
        };
    },
    methods: {
        /* --------------------   fetch weather Data from Open WeatherAPI   -----------------------*/
        fetchWeather(e) {
            if (e.key == "Enter") {
                fetch(
                        `${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`
                    )
                    .then((res) => {
                        return res.json();
                    })
                    .then(this.setResults);
            }
        },
        setResults(results) {
            this.weather = results;
        },
        /* ------------------------   switches the sidebar ON/OFF  -----------------------*/
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
        /* ------------------------   Outputs todays Date  -----------------------*/
        setDate() {
            let d = new Date();
            let months = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            let days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ];
            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();
            return `${day} ${date} ${month} ${year}`;
        },
    },
};

</script>