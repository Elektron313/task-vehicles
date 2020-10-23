<template>
    <div :class="[$style.vehicle, nightMode ? $style.night : $style.day]">
        <div>
            <img :class="$style['vehicle__previewPhoto']" :src="previewPhoto" alt="photo" />
        </div>
        <div :class="$style['vehicle__info']">
            <div :class="$style['vehicle__link']">
                <NuxtLink :to="{ name: 'vehicles-id-specifications', params: { id } }" exact>
                    <span :class="[$style['vehicle__link-name'], nightMode ? $style.night : $style.day]">{{
                        name
                    }}</span>
                </NuxtLink>
            </div>
            <p :class="$style['vehicle__description']">{{ description }}</p>
            <p :class="$style['vehicle__rent']">{{ rent }} $/h</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';

@Component({
    components: {
        Logo,
    },
})
export default class Vehicle extends Vue {
    @Prop({ required: true })
    public readonly previewPhoto!: string;

    @Prop({ required: true })
    public readonly name!: string;

    @Prop({ required: true })
    public readonly description!: string;

    @Prop({ required: true })
    public readonly rent!: number;

    @Prop({ required: true })
    public readonly id!: string;

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>

<style module lang="scss">
.vehicle {
    width: 374px;
    height: 164px;
    display: flex;
    border-radius: 24px;

    &.day {
        background-color: #fcfcfc;
    }

    &.night {
        background-color: #012345;
    }

    &__previewPhoto {
        width: 88px;
        height: 88px;
        margin: 24px 0 52px 32px;
        border-radius: 24px;
    }

    &__info {
        padding-left: 24px;
    }

    &__link {
        margin-top: 40px;

        a {
            text-decoration: none;
        }
        &-name {
            font-size: 16px;
            font-weight: bold;
            line-height: 148%;
            user-select: none;

            &:hover {
                opacity: 0.7;
                cursor: pointer;
            }

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }
    }

    &__description {
        margin-top: 12px;
        font-size: 12px;
        color: #677b8f;
        font-weight: 400;
    }

    &__rent {
        font-size: 14px;
        font-weight: 700;
        color: #f84ab3;
        padding-top: 16px;
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .vehicle {
        width: 100%;
        height: auto;
        display: flex;
        border-radius: 24px;

        &__previewPhoto {
            margin: 20px 0 43px 20px;
            border-radius: 16px;
        }

        &__info {
            padding: 0 20px;
        }

        &__link {
            margin-top: 32px;

            a {
                text-decoration: none;
            }
            &-name {
                font-size: 16px;
                color: #012345;
                font-weight: bold;
                line-height: 148%;
                user-select: none;

                &:hover {
                    opacity: 0.7;
                    cursor: pointer;
                }
            }
        }

        &__description {
            margin-top: 12px;
            font-size: 12px;
            color: #677b8f;
            font-weight: 400;
        }

        &__rent {
            font-size: 14px;
            font-weight: 700;
            color: #f84ab3;
            padding-top: 16px;
        }
    }
}
</style>
