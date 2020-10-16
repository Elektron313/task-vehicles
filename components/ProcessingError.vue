<template>
    <div  :class="$style.error">
        <h1>{{ error }}</h1>
        <p>Please refresh the page</p>
        <Button :click="fetchData" :class="$style.reloadButton">
            <span>Reload page</span>
        </Button>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from '~/components/Button.vue';
import { VehicleType } from '~/types';

@Component({
    components: {
        Button,
    },
})
export default class ProcessingError extends Vue {
    @Prop({ required: true })
    public readonly error!: string;

    @Prop({ required: true })
    public readonly fetchData!: () => Promise<VehicleType>;
}
</script>
<style module>
.error {
    height: calc(100vh - 288px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.error h1 {
    font-size: 40px;
    font-weight: bold;
    line-height: 120%;
    color: #012345;
}
.error p {
    font-size: 14px;
    font-weight: 300;
    line-height: 146%;
    color: #677b8f;
    margin: 24px 0 40px 0;
}
.error span {
    font-family: 'Codec Pro', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: bold;
    line-height: 14px;
    color: #fcfcfc;
}
.reloadButton {
    width: 161px;
    height: 48px;
}
</style>
