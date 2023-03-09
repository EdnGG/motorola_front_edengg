<template>
	<div id="Pressbox" class="bg-primary p-0 container-fluid">

		<section id="section_main" class="bg-primary bg-custom height_image_main p-0 w-100 mb-5"
			:style="`background-image: url(${img_1920})`">
			<div class="container-fluid position-absolute gradient__image height_image_main w-100">
			</div>
		</section>

		<span class="text-white d-none">{{selected_items}}</span>
		<span class="text-danger d-none">{{archives}}</span>

		<div class="row">

			<div class="col-12">
				<div class="row">
					<div class="col-12  py-0">

						<b-breadcrumb class="bg-primary ml-3 pl-5">
							<b-breadcrumb-item>
								<span class="text-white montserrat-regular" @click="redirect('home')">
									{{ $t('navbar.home') }}
								</span>
							</b-breadcrumb-item>
							<b-breadcrumb-item>
								<span class="text-white montserrat-regular" @click="redirect('pressbox')">
									{{ $t('navbar.press_box') }}
								</span>
							</b-breadcrumb-item>
							<b-breadcrumb-item  @click.stop="restoreIndex(index)"
								v-for="(item, index) in items"
								:key="index">
									<span class="text-uppercase"
										:class="[`${item.active ? 'text-danger' : 'text-white'} ${item.active ? 'montserrat-bold' : 'montserrat-regular'}`]">
										{{ item.text }}
									</span>
								</b-breadcrumb-item>
						</b-breadcrumb>

					</div>

				</div>
			</div>


			<div class="col-12 mb-5 ml-4 pl-5 py-0">
				<span class="mo--title-sm text-white">
					{{ $t('press_box') }}
				</span>
			</div>
		</div>

		<div class="row py-4" style="background-color: #010d1b; border-radius: 5px">

			<div class="col-12 col-xl-3 py-5" v-if="false">
				<div class="row">

					<div class="col-12 text-white d-flex montserrat-bold">
						<span class="mr-2">
							Select Category:
						</span>
						<mo-select @change="filterPressbox($event)" class="montserrat-bold text-white"
							:options="category_options"
							v-model="selected_category"
							full>
						</mo-select>
					</div>

					<div class="col-6 col-xl-12" v-for="(pressbox, pressbox_index) in press_boxes" :key="pressbox_index">
						<button @click="setActive(pressbox)"
							:key="pressbox_index"
							class="custom_button my-2"
							style="border-radius: 10px;"
							:class="[`${selected_btn === pressbox_index  ? 'active' : ''}`]">
							{{ pressbox.name_pressbox }}
						</button>
					</div>
				</div>
			</div>


			<div class="col-12">
				<div class="row">

					<!-- <div class="col-12">
						<div class="row">
							<div class="col-10 text-center">
								<input class="form-control w-100"
									style="border-radius: 10px; height: 40px;"
									v-model="search_query"
									placeholder="Search"
									type="text"/>
							</div>

							<div class="col-2" @click.stop="searchItems">
								<b-icon
									icon="search"
									scale="4"
									variant="light"
									class="pt-2">
								</b-icon>
							</div>
						</div>
					</div> -->

					<div v-if="container == 2"
						class="col-12 py-4 px-4 text-white montserrat-bold d-flex justify-content-between mb-3"
						style="max-width: 850px">
						<label class="ml-3">Select all:
							<input v-model="selected_all"
								@change="selectAll"
								type="checkbox"/>

						</label>
						<button @click.stop="downloadItems"
							class="btn btn-primary d-flex hover"
							type="button "
							:disabled="download_in_process">
							<b-icon
								icon="download"
								scale="1"
								variant="light"
								class="w-100 mr-3" >
							</b-icon>
							{{ (!download_in_process) ? 'Download' : 'Processing...' }}
						</button>
					</div>

					<div class="col-12 d-flex flex-wrap mt-2" v-if="container == 1 && current_items.length > 0">
						<div @click.stop="selectFolder(item)"
							v-for="item, index in current_items"
							:key="index"
							class="row bg-primary m-2  align-items-center justify-content-center custom_card p-3"
							style="min-width: 280px; min-height: 280px; border-radius: 10px;">
							<b-icon v-if="!item.picture"
								icon="folder-fill"
								scale="8"
								variant="light"
								class="col-12 w-100 mt-4"
								>
							</b-icon>
							<p class="col-12 m-0 montserrat-bold text-center">
								{{ item.name }}
							</p>
						</div>
					</div>

					<div class="col-12 text-white montserrat-bold text-center" v-if="!no_media && container == 2">
						<p>
							No media found
						</p>
					</div>


					<div class="col-12 d-flex flex-wrap position-relative p-0 justify-content-center align-items-center" v-if="container == 2 && archives.length > 0">
						<div
							v-for="archive, index in archives" :key="index"
							class="row m-2 bg-primary justify-content-center align-items-center p-0 position-relative"
							style="width: 280px;  min-height: 280px; border-radius: 10px;">

							<b-checkbox @change="selectedItem(archive), archive.value = !archive.value"
								class="position-absolute"
								style="top: 0px; right: 0px;"
								:checked="(selected_all) ? true : archive.value">
							</b-checkbox>

							<div class="col-12  p-0 m-0">

								<img @click.stop="preview(archive)"
									v-if="archive.application.toLowerCase() =='jpg' || archive.application.toLowerCase() == 'png' || archive.application.toLowerCase() == 'jpeg' || archive.application.toLowerCase() == 'gif' || archive.application.toLowerCase() == 'svg' || archive.application.toLowerCase() == 'webp'"
									:src=" archive.thumbnail ?? archive.resource"
									class="w-100  p-0"
									style="border-top-left-radius: 10px; border-top-right-radius: 10px; top: -24px;" />

								<b-icon @click.stop="preview(archive)"
									v-if="archive.application == 'mp4' || archive.application == 'avi' || archive.application == 'mkv' || archive.application == 'ogm'"
									icon="file-play-fill"
									style="width: 160px; height: 160px; top: calc(50% - 80px); left: calc(50% - 80px)"
									class="position-relative"
									variant="light">
								</b-icon>

								<b-icon
								v-if="(archive.application.toLowerCase() !== 'mp4' && archive.application.toLowerCase() !== 'avi' && archive.application.toLowerCase() !== 'mkv') && (archive.application.toLowerCase() !=='jpg' && archive.application.toLowerCase() !== 'png' && archive.application.toLowerCase() !== 'jpeg' && archive.application.toLowerCase() !== 'gif' && archive.application.toLowerCase() !== 'svg' && archive.application.toLowerCase() !== 'webp' && archive.application.toLowerCase() !== 'ogm')"
									icon="file-earmark-text-fill"
									style="width: 120px; height: 120px; top: calc(50% - 60px); left: calc(50% - 60px)"
									class="position-relative"
									variant="light">

								</b-icon>

							</div>


							<span class="col-12 text-center text-white montserrat-bold d-inline-block w-100 mb-4">
								{{ formatBytes(archive.size) }}
							</span>

						</div>
					</div>



				</div>
			</div>
		</div>

		<mo-modal class="text-white" :showModal="open_modal" @onClose="open_modal = false" :maxWidth="'500'" >

			<div class="row">
				<div class="col p-0 d-flex justify-content-center align-items-center">
					<img v-if="media_source.includes('.jpg') || media_source.includes('.png') || media_source.includes('.jpeg') || media_source.includes('.gif') || media_source.includes('.svg') || media_source.includes('.webp')"
						:src="media_source"
						class="img-fluid" />
				</div>
			</div>


			<video v-if="media_source.includes('.mp4') || media_source.includes('.ogg') || media_source.includes('.ogm')" style="width: 100%; height: 100%"
				@mouseleave="closeVideo"
				ref="video"
				controls>
				<source :src="media_source" />
			</video>
		</mo-modal>


	</div>
</template>

<script>
	import ico_search from '@/assets/icons/search-regular-24.png'
	import img_1920 from '@/assets/images/pressBox/image_main.jpg'
	import utf8 from 'utf8'

	//components
	import Modal from "@/components/Modal.vue"
	import Select from "@/components/Select.vue"

	export default {
		components: {
			'mo-modal': Modal,
			'mo-select': Select
		},
		data() {
			return {
				ico_search,
				img_1920,
				container: 1,
				open_modal: false,
				media_source: '',
				selected_btn: null,
				no_media: true,
				selected_items: [],
				category_options: [],
				selected_category: null,
				all_selected: false,
				download_pressbox_id: null,
				all_pressbox: [],
				all_folders:[],
				all_archives: [],
				search_query: null,
				press_boxes: [],
				current_items: [],
				items: [],
				archives: [],
				selected_all: false,
				download_in_process: false
			}
		},
		methods:{
			async setActive(pressbox) {

                //console.log(pressbox)

				//this.current_items = []
				//this.selected_btn = this.press_boxes.indexOf(pressbox)
				this.items = [{ text: pressbox.name, active: true}]
				this.container = 1

				let query = {
					pressbox_id: pressbox.id
				}

				const response = await this.$sendRequest('pressbox/list_folders', 'GET', null, query, true, {
                    location: this.$storage.getUniversal('location')
                })

				if(response.success && response.data) {
					this.current_items = response.data.data

					if(this.current_items.length > 0) {
						for(let item of this.current_items) {
							item.name = utf8.decode(item.name)
						}
					}

					this.all_folders = response.data.data
				}


			},

            redirect(route_name) {
                window.scrollTo(0, 0)

                this.$router.push({
                    name: route_name,
                })
            },

			async selectFolder(item) {
				//console.log('FOLDER:',item)
				this.no_media = true
				this.archives = []
				for(let item in this.items) {
					this.items[item].active = false
				}
				this.items.push({ text: item.name, active: true})
				this.container = 2

				const query = {
					pressbox_folder_id: item.id
				}

				const response = await this.$sendRequest('pressbox/list_media','GET' ,null, query, true, {
                    location: this.$storage.getUniversal('location')
                })
				//console.log('MEDIA:', response)
				if(response.success && response.data) {
					const id_selecteds = this.selected_items.map(item => item.media_id)

					for(let i in response.data.data) {
						this.archives.push(response.data.data[i])
						this.all_archives.push(response.data.data[i])
						if(id_selecteds.includes(response.data.data[i].media_id)) {
							this.archives[i].value = true
							this.all_archives[i].value = true
						}
					}
				}

				if(!response.success && response.errors) {
					// for(let error in response.errors) {
					// 	console.log(response.errors[error])
					// }
					this.no_media = false
				}

			},
			restoreIndex(index) {
				this.items = this.items.filter( (item, item_index) => item_index <= index  )
				this.items[this.items.length - 1].active = true
				this.container = 1
			},
			preview(archive){
				this.open_modal = true
				this.media_source = archive.resource
			},
			closeVideo() {
				this.$refs.video.pause()
			},
			selectedItem(data) {
				if(this.selected_items.indexOf(data) !== -1) {
					let object_index = this.selected_items.indexOf(data)
					this.selected_items = this.selected_items.filter((item, index) => index !== object_index)
				}
				else {
					this.selected_items.push(data)
				}
			},
			selectAll() {
				if(!this.selected_all) {
					this.selected_items = []

					for(let archive in this.archives) {
						this.archives[archive].value = false
					}
				}

			},
			searchItems() {

				if(!this.search_query && this.container == 1) this.current_items = this.all_folders

				if(!this.search_query && this.container == 2) this.archives = this.all_archives

				if(this.container == 1) {
					this.current_items = this.current_items.filter( item => item.name.toLowerCase().includes(this.search_query))
					return
				}

				if(this.container == 2) {

					let colection
					colection = this.all_archives.filter( item => item.name.includes(this.search_query))

					if(colection.length === 0) {
						colection = this.all_archives.filter( item => item.category_id.includes(this.search_query))
					}

					if(colection.length === 0) {
						colection = this.all_archives.filter( item => item.application.includes(this.search_query))
					}
					else {
						colection = this.all_archives
					}

					this.archives = colection
				}

			},
			async downloadItems() {
					this.download_in_process = true
					const archive_ids = this.selected_items.map(item => item.media_id)
					let body = {
						"pressbox_id": this.selected_items[0].pressbox_id, //pressbox_id
						"files": (this.selected_all) ? 'all' : archive_ids //media_id
					}

					const response = await this.$sendRequest('pressbox/download_media', 'POST', null, body, false, {
                        location: this.$storage.getUniversal('location')
                    })
					this.download_in_process = false
					window.open(response.data.pressbox,'_blank')
					this.selected_items = []

					for(let i in this.archives) {
						this.archives[i].value = false
						this.$forceUpdate()
					}
					this.all_selected = false
					this.$forceUpdate()
			},
			filterPressbox(event){
				this.press_boxes = this.all_pressbox.filter( pressbox => pressbox.category_id == event)
				this.selected_category = event
			},
			formatBytes(bytes, decimals = 2) {
			    if (!+bytes) return '0 Bytes'

			    const k = 1024
			    const dm = decimals < 0 ? 0 : decimals
			    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

			    const i = Math.floor(Math.log(bytes) / Math.log(k))

			    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
			},

		},
		computed: {
			pressbox() {
				return this.$store.getters['getPressbox']
			},
			custom_headers() {
				return this.$store.getters.getHeaders
			}
		},
		async mounted() {
			if(!this.pressbox) this.$router.push({name: 'pressbox'})

			try {
				await this.setActive(this.pressbox)
			}
			catch(e) {
				// console.log(e)
			}

		}

	}


</script>


<style lang="scss" >
	@import '~/assets/scss/colors.scss';
	#Pressbox {
		.custom_button {
			font-family: 'Montserrat-Regular';
			width: 100%;
			border: none;
			border-bottom:  2px solid $danger;
			height: 60px;
			background: $primary;
			color: $main_white;
			transition: all 0.4s;
			&:hover {
				font-family: 'Montserrat-Bold';
				outline: 2px solid $danger;
			}

			&.active {
				font-family: 'Montserrat-Bold';
				background-color: $danger;
			}


		}

		.hover{
			transition: all 0.5s;
			&:hover {
				background-color: $danger;
			}
		}

		#section_main {
			//background-image: url('../assets/images/pressBox/image_main.jpg');
			min-height: 100px;
		}

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

		.gradient__image {
			background-image: linear-gradient(to bottom, rgba(255,0,0,0) 65%, $primary 100%) !important;
		}

		.custom_card{
			transition: all 0.4s;
			color: $main_white;
			&:hover {
				outline: 2px solid $danger;
				cursor: pointer;
				color: $danger;
			}
		}

		.enter {
			animation-name: enter;
			animation-duration: 1.5s;
			animation-fill-mode: forwards;
		}

	}

	@keyframes enter {
		from{
			opacity: 0;
			transform: translateY(100px) rotateY(360deg);
		}

		to {
			opacity: 1;
			transform: translateY(0px) rotateY(0deg);
		}
	}
</style>
