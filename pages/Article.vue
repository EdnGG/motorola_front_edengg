<template>
	<div id="article" class="container-fluid home">
		<section id="section_main"
			class="bg-primary d-flex bg-custom p-0"
			:style="{'background-image': `url(https://api.motorolanews.com/cache/image?url=${article.featured_image})`,height: `${height_img_main}px`,'min-height': `100px`,}">
			
			<div id="s_target_main" class="container-fluid position-absolute bg-20-primary w-100"
				:style="{ height: `598px` }">
				
				<div class="row h-100 py-5">
					<div class="col-12 h-100 p-0">
						<div class="container-fluid h-100 px-5">
							<div class="row h-100">
								<div class="col-12 h-100 d-flex justify-content-start align-items-end px-5">
									<span class="mo--title montserrat-semibold text-white">
										{{ article.title }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="row pt-5" style="background-color: #f5f6f8">
			<div class="col-12 px-0">
				<div class="container-fluid px-0">
					<div class="row justify-content-center">
						<!-- Title -->
						<div class="col-12 col-md-10 pl-3">
							<b-breadcrumb class="p-0" 
							style="background-color: #f5f6f8">
								<!-- <b-breadcrumb-item
									href="#home"
									class="text-black"
								>
									{{ $t("navbar.news") }}
								</b-breadcrumb-item> -->
								<b-breadcrumb-item href="#news"
									class="montserrat-bold text-danger"
									active>
									{{ $t("navbar.article") }}
								</b-breadcrumb-item>
							</b-breadcrumb>
						</div>

						<!-- Content -->
						<div class="col-12 col-md-7 py-5 pr-0 pr-md-5">
							<div class="row pb-5">
								<div class="col-12 pb-4 px-0 mo--description-sm montserrat-semibold">	
									{{ $informativeDate(article.creation, language) }}
									<!-- {{language}} -->
								</div>
								<div class="col-12 px-0">
									<div class="d-inline-block mr-3">
										<span class="mo--description montserrat-bold">
											{{ $t("share") }}
										</span>
									</div>
									<br class="d-block d-sm-none" />
									<br class="d-block d-sm-none" />

									<div class="d-inline-block mx-3"
										:style="`max-width: ${item_social.maxw}px;`"
										v-for="(item_social, index_social) in social_media"
										:key="index_social">
										<!-- <template v-if="item_social.id === 'copy'">
                                        </template>
                                        <template>
                                            <ShareNetwork
                                                network="facebook"
                                                :url="pathPost"
                                                title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
                                            >
                                                <img :src="item_social.image" class="img-fluid" style="cursor: pointer;" :alter="item_social.id" :id="item_social.id" />
                                            </ShareNetwork>
                                        </template> -->

										<img @click="shareMedia(item_social.id)"
											:src="item_social.image"
											class="img-fluid"
											style="cursor: pointer"
											:alter="item_social.id"
											:id="item_social.id" />
									</div>
								</div>
							</div>
							<div v-html="article.body"
								class="mo--description-sm"
								id="article">
							</div>

							<!-- <div class="pt-5">
                                <div class="row d-flex justify-content-start" v-if="article.tags !== undefined && article.tags.length > 0">
                                    <div class="mo--badge" v-for="(badge, index_badge) of (article.tags)" :key="index_badge">
                                        <span class="montserrat-bold mo--description-sm text-white text-14">
                                            {{ badge | capitalize }}
                                        </span>
                                    </div>
                                </div>
                            </div> -->

							<div class="py-5">
								<span class="mo--description text-danger montserrat-semibold">
									{{ $t("written_by_motorola") }}
								</span>

								<!-- <div class="float-left mr-3" style="max-width: 100px;">
                                    <img :src="img_240" class="img-fluid rounded-circle">
                                </div>
                                <div class="d-flex justify-content-start align-items-center py-2">
                                    <div class="py-1">
                                        <span class="mo--description-sm">
                                            <span class="montserrat-bold">{{ data_profile.name }}</span> <br>
                                            <span class="text-muted">{{ data_profile.date }}</span> <br>
                                            <span class="montserrat-semibold">{{ data_profile.email }}</span>
                                        </span>
                                    </div>
                                </div> -->
							</div>

							<div class="pb-4">
								<div class="d-inline-block mr-3">
									<span class="mo--description montserrat-bold">
										{{ $t("share") }}
									</span>
								</div>
								<br class="d-block d-sm-none" />
								<br class="d-block d-sm-none" />

								<div :style="`max-width: ${item_social.maxw}px;`"
									class="d-inline-block mx-3"
									v-for="(item_social, index_social) in social_media"
									:key="index_social">

									<img @click="shareMedia(item_social.id)"
										:src="item_social.image"
										class="img-fluid"
										style="cursor: pointer"
										:alter="item_social.id"
										:id="`${item_social.id}_f`"
									/>
								</div>
							</div>

							<hr class="bg-danger"
								style="border: 1px solid #ff443f"/>

							<div class="py-4">
								<!-- <div class="d-inline-block mr-3" @click="coypArticle('article')" style="cursor: pointer;">
                                    <span class="mo--description-sm montserrat-bold" >
                                        Copy text
                                    </span>
                                    <div style="max-width: 40px;" class="d-inline-block mx-2">
                                        <img :src="img_copy_text" class="img-fluid">
                                    </div>
                                </div> -->
								<div @click="downloadResource"
									class="d-inline-block"
									style="cursor: pointer">

									<span class="mo--description-sm montserrat-bold">
										{{ $t("download_article") }}
									</span>
									<div style="max-width: 40px"
										class="d-inline-block mx-2" >
										<img :src="img_press_box"
											class="img-fluid" />
									</div>
								</div>
							</div>
						</div>

						<div class="col-1 col-md-3 d-none d-md-block pt-5 pb-0">
							<div class="row">
								<div class="col-12 p-0">
									<span class="mo--description-sm montserrat-bold text-danger">
										{{ $t("top_news") }}
									</span>
								</div>

								<div
									class="col-12 my-3 p-0"
									v-for="(news, index_news) in top_new"
									:key="`tn_${index_news}`"
									@click.once="redirect('article', news.uid, news.title)"
									style="cursor: pointer">

									<div style="max-width: 160px">
										<img :src="news.featured_image"
											class="img-fluid float-left rounded mr-3"
											@error="alterImage"/>
									</div>

									<div class="text">
										<span class="mo--description-sm montserrat-bold span-crop text-black text-14"
											style="cursor: pointer">
											<!-- {{ news.title | capitalize }} -->
											{{ news.title }}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="row justify-content-center pb-5">
						<div class="col-12 col-md-10 my-4">
							<span class="mo--title-sm montserrat-bold text-danger">
								{{ $t("related_news") }}
							</span>
						</div>

						<div class="col-12 col-md-10 p-0" >
							<div class="row justify-content-center" v-if="post !== null">
								<div
									style="cursor: pointer"
									v-for="(item_rn, index_rn) in post.related_news"
									:key="index_rn"
									class="col-10 col-sm-6 col-md-4 col-lg-4 my-2 d-flex">
									<template v-if="item_rn.id > 0">
										<b-card
											@click.once="redirect('article',item_rn.uid, titleEncoded(item_rn.title))"
											:img-src="item_rn.featured_image"
											img-alt="Image"
											img-top
											tag="article"
											class="mb-2 montserrat-bold text-danger"
											style="border: 0">
											<b-card-title>
												<span class="mo--description text-danger span-crop montserrat-bold"
													style="font-size: 18px">
													{{ titleEncoded(item_rn.title)}}
												</span>
												<div class="pt-1"
													style="line-height: 70% !important;">
													<span class="mo--description montserrat-bold mt-2 elipsis"
														style="font-size: 12px">
														{{ html(item_rn.body) | truncate( 90,"...") }}
													</span>
												</div>
											</b-card-title>
										</b-card>
									</template>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>


<script>
// IMAGES
import img_1920 from "@/assets/images/article/image_article.png";
import img_1920_2 from "@/assets/images/article/image_main.jpg";
import img_top_new1 from "@/assets/images/article/top_new1.png";
import img_top_new2 from "@/assets/images/article/top_new2.png";
import img_top_new3 from "@/assets/images/article/top_new3.png";
import img_fb from "@/assets/images/article/facebook.png";
import img_tw from "@/assets/images/article/twitter.png";
import img_li from "@/assets/images/article/linkedin.png";
import img_wp from "@/assets/images/article/whatsapp.png";
import img_fb_hover from "@/assets/images/article/hover/facebook.png";
import img_tw_hover from "@/assets/images/article/hover/twitter.png";
import img_li_hover from "@/assets/images/article/hover/linkedin.png";
import img_copy_hover from "@/assets/images/article/hover/copy.png";
import img_wp_hover from "@/assets/images/article/hover/whatsapp.png";
import img_cl from "@/assets/icons/link.png";
import img_news1 from "@/assets/images/article/news1.png";
import img_news2 from "@/assets/images/article/news2.png";
import img_news3 from "@/assets/images/article/news3.png";
import img_press_box from "@/assets/images/article/press_box.png";
import img_copy_text from "@/assets/images/article/copy_text.png";
import img_240 from "@/assets/images/dimensions/240x240.png";
import img_427 from "@/assets/images/dimensions/427x640.png";
import img_120 from "@/assets/images/dimensions/120x68.png";
import img_378 from "@/assets/images/dimensions/378x184.png";
import icon_download from "@/assets/icons/download-regular-24.png";
import icon_image from "@/assets/icons/image-alt-regular-24.png";
import utf8 from "utf8";
import base64 from "base-64";
import LocalStorage from "localStorage";
import CONFIG from "@/plugins/common/page.config.js";
// jQuery
import $ from "jquery";
export default {
	name: "article_view",
	// metaInfo() {
	//     return {
	//         htmlAttrs: {
	//             lang: 'en',
	//             addSsrAttribute: true
	//         },
	//         title: this.head.title,
	//         titleTemplate: this.head.titleTemplate,
	//         meta: this.head.meta
	//     }
	// },
	watch: {
		article(data) {
			const isValid = data !== undefined;
			// if(isValid) {
			//     this.setHEAD(data)
			// }
		},
	},
	data() {
		return {
			// pathPost: `https://motorolanews.com${location.pathname}`,
			head: {
				title: null,
				meta: [],
			},
			post: null,
			img_1920,
			img_1920_2,
			height_img_main: 600,
			img_240,
			img_427,
			img_120,
			icon_download,
			icon_image,
			img_press_box,
			img_copy_text,
			social_media: [
				{ image: img_fb, maxw: 40, id: "facebook" },
				{ image: img_tw, maxw: 40, id: "twitter" },
				{ image: img_li, maxw: 40, id: "linkedin" },
				{ image: img_cl, maxw: 35, id: "copy" },
				{ imgae: img_wp, maxw: 45, id: "whatsapp" },
			],
			data: [
				{
					key: "0",
					title: "motorola edge 30 pro is here.",
					date: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "motorola edge 20 lite is in stores now.",
					date: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "motorola edge 20 pro is now available.",
					date: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "Motorola launches new generation of the moto g family",
					date: "Published 03/31/2022",
				},
			],
			data_download: [
				{
					key: "0",
					title: "moto g100 <br>",
					url_image: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "Power to empower",
					url_image: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "moto g71 5G <br>",
					url_image: "Published 03/31/2022",
				},
				{
					key: "0",
					title: "razr <br>",
					url_image: "Published 03/31/2022",
				},
			],
			data_profile: {
				name: "Alejandro Ornelas",
				date: "12 October 2021",
				email: "xyz@newsroommotorola.com",
			},
			article: {
				featured_image: null,
				title: null,
				body: null,
				tags: [],
			},
			top_new: [],
			related_news: [],
		};
	},
	head({ $seo }) {
		const post = this.post;
		
		if(process.browser) {
			// console.log(post, 'post')
		}

		return $seo({
            title: post.news.title,
            description: post.news.body.replace(/<[^>]*>?/gm, "").slice(0, 90),
			image: `https://api.motorolanews.com/cache/image?url=${post.news.featured_image}`,
            canonical:  `https://motorolanews.com${this.$route.path}`,
			openGraph: {
				title: post.news.title,
				description: post.news.body.replace(/<[^>]*>?/gm, "").slice(0, 90),
				url: process.browser ? `https://motorolanews.com${location.pathname}` : null,
				type: "website",
				multi: true,
				image: {
					//url: `${post.news.featured_image}?uid=${new Date().getTime()}`,
					url: `https://api.motorolanews.com/cache/image?url=${post.news.featured_image}`,
					multi: true,
					width: "200",
					height: "150",
				},
			},
			twitter: {
				site: "@Moto",
				creator: "@Moto",
				card: "summary_large_image",
				title: post.news.title,
				description: post.news.body
					.replace(/<[^>]*>?/gm, "")
					.slice(0, 90),
			},
		});
	},
	computed: {
		custom_headers() {
			return this.$store.getters["getHeaders"];
		},
		language() {
			return this.$storage.getLocalStorage('lang')
		}
	},
	methods: {
		truncateChar(data, num = 90) {
			const reqdString = data.split("").slice(0, num).join("");
			return reqdString;
		},
		truncateWord(data, num = 10) {
			const reqdString = data.split(" ").slice(0, num).join(" ");
			return reqdString;
		},
		shareFacebook(params) {
			//   console.log(
			//     "http://facebook.com/sharer/sharer.php?u=" + encodeURIComponent(params.url)
			//   );
			// window.open(link, '', 'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
            params.url = `${params.url}`

            // console.log(params.url)

			window.open(
				"http://facebook.com/sharer/sharer.php?u=" +
					encodeURIComponent(params.url.replace(/\s/g, "")) + '&shared=facebook',
				"",
				"left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
			);
		},
		shareTwitter(params) {
			let link = `https://twitter.com/intent/tweet?url=${
				params.url.replace(/\s/g, "") + '&shared=twitter'
			}`;
			link = link.replace(/\s/g, "");
			window.open(link, "_blank");
		},
		shareLinkedIn(params) {
			let link = `https://www.linkedin.com/sharing/share-offsite/?url=${
				params.url.replace(/\s/g, "") + '&shared=linkedin'
			}`;
			link = link.replace(/\s/g, "");
			window.open(link, "_blank");
		},
		async shareMedia(id) {
			const params = {
				url: process.browser
					? `${process.env.VUE_APP_URL}${location.pathname}`
					: null,
				title: this.article.title,
			};
			if (id === "facebook") {
				this.shareFacebook(params);
			}
			if (id === "twitter") {
				this.shareTwitter(params);
			}
			if (id === "linkedin") {
				this.shareLinkedIn(params);
			}
			if (id === "whatsapp") {
				this.sharewhatsapp();
			}
			if (id === "copy") {
				// console.log(id);
				if (process.browser) {
					navigator.clipboard.writeText(location.href);
					//console.log(this.$notify);
					this.$notify({
						type: "info",
						title: "",
						text: this.$t('copied'),
						verticalAlign: "bottom",
						horizontalAlign: "right",
					});
				}
				//
				// this.showCopy()
			}
		},
		sharewhatsapp() {
			if (process.browser) {
				window.open(
					`https://api.whatsapp.com/send?text=` + `${process.env.VUE_APP_URL}${location.pathname}&shared=whatsapp`.replace(/\s/g, ""), "_blank");
				//encodeURIComponent(https://motorolanews.com${location.pathname}.replace(/\s/g, "")
			}
		},
		async initConfig(other_id = null) {
			this.$store.commit("setLoad", {
				show: true,
				title: "Loading...",
			});

			let data = {}
			// console.log('ROUTER:', this.$route.path)
			let path =  this.$route.path

			let title = path.replace('/article/', '')

			data.uid = title;
			

			// console.log('init', data)

			if (data.uid === null) {
				this.redirect("news");
				return;
			}

			data.preview = this.$route.query.preview || false;

			data = this.$aes.encrypt(JSON.stringify(data));

			let response = await this.$sendRequest(
				`pressbox/news/article?data=${base64.encode(data)}`,
				"GET",
				null,
				null,
				false,
				{
                    location: this.$storage.getUniversal('location')
                }
			);
			if (response.success && response.data != null) {
				// Estatus correcto en la respuesta
				this.article = response.data.post.news;
				this.article.title = Buffer.from(this.article.title).toString(
					"utf8"
				); //utf8.decode(this.article.title);
				this.article.body = Buffer.from(this.article.body).toString(
					"utf8"
				);
                
                // console.log('heere')
                // console.log(this.article.body)

				// utf8.decode(this.article.body)
				// this.article.tags = this.article.tags.replaceAll(', ', ' ')
				// console.log(this.article.tags);
				this.related_news = new Array();
				if (response.data.post !== null) {
					for (let i in response.data.post.related_news) {
						this.related_news.push({
							body: utf8.decode(
								response.data.post.related_news[i].body
							),
							creation: response.data.post.related_news[i].creation,
							featured_image:
								response.data.post.related_news[i].featured_image,
							id: response.data.post.related_news[i].id,
							tags: response.data.post.related_news[i].tags,
							title: utf8.decode(
								response.data.post.related_news[i].title
							),
							uid: response.data.post.related_news[i].uid
						});
					}
				}

				this.top_new = new Array();
				for (let i in response.data.post.top_news) {
					this.top_new.push({
						creation: response.data.post.top_news[i].creation,
						featured_image:
							response.data.post.top_news[i].featured_image,
						id: response.data.post.top_news[i].id,
						tags: response.data.post.top_news[i].tags,
						title: utf8.decode(
							response.data.post.top_news[i].title
						),
						uid: response.data.post.top_news[i].uid
					});
				}
				this.$store.commit("setLoad", {
					show: false
				});
			} 
			else if (!response.success && response.error) {
				this.$store.commit("setLoad", {
					show: false
				});
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
		async redirect(route_name, uid, title) {
			this.$store.commit("setLoad", {
				show: true,
				title: "Loading...",
			});

			
			let params = {
				//hash: hash_id,
				title: uid
			};

			this.$router.push({
				name: route_name,
				params: params,
                query: {
                    language: this.$storage.getUniversal('lang')
                }
			});

			setTimeout(async () => {
				await this.initConfig(uid);
				window.scrollTo(0, 0);
				this.$store.commit("setLoad", {
					show: false,
				});
			}, 200);
			// await this.initConfig()
			// await this.initConfig(id)
		},
		titleEncoded(data) {
			return utf8.decode(data);
		},
		html(body) {
			return Buffer.from(body, "base64")
            .toString("utf8").replace(/<[^>]*>?/gm, "")
                        .replace(/&ntilde;/g, 'ñ')
                        .replace(/&Ntilde;/g, 'Ñ')
                        .replace(/&amp;/g, '&')
                        .replace(/&Ntilde;/g, 'Ñ')
                        .replace(/&ntilde;/g, 'ñ')
                        .replace(/&Ntilde;/g, 'Ñ')
                        .replace(/&Agrave;/g, 'À')
                        .replace(/&Aacute;/g, 'Á')  
                        .replace(/&Acirc;/g,'Â')
                        .replace(/&Atilde;/g,'Ã')   
                        .replace(/&Auml;/g,'Ä')
                        .replace(/&Aring;/g,'Å')
                        .replace(/&AElig;/g,'Æ')
                        .replace(/&Ccedil;/g,'Ç')
                        .replace(/&Egrave;/g,'È')
                        .replace(/&Eacute;/g,'É')
                        .replace(/&Ecirc;/g, 'Ê')
                        .replace(/&Euml;/g,'Ë')
                        .replace(   /&Igrave;/g, 'Ì')
                        .replace(/&Iacute;/g, 'Í'    )
                        .replace(/&Icirc;/g, 'Î' )
                        .replace(   /&Iuml;/g, 'Ï')
                        .replace(   /&ETH;/g, 'Ð')
                        .replace(   /&Ntilde;/g, 'Ñ')
                        .replace(   /&Ograve;/g, 'Ò')
                        .replace(   /&Oacute;/g, 'Ó')
                        .replace(/&Ocirc;/g, 'Ô' )
                        .replace(   /&Otilde;/g, 'Õ')
                        .replace(/&Ouml;/g, 'Ö'  )
                        .replace(/&Oslash;/g, 'Ø'    )
                        .replace(   /&Ugrave;/g ,'Ù')
                        .replace(   /&Uacute;/g, 'Ú')
                        .replace(   /&Ucirc;/g, 'Û')
                        .replace(   /&Uuml;/g, 'Ü')
                        .replace(   /&Yacute;/g, 'Ý')
                        .replace(/&THORN;/g, 'Þ' )
                        .replace(   /&szlig;/g, 'ß')
                        .replace(   /&agrave;/g, 'à')
                        .replace(   /&aacute;/g, 'á')
                        .replace(   /&acirc;/g, 'â')
                        .replace(   /&atilde;/g, 'ã')
                        .replace(/&auml;/g, 'ä'  )
                        .replace(   /&aring;/g, 'å')
                        .replace(   /&aelig;/g, 'æ')
                        .replace(   /&ccedil;/g, 'ç')
                        .replace(/&egrave;/g, 'è'    )
                        .replace(/&eacute;/g, 'é'    )
                        .replace(/&ecirc;/g, 'ê' )
                        .replace(/&euml;/g, 'ë'  )
                        .replace(   /&igrave;/g, 'ì')
                        .replace(/&iacute;/g, 'í'    )
                        .replace(/&icirc;/g, 'î' )
                        .replace(/&iuml;/g, 'ï'  )
                        .replace(/&eth;/g, 'ð'   )
                        .replace(   /&ntilde;/g, 'ñ')
                        .replace(/&ograve;/g,'ò')
                        .replace(/&oacute;/g,'ó')
                        .replace(/&ocirc;/g,'ô')
                        .replace(/&otilde;/g,'õ')
                        .replace(/&ouml;/g,'ö')
                        .replace(/&oslash;/g,'ø')
                        .replace(/&ugrave;/g,'ù')
                        .replace(/&uacute;/g,'ú')
                        .replace(/&ucirc;/g,'û')
                        .replace(/&uuml;/g , 'ü')   
                        .replace(/&yacute;/g, 'ý')  
                        .replace(/&thorn;/g, 'þ')
                        .replace(/&yuml;/g, 'ÿ');
;
			// // const regex = /(<([^>]+)>)/ig
			// // let html = body.replace(regex, "").replace(/\&nbsp;/g, ' ')
			// console.log('html', body)
			// return html
		},
		alterImage(e) {
			e.target.src = img_120;
		},
		alterImage2(e) {
			e.target.src = img_378;
		},
		async downloadResource() {
			this.$store.commit("setLoad", {
				show: true,
				title: "Loading...",
			});
			// Decrypt JWT
			let data = {
				id: this.article.id
			}

			data = this.$aes.encrypt(JSON.stringify(data));
			let response = await this.$sendRequest(
				`pressbox/news/download?data=${base64.encode(data)}`,
				"POST",
				null,
				null,
				false,
				{ location: this.$storage.getUniversal('location') }
			);
			
			if (response.success && response.data) {
				if (response.data.pressbox) {
					window.open(response.data.pressbox, "_blank");
				}
			}
			this.$store.commit("setLoad", {
				show: false,
			});
		},
		hoverFacebook() {
			let img = document.querySelector("#facebook, #facebook_f");
			img.onmouseover = () => {
				img.src = img_fb_hover;
			};
			img.onmouseout = () => {
				img.src = img_fb;
			}; //to
		},
		hoverFacebook_f() {
			let img = document.querySelector("#facebook_f");
			img.onmouseover = () => {
				img.src = img_fb_hover;
			};
			img.onmouseout = () => {
				img.src = img_fb;
			}; //to
		},
		hoverTwitter() {
			let img = document.querySelector("#twitter");
			img.onmouseover = () => {
				img.src = img_tw_hover;
			};
			img.onmouseout = () => {
				img.src = img_tw;
			}; //to
		},
		hoverTwitter_f() {
			let img = document.querySelector("#twitter_f");
			img.onmouseover = () => {
				img.src = img_tw_hover;
			};
			img.onmouseout = () => {
				img.src = img_tw;
			}; //to
		},
		hoverLinkedIn() {
			let img = document.querySelector("#linkedin");
			img.onmouseover = () => {
				img.src = img_li_hover;
			};
			img.onmouseout = () => {
				img.src = img_li;
			}; //to
		},
		hoverLinkedIn_f() {
			let img = document.querySelector("#linkedin_f");
			img.onmouseover = () => {
				img.src = img_li_hover;
			};
			img.onmouseout = () => {
				img.src = img_li;
			}; //to
		},
		hoverCopy() {
			let img = document.querySelector("#copy");
			img.onmouseover = () => {
				img.src = img_copy_hover;
			};
			img.onmouseout = () => {
				img.src = img_cl;
			}; //to
		},
		hoverCopy_f() {
			let img = document.querySelector("#copy_f");
			img.onmouseover = () => {
				img.src = img_copy_hover;
			};
			img.onmouseout = () => {
				img.src = img_cl;
			}; //to
		},
		hoverWhatsapp() {
			let img = document.querySelector("#whatsapp");
			img.onmouseover = () => {
				img.src = img_wp_hover;
			};
			img.onmouseout = () => {
				img.src = img_wp;
			}; //to
		},
		hoverWhatsapp_f() {
			let img = document.querySelector("#whatsapp_f");
			img.onmouseover = () => {
				img.src = img_wp_hover;
			};
			img.onmouseout = () => {
				img.src = img_wp;
			}; //to
		},
		showRelatedNews(data) {
			this.related_news = new Array();
			for (let i in data) {
				const key = data[i];
				this.related_news.push({
					body: utf8.decode(key.body),
					creation: key.creation,
					featured_image: key.featured_image,
					id: key.id,
					tags: key.tags,
					title: utf8.decode(key.title),
				});
			}
			return this.related_news;
		},
	},
	async asyncData(app) {

		
		let data = {}
		
		let path =  app.route.path;
        // console.log(path)
		// let url_array = path.split('?')
		// let title = url_array[url_array.length - 2];
		let title = path.replace('/article/', '')

		data.uid = title;
		//console.log('uid:', title);


        if (data.uid === null) {
            app.router.push({
                name: "news",
            });
            return;
        }
            
        data.preview = app.route.query.preview || false;

        if(app.route.path.search('whatsapp') > -1) {
            data.shared = true
        }
        else if(app.route.path.search('twitter') > -1) {
            data.shared = true
        }

        else if(app.route.path.search('facebook') > -1) {
            data.shared = true
        }
        else if(app.route.path.search('linkedin') > -1) {
            data.shared = true
        }
        else {
            data.shared = false
        }

		//console.log('DATA:', data)
            
        data = app.$aes.encrypt(JSON.stringify(data));

		
		let headers = {
            location: app.$storage.getUniversal('location')
        }

		let response = await app.$sendRequest(
			`pressbox/news/article?data=${base64.encode(data)}`,
			"GET",
			null,
			null,
			false,
			headers
		);

		//console.log(response, 'article')
		if (response.success && response.data != null) {
			const post = response.data.post;
			app.seo({
                title: post.news.title,
                description: post.news.body.replace(/<[^>]*>?/gm, "").slice(0, 90),
				image: `https://api.motorolanews.com/cache/image?url=${post.news.featured_image}`,
                canonical:  `https://motorolanews.com${app.route.path}`,
				openGraph: {
					title: post.news.title,
					description: post.news.body.replace(/<[^>]*>?/gm, "").slice(0, 90),
					url: process.browser ? `https://motorolanews.com${location.pathname}` : null,
					type: "website",
					multi: true,
					image: {
						url: `https://api.motorolanews.com/cache/image?url=${post.news.featured_image}`,
						multi: true,
						width: "200",
						height: "150",
					},
				},
				twitter: {
					site: "@Moto",
					creator: "@Moto",
					card: "summary_large_image",
					title: post.news.title,
					description: post.news.body
						.replace(/<[^>]*>?/gm, "")
						.slice(0, 90),
				},
			});
			return { post };
		}
		app.store.commit('setLoad', { show: false})
		
		
	},
	async created() {
		if (process.browser) {
			fetch(window.location.href, {
				headers: {
					Range: "bytes=0-524288",
					Connection: "close",
					"User-Agent":
						"facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)",
				},
			});
		}
		const post = this.post || null;
		if(post !== null) {
			this.article = this.post.news;
			try {
				this.article.title = utf8.decode(this.article.title)
			}
			catch(e) { 
				//console.log(e)
			}
			//this.article.title = Buffer.from(this.article.title, 'ascii').toString('utf8')
			this.article.body = Buffer.from(this.article.body, 'ascii').toString("utf8")

			// utf8.decode(this.article.body)
			// this.article.tags = this.article.tags.replaceAll(', ', ' ')
			// console.log(this.article.tags);
			this.related_news = new Array();
			for (let i in this.post.related_news) {
				this.related_news.push({
					body: Buffer.from(this.post.related_news[i].body, 'ascii').toString('utf8'), //utf8.decode(this.post.related_news[i].body),
					creation: this.post.related_news[i].creation,
					featured_image: this.post.related_news[i].featured_image,
					id: this.post.related_news[i].id,
					tags: this.post.related_news[i].tags,
					title:  Buffer.from(this.post.related_news[i].title, 'ascii').toString('utf8'),//utf8.decode(this.post.related_news[i].title),
					uid: this.post.related_news[i].uid
				});
			}
			this.top_new = new Array();
			for (let i in this.post.top_news) {
				this.top_new.push({
					creation: this.post.top_news[i].creation,
					featured_image: this.post.top_news[i].featured_image,
					id: this.post.top_news[i].id,
					tags: this.post.top_news[i].tags,
					title: utf8.decode(this.post.top_news[i].title),
					uid: this.post.top_news[i].uid
				});
			}
		}
		// await this.initConfig()
		if (process.browser) {
			$(window).resize(function () {
				// Image main
				let section_main_height = $("#section_main").height();
				$("#s_target_main").css("height", section_main_height);
			});
			this.$emit("updateHead");
            // let location = this.$store.getters.getLocation;
            let location = this.$storage.getUniversal('region_lang')
    		if (location == 3) {
                this.social_media = [
                    { image: img_fb, maxw: 40, id: "facebook" },
                    { image: img_tw, maxw: 40, id: "twitter" },
                    { image: img_li, maxw: 40, id: "linkedin" },
                    { image: img_cl, maxw: 35, id: "copy" },
                    { image: img_wp, maxw: 45, id: "whatsapp" },
                ];
            } 
            else {
                this.social_media = [
                    { image: img_fb, maxw: 40, id: "facebook" },
                    { image: img_tw, maxw: 40, id: "twitter" },
                    { image: img_li, maxw: 40, id: "linkedin" },
                    { image: img_cl, maxw: 35, id: "copy" },
                ];
            }
		}
		
	},
	// async fetch({app}) {
	//     await this.initConfig()
	// },
	mounted() {
		if (process.browser) {
			for (let time = 0; time < 2000; time = time + 100) {
				setTimeout(function () {
					$(window).trigger("resize");
				}, time);
			}
			this.hoverFacebook();
			this.hoverFacebook_f();
			this.hoverTwitter();
			this.hoverTwitter_f();
			this.hoverLinkedIn();
			this.hoverLinkedIn_f();
			this.hoverCopy();
			this.hoverCopy_f();
			if (this.social_media[4]) {
				this.hoverWhatsapp();
				this.hoverWhatsapp_f();
			}
		}
	},
};
</script>

<style lang="scss">
@import "~/assets/scss/colors.scss";
#article {

    li {
        list-style-type: inherit;
    }

	min-height: 100vh;
	.fr-fic {
		max-width: 100% !important;
	}
	.card-image-top {
		max-height: 200px !important;
	}
	p {
		.fr-video {
			position: relative;
			margin: 0;
			width: 10em;
			display: inline-block;
			width: 95%;
			padding: 0 0 50%;
			& iframe {
				position: absolute;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
	.fr-fic {
		max-width: 96%;
	}
}
</style>