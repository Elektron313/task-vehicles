<template>
    <div :class="$style.loading">
        <h1>Loading Data ...</h1>
    </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Preloader extends Vue {}
</script>
<style module lang="scss">
.loading {
    height: calc(100vh - 196px);
    display: flex;
    justify-content: center;
    align-items: center;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .loading {
        height: calc(100vh - 145px);
    }
}
</style>
