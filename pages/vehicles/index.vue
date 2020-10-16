<template>
    <div :class="$style.container">
        <template v-if="status === 'SUCCESS'">
            <div :class="$style.header">
                <div :class="$style.headerSelect">
                    <p :class="$style['select-container']">
                        Rent
                        <select :class="$style.select" @change="changeSelect">
                            <option v-for="type in this.$accessor.vehiclesModule.typesVehicles" :value="type">
                                {{ type }}
                            </option>
                        </select>
                    </p>
                </div>
                <div :class="$style.headerAdd">
                    <span :class="$style.descriptionButton">Add new</span>
                    <Button :class="$style.addButton" :click="fetchData">
                        <span :class="$style['addButton-child']">+</span>
                    </Button>
                </div>
            </div>
            <div :class="$style.list">
                <div v-for="vehicle in vehicles" :key="vehicle.id" :class="$style.listItem">
                    <Vehicle
                        :id="vehicle.id"
                        :preview-photo="vehicle.preview"
                        :name="vehicle.name"
                        :description="vehicle.description"
                        :rent="vehicle.rent"
                    />
                </div>
            </div>
        </template>
        <ProcessingError v-else-if="status === 'ERROR'" :error="error" :fetch-data="fetchData" />
        <Preloader v-else-if="status === 'LOADING'" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';
import Vehicle from '~/components/Vehicle.vue';
import Button from '~/components/Button.vue';
import { Context } from '~/node_modules/@nuxt/types';
import ProcessingError from '~/components/ProcessingError.vue';
import Preloader from '~/components/Preloader.vue';

@Component({
    components: {
        Logo,
        Vehicle,
        Button,
        ProcessingError,
        Preloader,
    },
})
export default class Home extends Vue {
    get vehicles() {
        return this.$accessor.vehiclesModule.getFilterVehicles;
    }

    get status() {
        return this.$accessor.vehiclesModule.status;
    }

    get error() {
        return this.$accessor.vehiclesModule.error;
    }

    changeSelect(e: any) {
        this.$accessor.vehiclesModule.setSelectedType(e.target.value);
    }

    fetchData() {
        this.$accessor.vehiclesModule.fetchVehicles();
    }

    async asyncData({ store }: Context) {
        await store.dispatch('vehiclesModule/fetchVehicles');
    }
}
</script>

<style module>
.container {
    background-color: #f3f4f7;
    border-radius: 48px;
    padding: 46px 64px;
    margin-top: 44px;
    position: relative;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.headerAdd {
    display: flex;
    align-items: center;
}

.links {
    padding-top: 15px;
}
.select-container {
    font-size: 40px;
    line-height: 120%;
    color: #012345;
    font-weight: bold;
    user-select: none;
}
.select {
    border: 0 none;
    font-size: 40px;
    line-height: 120%;
    color: #4959ff;
    font-weight: bold;
    user-select: none;
    background-color: inherit;
    outline: none;
}
.select:hover {
    opacity: 0.6;
}
.addButton {
    width: 48px;
    height: 48px;
}
.addButton-child {
    font-size: 20px;
    color: #fcfcfc;
}
.descriptionButton {
    font-size: 20px;
    line-height: 140%;
    color: #4959ff;
    font-weight: 700;
    margin-right: 20px;
}
.list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: auto;
}
.listItem {
    margin: 32px;
    flex-grow: 1;
}
</style>
