<template></template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Context } from '@nuxt/types';

@Component
export default class Root extends Vue {
    asyncData({ redirect }: Context) {
        redirect('/vehicles');
    }
}
</script>
