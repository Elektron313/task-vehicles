<template>
    <div :class="$style.specifications">
        <p :class="$style['specifications__content']">{{ data.specifications_text }}</p>
        <div :class="$style['specifications__features']">
            <h2 :class="[$style['specifications__features-title'], nightMode ? $style.night : $style.day]">
                Features:
            </h2>
            <div :class="$style['specifications__features-list']">
                <div :class="$style['specifications__features-list-item']">
                    <div :class="[$style['img-container'], nightMode ? $style.night : $style.day]">
                        <img src="~/assets/Cup.svg" alt="img" />
                    </div>
                    <div :class="$style.info">
                        <p :class="[$style['info__title'], nightMode ? $style.night : $style.day]">
                            A challenge for a true champion
                        </p>
                        <p :class="$style['info__text']">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                        </p>
                    </div>
                </div>
                <div :class="$style['specifications__features-list-item']">
                    <div :class="[$style['img-container'], nightMode ? $style.night : $style.day]">
                        <img src="~/assets/Man.svg" alt="img" />
                    </div>
                    <div :class="$style.info">
                        <p :class="[$style['info__title'], nightMode ? $style.night : $style.day]">
                            Pilot's sweaty hands
                        </p>
                        <p :class="$style['info__text']">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VehicleType } from '../../../types';
import Button from '~/components/Button.vue';

@Component({
    components: {
        Button,
    },
})
export default class Specifications extends Vue {
    @Prop({ required: true })
    public readonly data!: VehicleType;

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>
<style module lang="scss">
.specifications {
    margin-top: 32px;

    &__content {
        font-size: 14px;
        line-height: 146%;
        font-weight: 300;
        color: #677b8f;
    }

    &__features {
        margin-top: 32px;

        &-title {
            font-weight: bold;
            font-size: 24px;
            line-height: 21px;

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &-list {
            margin-top: 32px;

            &-item {
                display: flex;
                justify-content: space-around;
                margin: 16px 0;

                .img-container {
                    width: 80px;
                    height: 96px;
                    border-radius: 16px;
                    flex-shrink: 0;

                    &.day {
                        background-color: #f3f4f7;
                    }

                    &.night {
                        background-color: #011c37;
                    }

                    > img {
                        margin: 36px 25px;
                    }
                }
            }
        }
    }
}

.info {
    margin-left: 24px;

    &__title {
        color: #012345;
        font-weight: bold;
        font-size: 16px;
        line-height: 152%;
        margin: 8px 0;
    }

    &__text {
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
        color: #677b8f;
    }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
    .specifications {
        margin-top: 20px;

        &__content {
        }

        &__features {
            margin-top: 20px;

            &-title {
                font-size: 20px;
                color: #012345;
            }

            &-list {
                margin-top: 20px;

                &-item {
                    display: flex;
                    justify-content: space-around;
                    margin: 16px 0;

                    .img-container {
                        width: 64px;
                        height: 80px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        > img {
                            margin: 0;
                            width: 22px;
                            height: 18px;
                        }
                    }
                }
            }
        }
    }

    .info {
        margin-left: 24px;

        &__title {
            margin: 0;
            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &__text {
            margin-top: 4px;
        }
    }
}
</style>
