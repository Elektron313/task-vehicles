<template>
    <div class="app">
        <Header />
        <Nuxt />
    </div>
</template>

<style>
html {
    font-family: 'Codec Pro', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #677b8f;
}
.app {
    margin: 48px 64px;
}
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}
</style>
<script>
import { Vue, Component } from 'vue-property-decorator';
import NavBar from '../components/Header';
@Component({
    components: { NavBar },
})
export default class Default extends Vue {}
</script>
