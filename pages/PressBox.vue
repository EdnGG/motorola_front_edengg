<template>
	<div id="press_box" class="container-fluid home">
		<section id="section_main" class="bg-primary bg-custom height_image_main p-0"
			:style="{'background-image' : `url(${img_1920})`,
				'min-height' : `100px` }">


				<div class="container-fluid position-absolute gradient__image height_image_main w-100">
				</div>

		</section>

		<section class="row bg-primary pt-5">
			<div class="col-12 px-0">
				<div class="container px-0">
					<div class="row">



						<!-- Title -->
						<div class="col-12 bg-primary pl-3">
							<b-breadcrumb class="p-0 bg-primary">
								<!-- <b-breadcrumb-item href="#home"> {{ $t('navbar.home') }} </b-breadcrumb-item> -->
								<b-breadcrumb-item href="#news" class="montserrat-bold" active>
									{{ $t('navbar.press_box') }}
								</b-breadcrumb-item>
							</b-breadcrumb>
						</div>
						<div class="col-12 my-4">
							<span class="mo--title-sm text-white">
								{{ $t('press_box') }}
                                <!-- A SHORT TO THE MULTIMEDIA CONTENT YOU WANT -->
							</span>
						</div>


						<!-- Content -->

						<div class="col-12 col-md-12 col-lg-6 px-1 px-sm-0"
                            v-for="(item, index) in pressbox_data" :key="index"
							style="margin-top: 2rem !important; margin-bottom: 2rem !important;">

							<div class="row p-0">

								<div class="col-12">
									<div class="float-custom-left mr-3 mr-lg-3 mr-xl-3 d-flex justify-content-xs-center">
										<img v-if="item.picture" :src="item.picture ?? moto_logo"
										style="width: 333px; object-fit: contain; aspect-ratio: 4/3;height: auto" class="img-fluid rounded">

										<img v-else :src="moto_logo"
										style="width: 333px; object-fit: contain; aspect-ratio: 4/3;height: auto" class="img-fluid rounded border">
									</div>

									<div class="row d-flex align-items h-custom-100">
										<div class="col-12 px-0 pb-1 pt-xs-3 pt-sm-0 d-flex justify-content-xs-center text-custom-center">
											<span class="montserrat-semibold mo--description text-danger">
												{{ item.name }}
											</span>
										</div>
										<div class="col-12 mt-0 px-0 pb-3 pb-xs-5 pb-sm-1 d-flex justify-content-xs-center">
											<span class="montserrat-semibold mo--description-sm text-white">
                                                {{ item.creation }}
											</span>
										</div>
										<div class="col-12 px-0 pb-4">
											<div class="row d-flex justify-content-xs-center">
												<div class="mo--badge" v-for="(chip, index_chip) in item.chips" :key="index_chip">
													<span class="montserrat-semibold mo--description-sm text-white text-14">
														{{ chip }}
													</span>
												</div>
											</div>
										</div>
										<div class="col-12 px-0 mt-sm-3 mt-md-2 mt-lg-3 d-flex justify-content-xs-center">
											<section @click="selectPressbox(item)" class="align-middle cursor-pointer">
												<div class="h-100 float-left mr-2">
													<div style="max-width: 32px;">
														<img :src="icon_download" class="img-fluid invert-color">
													</div>
												</div>

												<span class="mo--description-sm montserrat-semibold text-white"
													style="vertical-align: sub;">
													{{ $t('see_more') }}
												</span>
											</section>
										</div>
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
		</section>

	</div>
</template>

<script>

	//images
	import img_1920 from '@/assets/images/pressBox/image_main.jpg'
	import img_240 from '@/assets/images/dimensions/240x240.png'
	import img_427 from '@/assets/images/dimensions/427x640.png'
	import icon_download from '@/assets/icons/download-regular-24.png'
	import icon_image from '@/assets/icons/image-alt-regular-24.png'
	import moto_logo from '@/assets/images/logo.png'

    import Paginator from "@/components/Paginator.vue";
    import utf8 from 'utf8'


    export default {
		data() {
			return {
				img_1920,
				img_240,
				img_427,
				icon_download,
				icon_image,
				moto_logo,
				pressbox_data: [],
                body: {
                    datatable: true,
                    page: 1,
                    rows: 8,
                    search: '',
                    order_by: 'creation',
                    order_asc: true,
                    filter: 'all'
                },
                pag: {
                    total_pages: null,
                    page_selected: 1
                }
			}
		},
        components: {
			'mo-paginator': Paginator
		},
		computed: {
			custom_headers() {
				return this.$store.getters.getHeaders
			},
			language() {
				return this.$storage.getLocalStorage('lang')
			}
		},
		methods: {
			selectPressbox(item) {
				this.$store.commit('setPressbox', item)
				this.$router.push({ name: 'pressbox-download'})
			},
            async controlPaginator(event) {
                //console.log(event)

                this.body.page = event
                await this.presbox()
            },
            async presbox() {
				
                let response = await this.$sendRequest('pressbox/list_pressbox', 'GET', null, this.body, true, {
                    location: this.$storage.getUniversal('location')
                })

                if(response.success && response.data) {
                    // Estatus correcto en la respuesta
                    if(response.data.list != undefined) {

                        this.pag.total_pages = response.data.list.total_pages
                        this.pressbox_data = response.data.list.result

                        for(let i in this.pressbox_data) {
                            // console.log(this.pressbox_data)

                            this.pressbox_data[i].creation = this.$informativeDate(this.pressbox_data[i].creation, this.language)
                            this.pressbox_data[i].name = utf8.decode(this.pressbox_data[i].name)
                            // this.pressbox_data[i].chips = this.pressbox_data[i].categories !== undefined ? this.pressbox_data[i].categories.split(',') : null
                        }
                    }
                }
                else if(!response.success && response.errors) {
					for(let error in response.errors) {
						// console.log(response.errors[error])
					}
                    // Estatus incorrecto en la respuesta
                    this.$store.commit('setAlert', {
                        open: true,
                        message: 'Error getting the answer',
                        variant: 'danger'
                    })
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
		},
		async mounted () {


            this.presbox()
			// const response = await this.$sendRequest('pressbox/list_pressbox', 'GET')

            // console.log(response)

			// if(response.success && response.data) {
			// 	this.pressbox_data = response.data.pressbox
			// }

			// if(!response.success && response.errors) {
			// 	for(let error in response.errors) {
			// 		console.log(error)
			// 	}
			// }
		}
	}
</script>

<style lang="scss">
	@import '~/assets/scss/colors.scss';

	#press_box {
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
				height: 600px;
			}
		}


		.image_preview_container {
			mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 80%, transparent 100%);
			//background: linear-gradient(to bottom, rgba(0,0,0,1) 0%,rgba(0,0,0,0) 100%);
		}
		.image_preview {
			background-image: url('~/assets/images/dimensions/1920x1080.png');
		}
		.gradient__image {
			background-image: linear-gradient(to bottom, rgba(255,0,0,0) 65%, $primary 100%) !important;
		}
		a {
			color: white;
		}
		.active {
			color: #FF443F;
		}

		// Paginator
		.page-link {
			background: none;
			border: 0;
		}
		.indicator {
			color: #FF443F !important;
		}
		.selected {
			background:#FF443F !important;
			border-radius: 20px;
		}


		// Modal
		.item-sel {
			border-radius: 8px;
			padding: 8px 0px;
			margin: 4px 2px;
			text-align: center;

			&:hover {
				background: #FF443Fbb;

				span {
					color: white;
				}
			}

			&:first-child {
				margin-left: 4px;
			}
			&:last-child {
				margin-right: 4px;
			}
		}
		.card-img-top {
			border-top-left-radius: 8px;
			border-top-right-radius: 8px;
		}
		.card-body {
			border-bottom-left-radius: 8px;
			border-bottom-right-radius: 8px;
		}
		.chk-previus {
		    background-color: rgba(255, 255, 255, .8);
		}

	}
</style>
