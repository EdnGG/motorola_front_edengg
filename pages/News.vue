<template>
    <div id="news" class="container-fluid bg-primary home p-0">
        <section id="section_main" class="d-flex bg-custom height_image_main p-0"
                :style="{'background-image' : `url(${img_1920})`,
                         'min-height' : `100px`}">

            <div id="s_target_main" class="container-fluid position-absolute height_image_main gradient__image w-100">
                <div class="row p-0" style="backdrop-filter: blur(15px); background:rgba(0, 21, 43, 0.20);">
                    <div class="col-12 px-3 px-sm-5">
                        <div class="row justify-content-between px-0 px-sm-5">

                            <div :class="[(submenu_active === 'all') ? 'active_submenu' : '',
                                'submenu col-2 py-3 px-0 text-center']"  @click="setFilter('all')">
                                <span class="mo--description-sm montserrat-semibold text-white align-middle">
                                    {{ $t('filters_news.all') }}
                                </span>
                            </div>

                            <div :class="[(submenu_active === 'product') ? 'active_submenu' : '',
                                'submenu col-2 py-3 px-0 text-center align-middle']" @click="setFilter('product')">
                                <span class="mo--description-sm montserrat-semibold text-white align-middle">
                                    {{ $t('filters_news.product') }}
                                </span>
                            </div>

                            <div :class="[(submenu_active === 'brand') ? 'active_submenu' : '',
                                'submenu col-2 py-3 px-0 text-center align-middle']" @click="setFilter('brand')">
                                <span class="mo--description-sm montserrat-semibold text-white align-middle">
                                    {{ $t('filters_news.brand') }}
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="row p-0 pt-5 m-0">

            <div class="col-12 bg-primary pl-1 pl-sm-5">
                <b-breadcrumb class="py-0 pl-4 bg-primary">
                    <!-- <b-breadcrumb-item href="#home"> {{ $t('navbar.home') }} </b-breadcrumb-item> -->
                    <b-breadcrumb-item href="#news" class="montserrat-bold" active> {{ $t('navbar.news') }} </b-breadcrumb-item>
                </b-breadcrumb>
            </div>

            <div class="col-12 pl-1 pl-sm-5 pt-3 mb-5">
                <span class="pl-4 montserrat-bold mo--title-sm text-white">
                    {{ $t('lastest_news') }}
                </span>
            </div>

            <div class="col-12 p-0">
                <div class="row pl-0 pl-sm-5">

                    <div class="col-12 px-1 px-sm-4" v-for="(item, index) in items_news" :key="index"
                        style="margin-top: 2rem !important; margin-bottom: 2rem !important;">

                        <div class="row p-0">

                            <div class="col-12">
                                <div class="float-custom-left mr-4 mr-lg-4 mr-xl-5">

                                    <img :src="item.featured_image"
                                        class="img-fluid rounded picture-new"
                                        style="max-width: 380px;"
                                        @error="alterImage">
                                </div>


                                <div class="row d-flex align-items h-custom-100" style="max-width: 800px;">
                                    <div class="col-12 px-0 pb-1 pt-3 pt-sm-0">
                                        <span class="montserrat-bold mo--description text-white">
                                            {{ item.title  }}
                                        </span>
                                    </div>
                                    <div class="col-12 mt-0 px-0 pb-3 pb-sm-1">
                                        <span class="montserrat mo--description-sm text-white">
                                            {{ item.creation }}
                                        </span>
                                    </div>
                                    <div class="col-12 px-0 pb-4">
                                        <div class="row">

                                            <!-- <div class="mo--badge"
                                                 v-for="(chip, index_chip) in (item.tags)" :key="index_chip">

                                                <span class="montserrat-semibold mo--description-sm text-white text-14">
                                                    {{ chip | capitalize }}
                                                </span>
                                            </div> -->
                                        </div>
                                    </div>
                                    <div class="col-12 text-link-red px-0 mt-sm-3 mt-md-2 mt-lg-4">
                                        <span @click="redirect('article', item.uid, item.title)" class=" cursor-pointer">
                                            <span class="montserrat-semibold">
                                                {{ $t('read_this_article') }}
                                            </span>

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

            <div class="col-12 px-0">
                <div class="pt-5">
                    <mo-paginator
                        :total_pages="pag.total_pages"
                        @changePage="controlPaginator($event)">
                    </mo-paginator>
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
// import this.$store from '@/store'
import { mapGetters } from "vuex";
// IMAGES
import img_1920 from "@/assets/images/news/image_main.jpg";
import img_192 from "@/assets/images/dimensions/192x192.png";
// jQuery
import $ from "jquery";
import utf8 from "utf8";

//Component
import Paginator from "../components/Paginator.vue";

export default {
  name: "home",
  metaInfo() {
    return {
      htmlAttrs: {
        lang: "en",
        addSsrAttribute: true,
      },
      title: "Motorola News",
      titleTemplate: "%s",
    };
  },
  components: {
    "mo-paginator": Paginator,
  },
  data() {
    return {
      img_1920,
      height_img_main: 600,
      current: 1,
      img_192,
      items: [
        {
          text: "Home",
        },
        {
          text: "News",
          href: true,
        },
      ],
      items_news: [],
      submenu_active: "all",
      body: {
        datatable: true,
        page: 1,
        rows: 4,
        search: "",
        order_by: "creation",
        order_asc: true,
        filter: "all",
      },
      pag: {
        total_pages: null,
        page_selected: 1,
      },
    };
  },
  computed: {
    custom_headers() {
      return this.$store.getters["getHeaders"];
    },
    language() {
      return this.$storage.getLocalStorage("lang");
    },
  },
  methods: {
    redirect(route_name, uid, title) {
      let params = {
        //hash: hash_id,
        title: uid,
      };

      if (this.$route.name !== route_name) {
        window.scrollTo(0, 0);

        this.$router.push({
          name: route_name,
          params: params,
          query: {
            language: this.$storage.getUniversal("lang"),
          },
        });
      }
    },
    async initConfig() {
      let response = await this.$sendRequest(
        "pressbox/news",
        "GET",
        null,
        this.body,
        true,
        {
          location: this.$storage.getUniversal("location"),
        }
      );
      // console.log(response.data.list.result.map(({ id }) => id))

      if (response.success && response.data) {
        // Estatus correcto en la respuesta
        if (response.data.list != undefined) {
          this.pag.total_pages = response.data.list.total_pages;
          this.items_news = response.data.list.result;
          for (let i in this.items_news) {
            //console.log(this.items_news[i])
            this.items_news[i].creation = this.$informativeDate(
              this.items_news[i].creation,
              this.language
            );
            this.items_news[i].title = utf8.decode(this.items_news[i].title);
            // this.items_news[i].tags = this.items_news[i].tags.replaceAll(',', '')
          }
        }
      } else if (!response.success && response.error) {
        // Estatus incorrecto en la respuesta
        this.$store.commit("setAlert", {
          open: true,
          message: "Error getting the answer",
          variant: "danger",
        });
      } else {
        // Se perdio la respuesta
        this.$store.commit("setAlert", {
          open: true,
          message: "Lost connection to the api",
          variant: "danger",
        });
      }
    },
    async controlPaginator(event) {
      //console.log(event)

      this.body.page = event;
      await this.initConfig();
    },
    alterImage(e) {
      e.target.src = img_192;
    },

    async setFilter(filter) {
      this.items_news = [];
      this.submenu_active = filter;
      this.body.page = 1;
      this.body.rows = 4;
      if (filter === "brand") {
        this.body.filter = "brand";
        await this.initConfig();
      } else if (filter === "product") {
        this.body.filter = "product";
        await this.initConfig();
      } else {
        this.body.filter = "all";
        await this.initConfig();
      }
    },
  },
  async created() {
    await this.initConfig();

    if (process.browser) {
      $(window).resize(function () {
        // Image main
        let section_main_height = $("#section_main").height();
        //console.log(section_main_height);
        $("#s_target_main").css("height", section_main_height);
      });
    }
  },
  mounted() {
    if (process.browser) {
      for (let time = 0; time < 2000; time = time + 100) {
        setTimeout(function () {
          $(window).trigger("resize");
        }, time);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

#news {
  min-height: 100vh;

  .height_image_main {
    height: 310px;
  }
  @media (min-width: 576px) {
    .height_image_main {
      height: 450px;
    }
  }
  @media (min-width: 1320px) {
    .height_image_main {
      // height: 600px;
      height: 450px;
    }
  }

  .gradient__image {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0) 65%,
      $primary 100%
    ) !important;
    height: 100%;
    z-index: 5;
  }

  a {
    color: white;
  }

  .active {
    color: #ff443f;
  }
}
.submenu {
  min-width: 70px;
  cursor: pointer;
}
.active_submenu {
  background: rgba(255, 85, 77, 0.95);
  border-bottom: 3px solid #175c7c;
}
.selected {
  border-radius: 25px;
}

@media (min-width: 567px) {
  .picture-new {
    max-width: 420px !important;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .picture-new {
    max-width: 355px !important;
  }
}
</style>
