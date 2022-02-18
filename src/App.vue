
<template>
<v-app>
        <v-content>
            <router-view></router-view>
        </v-content>
    </v-app>
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
                document.getElementById("openbtn").style.transform = "rotate(20deg)";
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

<style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&family=Roboto:wght@100&display=swap');
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
    background-color: rgba(255, 255, 255, 1);
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
    color: #c0c0c0;
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
    border-radius: 25px;
    transition: 0.4s;
}

.openbtn:hover {
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    transform: rotate(-90deg);
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

    background-image: url("./assets/color.png");
    background-repeat: repeat;
    background-size:auto;
    background-position: top;
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
    border-radius: 25px;
    transition: 0.4s;
}

.search-box .search-bar:focus {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
}

.search-box .search-bar:hover {
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
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

.grid-container {
  display: inline-grid;
}


/* ------------------------   Css for About Page  -----------------------*/


#app {
    height: 100em;
    background-size: cover;
    background-position: bottom;
    transition: 0.4s;
}

.grid-container {
    display: grid;

    grid-template-columns: auto auto auto;
    margin-top: 1em;
    column-gap: 1em;
    row-gap: 1em;

}

.grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
    border-radius: 16px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 1);
    border-radius: 16px;
    font-family: "roboto", sans-serif;
}

.grid-item:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transform: scale(0.9, 0.9);
    transition: 0.4s;
    transition-timing-function: ease-in-out
}

img {
    width: 50%;
}

iframe{
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        background-color: rgba(255, 255, 255, 1);
        border-radius: 16px;
        width:100%;
        height:80vh;
}
/* ------------------------   Change CSS for different Screen Sizes  -----------------------*/

@media screen and (max-width: 600px) {
    .grid-container {
        grid-template-columns: 100%;

    }
    #app{
        background-repeat: repeat-y !important;
    }

    iframe{
        width: 100vm;
        height: 50vmmax;
    }
}

@media screen and (min-width: 600px) {
    .grid-container {
        grid-template-columns: 50% 50%;
    }

}

@media screen and (min-width: 1000px) {
    .grid-container {
        grid-template-columns: 33% 33% 33%;
        padding-right: 1em;

    }
}

@media screen and (min-width: 1500px) {
    .grid-container {
        grid-template-columns: 25% 25% 25% 25%;

        margin-right: 2em;

    }
}
#getRickRolled{
    margin-top:1em;
    height:100%;
    ;
}
#description{
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    font-family: montserrat;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}

#Title{
    background-color: white;
    padding: 1%;
    border-radius: 10px;
    font-family: montserrat;
    color:black;
    margin-top: 1em;
    margin-left: 2em;
    margin-right: 3em;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
</style>
