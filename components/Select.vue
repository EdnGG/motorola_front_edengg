<template>
    <section class="input_container">
        <span :class="`input_label d-flex
            ${(theme == 'dark') ? 'text-white' : 'text-dark'}`" 
            v-if="label !== ''">

            <div class="float-lg-left mr-3" style="width: 200px">
                {{ label }}
            </div>
            <slot name="label">
                
            </slot> <br>
        </span>

        <select :id="_id" 
            :value="value" 
            v-bind="$attrs" 
            v-on="listeners" 
            :class="[
                `input-thm-${theme} input-${variant}`, 
                (full) ? 'full-width' : '',
                (border_color === null) ? '': `border-${border_color}`,
                (rounded) ? 'btn-pill': ''
            ]">


            <option :value="hidden_option" class="text-danger d-none">{{ hidden_option }}</option>
            <!-- <option hidden selected="selected" class="text-danger">{{ hidden_option }}</option> -->

            <option :value="(option.id !== undefined && option.id !== null) ? option.id : option"
                v-for="(option, index_option) in options" :key="index_option">

                    {{ (option.label !== undefined && option.label !== null) ? option.label : option }}
            </option>
            
        </select>
    </section>
</template>

<script>
	export default {
		name: 'ad-input',
        props: {
            _id: {
                type: String,
                description: "id of html input",
                required: false,
                default: 'input-1'
            },
            value: {
                type: [String, Number, Date],
                description: "input value",
                required: false,
                default: () => {
                    return null
                }
            },
            options: {
                type: [Array, Object],
                description: "options values",
                required: false
            },
            hidden_option: {
                type: String,
                description: "hiden options values",
                required: false,
                default: 'Seleccione'
            },
            label: {
                type: String,
                description: "label for the input",
                required: false,
                default: ''
            },
            theme: {
                type: String,
                description: "defines whether the inputs will be of light or dark thema",
                required: false,
                default: "white",
            },
            variant: {
                type: String,
                description: "defines the color of the inputs",
                required: false,
                default: 'white',
            },
            border_color: {
                type: String,
                description: 'defines the color of the input border',
                required: false,
                default: null
            },
            full: {
                type: Boolean,
                description: 'defines whether the inputs will be as wide as possible',
                required: false,
                default: false
            },
            rounded :{
                type: Boolean,
                description: '',
                required: false,
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: this.customInput,
                    focus: this.customFocus,
                    blur: this.customBlur,
                    change: this.customChangeValue
                }
            }
        },
        methods: {
            // Este methodo se dispara en la ejecución del @INPUT del tag input original
            customInput(event) {
                //console.log('Origin INPUT',event.target.value)
                this.$emit('input', event.target.value)
            },
            // Este methodo se dispara en la ejecución del @FOCUS del tag input original
            customFocus(event) {
                //console.log('Origin FOCUS',event.target.value)
                this.$emit('focus', event.target.value)
            },
            // Este methodo se dispara en la ejecución del @BLUR del tag input original
            customBlur(event) {
                //console.log('Origin BLUR', event.target.value)
                this.$emit('blur', event.target.value)
            },
            // Este methodo se dispara en la ejecución del @CHANGE del tag input original
            customChangeValue(event) {
                //console.log('Origin CHANGE', event.target.value)
                this.$emit('change', event.target.value)

            }
        }
	}
</script>

<style lang="scss">
    @import '../assets/scss/colors.scss';
    

	.input_container {
        .input_label {
            font-size: 13px;
            font-weight: 500 !important;
        }
        .text-dark {
            color: #001428 !important;
        }

        .input-thm-light, .input-thm-dark {
            -webkit-transition: all 0.5s;
            -o-transition: all 0.5s;
            transition: all 0.5s;

            &:focus, &:active {
                outline: 0 none;
            }
        }

        /*⊱⊱═════════════════════ input normal ═════════════════════⊰⊰*/ 
        .input-thm-light, .input-thm-dark, .input-thm-white {
            font-family: 'Montserrat-Bold';
            border-radius: 0.25rem; 
            padding: 5px 4px;
            font-size: 12px;

            &:focus, &:active {
                outline: 0 none;
                border-color: $primary;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $primary;
            }
        }
        .input-thm-white {
            border: 1px solid #DCDDE0 !important;
            background-color: white !important;
            color: $main_text !important;
        }
        .input-thm-light {
            border: 1px solid $light !important;
            background-color: $light !important;
            color: $main_text !important;
        }
        .input-thm-dark {
            border: 1px solid $secondary !important;
            background-color: $secondary !important;
            color: $main_white;

            &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                color: #FFFFFFAA;
            }
            &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                color: #FFFFFFAA;
                opacity: 1;
            }
            &::-moz-placeholder { /* Mozilla Firefox 19+ */
                color: #FFFFFFAA;
                opacity: 1;
            }
            &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                color: #FFFFFFAA;
            }
            &::-ms-input-placeholder { /* Microsoft Edge */
                color: #FFFFFFAA;
            }
            &::placeholder { /* Most modern browsers support this now. */
                color: #FFFFFFAA;
            }
        }

        /*⊱⊱═════════════════ input focus color ═════════════════⊰⊰*/
        .input-primary {
            //background: $primary-700 !important;

            &:focus, &:active {
                border-color: $primary !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $primary !important;
            }
        } 
        .input-secondary {
            //background: $secondary-700 !important;

            &:focus, &:active {
                border-color: $secondary !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $secondary !important;
            }
        } 
        .input-success {
            //background: $success-700 !important;

            &:focus, &:active {
                border-color: $success !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $success !important;
            }
        } 
        .input-warning {
            //background: $warning-700 !important;

            &:focus, &:active {
                border-color: $warning !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $warning !important;
            }
        }
        .input-danger {
            //background: $danger-700 !important;

            &:focus, &:active {
                border-color: $danger !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $danger !important;
            }
        }
        .input-info {
            //background: $info-700 !important;

            &:focus, &:active {
                border-color: $info !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $info !important;
            }
        }
        .input-light {
            //background: $light-700 !important;

            &:focus, &:active {
                border-color: $light !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $light !important;
            }
        }
        .input-dark {
            //background: $dark-700 !important;

            &:focus, &:active {
                border-color: $dark !important;
                box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 4px $dark !important;
            }
        }
	}

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 9999s ease-in-out 0s;
        -webkit-text-fill-color: white;
        caret-color: white;
    }
</style>