<template>
    <button :type="type" :class="$style.button" @click="click">
        <slot></slot>
    </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
    @Prop({ default: () => {}, required: false })
    public readonly click!: () => void;

    @Prop({ default: 'button' })
    public readonly type!: string;
}
</script>
<style module>
.button {
    border: none;
    outline: none;
    background-color: #4959ff;
    border-radius: 16px;
    position: relative;
}
.button:active {
    box-shadow: 1px 1px 0 #4959ff;
}
.button:hover {
    opacity: 0.7;
}
</style>
