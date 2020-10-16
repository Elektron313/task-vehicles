<template>
    <div :class="$style.header">
        <div :class="$style.leftBlock">
            <img :class="$style.logo" src="~/assets/Logo.svg" alt="logo-icon" />
            <span :class="$style['name-app']">Pepelane</span>
            <span :class="$style.title">World's first affordable airsharing</span>
        </div>
        <div :class="$style.rightBlock">
            <div :class="$style['mode-style']">
                <img :class="$style['img-mode']" src="~/assets/Moon.svg" alt="moon-icon" />
                <span :class="$style['text-mode']">Night mod</span>
            </div>
            <img :class="$style['img-message']" src="~/assets/Message.svg" alt="message-icon" />
            <img :class="$style['img-bell']" src="~/assets/Bell.svg" alt="bell-icon" />
            <div :class="$style['user-info']">
                <span :class="$style.userName">Bessie Cooper</span>
                <img
                    :class="$style.avatar"
                    src="https://raw.githubusercontent.com/Ashwinvalento/cartoon-avatar/master/lib/images/male/45.png"
                    alt="avatar"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
// 1312
@Component
export default class Header extends Vue {}
</script>
<style module>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.name-app {
    font-size: 21px;
    font-weight: 600;
    color: #012345;
    margin-right: 65px;
}
.title {
    font-size: 16px;
    line-height: 152%;
    color: #677b8f;
}
.mode-style {
    display: flex;
    align-items: center;
    width: 122px;
    margin-right: 107px;
}
.text-mode {
    font-size: 16px;
    line-height: 152%;
    color: #677b8f;
}
.logo {
    margin-right: 18px;
}
.img-mode {
    margin-right: 18px;
}
.img-message {
    margin-right: 29px;
}
.img-bell {
    margin-right: 59px;
}
.userName {
    font-size: 16px;
    color: #012345;
    line-height: 152%;
    font-weight: 700;
    margin-right: 16px;
}
.avatar {
    width: 56px;
    height: 56px;
    border-radius: 30px;
}
.user-info {
    display: flex;
    align-items: center;
}
.leftBlock {
    display: flex;
    align-items: center;
}
.rightBlock {
    display: flex;
    align-items: center;
}
</style>
