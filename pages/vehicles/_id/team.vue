<template>
    <div :class="$style.team">
        <p :class="$style['team__text']">{{ data.team_text }}</p>
        <h2>Qualified specialists</h2>
        <div :class="$style['team__specialists']">
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="$style['specialist__description-fullname']">Marvin McKinney</p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="$style['specialist__description-fullname']">Marvin McKinney</p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
            <div :class="$style['specialist']">
                <div :class="$style['specialist__photo']">
                    <img src="~/assets/Marvin.png" alt="photo" />
                </div>
                <div :class="$style['specialist__description']">
                    <p :class="$style['specialist__description-fullname']">Marvin McKinney</p>
                    <p :class="$style['specialist__description-role']">Pilot assistant</p>
                </div>
            </div>
        </div>
        <p :class="$style['team__specialists-text']">{{ data.team_text }}</p>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { VehicleType } from '~/types';

@Component
export default class Team extends Vue {
    @Prop({ required: true })
    public readonly data!: VehicleType;
}
</script>
<style module>
.team > h2 {
    margin-bottom: 32px;
    color: #012345;
    font-weight: bold;
    font-size: 24px;
    line-height: 21px;
}
.team__text {
    margin: 32px 0;
    font-weight: 300;
    font-size: 14px;
    line-height: 146%;
}
.team__specialists {
    display: flex;
    align-items: center;
}
.specialist {
    margin-right: 25px;
}
.specialist__description-fullname {
    color: #012345;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    margin: 16px 0 8px 0;
}
.specialist__description-role {
    font-size: 12px;
}
.team__specialists-text {
    font-size: 14px;
    margin-top: 32px;
    line-height: 146%;
    font-weight: 300;
}
</style>
