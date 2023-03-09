<template>
    <div id="mo_modal" :class="['modal px-3 px-md-5', `${showModal ? 'd-flex' : 'd-none'}`]" @click.stop="closeModal('overlay')">
        <div :class="['row modal__container',`bg-${bgColor}`]" @click.stop="closeModal('content')"
            :style="`max-width: ${maxWidth}px !important; max-height: 90vh; overflow-y: scroll;`">

            <div class="col-12">

                <div class="row">
                    <div class="col-12 px-0">
                        <!-- Close button -->
                        <button @click.stop="closeModal('button')"
                            class="modal__container--button bg-white position-absolute px-1 
                            d-flex justify-content-center align-items-center"
                            style="top: 10px; right: 10px; z-index: 1; padding-bottom: 3px;">

                            <span class="hc--title-sm close">
                                &times;
                            </span>
                        </button>
                    </div>

                    <div class="col-12 px-0">
                        <slot>

                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // jQuery
    import $ from 'jquery'

    export default {
        name: 'mo-modal',
        props: {
            showModal: {
                require: true,
                type: Boolean,
                default: false
            },
            overlayClose: {
                require: false,
                type: Boolean,
                default: true
            },
            bgColor: {
                require: false,
                type: String,
                default: 'light',
                validator: function (value) {
                    // El valor debe coincidir con una de estas cadenas de texto
                    return ['transparent', 'white', 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark'].indexOf(value) !== -1
                }
            },
            imageTitle: {
                require: false,
                type: String,
                default: null
            },
            sourceVideo: {
                require: false,
                type: String,
                default: null
            },
            localVideo: {
                require: false,
                type: String,
                default: null
            },
            maxWidth: {
                require: false,
                type: String,
                default: '900'
            },
        },
        data() {
            return {
            }
        },
        methods: {
            closeModal(type) {
                if(type === 'content') {
                    return
                }
                if(type === 'overlay') {
                    if(!this.overlayClose) {
                        return
                    }
                }

                this.$emit('onClose')
            }
        },
        mounted() {
            $(window).resize(function() {
                if($('#modal_image_title')) {
                    let height_ref = $('#modal_image_title').height()
                    let width_ref = $('#modal_image_title').width()
                    $("#modal_button_title").css("height", height_ref)
                    $("#modal_button_title").css("width", width_ref)
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/colors.scss';
    .modal {
        justify-content: center;
        align-items: center;
        background-color: #000000bb;
        z-index: 9999;
        &__container {
            border-radius: 8px;
            width: 100%;
            z-index: 10000;
            &--button {
                position: relative;
                // top: -60px;
                // right: -250px !important;
                border-radius: 0.25rem !important;
                border: 0px;
                cursor: pointer;
            }
        }
    }
    .cbox_container {

        /* Hide the browser's default checkbox */
        .checkbox input {
            position: absolute;
            cursor: pointer;
            opacity: 0;
            height: 0;
            width: 0;
        }

        .checkbox {
            position: relative;
            margin-bottom: 0px;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            // border: 1px solid $light;
            // background-color: $primary;
            border-radius: 8px;
            margin-right: 12px;

            -webkit-transition: all .5s !important;
            -moz-transition: all .5s !important;
            -ms-transition: all .5s !important;
            -o-transition: all .5s !important;
            transition: all .5s !important;
        }

        .checkmark-danger {
            border: 1px solid $danger !important;
        }

        /* CHECKED FILL */
        .checkbox input:checked ~ .checkmark-fill-danger {
            background-color: $danger;
        }


        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        /* Show the checkmark when checked */
        .checkbox input:checked ~ .checkmark:after {
            display: block;
        }
        /* Style the checkmark/indicator */
        .checkbox .checkmark:after {
            top: 6px;
            left: 9px;
            width: 5px;
            height: 10px;

            // border: solid $light;
            // border-width: 0 2px 2px 0 !important;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
        }
        .checkbox:hover input ~ .checkmark-danger {
            //background-color: $success;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 10px $danger !important;
        }

        .checkbox .checkmark-danger:after {
            border: solid $danger !important;
            border-width: 0 2px 2px 0 !important;
        }
        .checkbox .checkmark-fill-danger:after {
            border: solid $light !important;
            border-width: 0 2px 2px 0 !important;
        }

        // EFECTO INTERESANTE
        // .checkbox input:checked ~ .checkmark-fill-primary {
        //     border: solid $light !important;
        //     border-width: 0 2px 2px 0 !important;

        //     -webkit-transform: rotate(45deg);
        //     -ms-transform: rotate(45deg);
        //     transform: rotate(45deg);
        // }

        .checkbox__label {
            margin-left: 30px;
        }
	}
</style>>
