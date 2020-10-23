import { mutationTree } from 'typed-vuex';

type InitState = {
    nightMode: boolean;
};

export const state = (): InitState => ({
    nightMode: false,
});

export const mutations = mutationTree(state, {
    toggleMode: (state) => {
        state.nightMode = !state.nightMode;
    },
});
