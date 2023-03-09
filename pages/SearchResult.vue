<template>
    <div id="search_result" class="container-fluid bg-primary home p-0">
        <div class="row p-0 pt-5 m-0" style="min-height: 100vh;">
            <div class="col-12 bg-primary pl-1 pl-sm-5 pb-0">
                <div class="row">
                    <div class="col-12">
                        <b-breadcrumb class="px-0 px-sm-4 bg-primary">
                            <!-- <b-breadcrumb-item href="#home">
                                {{ $t('navbar.home') }}
                            </b-breadcrumb-item> -->
                            <b-breadcrumb-item href="#search_result" class="montserrat-bold" active>
                                {{ $t('search_results') }}
                            </b-breadcrumb-item>
                        </b-breadcrumb>
                    </div>
                </div>
            </div>

            <div class="col-12 pl-1 pl-sm-5 pt-3 mb-5 px-0 px-sm-5">
                <div class="row">
                    <div class="col-12">
                        <span class="px-0 px-sm-4 montserrat-bold mo--title-sm text-white">
                            {{ $t('search_about') }} {{ search_result }}:
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-12 p-0" v-if="items_news !== null">
                <div class="row pl-0 pl-sm-5">

                    <div class="col-12 px-1 px-sm-4" v-for="(item, index) in items_news" :key="index"
                        style="margin-top: 2rem !important; margin-bottom: 2rem !important;">

                        <div class="row p-0">

                            <div class="col-12">
                                <div class="float-custom-left mr-3 mr-lg-4 mr-xl-5"
                                     style="max-width: 250px;">

                                    <img :src="item.featured_image"
                                        class="img-fluid rounded " >
                                </div>

                                <div class="row d-flex align-items h-custom-100">
                                    <div class="col-12 px-0 pb-1 pt-3 pt-sm-0">
                                        <span class="montserrat-semibold mo--description text-white">
                                            {{ item.title }}
                                        </span>
                                    </div>
                                    <div class="col-12 mt-0 px-0 pb-3 pb-sm-1">
                                        <span class="montserrat-semibold mo--description-sm text-white">
                                            {{ item.date }}
                                        </span>
                                    </div>
                                    <div class="col-12 px-0 pb-4">
                                        <div class="row">
                                            <!-- <div class="mo--badge" v-for="(chip, index_chip) in (item.tags).split(' ')" :key="index_chip">
                                                <span class="montserrat-semibold mo--description-sm text-white text-14">
                                                    {{ chip | upperCase }}
                                                </span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="col-12 text-link-red px-0 mt-sm-3 mt-md-2 mt-lg-4">
                                        <span @click="openNew('article', item.uid, item.title)" class=" cursor-pointer">
                                            {{ $t('read_this_article') }}

                                            <b-icon id="mo_navbar__menu_icon"
                                                icon="arrow-right"
                                                scale="1.2"
                                                class="ml-2">
                                            </b-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 px-0" v-if="items_news !== null">
                <div class="pt-5">
                    <mo-paginator
                        :total_pages="pag.total_pages"
                        @changePage="controlPaginator($event)">
                    </mo-paginator>
                </div>
            </div>

            <div class="col-12 p-0 d-flex justify-content-center align-items-center"
                 v-if="items_news === null"
                 style="height: 280px">

                <div class="row p-0">
                    <div class="col-12 p-0">
                        <div class="row p-0">
                            <div class="container p-0">
                                <div class="row px-5">
                                    <div class="col-10 pb-2 d-flex justify-content-center align-items-center">

                                        <input
                                            v-model="search_result_local"
                                            type="text"
                                            name="search_result"
                                            class="input-line-thm-light input-line-light text-center full-width" style=""
                                            @keyup.enter.prevent="searchLocal()">

                                    </div>
                                    <div class="col-2 p-0 d-flex justify-content-center align-items-center">
                                        <img :src="ico_search"
                                            @click.prevent="searchLocal()"
                                            class="invert-color px-2"
                                            style="height: 40px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-0">
                        <div class="row p-0">
                            <div class="col-12 px-0 pb-0 pt-3 d-flex justify-content-center align-items-center" style="width: 245px">
                                <span class="montserrat-semibold mo--description text-white text-center p-0">
                                    {{ $t('we_couldn') }} "{{ search_result }}". <br />
                                    {{ $t('try_again') }}.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 px-0">
                <div style="height: 100px;
                    background: rgb(0,21,43);
                    background: linear-gradient(180deg, rgba(0,21,43,1) 0%, rgba(82,32,40,1) 95%);">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // IMAGES
    import ico_search from '@/assets/icons/search-regular-24.png'

    import img_row1 from '@/assets/images/news/row1.png'
    import img_row2 from '@/assets/images/news/row2.png'
    import img_row3 from '@/assets/images/news/row3.png'
    import img_row4 from '@/assets/images/news/row4.png'

    import utf8 from 'utf8'

    //Component
    import Paginator from "@/components/Paginator.vue";

    export default {
        name: 'home',
        components: {
            'mo-paginator': Paginator,
        },
        data() {
            return {
                ico_search,
                img_row1,
                img_row2,
                img_row3,
                img_row4,
                search_result: null,
                search_result_local: null,
                items: [
                    {
                        text: 'Home',
                    },
                    {
                        text: 'News',
                        href: true
                    }
                ],
                items_news: [],
                submenu_active: "all",
                body: {
                    datatable: true,
                    page: 1,
                    rows: 4,
                    search: '',
                    order_by: 'post_date',
                    order_asc: false
                },
                pag: {
                    total_pages: null,
                    page_selected: 1
                }
            }
        },
        computed: {
            current_route_name() {
                return this.$route.name;
            },
            searching: {
                get() {
                    return this.getSearching
                }
            },
            custom_headers () {
                return this.$store.getters['getHeaders']
            },
            language() {
                return this.$storage.getLocalStorage('lang')
            }
        },
        methods: {
            openNew(route_name, uid, title) {
                
                let params = {
                    //hash: hash_id,
                    title: uid
                }

                if(this.current_route_name !== route_name) {
                    window.scrollTo(0, 0)

                    this.$router.push({
                        name: route_name,
                        params: params,
                        query: {
                            language: this.$storage.getUniversal('lang')
                        }
                    })
                }
            },
            searchLocal() {
                let params = {
                    search: (this.search_result_local == null) ? ' ' : this.search_result_local
                }

                this.$router.replace({
                    name: 'searchresult',
                    params: params,
                    query: { u: "t" }
                })

                window.scrollTo(0,0)

                // setTimeout(function reload() {
                //     location.reload()
                // }, 200);
            },
            async initConfig() {



                // console.log('paunch')

                this.$store.commit('setLoad', {
                    show: true,
                    title: 'Loading...',
                    subtitle: "",
                })

                let response = await this.$sendRequest('pressbox/search', 'GET', null, this.body, true, {
                    location: this.$storage.getUniversal('location')
                })
                
                //console.log('response:', response)
                if(response.success) {
                    // Estatus correcto en la respuesta
                    this.items_news = response.data.list.result
                    this.pag.total_pages = response.data.list.total_pages
                    for(let i in this.items_news) {
                        this.items_news[i].creation = this.$informativeDate(this.items_news[i].creation, this.language)
                        this.items_news[i].tags = this.items_news[i].tags.replaceAll(',', '')
                        this.items_news[i].title = utf8.decode(this.items_news[i].title)
                    }
                    // Hide loading
                    this.$store.commit('setLoad', {
                        show: false
                    })
                }
                else if(!response.success && response.error) {
                    // Estatus incorrecto en la respuesta
                    this.$store.commit('setLoad', {
                        show: false
                    })
                }
                else {
                    // Se perdio la respuesta

                }

                window.scrollTo(0,0)
            },
            async controlPaginator(event) {
                //console.log(event)

                this.body.page = event
                await this.initConfig()
            }
        },
        async created()  {
            // Get params

            if(process.browser) {
                this.search_result = this.$route.params.search || null
                this.search_result_local = this.search_result

                let items = this.$storage.getLocalStorage('items_search');

                // console.log(items)

                this.body.search = (this.search_result == '') ? null : this.search_result

                if(items !== null && 'more' in items && items.more !== '-') {
                    this.body.more = items.more
                }

                if(items !== null && 'product' in items && items.product !== '-') {
                    this.body.subcategories = items.product
                }

                if(items !== null && 'date' in items && items.date !== '-') {
                    this.body.date = items.date
                }

                // console.log(this.body)
                
                await this.initConfig()
            }

        },
    }
</script>

<style lang="scss" scoped>
    @import '~/assets/scss/colors.scss';

    #search_result {
        min-height: 100vh;

        .height_image_main {
            height: 310px;
        }
        @media (min-width: 576px) {
            .height_image_main {
                height: 600px;
            }
        }

        .gradient__image {
            background-image: linear-gradient(to bottom, rgba(255,0,0,0) 65%, $primary 100%) !important;
            height: 100%;
            z-index: 5;
        }

        a {
            color: white;
        }

        .active {
            color: #FF443F;
        }
    }
    .submenu {
        min-width: 70px;
    }
    .active_submenu {
        background:rgba(255, 85, 77, 0.95);
        border-bottom: 3px solid #175c7c;
    }
    .selected {
        border-radius: 25px;
    }
</style>
