<template>
    <div :class="$style.header">
        <div :class="$style['header__leftBlock']">
            <img
                v-if="nightMode"
                :class="$style['header__leftBlock-logo']"
                src="~/assets/Logo-night.svg"
                alt="logo-icon"
            />
            <img v-else :class="$style['header__leftBlock-logo']" src="~/assets/Logo.svg" alt="logo-icon" />
            <span :class="[$style['header__leftBlock-name'], nightMode ? $style['night'] : $style['day']]">
                Pepelane
            </span>
            <span :class="$style['header__leftBlock-title']">World's first affordable airsharing</span>
        </div>
        <div :class="$style['header__rightBlock']">
            <div v-if="!nightMode" :class="$style['header__rightBlock-mode']" @click="toggleMode">
                <img :class="$style['header__rightBlock-mode-img']" src="~/assets/Moon.svg" alt="moon-icon" />
                <span :class="$style['header__rightBlock-mode-text']">Night mod</span>
            </div>
            <div v-else :class="$style['header__rightBlock-mode']" @click="toggleMode">
                <img :class="$style['header__rightBlock-mode-img']" src="~/assets/Day.svg" alt="day-icon" />
                <span :class="$style['header__rightBlock-mode-text']">Day mod</span>
            </div>
            <img :class="$style['header__rightBlock-img-message']" src="~/assets/Message.svg" alt="message-icon" />
            <img :class="$style['header__rightBlock-img-bell']" src="~/assets/Bell.svg" alt="bell-icon" />
            <div :class="$style['header__rightBlock-user-info']">
                <span :class="[$style.userName, nightMode ? $style['night'] : $style['day']]"> Bessie Cooper </span>
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

@Component
export default class Header extends Vue {
    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }

    toggleMode() {
        this.$accessor.styleModule.toggleMode();
    }
}
</script>
<style module lang="scss">
.header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__leftBlock {
        display: flex;
        align-items: center;

        &-name {
            font-size: 21px;
            font-weight: 600;
            margin-right: 65px;
        }
        &-logo {
            margin-right: 18px;
            background-color: inherit;
        }
        &-title {
            font-size: 16px;
            line-height: 152%;
            color: #677b8f;
        }
    }

    &__rightBlock {
        display: flex;
        align-items: center;

        &-mode {
            display: flex;
            align-items: center;
            width: 122px;
            margin-right: 107px;

            &-img {
                margin-right: 18px;

                &:hover {
                    cursor: pointer;
                    opacity: 0.6;
                }
            }

            &-text {
                font-size: 16px;
                line-height: 152%;
                color: #677b8f;
                user-select: none;

                &:hover {
                    font-weight: bold;
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
        }

        &-img-message {
            margin-right: 29px;
        }

        &-img-bell {
            margin-right: 59px;
        }

        &-user-info {
            display: flex;
            align-items: center;
        }
    }
}

.night {
    color: #fcfcfc !important;
}

.day {
    color: #012345 !important;
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

@media screen and (min-width: 320px) and (max-width: 480px) {
    .header {
        width: auto;
        padding: 0 16px;
        &__leftBlock {
            &-name {
                font-size: 14px;
                margin-right: 22.5%;
            }
            &-logo {
                margin-right: 18px;
                width: 32px;
                height: 32px;
            }
            &-title {
                display: none;
            }
        }

        &__rightBlock {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-mode {
                width: auto;
                margin-right: 20px;

                &-img {
                    margin-right: 0;
                    width: 16px;
                    height: 16px;
                }

                &-text {
                    display: none;
                }
            }

            &-img-message {
                margin-right: 20px;
                width: 16px;
                height: 16px;
            }

            &-img-bell {
                margin-right: 26.5px;
                width: 16px;
                height: 16px;
            }

            &-user-info {
            }
        }
        .userName {
            display: none;
        }
        .avatar {
            width: 32px;
            height: 32px;
            border-radius: 30px;
        }
    }
}
</style>
