<template>
    <div :class="$style.vehicle">
        <div>
            <img :class="$style.previewPhoto" :src="previewPhoto" alt="photo" />
        </div>
        <div :class="$style.info">
            <div :class="$style.containerName">
                <NuxtLink :to="{ name: 'vehicles-id-specifications', params: { id } }" exact>
                    <span :class="$style.name">{{ name }}</span>
                </NuxtLink>
            </div>
            <p :class="$style.description">{{ description }}</p>
            <p :class="$style.rent">{{ rent }} $/h</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import Logo from '~/components/Logo.vue';

@Component({
    components: {
        Logo,
    },
})
export default class Vehicle extends Vue {
    @Prop({ required: true })
    public readonly previewPhoto!: string;

    @Prop({ required: true })
    public readonly name!: string;

    @Prop({ required: true })
    public readonly description!: string;

    @Prop({ required: true })
    public readonly rent!: number;

    @Prop({ required: true })
    public readonly id!: string;
}
</script>

<style module>
.vehicle {
    width: 374px;
    height: 164px;
    background-color: #fcfcfc;
    display: flex;
    border-radius: 24px;
}
.previewPhoto {
    width: 88px;
    height: 88px;
    margin: 24px 0 52px 32px;
    border-radius: 24px;
}
.info {
    padding-left: 24px;
}
.containerName {
    margin-top: 40px;
}
.containerName a {
    text-decoration: none;
}
.name {
    font-size: 16px;
    color: #012345;
    font-weight: bold;
    line-height: 148%;
    user-select: none;
}
.name:hover {
    opacity: 0.7;
    cursor: pointer;
}
.description {
    margin-top: 12px;
    font-size: 12px;
    color: #677b8f;
    font-weight: 400;
}
.rent {
    font-size: 14px;
    font-weight: 700;
    color: #f84ab3;
    padding-top: 16px;
}
</style>
