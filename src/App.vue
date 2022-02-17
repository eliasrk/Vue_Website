<template>
<div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
        <div style="display: block">
            <div style="display: flex">
                <div id="mySidebar" class="sidebar">
                    <a href="javascript:void(0)" class="closebtn" @click="toggleNav()">&times;</a>
                    <a href="#">Homepage</a>
                    <a href="#">Recipe</a>
                    <a href="#">Recipe</a>
                    <a href="#">Contact</a>
                </div>

                <div id="main">
                    <button class="openbtn" @click="toggleNav()">&#9776;</button>
                </div>
                <div class="search-box" id="inline">
                    <input type="text" class="search-bar" placeholder="Search..." v-model="query" @keypress="fetchWeather" />
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
            api_key: "faeaea62adc77098f2411345b4eecd7c",
            url_base: "https://api.openweathermap.org/data/2.5/",
            query: "",
            weather: {},
        };
    },
    methods: {
        /* --------------------   toggle Sidebar   -----------------------*/
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

<style>
h1 {
    color: #f1f1f1;
}

/* --------------------   sidebar   -----------------------*/

.sidebar {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.75);
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
}

.sidebar a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.sidebar a:hover {
    color: #f1f1f1;
}

.sidebar .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
}

@media screen and (max-height: 450px) {
    .sidebar {
        padding-top: 15px;
    }

    .sidebar a {
        font-size: 18px;
    }
}

/* -----------------------   Menu Button   -------------------*/

.openbtn {
    font-size: 20px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.25);
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
}

.openbtn:hover {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
}

#main {
    transition: margin-left 0.5s;
    padding-right: 1em;
    padding-top: 0.2em;
}

/* -----------------------   General  -----------------------*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "montserrat", sans-serif;
}

#app {
    background-image: url("./assets/Backgroundblue.jpg");
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
}

.inline {
    display: inline;
}

main {
    min-height: 100vh;
    padding: 25px;

    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}

/* ------------------------   Search Bar  -----------------------*/

.search-box {
    width: 100%;
    margin-bottom: 30px;
}

.search-box .search-bar {
    width: 100%;
    padding: 15px;

    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    background: none;

    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 16px 0px 16px;
    transition: 0.4s;
}

.search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
}

.search-box .search-bar:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 16px 0px 16px 0px;
}

.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
}

.weather-box {
    text-align: center;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 900;

    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 900;
    font-style: normal;
    text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

#app.warm {
    background-image: url("./assets/warm.jpg");
}
</style>
