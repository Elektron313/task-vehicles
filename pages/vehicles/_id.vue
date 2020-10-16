<template>
    <div :class="$style.container">
        <div v-if="status === 'SUCCESS'" :class="$style.wrapper">
            <div :class="$style.photo">
                <img :src="data.image" alt="photo" />
            </div>
            <div :class="$style.description">
                <h2 :class="$style.nameVehicle">{{ data.name }}</h2>
                <nav>
                    <NuxtLink
                        :class="$style.navigationItem"
                        to="specifications"
                        :active-class="$style.activeLink"
                        exact
                    >
                        <span>Specifications</span>
                    </NuxtLink>
                    <NuxtLink :class="$style.navigationItem" to="team" :active-class="$style.activeLink" exact>
                        <span>Team</span>
                    </NuxtLink>
                    <NuxtLink :class="$style.navigationItem" to="rentTerms" :active-class="$style.activeLink" exact>
                        <span>Rent terms</span>
                    </NuxtLink>
                </nav>
                <div>
                    <NuxtChild :data="data" />
                </div>
                <div :class="$style.rent">
                    <p :class="$style['rent__price']">
                        Rent for <span>{{ data.rent }} $/h</span>
                    </p>
                    <Button :class="$style['rent__button']" :click="() => {}">
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
<style module>
.container {
    width: 100%;
    height: calc(100vh - 288px);
    background-color: white;
    border-radius: 48px;
    margin-top: 44px;
    position: relative;
}
.wrapper {
    display: flex;
    height: 100%;
}
.photo {
    width: 50%;
    height: 100%;
    position: relative;
    /*background-color: #012345;*/
}

.photo img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
}
.nameVehicle {
    color: #012345;
    font-size: 40px;
    line-height: 120%;
    font-weight: 700;
    margin-bottom: 32px;
}
.description {
    width: 50%;
    height: 100%;
    margin-left: 64px;
    /*background-color: #4959ff;*/
}
/*.navigation a {*/
/*    */
/*}*/
.navigationItem {
    margin-right: 16px;
    color: #677b8f;
    text-decoration: none;
    font-weight: 700;
}
.activeLink {
    color: #4959ff;
}
.rent {
    margin-top: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f3f4f7;
    width: 100%;
    height: 80px;
    border-radius: 16px;
    padding: 0 32px;
}
.rent__price span {
    color: #f84ab3;
}
.rent__button {
    width: 136px;
    height: 48px;
}
.rent__button span {
    color: #fcfcfc;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
}
</style>
