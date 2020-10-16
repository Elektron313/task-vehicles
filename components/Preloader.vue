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
<style module>
.loading {
    height: calc(100vh - 288px);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
