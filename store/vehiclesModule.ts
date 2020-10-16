import { MutationTree, GetterTree, ActionTree } from 'vuex/types/index';
import { getterTree, actionTree, mutationTree } from 'typed-vuex';
import { getVehicles } from '~/request';
import { VehicleType } from '~/types';

export enum Status {
    Loading = 'LOADING',
    Success = 'SUCCESS',
    Error = 'ERROR',
}
// type UnionType<O, Types extends O[keyof O]> = {
//     [K in keyof O]-?: O[K] extends Types ? K : never;
// }[keyof O]
//
// interface Itest {
//     a: number;
//     b(arg: any): void;
// }
//
// type S = [number, string]
// const t: Parameters<VehiclesModule[UnionType<VehiclesModule, (arg: any) => any>]> = 'a';
//
// function callMutation<
//     T extends any,
//     MethodName extends UnionType<T, (arg: any) => any> = UnionType<T, (arg: any) => any>,
//     Method extends T[MethodName] = T[MethodName],
//     Params extends Parameters<Method> = Parameters<Method>
// >(context: ActionContext<any, any>, mutationName: MethodName, arg: Params) {
//     context.commit(mutationName as string, arg);
// }

type InitState = {
    vehicles: VehicleType[];
    status: Status | null;
    error: string;
    selectedType: string;
};

export const state = (): InitState => ({
    vehicles: [],
    status: null,
    error: '',
    selectedType: '',
});

export const mutations = mutationTree(state, {
    setSelectedType: (state, type: string) => {
        state.selectedType = type;
    },
    toggleFetching: (state, result: Status) => {
        state.status = result;
    },
    setVehicles: (state, vehicles: VehicleType[]) => {
        state.vehicles = vehicles;
    },
    setError: (state, error: string) => {
        state.error = error;
    },
});

export const getters = getterTree(state, {
    typesVehicles: (state) => {
        const types: string[] = [];
        state.vehicles.reduce((acc: any, { type }) => {
            if (!acc[type]) {
                acc[type] = true;
                types.push(type);
            }
            return acc;
        }, {});
        return types;
    },
    getFilterVehicles: (state) => {
        return state.vehicles.filter((vehicle) => vehicle.type === state.selectedType);
    },
});

export const actions = actionTree(
    { state, getters, mutations },
    {
        async fetchVehicles({ commit, getters }) {
            try {
                commit('toggleFetching', Status.Loading);
                const vehicles = await getVehicles();
                commit('toggleFetching', Status.Success);
                commit('setVehicles', vehicles);
                commit('setSelectedType', getters.typesVehicles[0]);
                commit('setError', '');
            } catch ({ error }) {
                commit('toggleFetching', Status.Error);
                commit('setError', error);
            }
        },
    }
);
