<template>
    <div id="login" class="container-fluid login">
        <section id="section_main" class="d-flex p-0">
            <img :src="img_1920" class="img-fluid">
        </section>

        <div id="mo__modal" class="mo__modal d-flex" v-if="show_modal">

            <div class="mo__modal--content">
                <span @click="closeModal()" class="close dm-span-close" v-if="false">&times;</span>

                <div class="row p-4">
                    <div class="col-12 mt-2 mb-4">
                        <span class="mo--title-sm montserrat-semibold text-danger">WELCOME</span>
                    </div>

                    <div class="col-12 my-2"> 
                        <div class="mb-3">
                            <span class="mo--description-sm text-white">User or e-mail</span>
                        </div>
                        <input 
                            v-model="user.email"
                            type="email" 
                            name="email" 
                            class="input-thm-light full-width">
                    </div>

                    <div class="col-12 mt-2">
                        <div class="mb-3">
                            <span class="mo--description-sm text-white">Password</span>
                        </div>
                    </div>
                    <div class="col-12 mb-2">
                        <div @click="changeType()"
                            class="d-inline-block position-absolute h-100 cursor-pointer"
                            style="padding: 0px 10px; right: 15px;">

                                <div class="d-flex justify-content-end align-items-center w-100 h-100">
                                    <span class="hc--description-sm">
                                        <b-icon-eye font-scale="1.2" style="color: #9e9e9e" v-show="type == 'password'"></b-icon-eye>
                                        <b-icon-eye-slash font-scale="1.2" style="color: #9e9e9e" v-show="type == 'text'"></b-icon-eye-slash>
                                    </span>
                                </div>
                        </div>

                        <input 
                            v-model="user.password"
                            type="password" 
                            name="password" 
                            class="input-thm-light full-width">

                    </div>

                    <div class="col-12 text-right mt-2 mb-4">
                        <span class="mo--description-sm text-white">
                            Forgot your password?
                        </span>
                    </div>

                    <div class="col-12 text-right my-2">
                        <button @click="redirect('editor_profile')" class="btn btn-info full-width">
                            Enter
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

// IMAGES
import img_1920 from "@/assets/images/dimensions/1920x1080.png";
// jQuery
import $ from "jquery";

export default {
  name: "login",
  data() {
    return {
      img_1920,
      show_modal: false,
      type: "password",
      user: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    current_route_name() {
      return this.$route.name;
    },
  },
  methods: {
    // ...mapActions(["createUser"]),
    openModal() {
      this.show_modal = true;
    },
    closeModal() {
      this.show_modal = false;
    },
    changeType() {
      this.type = this.type == "text" ? "password" : "text";
    },
    redirect(route_name) {
      console.log("user: ", this.user);
      //   this.createUser(this.user);
      if (this.current_route_name !== route_name) {
        window.scrollTo(0, 0);
        this.$router.push({
          name: route_name,
        });
      }
    },
  },
  created() {
    this.openModal();
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/scss/colors.scss";

#login {
  //min-height: 100vh;

  .mo__modal {
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: #000000bb;
    //display: flex;

    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    &--content {
      width: 100%;
      max-width: 400px;
      min-height: 50vh;
      border-radius: 12px;
      background-color: #09314a;
      padding: 0.5rem !important;

      .dm-span-close {
        cursor: pointer;
        color: white;
      }
    }
  }
}
</style>
