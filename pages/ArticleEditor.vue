<template>
    <div class="container-fluid">
        <div class="row p-0 m-0">
            <div class="col-12  p-0 m-0">
                <div class="row  p-0 m-0">
                    <div class="col-4 col-md-3 bg-primary pt-5 m-0" style="height: auto">

                        <div class="d-flex justify-content-center align-items-center my-5">
                            <button class="btn btn-info mt-5 rounded-12">
                                <span class="px-0 px-md-2 px-lg-4">
                                    My articles
                                </span>
                            </button>
                        </div>

                        <div class="row d-flex justify-content-center align-items-center py-3"
                            v-for="(item, index) in colection_editor" :key="index">

                            <div class="col-12 col-md-4 p-0">
                                <div class="border border-light rounded-circle d-flex justify-content-center align-items-center"
                                     style="width:50px; height: 50px">

                                    <img :src="item.image" alt="img_fluid" class="img-fluid" style="width:30px">
                                </div>
                            </div>

                            <div class="col-12 col-md-4 p-0 m-0">
                                <span class="text-white mo--description-sm montserrat-bold">
                                    {{ item.title }}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 col-md-6 col-lg-7 p-0 m-0">
                        <div class="row p-0 m-0">
                            <div class="col-12 d-flex p-0" id="section_main">
                                <img :src="img_1248" class="w-100" style="height: 140px">

                                <div id="s_target_main" class="container-fluid position-absolute w-100">
                                    <div class="row h-100">
                                        <div class="col-12 h-100 d-flex justify-content-center align-items-start p-0">
                                            <button class="btn btn-info mt-2 rounded-12">
                                                <span class="px-md-2 px-lg-5">Upload image</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row" style="height: 1000px">

                        </div>
                    </div>
                    <div class="col-12 col-md-3 col-lg-2" style="background: #006888">
                        <div class="row">
                            <div class="col-12 col-sm-4 col-md-12">
                                <div class="d-flex justify-content-center align-items-center my-3">
                                    <button class="btn btn-danger rounded-12">
                                        <span class="px-2 py-0">Post</span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-md-12">
                                <div class="d-flex justify-content-center align-items-center my-4">
                                    <button class="btn btn-info rounded-12">
                                        <span class="px-2 py-0">Preview</span>
                                    </button>
                                </div>
                            </div>
                            <div class="col-12 col-sm-4 col-md-12">
                                <div class="d-flex justify-content-center align-items-center my-4">
                                    <button class="btn btn-info rounded-12">
                                        <span class="px-2 py-0">Save draft</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import icon1 from "@/assets/icons/filter.png";
import icon2 from "@/assets/icons/bar_chart.png";
import icon3 from "@/assets/icons/dashboard.png";
import icon4 from "@/assets/icons/table_view.png";

import img_1248 from '@/assets/images/dimensions/1248x140.png'

// jQuery
import $ from 'jquery'
export default {
    data() {
        return {
            icon1,
            icon2,
            icon3,
            icon4,
            img_1248,
            colection_editor: [
                { image: icon1, title: "Images" },
                { image: icon2, title: "Graphics" },
                { image: icon3, title: "Icons" },
                { image: icon4, title: "Tables" }
            ]
        };
    },
    created() {
        $(window).resize(function() {
            // Image main
            let section_main_height = $('#section_main').height()
            // console.log(section_main_height);
            $("#s_target_main").css("height", section_main_height)

            for(let time = 0; time < 2000; time = time + 100) {
                setTimeout(function() {
                    $(window).trigger('resize')
                }, time)
            }
        })
    },
}
</script>

<style>

</style>
