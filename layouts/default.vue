<template>
    <div :class="[$style.app, nightMode ? $style['app-night'] : $style['app-day']]">
        <Header />
        <Nuxt />
    </div>
</template>

<style module lang="scss">
html {
    font-family: 'Codec Pro', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}
.app {
    padding: 48px 64px;

    &-night {
        color: #99a7b5;
        background: #012345;
    }

    &-day {
        color: #677b8f;
        background: #ffffff;
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .app {
        padding: 20px 0;
    }
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
import { PortalTarget } from 'portal-vue';
import NavBar from '../components/Header';
import AddVehicle from '~/forms/AddVehicle.vue';

@Component({
    components: { NavBar, AddVehicle, PortalTarget },
})
export default class Default extends Vue {
    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>
