<template>
    <div id="mo--navbar" class="p-0">
        <!-- Navbar -->
        <b-navbar id="mo_navbar" toggleable="md" class="all_transitions px-4 py-3"
            type="light"
            :variant="(views_navbar_float.includes(current_route_name)) ? 'transparent' : 'primary'"
            :class="(views_navbar_float.includes(current_route_name)) ? 'fixed-top' : ''">

            <b-navbar-brand id="mo_navbar__title" @click="redirect('home')" class="mr-lg-5" style="max-width: 220px; cursor: pointer;">
                <div class="logo-responsive">
                    <img :src="img_logo" class="img-fluid">
                </div>
            </b-navbar-brand>

            <b-nav-item @click="openModal('lang_modal')">
                <!-- <img :src="ico_world" class="align-bottom cursor-pointer" style="height: 25px;"> -->
                <span>.</span>
            </b-nav-item>

            <div class="h-100 ml-auto d-none d-md-flex justify-content-end align-items-end">

                <b-navbar-nav class="align-middle">
                    <b-nav-item class="text-menu">
                        <span @click="redirect('home')"
                            :class="['mo--description-sm align-middle cursor-pointer text-white all_transitions mx-3',
                            (current_route_name == 'home') ? 'text-focus' : '']">
                                {{ $t('navbar.home') }}
                        </span>
                    </b-nav-item>

                    <b-nav-item class="text-menu">
                        <span @click="redirect('news')"
                            :class="['mo--description-sm align-middle cursor-pointer text-white all_transitions mx-3',
                            (current_route_name == 'news') ? 'text-focus' : '']">
                                {{ $t('navbar.news') }}
                        </span>
                    </b-nav-item>

                    <b-nav-item class="text-menu">
                        <span @click="redirect('pressbox')"
                            :class="['mo--description-sm align-middle cursor-pointer text-white all_transitions mx-3',
                            (current_route_name == 'pressbox') ? 'text-focus' : '']">
                                {{ $t('navbar.press_box') }}
                        </span>
                    </b-nav-item>

                    <b-nav-item class="text-menu">
                        <span :class="['mo--description-sm align-middle cursor-pointer text-white all_transitions mx-3' ,
                            (current_route_name == 'search') ? 'text-focus' : '']" @click="openModal('search_modal')">
                                <img :src="ico_search" class="invert-color" style="height: 24px;">
                                {{ $t('navbar.search') }}
                        </span>
                    </b-nav-item>

                    <!-- <b-nav-item @click="openModal('lang_modal')">
                        <img :src="ico_world" class="align-bottom cursor-pointer" style="height: 25px;">
                    </b-nav-item> -->
                </b-navbar-nav>
            </div>

            <b-button v-b-toggle.sidebar-right variant="link" class="d-flex align-items-middle d-md-none px-1">
                <b-icon id="mo_navbar__menu_icon" icon="list" scale="2" variant="light"  style="padding: 2px" class="mr-1"></b-icon>
            </b-button>
        </b-navbar>

        <!-- Sidebar -->
        <b-sidebar id="sidebar-right" bg-variant="primary" right backdrop shadow no-slide>
            <div class="row h-100 d-flex align-items">
                <div class="col-12">
                    <div class="mo_item py-2 py-md-3 px-3 px-xl-5">
                        <span @click="redirect('home')" class="mo--title-sm">
                            {{ $t('navbar.home') }}
                        </span>
                    </div>
                    <div class="mo_item py-2 py-md-3 px-3 px-xl-5">
                        <span @click="redirect('news')" class="mo--title-sm">
                            {{ $t('navbar.news') }}
                        </span>
                    </div>
                    <div class="mo_item py-2 py-md-3 px-3 px-xl-5">
                        <span @click="redirect('pressbox')" class="mo--title-sm">
                            {{ $t('navbar.press_box') }}
                        </span>
                    </div>
                    <div class="mo_item py-2 py-md-3 px-3 px-xl-5">
                        <span @click="openModal('search_modal')" class="mo--title-sm">
                            <b-icon
                                icon="search"
                                scale="2"
                                variant="light"
                                style="padding: 5px"
                                class="mr-1">
                            </b-icon>

                            {{ $t('navbar.search') }}
                        </span>
                    </div>
                    <!-- <div class="d-flex mo_item py-2 py-md-3 px-3 px-xl-5" @click="openModal('lang_modal')">
                        <img :src="ico_world" class="align-bottom cursor-pointer" style="height: 25px;" />
                        <span class="mo--title-sm text-white ml-2">
                            {{ $t('navbar.language') }}
                        </span>
                    </div> -->
                </div>

                <div class="col-12 mt-auto pb-4">
                    <div class="mb-auto d-flex justify-content-start pb-3 px-3 px-xl-5">
                        <div class="" style="max-width: 240px">
                            <img :src="img_logo" class="img-fluid">
                        </div>
                    </div>
                    <div class="px-3 px-xl-5">
                        <span class="mo--description-sm text-white">
                            2022. Motorola® All rights reserved.
                        </span>
                    </div>
                </div>
            </div>
        </b-sidebar>

        <!-- Search Modal -->
        <mo-modal :showModal="search_modal"
            @onClose="handleClose('search_modal')"
            maxWidth="1000">

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 p-0 mt-5 pb-5">
                        <div class="row p-0">
                            <div class="col-12 py-0 px-3 px-md-5">
                                <div class="row p-0">

                                    <div class="col-12 col-lg-10  bg-white rounded p-0 m-0 h-100">
                                        <div class="row p-0 m-0" style="height: 55px">
                                            <div class="col-3 col-sm-2 col-md-1 h-100 p-0 d-flex justify-content-center align-items-center">
                                                <img :src="ico_search" class="" style="width:30px">
                                            </div>
                                            <div class="col-9 col-sm-10 col-md-11 h-100 p-0 m-0
                                                d-flex justify-content-center align-items-center">

                                                <input v-model="search_input"
                                                        @keyup.enter="searchModal('searchresult')"
                                                        :placeholder="$t('navbar.modal_search.write_to_search')"
                                                        type="text"
                                                        class="form-control h-100 border-0 p-0">
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col order-last order-lg-0 col-lg-2 mt-3 mt-lg-0 p-0 d-flex justify-content-end align-items-center">
                                        <button
                                            @click="searchModal('searchresult')"
                                            class="btn btn-info rounded-12">
                                                {{ $t('navbar.modal_search.search') }}
                                        </button>
                                    </div>

                                    <div class="offset-lg-6  col col-md-8 col-lg-4  mt-3 text-end">
                                        <span class="text-danger mo--description-sm" @click="changeShow('advance')">
                                                {{ $t('navbar.modal_search.advance_search') }}
                                                <img :src="ico_down" v-if="!show_advance" style="max-width: 12px;">
                                                <img :src="ico_up" v-else style="max-width: 12px;">
                                        </span>
                                    </div>

                                </div>
                            </div>
                            
                            <div class="col-12 px-3 px-sm-5" v-show="show_advance">
                                <div class="row p-0">
                                    <div class="container px-0 px-sm-5">
                                        <div class="row p-0">
                                            <div class="col-12  col-md-6 d-flex justify-content-start align-items-start p-0" v-for="item, key of data_searching" :key="key">
                                                <div class="row p-0">
                                                    <div class="col-12 text-secondary p-0">
                                                        <div class="py-4">
                                                            <span class="mo--description-sm " v-if="key === 'product'">
                                                                {{ 'product families' | upperCase }}
                                                            </span>
                                                            <span class="mo--description-sm" v-else>
                                                                {{key | upperCase }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-12 col-lg-6 p-0"  v-for="(item_type, index_type) in item" :key="`${key}_${index_type}`">
                                                        <div class="cbox_container pt-1 py-2" v-if="key != 'date'">
                                                            <label class="checkbox text-primary px-2">
                                                                <input type="checkbox" v-model="item_type.value" :checked="item_type.value">

                                                                <span class="checkmark checkmark-danger checkmark-fill-danger"></span>

                                                                <span class="checkbox__label">{{item_type.name}}</span>
                                                            </label>
                                                        </div>
                                                        <div class="cbox_container pt-1 py-2" v-else>
                                                            <label class="checkbox text-primary px-2">

                                                                <input type="checkbox" v-model="item_type.value" :checked="item_type.value">

                                                                <span class="checkmark checkmark-danger checkmark-fill-danger"></span>

                                                                <span class="checkbox__label" v-if="item_type.label.indexOf('-') > -1">
                                                                    {{ item_type.label.split('-')[0] }}
                                                                </span>
                                                                <span class="checkbox__label" v-else>
                                                                    {{ item_type.label }}
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </mo-modal>

        <!-- Region Modal -->
        <mo-modal :showModal="lang_modal"
        @onClose="handleClose('lang_modal')"
        maxWidth="1000">
            <div class="container-fluid p-0 rounded-12 scroll-modal" style="max-height: 750px; overflow: auto;">
                <div class="row p-0" >
                    <div class="col-12 px-0 py-5 px-sm-3 py-sm-5 p-md-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="mo--description montserrat-bold" style="color: #1f6180;">
                                        <span>
                                            {{ $t('navbar.modal_language.where_want') }}
                                        </span>
                                    </div>
                                </div>

                                <div class="row p-0">
                                    <div class="col-12">
                                        <div class="mo--description-sm montserrat-bold mt-5" 
                                            @click="changeShow('current')">
                                            <span class="cursor-pointer">
                                                {{ $t('navbar.modal_language.current_location') }}
                                            </span>
                                            <img :src="ico_down_dark" class="cursor-pointer" v-if="!show_current" >
                                            <img :src="ico_up_dark" class="cursor-pointer" v-else>
                                        </div>
                                    </div>
                                </div>
                                <div class="row p-0 mt-4" v-if="show_current">
                                    <div class="border border-danger rounded-12 py-2 px-3">
                                        <div class="row d-flex justify-content-center align-items-center">
                                            <div class="col-12 d-flex align-items-center">
                                                <div class="mr-2">
                                                    <img :src="[lang !== null? object_logos[lang] : img_global]" style="max-width: 50px; max-height: 50px" class="rounded-circle ">
                                                </div>
                                                <div class="mo--description-sm montserrat-light">
                                                    <span>
                                                        {{  lang !== null ? object_titles[lang] : 'Global'  }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12" v-for="(item_lang, index_lang) in array_lang" :key="`lang_${index_lang}`" >
                                <div class="row p-0">
                                    <div class="col-12">
                                        <div class="mo--description-sm montserrat-bold mt-5 mb-2" 
                                            @click="changeShow(index_lang)">
                                            <span class="cursor-pointer">
                                                {{ item_lang.title }}
                                            </span>
                                            <img :src="ico_down_dark" class="cursor-pointer" v-if="!item_lang.show">
                                            <img :src="ico_up_dark" class="cursor-pointer" v-else>
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6 col-xl-4 px-2" 
                                        v-for="(item_country, index_country) in item_lang.country" 
                                        :key="`country_${index_country}`" 
                                        v-show="item_lang.show">

                                        <div @click="recoverCountry(item_country.locale)"
                                            class="row cursor-pointer p-3
                                            d-flex justify-content-center justify-content-sm-start align-items-center"
                                            style="z-index: 20000">

                                            <div class="col d-flex align-items-center">
                                                <div class="mr-2">
                                                    <img :src="item_country.image" style="max-width: 50px; max-height: 50px" class="rounded-circle ">
                                                </div>

                                                <div class="mo--description-sm montserrat-light">
                                                    <span>{{item_country.name}}</span>
                                                </div>

                                            </div>
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
        </mo-modal>
    </div>
</template>

<script>
    // import _Store from '@/store'
    import { mapGetters } from 'vuex'
    // IMAGES
    import img_logo from '~/assets/images/logo.png'

    import ico_search from '~/assets/icons/search-regular-24.png'
    import ico_world from '~/assets/images/icons/mundi.png'
    import ico_up from '~/assets/icons/up.png'
    import ico_down from '~/assets/icons/down.png'
    import ico_up_dark from '~/assets/icons/up_dark.png'
    import ico_down_dark from '~/assets/icons/down_dark.png'


    import img_global from '~/assets/images/countrys/Global.png'
    import img_arg from '~/assets/images/countrys/Argentina.png'
    import img_bra from '~/assets/images/countrys/Brasil.png'
    import img_chl from '~/assets/images/countrys/Chile.png'
    import img_col from '~/assets/images/countrys/Colombia.png'
    import img_mex from '~/assets/images/countrys/Mexico.png'
    import img_per from '~/assets/images/countrys/Peru.png'
    // jQuery
    import $ from 'jquery'

    //COMPONENTS
    import Modal from "./Modal.vue";

    export default {
        name: 'mo-navbar',
        props: {
            msg: String
        },
        components: {
            'mo-modal': Modal
        },
        data() {
            return {
                img_logo,
                ico_search,
                ico_world,
                img_global,
                img_arg,
                img_bra,
                img_chl,
                img_col,
                img_mex,
                img_per,

                ico_down,
                ico_up,
                ico_down_dark,
                ico_up_dark,
                show_advance: false,
                show_current: true,
                views_navbar_float: ['home'],
                search_modal: false,
                search_input: null,
                lang_modal: false,
                object_logos: {
                    'en-US': img_global,
                    'es-MX': img_mex,
                    'es-ARG': img_arg,
                    'es-CL': img_chl,
                    'es-CO': img_col,
                    'es-P': img_per,
                    'pt-BR': img_bra
                },
                object_titles: {
                    'en-US': this.$t('navbar.modal_language.global'),
                    'es-MX': this.$t('navbar.modal_language.mx'),
                    'es-ARG': this.$t('navbar.modal_language.arg'),
                    'es-CL': this.$t('navbar.modal_language.cl'),
                    'es-CO': this.$t('navbar.modal_language.co'),
                    'es-P': this.$t('navbar.modal_language.pe'),
                    'pt-BR': this.$t('navbar.modal_language.bra')
                },
                array_topic: [
                    { title: 'Display', value: true },
                    { title: 'Launches', value: true },
                    { title: 'News', value: true },
                    { title: 'Trends', value: false },
                    { title: 'Motorola', value: true },
                    { title: 'Innovation', value: false },
                    { title: 'Technology', value: false }
                ],
                array_date: [
                    { title: 'Last month', value: false },
                    { title: 'Last 3 months', value: false },
                    { title: 'Last 6 months', value: true },
                    { title: 'Last year', value: false },
                    { title: '2021', value: true },
                    { title: '2020', value: true },
                ],
                array_product: [
                    { title: 'moto g family', value: true },
                    { title: 'moto edge family', value: true },
                    { title: 'moto e family', value: true },
                    { title: 'moto defy', value: true },
                    { title: 'moto rawr', value: true }
                ],
                array_lang: [
                    {
                        title: this.$t('navbar.modal_language.moto_latin'),
                        text_show: 'latin',
                        show: false,
                        country: [
                            {   image: img_col, 
                                name: this.$t('navbar.modal_language.co'),
                                locale: {
                                    region: 3,
                                    location: 9,
                                    lang: 'es-CO'
                                }
                            },
                            // {  image: img_bra,
                            //     name: this.$t('navbar.modal_language.bra'),
                            //     locale: {
                            //         region: 3,
                            //         location: 4,
                            //         lang: 'pt-BR'
                            //     }
                            // },
                            {   image: img_chl, 
                                name: this.$t('navbar.modal_language.cl'),
                                locale: {
                                    region: 3,
                                    location: 8,
                                    lang: 'es-CL'
                                }
                            },
                            {
                                image: img_mex,
                                name: this.$t('navbar.modal_language.mx'),
                                locale:  {
                                    region: 3,
                                    location: 2,
                                    lang: 'es-MX'
                                }
                            },
                            {   image: img_per, 
                                name: this.$t('navbar.modal_language.pe'),
                                locale: {
                                    region: 3,
                                    location: 10,
                                    lang: 'es-P'
                                }
                            },
                            {
                                image: img_arg,
                                name: this.$t('navbar.modal_language.arg'),
                                locale: {
                                    region: 3,
                                    location: 3,
                                    lang: 'es-ARG'
                                }
                            }
                        ]
                    },
                    {
                        title: this.$t('navbar.modal_language.moto_north'),
                        text_show: 'north',
                        show: false,
                        country: [
                            {
                                image: img_global,
                                name: this.$t('navbar.modal_language.global'),
                                locale: {
                                    region: 1,
                                    location: 1,
                                    lang: 'en-US'
                                }
                            },
                        ]
                    },
                    // {
                    //     title: "Motorola Europa",
                    //     country: [
                    //         { image: img_global, name: "Spain / Spanish"},
                    //         { image: img_global, name: "France / French"},
                    //         { image: img_global, name: "Germany / German"},
                    //         { image: img_global, name: "UK / English"},
                    //         { image: img_global, name: "Neatherlands / English"},
                    //         { image: img_global, name: "Italy / Italian"},
                    //         { image: img_global, name: "Portugal / Portuguese"}
                    //     ]
                    // }
                ],
                data_searching: {},
            }
        },
        computed: {
            current_route_name() {
                return this.$route.name;
            },
            lang() {
                return this.$storage.getUniversal('lang')
            },
            getHeaders() {
                return this.$store.getters['getHeaders']
            }
        },
        methods: {

            keymonitor(event) {
                // console.log(event.key);
            },

            changeShow(change){
                if( typeof change == 'string') {
                    this[`show_${change}`] = !this[`show_${change}`]
                }
                else {
                    this.array_lang[change].show = !this.array_lang[change].show
                }
            },
            clearSearch() {
                this.search_input = null
                for(let s in this.data_searching) {
                    for(let i in this.data_searching[s]) {
                        if(this.data_searching[s][i].value) {
                            this.data_searching[s][i].value = false
                        }
                    }
                }
            },
            searchModal(route_name) {

                let items_search = {}
                for( let [key, value] of Object.entries(this.data_searching)) {
                    items_search[key] = ""
                    for( let i in value){
                        if(key != "date" && value[i].value) {
                            items_search[key] += value[i].id + ","
                        }
                        if(key == "date" && value[i].value) {
                            items_search[key] += value[i].rule + ","
                        }
                    }
                    items_search[key] += "-"
                    items_search[key] = items_search[key].replace(",-", "")
                }

                this.search_modal = false

                let params = {
                    search: (this.search_input == null) ? ' ' : this.search_input
                }


                // console.log(items_search)

                this.$storage.setLocalStorage('items_search', JSON.stringify(items_search));
                this.clearSearch()

                if(this.current_route_name !== route_name) {
                    // window.scrollTo(0, 0)

                    this.$router.push({
                        name: route_name,
                        params: params
                    })
                }
                else {
                    this.$router.replace({
                        name: route_name,
                        params: params,
                        query: { reload: "true" }
                    })

                    setTimeout(function reload() {
                        location.reload()
                    }, 1000);

                }
            },
            redirect(route_name) {
                if(this.$route.name !== route_name) {
                    // window.scrollTo(0, 0)

                    if(this.lang !== null) {
                        this.$router.push({
                            name: route_name,
                            query: { language: this.lang }
                        })
                    }

                    else {
                        this.$router.push({
                            name: route_name
                        })
                    }

                }
            },
            redirectToSamePageSimple(name_route, element_id) {
                document.getElementById(element_id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                })
            },
            redirectToSamePage(name_route, element_id) {
                this.redirect(name_route)

                // setTimeout(function() {
                //     const yOffset = -1 * ($('#am_navbar').height() + 32);
                //     const element = document.getElementById(element_id);
                //     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                //     window.scrollTo({top: y, behavior: 'smooth'});

                // }, 300);
            },
            redirectToPage(url, target = "_blank") {
                if(target == "_blank") {
                    // window.open(url, '_blank')
                }
                else {
                    // window.location.replace(url)
                }
            },
            onScroll(e) {
                //console.log(`scroll: ${$(document).scrollTop()}`)

                if($(document).scrollTop() > 0) {
                    if(this.views_navbar_float.includes(this.current_route_name)) {
                        $('#mo_navbar').removeClass('bg-transparent')
                        $('#mo_navbar').addClass('bg-primary')
                        $('#mo_navbar').addClass('mo_navbar__scroll')
                    }
                }
                else {
                    if(this.views_navbar_float.includes(this.current_route_name)) {
                        $('#mo_navbar').addClass('bg-transparent')
                        $('#mo_navbar').removeClass('bg-primary')
                        $('#mo_navbar').removeClass('mo_navbar__scroll')
                    }
                }

                if($(document).scrollTop() > document.getElementById('mo_navbar').clientHeight) {
                    if(!this.views_navbar_float.includes(this.current_route_name)) {
                        $('#mo_navbar').addClass('fixed-top')
                        $('#mo_navbar').addClass('mo_navbar__scroll')
                    }
                }
                else {
                    if(!this.views_navbar_float.includes(this.current_route_name)) {
                        $('#mo_navbar').removeClass('fixed-top')
                        $('#mo_navbar').removeClass('mo_navbar__scroll')
                    }
                }
            },
            openModal(name_modal) {

                // console.log("openmodal",name_modal);

                ( name_modal == 'search_modal') ? this.search_modal = true : this.lang_modal = true

                for(let time = 0; time < 2000; time = time + 100) {
                    setTimeout(function() {
                        // $(window).trigger('resize')
                    }, time)
                }
            },
            handleClose(name_modal) {
                ( name_modal == 'search_modal') ? this.search_modal = false : this.lang_modal = false
            },

            async preload() {

                // console.log(this.$storage.getUniversal('location'))
                let response = await this.$sendRequest('pressbox/preload', 'GET', null, null, false, {
                    location: this.$storage.getUniversal('location')
                })

                // console.log(response, 'response')

                if(response.success && response.data) {
                    await this.$store.commit('setPreloadData', response.data)
                    // Estatus correcto en la respuesta
                    if(response.data.preload.searching != undefined)
                    {
                        this.data_searching = response.data.preload.searching
                    }
                    this.$store.commit("setLoad", {
                        show: false
                    });
                }
                else if(!response.success && response.errors) {
                    // Estatus incorrecto en la respuesta

                    for(let i in response.errors) {
                        // console.log(response.errors[i])
                        if(response.errors[i].code === 'location_invalid') {
                            // window.location.reload()
                            await this.preload()
                        }
                    }

                    this.$store.commit('setAlert', {
                        open: true,
                        message: 'Error getting the answer',
                        variant: 'danger'
                    })
                    this.$store.commit("setLoad", {
                        show: false
                    });
                }
                else {
                    // Se perdio la respuesta
                    this.$store.commit('setAlert', {
                        open: true,
                        message: 'Lost connection to the api',
                        variant: 'danger'
                    })
                }
            },
            async recoverCountry(item) {
                const device_id = Buffer.from(JSON.stringify(this.$ua)).toString('base64')
                //console.log('device',device_id)
                
                const body = item
                
                this.$storage.setUniversal('lang', item.lang)
            
                const response = await this.$sendRequest(`pressbox/language/${device_id}`, 'PUT', null, body, false, {
                    location: this.$storage.getUniversal('location')
                })

                if(response.success && response.data) {
                    //this.$storage.setState('location', response.data);
                    //this.$nuxt.refresh()
                    //console.log('SELECTED', item.lang, response.data.location)
                    this.$storage.setLocalStorage('location', response.data.location)
                    
                    let selected_lang = item.lang.toLowerCase().replace('-', '_')
                    this.$i18n.setLocale(selected_lang)
                    
                    if(process.browser) {
                        window.location.href = '/'
                    }
                }
                else if(!response.success && response.errors) {
                    for(let error in response.errors) {
                        if(response.errors[error].code == 'lang_no_registered_device') {

                        }
                    }
                }
                else if(response.success && !response.data) {
                    // console.log('Se perdio la conexión con la API')
                }
                
                //this.$storage.setState('lang', item.lang)
                
            },
            insertParam(key, value) {
                key = encodeURIComponent(key);
                value = encodeURIComponent(value);

                // kvp looks like ['key1=value1', 'key2=value2', ...]
                var kvp = document.location.search.substr(1).split('&');
                let i=0;

                for(; i<kvp.length; i++){
                    if (kvp[i].startsWith(key + '=')) {
                        let pair = kvp[i].split('=');
                        pair[1] = value;
                        kvp[i] = pair.join('=');
                        break;
                    }
                }

                if(i >= kvp.length){
                    kvp[kvp.length] = [key,value].join('=');
                }

                // can return this or...
                let params = kvp.join('&');

                // reload page with new params
                document.location.search = params;
            },

            async languages() {
                // console.log(this.$ua)

                if(process.browser) {

                    try {
                        const request = await this.$http.get('https://api.ipify.org?format=json')
                        const { ip } = await request.json()

                        // console.log('ip', ip)

                        // console.log('IP NAVBAR => ', ip)
                        this.$store.commit('setIP', ip)
                    }
                    catch(err) {
                        // console.log('cant ip', err)
                    }

                    const device_id = Buffer.from(JSON.stringify(this.$ua)).toString('base64')
                    // console.log('device',device_id)

                    // console.log('STORE IP', this.$store.getters.ip)

                    const data = this.$aes.encrypt(JSON.stringify({ zone: this.$store.getters.ip }))

                    const response = await this.$sendRequest(`pressbox/language/${device_id}`, 'GET', null, null, false, {
                        zone: data
                    })
                    // console.log(response, 'response NAVBAR')


                    if (response.success && response.data) {
                        
                        // $cookies.set('device_data', response.data)
                        this.$storage.setLocalStorage('oldDate', response.data.location)

                        // console.log('response', response)

                        if (!response.data.registered) {
                            let response_lang = await this.$sendRequest(`pressbox/language/${device_id}`, 'POST', null, null, false, {
                                zone: data
                            })

                            // console.log(response_lang)
                            // alert(JSON.stringify(response_lang))
                        }

                        // console.log('LANGUAGE', response.data.language)

                        this.$storage.setUniversal('lang', response.data.language.default)
                        this.$storage.setUniversal('location', response.data.location)
                        this.$storage.setUniversal('region_lang', response.data.language.region)
                        this.$storage.setUniversal('location_lang', response.data.language.location)

                        const location = response.data.language.default.toLowerCase().replace('-', '_')
                        this.$i18n.setLocale(location)

                    }
                    else if (!response.success && response.errors) {
                        for (let error in response.errors) {
                        }
                        const default_data = JSON.parse(this.$storage.getLocalStorage('DEFAULT'))
                    }
                }


                
            },
        },


        async created() {
            // console.log('created navbar')
            if(process.browser) {
                await this.languages()
                await this.preload()
            }

            let lang = this.$storage.getUniversal('lang')
            // console.log('LANG:', lang)
            if(lang !== null) {
                let new_path  = `${this.$route.path}?language=${lang}`
                this.$router.replace(new_path).catch(() => { })
            }

            for(let i in this.array_lang) {

                this.array_lang[i].country = this.array_lang[i].country.sort((a,b) => {
                    if (a.name > b.name) {
                            return 1;
                    }
                    if (a.name < b.name) {
                            return -1;
                    }
                    // a must be equal to b
                    return 0;
                })
                
            }
        },
        async mounted() {
            

            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },

    }
</script>

<style lang="scss">
    @import '~/assets/scss/colors.scss';

    li {
        list-style-type: none;
    }

    .text-menu:hover {
        span {
            color: #EBE9F1 !important;
            font-family: 'Montserrat-SemiBold';
        }
    }

    #mo--navbar {
        .logo-responsive {
            max-width: 140px;
            display: flex;
            align-items: center;
            height: 100%;
        }

        @media (min-width: 576px) {
            .logo-responsive {
                max-width: 160px;
            }
        }

        @media (min-width: 992px) {
            .logo-responsive {
                max-width: 210px;
            }
        }
    }

    .dropdown-toggle::after {
        display:none;
    }

    .mo_navbar__scroll {
        background-color: #000000bb;
        box-shadow: 1px 4px 26px 5px rgba(0,0,0,0.71);
        -webkit-box-shadow: 1px 4px 26px 5px rgba(0,0,0,0.71);
        -moz-box-shadow: 1px 4px 26px 5px rgba(0,0,0,0.71);
    }

    .b-sidebar {
        width: 240px !important;
        height: 100vh !important;

        .b-sidebar-header {

            button {
                margin-left: auto;
                margin-right: 0px !important;

                color: white !important;

                svg {
                    font-size: 44px;
                }
            }
        }

        .mo_item {
            cursor: pointer;

            span {
                font-family: 'Montserrat-Bold';
                color: white !important;
            }
            span:hover {
                text-decoration: underline;
                text-decoration-style: simple;
            }
        }
    }
    .scroll-modal::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    .scroll-modal::-webkit-scrollbar-track {
        background: $light;
    }

    /* Handle */
    .scroll-modal::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    .scroll-modal::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>

