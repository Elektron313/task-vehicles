<template>
    <div :class="$style.error">
        <h1 :class="[$style['error__title'], nightMode ? $style.night : $style.day]">{{ error }}</h1>
        <p :class="$style['error__recommendedAction']">Please refresh the page</p>
        <Button :click="fetchData" :class="$style['error__reload']">
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

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>
<style module lang="scss">
.error {
    height: calc(100vh - 196px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &__title {
        font-size: 40px;
        font-weight: bold;
        line-height: 120%;

        &.day {
            color: #012345;
        }

        &.night {
            color: #fcfcfc;
        }
    }

    &__recommendedAction {
        font-size: 14px;
        font-weight: 300;
        line-height: 146%;
        color: #677b8f;
        margin: 24px 0 40px 0;
    }

    &__reload {
        width: 161px;
        height: 48px;

        span {
            font-family: 'Codec Pro', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
            font-size: 16px;
            font-weight: bold;
            line-height: 14px;
            color: #fcfcfc;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .error {
        height: calc(100vh - 145px);
    }
}
</style>
