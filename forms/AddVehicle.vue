<template>
    <Popup :close="close" popup-title="Add new vehicle">
        <form :class="$style.form" @submit.prevent="onSubmit">
            <div :class="$style['form__image']">
                <label v-if="!image" :class="[$style['form__image-container'], nightMode ? $style.night : $style.day]">
                    <div :class="[$style['img-add'], nightMode ? $style.night : $style.day]">
                        <img src="~/assets/img-addvehicle.svg" alt="img" />
                    </div>
                    <input type="file" @change="onFileChange" />
                </label>
                <div v-else :class="$style['image-wrapper']">
                    <div :class="$style['form__image-container']">
                        <img :src="image" alt="img" />
                    </div>
                    <small v-if="!$v.image.notPutImg" :class="$style['error']">
                        Нерабочий инпут, уберите файл, при отправке дефолтное значение будет
                    </small>
                    <button @click="removeImage">Remove image</button>
                </div>
            </div>
            <div :class="[$style['form__item'], nightMode ? $style.night : $style.day]">
                <input v-model.trim="name" type="text" placeholder="Name" />
                <small v-if="!$v.name.required && $v.name.$dirty" :class="$style['error']">Заполните поле</small>
            </div>
            <div :class="[$style['form__item'], nightMode ? $style.night : $style.day]">
                <input v-model.trim="description" type="text" placeholder="Description" />
                <small v-if="!$v.description.required && $v.description.$dirty" :class="$style['error']">
                    Заполните поле
                </small>
            </div>
            <div :class="[$style['form__item'], nightMode ? $style.night : $style.day]">
                <div :class="$style['rent-wrapper']">
                    <input v-model.number="rent" type="number" placeholder="Rent price" />
                    <span>$/h</span>
                </div>
                <small v-if="!$v.rent.required && $v.rent.$dirty" :class="$style.error">Заполните поле</small>
            </div>
            <Button type="'submit" :class="$style['form__item-button']" :click="() => {}">Complete</Button>
        </form>
    </Popup>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { required } from 'vuelidate/lib/validators';
import Popup from '~/components/Popup.vue';
import Button from '~/components/Button.vue';
import { VehicleType } from '~/types';

const notPutImg = (value: File | string) => value === '';

@Component({
    components: {
        Popup,
        Button,
    },
    validations: {
        name: {
            required,
        },
        description: {
            required,
        },
        rent: {
            required,
        },
        image: {
            notPutImg,
        },
    },
})
export default class AddVehicle extends Vue {
    @Prop({ required: true })
    public readonly close!: () => void;

    get nightMode() {
        return this.$accessor.styleModule.nightMode;
    }

    image = '';

    name = '';

    description = '';

    rent: number | null = null;

    onSubmit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
            return;
        }
        const FormData: VehicleType = {
            preview: 'https://loremflickr.com/160/160/airship?random=5f2bb90af01f47feb86b5da0',
            image: 'https://loremflickr.com/900/900/airship',
            name: this.name,
            term_text: '',
            team_text: '',
            rent: this.rent || 0,
            description: this.description,
            id: Math.random().toString(),
            type: 'custom',
            specifications_text: '',
        };

        this.$accessor.vehiclesModule.addVehicle(FormData);
        this.close();
    }

    onFileChange(e: any) {
        const files = e.target.files || e.dataTransfer.files;
        if (!files.length) {
            return;
        }
        this.createImage(files[0]);
    }

    createImage(file: File) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
            this.image = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    removeImage() {
        this.image = '';
    }
}
</script>
<style module lang="scss">
.form {
    &__image {
        input {
            outline: 0;
            opacity: 0;
            pointer-events: none;
            user-select: none;
        }

        .image-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            button {
                margin: 12px 0;
            }
        }

        &-container {
            width: 456px;
            height: 348px;
            background: #f3f4f7;
            border-radius: 24px;
            display: flex;
            cursor: pointer;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            overflow: hidden;

            &.day {
                background-color: #f3f4f7;
            }

            &.night {
                background-color: #011c37;
            }

            .img-add {
                border-radius: 16px;
                width: 48px;
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    opacity: 0.6;
                }

                &.day {
                    background-color: #fcfcfc;
                }

                &.night {
                    background-color: #012345;
                }
            }
        }
    }

    &__item {
        background: #f3f4f7;
        border-radius: 12px;
        width: 456px;
        height: 56px;
        border: none;
        margin: 24px 0;
        padding: 21px 24px;

        &.day {
            background-color: #f3f4f7;

            input {
                color: black;
            }
        }

        &.night {
            background-color: #011c37;

            input {
                color: #f3f4f7;
            }
        }

        input {
            width: 100%;
            border: none;
            background-color: inherit;
            outline: none;
        }

        &-button {
            border-radius: 12px;
            width: 456px;
            height: 56px;
            margin: 24px 0;
            padding: 21px 24px;
            color: white;
            font-size: 16px;
            line-height: 14px;
        }
    }

    .rent-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .error {
        font-size: 12px;
        color: red;
        font-weight: bold;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
    .form {
        &__image {
            input {
                outline: 0;
                opacity: 0;
                pointer-events: none;
                user-select: none;
            }

            .image-wrapper {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                button {
                    margin: 12px 0;
                }
            }

            &-container {
                width: 343px;
                height: 260px;
                border-radius: 16px;

                .img-add {
                }
            }
        }

        &__item {
            width: 343px;
            border: none;
            margin: 16px 0;
            padding: 20px;

            input {
            }

            &-button {
                width: 343px;
                height: 52px;
                color: white;
                font-size: 14px;
                line-height: 12px;
            }
        }

        .rent-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .error {
            font-size: 12px;
            color: red;
            font-weight: bold;
        }
    }
}
</style>
