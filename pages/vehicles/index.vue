<template>
    <div :class="[$style.vehicles, nightMode ? $style.night : $style.day]">
        <template v-if="status === 'SUCCESS'">
            <div :class="$style['vehicles__header']">
                <p :class="[$style['vehicles__header-select'], nightMode ? $style.night : $style.day]">
                    Rent
                    <select :class="$style.select" @change="changeSelect">
                        <option v-for="type in this.$accessor.vehiclesModule.typesVehicles" :key="type" :value="type">
                            {{ type }}
                        </option>
                    </select>
                </p>
                <div :class="$style['vehicles__header-add']">
                    <span :class="$style.descriptionButton">Add new</span>
                    <Button :class="$style.addButton" :click="onOpen">
                        <span :class="$style['addButton-child']">+</span>
                    </Button>
                </div>
            </div>
            <div :class="$style['vehicles__list']">
                <div v-for="vehicle in vehicles" :key="vehicle.id" :class="$style['vehicles__list-item']">
                    <Vehicle
                        :id="vehicle.id"
                        :preview-photo="vehicle.preview"
                        :name="vehicle.name"
                        :description="vehicle.description"
                        :rent="vehicle.rent"
                    />
                </div>
            </div>
            <PortalTarget name="add-form" slim></PortalTarget>
            <Portal v-if="isOpen" to="add-form">
                <AddVehicle :close="onClose" />
            </Portal>
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
import Popup from '~/components/Popup.vue';
import AddVehicle from '~/forms/AddVehicle.vue';
import { PortalTarget, Portal } from '~/node_modules/portal-vue';

@Component({
    components: {
        Logo,
        Vehicle,
        Button,
        ProcessingError,
        Preloader,
        Popup,
        AddVehicle,
        PortalTarget,
        Portal,
    },
})
export default class Home extends Vue {
    isOpen = false;

    onClose() {
        this.isOpen = false;
    }

    onOpen() {
        this.isOpen = true;
    }

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }

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

<style module lang="scss">
.vehicles {
    border-radius: 48px;
    padding: 46px 64px;
    margin-top: 44px;

    &.night {
        background-color: #011c37;
    }

    &.day {
        background-color: #f3f4f7;
    }

    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-select {
            font-size: 40px;
            line-height: 120%;
            font-weight: 700;
            user-select: none;

            &.night {
                color: #fcfcfc;
            }

            &.day {
                color: #012345;
            }
        }

        &-add {
            display: flex;
            align-items: center;
        }
    }

    &__list {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        min-height: 598px;
        align-content: flex-start;

        &-item {
            margin: 16px;
        }
    }
}

.links {
    padding-top: 15px;
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

    &:hover {
        opacity: 0.6;
    }
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
@media screen and (min-width: 320px) and (max-width: 480px) {
    .vehicles {
        padding: 26px 16px;
        margin-top: 20px;
        border-radius: 24px;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 13px;

            &-select {
                font-size: 24px;
            }

            &-add {
            }
        }

        &__list {
            min-height: 478px;
            &-item {
                margin: 6px 0;
                flex-grow: 1;
            }
        }
    }

    .addButton {
        width: 32px;
        height: 32px;
        border-radius: 8px;
    }
    .links {
        padding-top: 15px;
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

        &:hover {
            opacity: 0.6;
        }
    }
    .select {
        font-size: 24px;
    }
    .descriptionButton {
        font-size: 16px;
        line-height: 136%;
        font-weight: 700;
    }
}
</style>
