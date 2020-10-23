<template>
    <div :class="[$style.wrapper, nightMode ? $style.night : $style.day]">
        <div v-if="status === 'SUCCESS'" :class="$style.vehicle">
            <div :class="$style['vehicle__photo']">
                <img :src="data.image" alt="photo" />
            </div>
            <div :class="$style['vehicle__description']">
                <h2 :class="[$style['vehicle__description-name'], nightMode ? $style.night : $style.day]">
                    {{ data.name }}
                </h2>
                <nav>
                    <NuxtLink
                        :class="$style['vehicle__description-link']"
                        to="specifications"
                        :active-class="$style.activeLink"
                        exact
                    >
                        <span>Specifications</span>
                    </NuxtLink>
                    <NuxtLink
                        :class="$style['vehicle__description-link']"
                        to="team"
                        :active-class="$style.activeLink"
                        exact
                    >
                        <span>Team</span>
                    </NuxtLink>
                    <NuxtLink
                        :class="$style['vehicle__description-link']"
                        to="rent-terms"
                        :active-class="$style.activeLink"
                        exact
                    >
                        <span>Rent terms</span>
                    </NuxtLink>
                </nav>
                <div>
                    <NuxtChild :data="data" />
                </div>
                <div :class="[$style['vehicle__description-rent'], nightMode ? $style.night : $style.day]">
                    <p :class="[$style['rent-price'], nightMode ? $style.night : $style.day]">
                        Rent for <span>{{ data.rent }} $/h</span>
                    </p>
                    <Button :class="$style['rent-button']" :click="() => {}">
                        <span>Rent now</span>
                    </Button>
                </div>
            </div>
        </div>
        <Preloader v-else-if="status === 'LOADING'" />
        <ProcessingError v-else-if="status === 'ERROR'" :error="error" :fetch-data="fetchData" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { VehicleType } from '../../types';
import { Context } from '~/node_modules/@nuxt/types';
import { getVehicles } from '~/request';
import { Status } from '~/store/vehiclesModule';
import ProcessingError from '~/components/ProcessingError.vue';
import Preloader from '~/components/Preloader.vue';
import Button from '~/components/Button.vue';

@Component({
    components: {
        ProcessingError,
        Preloader,
        Button,
    },
})
export default class DetailPageVehicle extends Vue {
    data: VehicleType | null = null;

    status: Status | null = null;

    error: string = '';

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }

    async fetchData() {
        try {
            this.status = Status.Loading;
            const vehicle = await getVehicles().then((data) =>
                data.find((vehicle) => vehicle.id === this.$route.params.id)
            );
            this.status = Status.Success;
            if (vehicle) {
                this.data = vehicle;
                this.error = '';
            } else {
                this.$nuxt.error({ statusCode: 404, message: 'Post not found' });
            }
        } catch ({ error }) {
            this.status = Status.Error;
            this.error = error;
        }
    }

    async asyncData({ params, error }: Context) {
        try {
            const data = await getVehicles().then((data) => data.find((vehicle) => vehicle.id === params.id));
            if (data) {
                return { data: data || null, status: Status.Success };
            }
            error({ statusCode: 404, message: 'Post not found' });
        } catch ({ error }) {
            return { error, status: Status.Error };
        }
    }
}
</script>
<style module lang="scss">
.wrapper {
    width: 100%;
    height: auto;
    background-color: white;
    border-radius: 48px;
    margin-top: 44px;
    position: relative;

    &.day {
        background-color: #fcfcfc;
    }

    &.night {
        background-color: #012345;
    }
}
.vehicle {
    display: flex;
    height: auto;

    &__photo {
        width: 50%;
        height: auto;

        img {
            width: 100%;
            height: calc(100vh - 199px);
            border-radius: 24px;
        }
    }

    &__description {
        width: 50%;
        height: inherit;
        margin-left: 64px;

        &-name {
            font-size: 40px;
            line-height: 120%;
            font-weight: 700;
            margin-bottom: 32px;

            &.day {
                color: #012345;
            }

            &.night {
                color: #fcfcfc;
            }
        }

        &-link {
            margin-right: 16px;
            color: #677b8f;
            text-decoration: none;
            font-weight: 700;
        }

        &-rent {
            margin-top: 45px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f3f4f7;
            width: 100%;
            height: 80px;
            border-radius: 16px;
            padding: 0 32px;

            &.day {
                background-color: #f3f4f7;
            }

            &.night {
                background-color: #011c37;
            }

            .rent-button {
                width: 136px;
                height: 48px;

                span {
                    color: #fcfcfc;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 14px;
                }
            }
            .rent-price {
                font-weight: bold;
                font-size: 20px;
                line-height: 140%;

                &.day {
                    color: #012345;
                }

                &.night {
                    color: #fcfcfc;
                }
                span {
                    color: #f84ab3;
                }
            }
        }
    }
}

.activeLink {
    color: #4959ff;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .wrapper {
        margin-top: 20px;
    }
    .vehicle {
        display: block;
        margin: 0 16px 22px 16px;
        &__photo {
            width: auto;
            height: 100%;

            img {
                width: 100%;
                height: 332px;
                border-radius: 16px;
            }
        }

        &__description {
            margin-top: 22px;
            width: auto;
            height: auto;
            margin-left: 0;

            &-name {
                color: #012345;
                font-size: 24px;
                margin-bottom: 16px;
            }

            &-link {
                margin-right: 20px;
            }

            &-rent {
                margin-top: 26px;
                height: 68px;
                padding: 0 24px;
                position: sticky;
                bottom: 32px;

                .rent-button {
                    width: 111px;
                    height: 44px;

                    span {
                        font-size: 14px;
                        line-height: 12px;
                    }
                }
                .rent-price {
                    font-size: 16px;

                    span {
                        color: #f84ab3;
                    }
                }
            }
        }
    }
}
</style>
