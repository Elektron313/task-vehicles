import { getAccessorType } from 'typed-vuex';

// Import all your submodules
import * as vehiclesModule from '~/store/vehiclesModule';
import * as styleModule from '~/store/styleModule';

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
    modules: {
        vehiclesModule,
        styleModule,
    },
});
