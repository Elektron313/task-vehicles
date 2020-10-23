<template>
    <div :class="$style.team">
        <p :class="$style['team__text']">{{ data.team_text }}</p>
        <h2 :class="[$style['team__title'], nightMode ? $style.night : $style.day]">Qualified specialists</h2>
        <div :class="$style['team__specialists']">
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="[$style['specialist__description-fullname'], nightMode ? $style.night : $style.day]">
                        Marvin McKinney
                    </p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="[$style['specialist__description-fullname'], nightMode ? $style.night : $style.day]">
                        Marvin McKinney
                    </p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="[$style['specialist__description-fullname'], nightMode ? $style.night : $style.day]">
                        Marvin McKinney
                    </p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
        </div>
        <p :class="$style['team__specialists-text']">{{ data.team_text }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VehicleType } from '~/types';

@Component
export default class Team extends Vue {
    @Prop({ required: true })
    public readonly data!: VehicleType;

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>
<style module lang="scss">
.team {
    &__text {
        margin: 32px 0;
        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
    }

    &__title {
        margin-bottom: 32px;

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

    &__specialists {
        display: flex;
        align-items: center;

        &-text {
            font-size: 14px;
            margin-top: 32px;
            line-height: 146%;
            font-weight: 300;
        }
    }
}

.specialist {
    margin-right: 25px;

    &__description {
        &-fullname {
            color: #012345;
            font-weight: bold;
            font-size: 16px;
            line-height: 14px;
            margin: 16px 0 8px 0;

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &-role {
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .team {
        &__text {
            margin: 20px 0;
        }

        &__title {
            font-size: 20px;
            line-height: 140%;
            margin-bottom: 20px;
        }

        &__specialists {
            display: block;

            &-text {
                font-size: 14px;
                margin-top: 32px;
                line-height: 146%;
                font-weight: 300;
            }
        }
    }

    .specialist {
        margin: 12px 0;
        display: flex;
        justify-content: flex-start;

        &__description {
            padding: 16px 0 16px 16px;
            &-fullname {
                color: #012345;
                font-weight: bold;
                font-size: 16px;
                line-height: 14px;
                margin: 16px 0 8px 0;
            }

            &-role {
                font-size: 12px;
                margin-top: 4px;
            }
        }
    }
}
</style>
