<template>
    <div :class="$style.term">
        <p :class="$style['term__text']">{{ data.term_text }}</p>
        <div :class="$style['term__condition']">
            <span :class="[$style['term__condition-title'], nightMode ? $style.night : $style.day]"
                >Additional conditions:
            </span>
            <ul>
                <li>
                    <span :class="$style['term__condition-text']">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                </li>
                <li>
                    <span :class="$style['term__condition-text']"
                        >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </span>
                </li>
                <li>
                    <span :class="$style['term__condition-text']">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                        consequat duis enim velit mollit.
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VehicleType } from '../../../types';

@Component
export default class RentTerms extends Vue {
    @Prop({ required: true })
    public readonly data!: VehicleType;

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }
}
</script>

<style module lang="scss">
.term {
    margin-top: 32px;

    &__text {
        margin-bottom: 24px;
        font-weight: 300;
        font-size: 14px;
        line-height: 146%;
    }

    &__condition {
        &-title {
            font-weight: bold;
            font-size: 16px;
            line-height: 152%;

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &-text {
            font-weight: 300;
            font-size: 14px;
            line-height: 146%;
            color: #677b8f;
        }

        ul {
            padding-left: 15px;
        }

        li {
            color: #f84ab3;
            margin: 16px 0;
            padding-left: 20px;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .term {
        margin-top: 20px;

        &__text {
        }

        &__condition {
            &-title {
            }

            &-text {
            }

            ul {
                padding-left: 15px;
            }

            li {
                color: #f84ab3;
                margin: 16px 0;
                padding-left: 0;
            }
        }
    }
}
</style>
