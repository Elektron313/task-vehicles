import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import VehiclesModule from '~/store/vehiclesModule';

/* eslint-disable import/no-mutable-exports */
export let vehiclesStore: VehiclesModule;

export function initialiseStores(store: Store<any>): void {
    vehiclesStore = getModule(VehiclesModule, store);
}
