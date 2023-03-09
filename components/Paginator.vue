<template>
    <div class="d-flex justify-content-center align-items-center">
        <ul class="pagination montserrat-light mo--description-sm m-0">
            <!-- back item -->
            <li class="page-item">
                <a :class="['page-link', `text-${color_indicator}`]" @click="arrowPrev">
                    <div style="max-width: 24px;">
                        <img :src="img_arrow_back" class="img-fluid">
                    </div>
                </a>
            </li>

            <!-- pages --> 
            <li @click="changePage(page)"
                class="page-item d-flex"
                v-for="(page, index_page) in get_total_pages" :key="page">

                    <div class="d-flex justify-content-center align-items-center text-white pt-1 px-2"
                         v-if="get_total_pages.length > 5 &&
                               index_page == get_total_pages.length - 1 &&
                               page_selected < total_pages - 5">
                        ...
                    </div>
                    <div style="width: 38px;"
                        class="flex-center all_transitions_middle rounded-25"
                        :class="(page == page_selected) ? `bg-${color_selected}` :
                                                          `text-${color_numbers}`">

                        <a :class="`page-link text-white all_transitions_slow
                                    ${(page == page_selected) ? 'montserrat-bold' : ''}`">
                            {{ page }}
                        </a>
                    </div>
                    <div class="d-flex justify-content-center align-items-center text-white pt-1 px-2"
                         v-if="get_total_pages.length > 5 &&
                               index_page == 0 &&
                               page_selected > 2">
                        ...
                    </div>
            </li>

            <!-- next item -->
            <li class="page-item" >
                <a :class="['page-link', `text-${color_indicator}`]" @click="arrowNext">
                    <div style="max-width: 24px;">
                        <img :src="img_arrow_next" class="img-fluid">
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import img_arrow_back from "@/assets/icons/paginator/arrow-back.png";
import img_arrow_next from "@/assets/icons/paginator/arrow-next.png";

export default {
  name: "mo--paginator",
  props: {
    total_pages: {
      require: true,
      type: Number,
      default: 1,
    },
    color_selected: {
      require: false,
      type: String,
      default: "danger",
    },
    color_indicator: {
      require: false,
      type: String,
      default: "danger",
    },
    color_numbers: {
      require: false,
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      img_arrow_back,
      img_arrow_next,
      page_selected: 1,
    };
  },
  computed: {
    get_total_pages() {
      let total_pages = [];
      if (this.total_pages === null || this.total_pages <= 0) {
        total_pages = [1];
      }
      if (this.total_pages <= 5) {
        for (let i = 1; i <= this.total_pages; i++) {
          total_pages.push(i);
        }
      } else {
        if (this.page_selected !== 1) {
          total_pages.push(1);
        }
        if (this.page_selected <= this.total_pages - 5) {
          for (let i = this.page_selected; i < this.page_selected + 5; i++) {
            total_pages.push(i);
          }
          total_pages.push(this.total_pages);
        } else {
          for (let i = this.total_pages - 4; i <= this.total_pages; i++) {
            total_pages.push(i);
          }
        }
      }
      return total_pages;
    },
  },
  methods: {
    changePage(new_page) {
      this.page_selected = new_page;
      this.$emit("changePage", this.page_selected);
    },

    arrowPrev() {
      if (this.page_selected - 1 == 0) return;
      this.page_selected = this.page_selected - 1;
      this.$emit("changePage", this.page_selected);
    },
    arrowNext() {
      if (this.page_selected == this.total_pages) return;
      this.page_selected = this.page_selected + 1;
      this.$emit("changePage", this.page_selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-item {
  cursor: pointer;
}
.page-link {
  background: none;
  border: 0;
}
.indicator {
  color: #ff443f !important;
}
.rounded-25 {
  border-radius: 25px;
}
</style>
