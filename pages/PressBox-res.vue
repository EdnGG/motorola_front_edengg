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
								<b-breadcrumb-item href="#home"> {{ $t('navbar.home') }} </b-breadcrumb-item>
								<b-breadcrumb-item href="#news" class="montserrat-bold" active>
									{{ $t('navbar.press_box') }}
								</b-breadcrumb-item>
							</b-breadcrumb>
						</div>
						<div class="col-12 my-4">
							<span class="mo--title-sm text-white">
								{{ $t('press_box') }}
							</span>
						</div>

						<!-- Content -->

						<div class="col-12 col-md-12 col-lg-6 px-1 px-sm-0"
                            v-for="(item, index) in pressbox_data" :key="index"
							style="margin-top: 2rem !important; margin-bottom: 2rem !important;">

							<div class="row p-0">

								<div class="col-12">
									<div class="float-custom-left mr-3 mr-lg-3 mr-xl-3 d-flex justify-content-xs-center">
										<img :src="item.image"  style="width: 333px;object-fit: cover; aspect-ratio: 4/3;height:" class="img-fluid rounded">
									</div>

									<div class="row d-flex align-items h-custom-100">
										<div class="col-12 px-0 pb-1 pt-xs-3 pt-sm-0 d-flex justify-content-xs-center text-custom-center">
											<span class="montserrat-semibold mo--description text-danger">
												{{ item.pressbox }}
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
											<section @click="openModal('download_modal', item.pressbox, item.id)" class="align-middle cursor-pointer">
												<div class="h-100 float-left mr-2">
													<div style="max-width: 32px;">
														<img :src="icon_download" class="img-fluid invert-color">
													</div>
												</div>

												<span class="mo--description-sm montserrat-semibold text-white"
													style="vertical-align: sub;">
													{{ $t('download') }}
												</span>
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>


						<!-- <div class="col-12 col-md-6 my-4 p-0" v-for="item, index of data" :key="index">

							<div class="float-left">
								<img :src="item.image" class="img-fluid rounded-12">
							</div>

							<div class="row d-flex align-items h-100">
								<div class="col-12 mt-1">
									<div>
										<span class="mo--description montserrat-bold text-danger">
											{{ item.title }}
										</span>
									</div>

									<div>
										<span class="mo--description-sm text-white">
											{{ item.date }}
										</span>
									</div>

									<div class="row mt-2">
										<div class="mo--badge mr-1 mb-1"
											v-for="(chip, index_chip) in item.chips" :key="index_chip">
											<span class="montserrat-semibold mo--description-sm text-white text-14">
												{{ chip }}
											</span>
										</div>
									</div>
								</div>

								<div class="col-12 w-100 mt-auto">
									<div class="h-100">
										<div class="float-left mr-1" style="max-width: 32px;">
											<img :src="icon_download" class="img-fluid invert-color">
										</div>
									</div>

									<div class="h-100">
										<span class="mo--description-sm text-white" style="vertical-align: sub;">
											Download
										</span>
									</div>
								</div>
							</div>
						</div> -->

					</div>
				</div>
			</div>
		</section>

		<section class="row bg-primary pt-5">
			<div class="col-12 px-0" v-if="false">
				<div class="container px-0 border">
					<div class="row">
						<div class="col-12 mb-5">
							<span class="mo--title-sm text-white">
								A SHORT TO THE MULTIMEDIA CONTENT YOU WANT
							</span>
						</div>

						<div class="col-12 col-sm-6 col-md-3 my-4" v-for="index, item of data_download" :key="index">
							<div class="bg-light rounded-12 p-3">
								<div class="mb-2">
									<img :src="img_427" class="img-fluid rounded-12">
								</div>

								<div class="d-flex justify-content-between align-items-start mb-3">
									<div style="height: 62px;">
										<span v-html="item.title" class="mo--description montserrat-bold"></span>
									</div>

									<div style="max-width: 32px;">
										<img :src="icon_image" class="img-fluid">
									</div>
								</div>


								<div class="d-flex justify-content-center align-items-center">
									<button class="btn btn-info">
										<div class="float-left mr-1" style="max-width: 32px;">
											<img :src="icon_download" class="img-fluid">
										</div>
										<span class="mo--description-sm text-" style="vertical-align: sub;">
											Download
										</span>
									</button>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="col-12 px-0">
				<div class="pt-5">
					<mo-paginator
						:total_pages="7"
						:page_selected="4"
						color_indicator="danger"
						:color_selected="'danger'">
					</mo-paginator>
				</div>
			</div> -->
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


		<!-- Region Modal -->
		<mo-modal :showModal="download_modal"
			@onClose="handleClose('download_modal')"
			maxWidth="1200">

			<div class="container-fluid scroll-modal rounded-12 p-0 px-0 px-xl-5"
				 style="height: 100%; max-height: 750px; overflow: auto;">

				<div class="row py-5 p-3 p-md-4 p-lg-5" style="height: 100%">
					<div class="col-12 p-0 px-lg-2 pb-4">
						<span class="mo--description-sm montserrat-bold">
							PRESS BOX DOWNLOADER
						</span>
					</div>

					<div class="col-12 text-center p-0 pb-4">
						<span class="mo--description montserrat-bold">
							{{ download_modal_title }}
						</span>
					</div>

					<div class="col-12 p-0 px-lg-2" v-if="true">
						<div class="bg-white rounded-8">
							<div class="row d-flex justify-content-center">

								<div @click="setResource('gallery')" style="cursor: pointer;"
									:class="`col-5 col-sm item-sel all_transitions flex-center
											${(item_selected == 'gallery') ? 'bg-danger' : ''}`">

									<span class="mo--description text-14 montserrat-bold"
										:class="`${(item_selected == 'gallery') ? 'text-white' : ''}`">
										Lifestyle Images
									</span>
								</div>
								<div @click="setResource('renders')" style="cursor: pointer;"
									:class="`col-5 col-sm item-sel all_transitions flex-center
											${(item_selected == 'renders') ? 'bg-danger' : ''}`">

									<span class="mo--description text-14 montserrat-bold"
										:class="`${(item_selected == 'renders') ? 'text-white' : ''}`">
										Product images
									</span>
								</div>
								<div @click="setResource('tvc')" style="cursor: pointer;"
									:class="`col-5 col-sm item-sel all_transitions flex-center
											${(item_selected == 'tvc') ? 'bg-danger' : ''}`">

									<span class="mo--description text-14 montserrat-bold"
										:class="`${(item_selected == 'tvc') ? 'text-white' : ''}`">
										Videos
									</span>
								</div>
								<div @click="setResource('gif')" style="cursor: pointer;"
									:class="`col-5 col-sm item-sel all_transitions flex-center
											${(item_selected == 'gif') ? 'bg-danger' : ''}`">

									<span class="mo--description text-14 montserrat-bold"
										:class="`${(item_selected == 'gif') ? 'text-white' : ''}`">
										Documents
									</span>
								</div>
								<div @click="setResource('videos')" style="cursor: pointer;"
									:class="`col-5 col-sm item-sel all_transitions flex-center
											${(item_selected == 'videos') ? 'bg-danger' : ''}`">

									<span class="mo--description text-14 montserrat-bold"
										:class="`${(item_selected == 'videos') ? 'text-white' : ''}`">
										Social media images
									</span>
								</div>

							</div>

						</div>
					</div>

					<div class="col-12 p-0 px-4 py-4">
						<div class="cbox_container pt-1 py-2">
							<label @change="selectAllCheck()" class="checkbox text-primary px-2">
								<input type="checkbox" v-model="select_all" :checked="select_all">
								<span class="checkmark checkmark-danger checkmark-fill-danger"></span>

								<span class="checkbox__label">Select all</span>
							</label>
						</div>
					</div>

					<div class="col-12 col-sm-6 col-md-4 col-lg-3 my-1 px-2"
						 v-for="(resource, index_resource) in pressbox_data_download_section" :key="index_resource">

						<b-card :img-src="resource.media" img-alt="Image" img-top tag="article"
							class="mb-2 border-0" style="width: 230px; object-fit: cover; aspect-ratio: 4/3;">

							<div class="cbox_container position-absolute"
								 style="top: 5px; right: 30px; background-color: #FFFFFFbb !important;">
								<label class="checkbox position-initial">
									<input  :id="`chk-rs-${index_resource}`"
											v-model="resource.selected"
											:checked="resource.selected"
											@click="$forceUpdate()"
											@change="changeItemsSelected(resource)"
											type="checkbox"
											:class="(resource.selected) ? 'selected' : ''">

									<span :id="`sp-chk-rs-${index_resource}`"
										@click="resource.selected = !resource.selected"
										class="checkmark checkmark-danger checkmark-fill-danger"
										:class="(resource.selected) ? '' : 'chk-previus'">
									</span>
								</label>
							</div>


							<div class="row">
								<div class="col-9 col-lg-12 col-xl-9 text-crop p-0">
									<span v-html="resource.label"
										  class="mo--description-sm text-primary montserrat-bold mb-5">
									</span>
								</div>

								<div class="col-3 col-lg-12 col-xl-3 text-crop-secondary text-right p-0">
									<span v-html="resource.size"
										  class="mo--description-sm text-gray text-12 mb-5">
									</span>
								</div>
							</div>

							<div>
								<span v-html="resource.creation"
									  class="mo--description-sm text-gray text-12 mb-5">
								</span>
							</div>

						</b-card>
					</div>

					<div class="col-12 text-right p-0 px-2 pb-5 pt-4">
						<button @click="handleClose('download_modal')"
							class="btn btn-white-mo mr-0 mr-sm-2 mb-2"
							style="min-width: 138px;">
								Cancel
						</button>

						<button class="btn btn-info mb-2"
								style="min-width: 138px;"
                                @click="downloadResource()">
							Download
						</button>
					</div>

				</div>
			</div>
		</mo-modal>

	</div>
</template>

<script>

    import _Store from '@/store'
	// IMAGES
	import img_1920 from '@/assets/images/pressBox/image_main.jpg'

	import img_col1 from '@/assets/images/pressBox/col1.png'
	import img_col2 from '@/assets/images/pressBox/col2.png'
	import img_col3 from '@/assets/images/pressBox/col3.png'
	import img_col4 from '@/assets/images/pressBox/col4.png'

	import img_240 from '@/assets/images/dimensions/240x240.png'
	import img_427 from '@/assets/images/dimensions/427x640.png'
	import icon_download from '@/assets/icons/download-regular-24.png'
	import icon_image from '@/assets/icons/image-alt-regular-24.png'


	// jQuery
	import $ from 'jquery'

	//Component
	import Paginator from "@/components/Paginator.vue";
	import Modal from "@/components/Modal.vue";

	export default {
		name: 'home',
        metaInfo() {
            return {
                htmlAttrs: {
                    lang: 'en',
                    addSsrAttribute: true
                },
                title: 'Motorola News',
                titleTemplate: '%s'
            }
        },
		components: {
			'mo-paginator': Paginator,
			'mo-modal': Modal
		},
		data() {
			return {
				img_1920,
				img_240,
				img_427,
				icon_download,
				icon_image,

				download_modal: false,
                download_modal_title: null,
                download_modal_id: null,
				item_selected: 'gallery',
				select_all: false,

                pressbox_data: [],
                pressbox_data_download: [],
                pressbox_data_download_section: [],
                pressbox_resource_download: [],

				downloadable_resources: [
					{ image: img_1920, title: "Image0101010101.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false },
					{ image: img_1920, title: "Image.jpg", temp: 'Last accessed 3 hours ago', size: '12.6mb', selected:false }
				],

				data: [
					{ key: "0", image: img_col1, title: 'motorola edge 30 pro is here.', date: 'Published March 03, 2022', chips : ['Innovation', 'Product', 'Technology'] },
					{ key: "0", image: img_col2, title: 'motorola edge 20 lite is in stores now.', date: 'Published March 03, 2022',  chips : ['Innovation', 'Innovation', 'Innovation']},
					{ key: "0", image: img_col3, title: 'motorola edge 20 pro is now available.', date: 'Published March 03, 2022', chips : ['Innovation', 'Innovation', 'Innovation'] },
					{ key: "0", image: img_col4, title: 'Motorola launches new generation of the moto g family', date: 'Published March 03, 2022', chips : ['Innovation', 'Innovation', 'Innovation']}
				],

				data_download: [
					{ key: "0", title: 'moto g100 <br>', url_image: 'Published March 31, 2022' },
					{ key: "0", title: 'Power to empower', url_image: 'Published March 31, 2022' },
					{ key: "0", title: 'moto g71 5G <br>', url_image: 'Published March 31, 2022' },
					{ key: "0", title: 'razr <br>', url_image: 'Published March 31, 2022' }
				],
                body: {
                    datatable: true,
                    page: 1,
                    rows: 4,
                    search: '',
                    order_by: 'id',
                    order_asc: true
                },
                pag: {
                    total_pages: null,
                    page_selected: 1
                }

			}
		},
		methods: {



            async presbox() {
                let response = await this.$sendRequest('pressbox/files', 'GET', null, this.body, true)

                if(response.success && response.data) {
                    // Estatus correcto en la respuesta
                    if(response.data.list != undefined) {

                        this.pag.total_pages = response.data.list.total_pages
                        this.pressbox_data = response.data.list.result

                        for(let i in this.pressbox_data) {
                            // console.log(this.pressbox_data)

                            this.pressbox_data[i].creation = this.$informativeDate(this.pressbox_data[i].creation)
                            this.pressbox_data[i].chips = this.pressbox_data[i].categories !== undefined ? this.pressbox_data[i].categories.split(',') : null
                        }
                    }
                }
                else if(!response.success && response.error) {
                    // Estatus incorrecto en la respuesta
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Error getting the answer',
                        variant: 'danger'
                    })
                }
                else {
                    // Se perdio la respuesta
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Lost connection to the api',
                        variant: 'danger'
                    })
                }
            },

            async presboxMedia(id) {
                let response = await this.$sendRequest('pressbox/files/preview', 'GET', null, { id }, true)

                if(response.success && response.data) {
                    // Estatus correcto en la respuesta
                    if(response.data.pressbox != undefined) {
                        this.pressbox_data_download = response.data.pressbox
                        for(let i in this.pressbox_data_download) {
                            for(let j in this.pressbox_data_download[i]) {
                                const source = this.pressbox_data_download[i][j]
                                this.pressbox_data_download[i][j].creation = this.$informativeDate(this.pressbox_data_download[i][j].creation)
                                this.pressbox_data_download[i][j].selected = false
                            }
                            //
                        }
                        this.setResource('gallery')
                    }
                }
                else if(!response.success && response.error) {
                    // Estatus incorrecto en la respuesta
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Error getting the answer',
                        variant: 'danger'
                    })
                }
                else {
                    // Se perdio la respuesta
                    _Store.commit('setAlert', {
                        open: true,
                        message: 'Lost connection to the api',
                        variant: 'danger'
                    })
                }
            },

            async downloadResource() {


                let body = {}
                if(this.select_all) {
                    body.files = 'all'
                }
                else {
                    body.files = this.pressbox_resource_download
                }

                console.log(body)
                console.log(this.download_modal_id)

                let response = await this.$sendRequest(`pressbox/files/download?id=${this.download_modal_id}`, 'POST', null, body, false)

                if(response.success && response.data) {
                    // Estatus correcto en la respuesta
                    if(response.data.pressbox != undefined) {

                        window.open(response.data.pressbox, '_blank')

                    }
                }

                this.select_all = false
                this.handleClose('download_modal')

                this.pressbox_resource_download = []

            },


            setResource(section) {
                console.log(section)
                this.item_selected = section
                this.pressbox_data_download_section = []

                console.log(this.pressbox_data_download)

                for(let i in this.pressbox_data_download) {
                    const key = this.pressbox_data_download[i]

                    console.log(key)

                    if(i == section) {
                        this.pressbox_data_download_section = key
                        break
                    }
                }

            },


            async controlPaginator(event) {
                //console.log(event)

                this.body.page = event
                await this.presbox()
            },

			async openModal(name_modal, title, id) {

				console.log("openmodal",name_modal);

				this[name_modal] = true
                this.download_modal_title = title
                this.download_modal_id = id

				for(let time = 0; time < 2000; time = time + 100) {
					setTimeout(function() {
						$(window).trigger('resize')
					}, time)
				}

                await this.presboxMedia(id)
			},
			handleClose(name_modal) {
				this[name_modal] = false
                this.download_modal_title = null
                this.download_modal_id = null
                // reset element download
                this.select_all = false
                this.pressbox_resource_download = []
			},

			quitPrevious(id, pressbox_id) {

				let e = document.getElementById(id)

				if(e.classList.contains("chk-previus")) {
					e.classList.remove("chk-previus")
                    // console.log('remove')
                    this.pressbox_resource_download.push(pressbox_id)
                    //
				}
				else {
					e.classList.add("chk-previus")
                    // console.log('added')
                    const index = this.pressbox_resource_download.indexOf(pressbox_id)

                    // console.log('index', index)

                    if (index > -1) {
                        // console.log('here')
                        this.pressbox_resource_download.splice(index, 1)
                    }
                    else {
                        this.pressbox_resource_download.push(pressbox_id)
                    }

				}

			},

			changeItemsSelected(resourse) {
				// console.log(resourse)
				this.$forceUpdate()
				if(resourse.selected) {
					this.pressbox_resource_download.push(resourse.id)
				}
				else {
					const index = this.pressbox_resource_download.indexOf(resourse.id)
					if(index > -1) {
                        this.pressbox_resource_download.splice(index, 1)
                    }
                    else {
                        this.pressbox_resource_download.push(pressbox_id)
                    }
				}
				this.$forceUpdate()
			},

			// selectAllCheckSAVED() {
			// 	for(let c in this.pressbox_data_download[this.item_selected]) {
			// 		this.pressbox_data_download[this.item_selected][c].selected = (this.select_all) ? true : false
			// 		this.quitPrevious(`sp-chk-rs-${c}`, this.pressbox_data_download[this.item_selected][c].id)
			// 	}

			// 	this.$forceUpdate();
			// }
			selectAllCheck() {
				this.pressbox_resource_download = []

				for(let i in this.pressbox_data_download) {
					for(let j in this.pressbox_data_download[i]) {
						console.log(this.pressbox_data_download[i][j], 'item')
						if(this.select_all) {
							this.pressbox_data_download[i][j].selected = true
							this.pressbox_resource_download.push(this.pressbox_data_download[i][j].id)
						}
						else {
							this.pressbox_data_download[i][j].selected = false
						}
					}
				}

				this.$forceUpdate();
			}
            // downloadResource() {
            //     console.log(this.pressbox_resource_download)

            //     this.handleClose('download_modal')
            // }
		},
        async created() {
            await this.presbox()
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
