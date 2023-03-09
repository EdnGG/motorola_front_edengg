<template>
    <div id="mo_loading" class="loading"
         v-show="data_load.show">

        <div class="row loading__container">
            <div class="col-12 p-0">
                <div class="row text-center p-0">
                    <!-- Spinner -->
                    <div class="col-12 p-0 d-flex justify-content-center align-items-center">
                        <div class="spiner-ring">
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>

                    <!-- Title -->
                    <div class="col-12 p-0">
                        <span class="mo--title-sm montserrat-semibold text-white">
                            {{ data_load.title }}
                        </span>
                    </div>

                    <!-- Subtitle -->
                    <div class="col-12 p-0">
                        <span class="mo--description montserrat-regular text-white">
                            {{ data_load.subtitle }}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import _Store from '@/store'
	import { mapGetters } from 'vuex'

    export default {
        name: 'mo-loading',
        data() {
            return {

            }
        },
        computed: {
        	...mapGetters([
				'getLoad'
		    ]),

            data_load() {
            	return this.getLoad
            }
        },
        methods: {},
        created() {}
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/colors.scss';

    .loading {
        background-color: #00152BBB;
        height: 100vh !important;
        width: 100vw !important;
        position: fixed;
        z-index: 99999;

        &__container {
            height: 100vh !important;
            width: 100vw !important;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 100000;

            .spiner-ring {
                display: inline-block;
                position: relative;
                width: 80px;
                height: 80px;
            }
            .spiner-ring div {
                box-sizing: border-box;
                display: block;
                position: absolute;
                width: 64px;
                height: 64px;
                margin: 8px;
                border: 8px solid #fff;
                border-radius: 50%;
                animation: spiner-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                border-color: $danger transparent transparent transparent;
            }
            .spiner-ring div:nth-child(1) {
                animation-delay: -0.45s;
            }
            .spiner-ring div:nth-child(2) {
                animation-delay: -0.3s;
            }
            .spiner-ring div:nth-child(3) {
                animation-delay: -0.15s;
            }
            @keyframes spiner-ring {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        }


    }
</style>
