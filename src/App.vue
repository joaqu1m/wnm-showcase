<template>
    <router-view></router-view>
</template>

<script>
    import Home from './views/Home.vue';

    export default {
        name: 'App',
        components: {
            Home
        }
    }
</script>

<style>
    @font-face {
        font-family: "Spartan";
        src: url("./fonts/l7gAbjR61M69yt8Z8w6FZf9WoBxdBrGFuG6OChXtf4qS.ttf") format("truetype");
        font-weight: 100;
    }
    @font-face {
        font-family: "Spartan";
        src: url("./fonts/l7gAbjR61M69yt8Z8w6FZf9WoBxdBrEFuW6OChXtf4qS.ttf") format("truetype");
        font-weight: 200;
    }
    @font-face {
        font-family: "Spartan";
        src: url("./fonts/l7gAbjR61M69yt8Z8w6FZf9WoBxdBrHbuW6OChXtf4qS.ttf") format("truetype");
        font-weight: 300;
    }
    @font-face {
        font-family: "Spartan";
        src: url("./fonts/l7gAbjR61M69yt8Z8w6FZf9WoBxdBrGFuW6OChXtf4qS.ttf") format("truetype");
        font-weight: normal;
    }
    @font-face {
        font-family: "Spartan";
        src: url("./fonts/l7gAbjR61M69yt8Z8w6FZf9WoBxdBrG3uW6OChXtf4qS.ttf") format("truetype");
        font-weight: 500;
    }

    :root {
        --palette-primary: #002C4A;
        --palette-secondary: #D3D3D3;
        --palette-tertiary: #4A90E2;
        --palette-quaternary: #77D8A5;
        --palette-black: #20262E;
    }

    body {
        margin: 0;
    }
    * {
        font-family: "Spartan";
    }
</style>
