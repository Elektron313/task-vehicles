<template>
    <div :class="$style['popup-wrapper']">
        <div :class="[$style['v-popup'], nightMode ? $style.night : $style.day]">
            <div :class="$style['v-popup__header']">
                <span :class="[$style['v-popup__header-title'], nightMode ? $style.night : $style.day]">{{
                    popupTitle
                }}</span>
                <Button
                    :class="[$style['v-popup__header-close'], nightMode ? $style.night : $style.day]"
                    :click="close"
                >
                    X
                </Button>
            </div>
            <div :class="$style['v-popup-content']">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Button from '~/components/Button.vue';

@Component({
    components: {
        Button,
    },
})
export default class Popup extends Vue {
    @Prop({ default: '' })
    public readonly popupTitle!: string;

    @Prop({ required: true })
    public readonly close!: () => void;

    mounted(): void {
        document.body.style.overflowY = 'hidden';
    }

    destroyed(): void {
        document.body.style.overflowY = 'visible';
    }

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>
<style lang="scss" module>
.popup-wrapper {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    top: 0;
    overflow-y: hidden;
    background-color: rgba(0, 0, 0, 0.5);
}
.v-popup {
    padding: 64px 72px;
    position: fixed;
    top: 0;
    right: 0;

    border-radius: 48px 0 0 48px;
    height: 100vh;
    width: 600px;

    &.day {
        background-color: #fcfcfc;
    }

    &.night {
        background-color: #012345;
    }

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;

        &-title {
            font-weight: bold;
            font-size: 40px;
            line-height: 120%;

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &-close {
            width: 48px;
            height: 48px;
            border-radius: 16px;

            &.day {
                background: #f3f4f7;
                color: #012345;
            }

            &.night {
                background: #011c37;
                color: #fcfcfc;
            }
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .popup-wrapper {
    }
    .v-popup {
        padding: 28px 16px 32px 16px;
        position: fixed;
        top: 159px;
        background-color: #fcfcfc;
        border-radius: 24px 24px 0 0;
        height: calc(100vh - 159px);
        width: 100%;
        overflow: scroll;

        &__header {
            margin-bottom: 24px;

            &-title {
                font-size: 24px;
            }

            &-close {
                width: 32px;
                height: 32px;
                border-radius: 8px;
            }
        }
    }
}
</style>
