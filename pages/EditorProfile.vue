<template>
    <div id="editor_profile" class="container-fluid editor_profile">

        <section class="row bg-primary gradient py-5">
            <div class="col-12">

                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-10 col-lg-6 my-3">
                            <div class="float-left">
                                <div style="max-width: 200px;">
                                    <img :src="img_240" class="img-fluid rounded-circle">
                                </div>
                            </div>

                            <div class="h-100 px-4">
                                <div class="d-flex justify-content-center align-items-center h-100">
                                    <span class="mo--description-sm">
                                        <span class="mo--description montserrat-bold text-danger">
                                            {{ data_profile.name }}
                                        </span> <br>
                                        <span class="text-white">
                                            <i>{{ data_profile.data }}</i>
                                        </span> <br>
                                        <span class="montserrat-semibold text-info">
                                            {{ data_profile.articles }}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2 my-3">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <button class="btn btn-info">
                                    Edit profile
                                </button>
                            </div>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2 my-3">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <div>
                                    <span class="mo--description-sm text-white">
                                        Write a new article
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-sm-4 col-lg-2 my-3">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <span class="mo--description-sm text-white">
                                    Press assets
                                </span>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </section>

        <section class="row bg-primary py-5">
            <div class="col-12">

                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-4">
                            <span class="mo--description text-white">MY ARTICLES</span>
                        </div>

                        <div class="col-12 col-sm-6 col-lg-3 my-2" v-for="c in 4" :key="c">
                            <div class="rounded border-danger p-2">
                                <div class="d-flex justify-content-center align-items-center">
                                    <img :src="img_427" class="img-fluid rounded">
                                </div>


                                <div class="pt-3">
                                    <span class="mo--description-sm text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    </div>
</template>

<script>
    // IMAGES
    import img_1920 from '@/assets/images/dimensions/1920x1080.png'
    import img_427 from '@/assets/images/dimensions/427x640.png'
    import img_240 from '@/assets/images/dimensions/240x240.png'
    // jQuery
    import $ from 'jquery'

    export default {
        name: 'editor_profile',
        data() {
            return {
                img_1920,
                img_427,
                img_240,

                data_profile: {
                    name: "Alejandro Ornelas",
                    data: 'Tecnology journalist',
                    articles: '34 articles published',
                },
            }
        },
        computed: {
            current_route_name() {
                return this.$route.name
            }
        },
        methods: {
            redirect(route_name) {
                if(this.current_route_name !== route_name ) {
                    window.scrollTo(0, 0)
                    this.$router.push({
                        name: route_name
                    })
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/colors.scss';

    #editor_profile {
        min-height: 100vh;

        .gradient {
            background: rgb(0,92,129);
            background: linear-gradient(180deg, rgba(0,92,129,1) 0%, rgba(0,21,43,1) 64%);
        }
    }
</style>
