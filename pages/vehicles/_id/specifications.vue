<template>
    <div :class="$style.specifications">
        <p :class="$style.content">{{ data.specifications_text }}</p>
        <div :class="$style.features">
            <h2 :class="$style['features__title']">Features:</h2>
            <div :class="$style['features__list']">
                <div :class="$style['features__list-item']">
                    <div :class="$style['img-container']">
                        <img src="~/assets/Cup.svg" alt="img" />
                    </div>
                    <div :class="$style.info">
                        <p :class="$style['info__title']">A challenge for a true champion</p>
                        <p :class="$style['info__text']">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                        </p>
                    </div>
                </div>
                <div :class="$style['features__list-item']">
                    <div :class="$style['img-container']">
                        <img src="~/assets/Man.svg" alt="img" />
                    </div>
                    <div :class="$style.info">
                        <p :class="$style['info__title']">Pilot's sweaty hands</p>
                        <p :class="$style['info__text']">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                            consequat duis enim velit mollit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VehicleType } from '../../../types';
import Button from '~/components/Button.vue';

@Component({
    components: {
        Button,
    },
})
export default class Specifications extends Vue {
    @Prop({ required: true })
    public readonly data!: VehicleType;
}
</script>
<style module>
.specifications {
    margin-top: 32px;
}
.content {
    font-size: 14px;
    line-height: 146%;
    font-weight: 300;
    color: #677b8f;
}
.features__title {
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
    color: #012345;
}
.features {
    margin-top: 32px;
}
.features__list {
    margin-top: 32px;
}
.features__list-item {
    display: flex;
    justify-content: space-around;
    margin: 16px 0;
}
.img-container {
    width: 80px;
    height: 96px;
    background: #f3f4f7;
    border-radius: 16px;
    flex-shrink: 0;
}
.img-container > img {
    margin: 36px 25px;
}
.info {
    margin-left: 24px;
}
.info__title {
    color: #012345;
    font-weight: bold;
    font-size: 16px;
    line-height: 152%;
    margin: 8px 0;
}
.info__text {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
    color: #677b8f;
}
.rent__price {
    color: #012345;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;
}
</style>
