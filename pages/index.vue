<template>
    <div id="home" class="container-fluid home">
        <section id="section_main" class="d-flex bg-custom height_image_main p-0"
                :style="{'background-image' : `url(${obj_principal.image})`,
                         'height': `${height_main_image}px`,
                         'min-height' : `100px`}">

            <div id="s_target_main"
                class="container-fluid position-absolute gradient__image w-100"
                :style="{'height': `${height_main_image}px`,
                         'min-height' : `100px`}">

                <div class="row h-100 bg-20-primary px-4 px-sm-5 py-0 py-sm-5">
                    <div class="col-12 h-100 d-flex justify-content-start align-items-end pl-1 pl-sm-2 pl-md-4 pl-xl-5">
                        <div style="border-left: 5px solid #FF443F" class="row p-0">
                            <div class="col-12 pl-4">
                                <div class="row p-0">
                                    <div class="col-12 p-0">
                                        <div style="max-width: 600px;">
                                            <span class="mo--title-sm text-white">
                                                <!-- {{ obj_principal.title | capitalize }} -->
                                                {{ obj_principal.title }}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-12 p-0 mt-3">
                                        <!-- <div class="mo--badge" v-for="chip, c_index in obj_principal.tags" :key="c_index">
                                            <span class="montserrat-semibold mo--description-sm text-white text-14">
                                                {{ chip | capitalize }}
                                            </span>
                                        </div> -->
                                    </div>
                                    <div class="col-12 text-link-red col-12 p-0 mt-1 mt-sm-2 mt-md-4 mt-xl-5">
                                        <span @click="redirect('article', obj_principal.uid, obj_principal.title)" class=" cursor-pointer">
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
        </section>


        <section class="row bg-primary py-5">
            <div class="col-12 px-0">

                <div class="container">
                    <div class="row">
                        <div class="col-12 my-4">
                            <span class="mo--title-sm text-white" @click="redirect('news')" style="cursor: pointer;">
                                {{ $t('lastest_news') }}
                            </span>
                        </div>
                    </div>

                    <div class="row" style="min-height: 200px;">
                        <div :id="`news_col_${item_index}`"
                            @click="openNew(item_lastnews.uid, item_lastnews.title)"
                            class="col-12 col-md-4 d-flex justify-content-center cursor-pointer my-4 px-2"
                            style="min-height: 120px; width: 100%;"
                            v-for="item_lastnews, item_index in array_lastnews" :key="item_index">


                            <div class="mb-1 mb-sm-5">
                                <img
                                    :id="`news_image_${item_index}`"
                                    :src="item_lastnews.image"
                                    class="img-fluid rounded mb-3"
                                    style="width: 100%;object-fit: cover; aspect-ratio: 4/3;height:" />

                                <div class="gradient__card_top rounded py-2" style="padding: 0px 5px;">
                                    <span v-html="item_lastnews.title"
                                          class="mo--description-sm montserrat-semibold text-white">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="row bg-primary pt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-5">
                        <span class="mo--title-sm text-white">
                            {{ $t('featured_stories') }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-12 px-0">
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    :interval="4000">



                    <b-carousel-slide v-for="item_banner, index_banner in slider"
                        style="cursor: pointer; filter: brightness(80%)"
                        :key="index_banner"

                        :img-src="item_banner.image"
                        :style="{ 'max-height' : `${height_img_featured}px !important`,
                              'min-height' : `100px` }">

                        <!-- style="filter: brightness(80%)" -->

                        <template #img>
                            <img
                                @click="redirect('article', item_banner.uid, item_banner.title)"
                                class="d-block img-fluid w-100"
                                width="1024"
                                height="480"
                                :src="item_banner.image"
                                alt="image slot"
                            >
                        </template>

                        <template #default>
                            <div>

                                <p style="font-size: 1.3em; font-weight: 600;">
                                    {{ item_banner.title }}
                                </p>
                            </div>
                        </template>

                    </b-carousel-slide>
                </b-carousel>


                <div style=" height: 80px; background: rgb(0,21,43);
                    background: linear-gradient(180deg, rgba(0,21,43,1) -70%, rgba(82,32,40,1) 80%);">
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
// IMAGES
import img_1920 from "@/assets/images/home/image_main.jpg";
import img_col1 from "@/assets/images/home/col1.png";
import img_col2 from "@/assets/images/home/col2.png";
import img_col3 from "@/assets/images/home/col3.png";
import img_featured from "@/assets/images/home/featured.jpg";
import img_featured2 from "@/assets/images/home/featured2.jpg";
import img_featured3 from "@/assets/images/home/featured3.jpg";
import img_featured4 from "@/assets/images/home/featured4.jpg";

import utf8 from "utf8";
// jQuery

export default {
  name: "IndexPage",
  metaInfo() {
    return {
      htmlAttrs: {
        lang: "en",
        addSsrAttribute: true,
      },
      title: "Motorola News",
      titleTemplate: "",
    };
  },
  data() {
    return {
      img_1920,
      cols: [
        { img: img_col1, text: "POWER TO EMPOWER" },
        { img: img_col2, text: "CHEROKEE MOBILE PHONE" },
        { img: img_col3, text: "INNOVATION WITH THE <br> MOTO G200" },
      ],
      img_featured,
      img_featured2,
      img_featured3,
      img_featured4,

      height_main_image: 1080,
      height_img_featured: 600,

      chips: ["Innovation", "Product"],
      obj_principal: {
        img: null,
        title: "",
        tags: null,
        uid: null,
      },
      array_lastnews: [],
      slider: [],
      preload_data: {},
    };
  },
  computed: {
    custom_headers() {
      return this.$store.getters["getHeaders"];
    },
    prefetchData() {
      return this.$store.getters["getPreloadData"];
    },
  },
  methods: {
    showAlert(color = "success") {
      // this.$store.commit('setAlert', {
      //     open: true,
      //     message: 'Mensaje de prueba',
      //     variant: color
      // })
    },
    redirect(route_name, uid, title) {
      let params = {
        //hash: hash_id,
        title: uid,
      };

      if (this.$route.name !== route_name) {
        if (process.browser) {
          window.scrollTo(0, 0);
        }

        this.$router.push({
          name: route_name,
          params: params,
          query: {
            language: this.$storage.getUniversal("lang"),
          },
        });
      }
    },
    openNew(id, title) {
      this.redirect("article", id, title);
    },
    async preload() {
      // console.log(this.preload_data)

      if (this.preload_data != null) {
        if (
          this.preload_data.preload.resources != undefined &&
          this.preload_data.preload.resources.latest_news.length != 0 &&
          this.preload_data.preload.resources.featured_stories
        ) {
          this.obj_principal = this.preload_data.preload.resources.principal;
          try {
            this.obj_principal.title = utf8.decode(this.obj_principal.title);
          } catch (e) {}

          for (let latest_new of this.preload_data.preload.resources
            .latest_news) {
            this.array_lastnews.push({
              id: latest_new.id,
              image: latest_new.image,
              tags: latest_new.tags,
              title: utf8.decode(latest_new.title),
              uid: latest_new.uid,
            });
          }

          for (let featured_story of this.preload_data.preload.resources
            .featured_stories) {
            this.slider.push({
              id: featured_story.id,
              image: featured_story.image,
              tags: featured_story.tags,
              title: utf8.decode(featured_story.title),
              uid: featured_story.uid,
            });
          }

          // console.log(this.obj_principal)
        }

        this.$store.commit("setLoad", {
          show: false,
          title: "Loading...",
          subtitle: "",
        });
      }
    },

    onResize() {
      // console.log('Function onResize - Home')
      let device_width = document.documentElement.clientWidth;
      let device_height = document.documentElement.clientHeight;

      let w_img = 1920;
      let h_img = 1080;
      if (
        !_.isUndefined(this.obj_principal.image) &&
        !_.isNull(this.obj_principal.image)
      ) {
        let main_image = new Image();
        main_image.src = this.obj_principal.image;

        w_img = main_image.width;
        h_img = main_image.height;
      }
      // console.log(`[IMAGE] w: ${w_img}, h: ${h_img}`)

      const hxw = h_img / w_img;
      this.height_main_image = device_width * hxw;
    },
  },

  async created() {
    // console.log(this.$route)

    this.$watch("prefetchData", (data) => {
      this.preload_data = data;
      this.preload();
    });

    this.$store.commit("setLoad", {
      show: true,
      title: "Loading...",
      subtitle: "",
    });

    if (process.browser) {
      setTimeout(async () => {
        if (
          this.prefetchData !== null &&
          Object.keys(this.prefetchData).length > 0
        ) {
          this.preload_data = this.prefetchData;
          this.preload();
        }
      }, 300);
    }
  },
  async mounted() {
    // console.log(this.$route)

    if (process.browser) {
      window.addEventListener("resize", this.onResize);
      this.onResize();
    }
  },
  beforeDestroy() {
    if (process.browser) {
      window.removeEventListener("resize", this.onResize);
    }
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/colors.scss";

#home {
  min-height: 100vh;

  .gradient__card {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0) 65%,
      $danger 110%
    );
    height: 100%;
    z-index: 5;
  }
  .gradient__card_top {
    background-image: linear-gradient(
      to top,
      rgba(255, 0, 0, 0) 65%,
      $danger 110%
    );
    height: 100%;
    z-index: 5;
  }

  .gradient__image {
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0) 65%,
      $primary 100%
    ) !important;
    height: 100%;
  }
  a {
    color: white;
  }

  .active {
    color: #ff443f;
  }

  .carousel-caption {
    h3 {
      font-size: 16px;
    }
  }
  .carousel-indicators li {
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 10px !important;
    height: 8px !important;
    border-radius: 24px;
    margin: 0px 5px;
    text-indent: -999px;
    cursor: pointer;
    background: #fff;
    background-clip: inherit;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
    opacity: 0.5;
    transition: opacity 0.6s ease;
  }
  .carousel-indicators .active {
    background-color: $danger;
    opacity: 1;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    // img {
    //     position: relative;
    //     top: 40%;
    //     transform: translateY(-40%);
    // }
  }
}

.carousel-caption {
  right: 0 !important;
  bottom: 0px !important;
  left: 0 !important;
  width: 100% !important;
  background: rgba(0, 21, 43, 0.248);
  background: linear-gradient(
    -180deg,
    rgba(0, 20, 40, 0.75) -70%,
    rgba(0, 0, 0, 0.401) 80%
  );
  height: 100px !important;
}
</style>
