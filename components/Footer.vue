<template>
    <div>
        <footer id="mo_footer" class="container-fluid bg-primary text-white px-0 pt-3 pt-xl-6">
            <!-- Content -->
            <section class="row px-1 px-sm-2s px-md-5 py-5 mb-3 mb-xl-6">
                <!-- Menú -->
                <div class="
                    col-12 col-sm-12 col-lg-12 col-custom-4
                    d-flex justify-content-center align-items-start
                    px-3 px-sm-4 pb-3 pb-xl-0">

                    <div>
                        <div class="cursor-pointer text-custom-center py-1">
                            <img :src="img_logo" class="img-fluid mb-3">
                        </div>
                        <div class="text-warning text-custom-center pt-1 pb-3">
                            {{ $t('footer.dont_miss') }}
                        </div>

                        <div class="d-flex justify-content-center justify-content-custom-start">
                            <input type="email" name="email" v-model="email" placeholder="E-mail" class="input-thm-light mr-1 mb-2 mb-sm-0" >

                            <br class="d-block d-sm-none">

                            <button class="btn btn-info px-2 px-sm-4" style="height: 44px;" @click="sendNewsletter">
                                <span class="mo--description-sm montserrat-bold" :disabled="!accept_terms">
                                    {{ $t('footer.suscribe') }}
                                </span>
                            </button>

                        </div>

                        <div class="max-width-360">

                            <div class="text-custom-center mt-3">
                                <input type="checkbox" v-model="accept_terms">

                                <span>
                                    {{ $t('footer.agree') }}
                                </span>
                            </div>

                        </div>
                    </div>
                </div>


                <div class="col-12 col-sm-12 col-lg-12 col-custom-8 px-0">
                    <div class="row justify-content-center justify-content-custom-start px-0 px-custom-5">

                        <!--  -->
                        <div class="
                            col-12 col-sm-6 col-md-6 col-lg-4 col-custom-4
                            d-flex justify-content-center align-items-start
                            px-3 px-sm-4 px-custom-2 py-3 py-md-4">

                            <div class="text-crop">
                                <div class="text-crop-info text-custom-center py-1 mb-1 mb-md-5">
                                    <span class="mo--description-sm montserrat-bold text-info">
                                        {{ $t('footer.find_our_products') }}
                                    </span>
                                </div>
                                <div class="cursor-pointer text-crop text-custom-center py-1">
                                    <a href="https://www.motorola.com/us/" target="_blank">
                                        <span class="span-link mo--description-sm text-white">
                                            www.motorola.com
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Email -->
                        <div class="
                            col-12 col-sm-6 col-md-6 col-lg-4 col-custom-4
                            d-flex justify-content-center align-items-start
                            px-3 px-sm-4 px-md-4 py-3 py-md-4">


                            <div>
                                <div class="text-crop">
                                    <div class="text-crop-info py-1 mb-1 mb-md-5 text-custom-center">
                                        <span class="mo--description-sm montserrat-bold text-info">
                                            {{ $t('footer.pr_contact') }}
                                        </span>
                                    </div>
                                    <div class="cursor-pointer text-crop py-1 text-custom-center">

                                        <span class="span-link mo--description-sm text-white" @click="openModal('contact')">
                                            {{ $t('footer.contact_us') }}
                                        </span>

                                    </div>
                                </div>
                                <div class="text-custom-center pt-4">
                                    <small v-html="$t('footer.inquiries_only')"></small>
                                </div>
                            </div>
                            
                        </div>

                        <!--  -->
                        <div class="
                            col-12 col-sm-6 col-lg-4 col-custom-4
                            d-flex justify-content-center align-items-start
                            px-3 px-sm-4 px-lg-5 px-xl-4 py-3 py-md-4">

                            <div>
                                <div class="text-crop-info text-custom-center py-1 mb-1 mb-md-5">
                                    <span class="mo--description-sm montserrat-bold text-info">
                                        {{ $t('footer.join_our_networks') }}
                                    </span>
                                </div>
                                <div class="cursor-pointer text-custom-center py-1">
                                    <img :src="img_ig" class="mr-2" @click="redirectToPage('https://www.instagram.com/motorola.global/')" style="cursor: pointer;">

                                    <img :src="img_fb" class="mx-2" @click="redirectToPage('https://www.facebook.com/moto/')" style="cursor: pointer;">

                                    <img :src="img_tw" class="mx-2" @click="redirectToPage('https://twitter.com/Moto')" style="cursor: pointer;">

                                    <img :src="img_yt" class="mx-2" @click="redirectToPage('https://www.youtube.com/c/Moto')" style="cursor: pointer;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <div class="mt-2 mb-2">
                <div class="col-12 text-center">
                    <span class="mo--description-sm text-white" style="font-size: 12px; cursor: pointer;" @click="PrivacyPolicy">
                        {{ $t('footer.confidentiality') }}
                    </span>
                </div>
            </div>

            <!-- Finish -->
            <section class="row border-top-danger py-4">
                <div class="col-12 text-center">
                    <span class="mo--description-sm text-white">2022. Motorola® {{ $t('footer.all_rights_reserved') }}.</span>
                </div>
            </section>
        </footer>

        <mo-modal :showModal="modal"
			@onClose="handleClose('contact')"
			maxWidth="800">

			<div class="container-fluid scroll-modal rounded-12 p-0 px-0 px-xl-5"
				 style="height: 100%; max-height: 750px; overflow: auto;">

				<div class="py-5 p-3 p-md-4 p-lg-5" style="height: 100%">
					<div class="col-12 p-0 px-lg-2 pb-4">
						<span class="mo--description-sm montserrat-bold" style="font-size: 30px !important; color: #00152b !important;">
                            {{ $t('footer.form.title') }}
						</span>
					</div>

					<div class="col-12 d-block mx-auto p-0 px-lg-2">
						<div class="rounded-8">

                            <form class="g-3 needs-validation" novalidate>
                                <div class="col-12 pb-2">
                                    <label for="validationCustomUsername" class="form-label mb-0">
                                        {{ $t('footer.form.name') }}
                                    </label>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="name" aria-describedby="inputGroupPrepend" required v-model="name" />
                                        <div class="invalid-feedback">
                                            Please choose a name.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 pb-2">
                                    <label for="validationCustomUsername" class="form-label mb-0">
                                        {{ $t('footer.form.email') }}
                                    </label>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="subject" aria-describedby="inputGroupPrepend" required v-model="email_contact"/>
                                        <div class="invalid-feedback">
                                            Please choose a subject.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 pb-2">
                                    <label for="validationCustomUsername" class="form-label mb-0">
                                        {{ $t('footer.form.subject') }}
                                    </label>
                                    <div class="input-group has-validation">
                                        <input type="text" class="form-control" id="subject" aria-describedby="inputGroupPrepend" required v-model="subject"/>
                                        <div class="invalid-feedback">
                                            Please choose a subject.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mt-3 pb-2">
                                    <label for="validationCustomComments" class="form-label mb-0">
                                        {{ $t('footer.form.message') }}
                                    </label>
                                    <div class="input-group has-validation">
                                        <textarea class="form-control" :placeholder="$t('footer.form.leave_message')" aria-describedby="inputGroupPrepend" rows="5" cols="100" required v-model="body">
                                        </textarea>
                                        <div class="invalid-feedback">
                                            Please choose a comments.
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mt-5 mb-5 text-right">
                                    <button class="btn btn-primary" type="submit" @click="submit" style="background: rgb(132 195 238) !important; border: 0px;color: #000;">
                                        {{ $t('footer.form.submit') }}
                                    </button>
                                </div>
                            </form>

						</div>
					</div>

					<!-- <div class="col-12 text-right p-0 px-2 pb-5 pt-4">
						<button @click="handleClose('contact')"
							class="btn btn-white-mo mr-0 mr-sm-2 mb-2"
							style="min-width: 138px;">
								Cancel
						</button>

						<button class="btn btn-info mb-2"
								style="min-width: 138px;"
                                @click="downloadResource()">
							Download
						</button>
					</div> -->

				</div>
			</div>
		</mo-modal>
    </div>
</template>

<script>

    import { required, minLength } from 'vuelidate/lib/validators'

    // IMAGES
    import img_logo from '@/assets/images/logo.png'
    import img_ig from '@/assets/images/icons/instagram.png'
    import img_fb from '@/assets/images/icons/facebook.png'
    import img_tw from '@/assets/images/icons/twitter.png'
    import img_yt from '@/assets/images/icons/youtube.png'
    // import VueNotifications from 'vue-notifications'

    import Modal from "@/components/Modal";

    export default {
        name: 'mo--footer',
        components: {
            'mo-modal': Modal
        },
        data() {
            return {
                img_logo,
                img_ig,
                img_fb,
                img_tw,
                img_yt,
                email: null,
                accept_terms: false,
                modal: false,

                name: null,
                subject: null,
                body: null,
                email: null,
                email_contact: null

            }
        },
        methods: {
            async submit(evt) {

                evt.preventDefault()

                // console.log('submit!')
                let response = await this.$sendRequest('pressbox/contact', 'POST', null, {
                    name: this.name,
                    email: this.email_contact,
                    subject: this.subject,
                    body: this.body
                })

                // console.log(response)

                // this.showInfoContact()

                this.$notify({
                    type: this.$t('footer.newsletter.type'),
                    title: this.$t('footer.newsletter.title'),
                    text: this.$t('footer.newsletter.submit')
                })

                this.handleClose()

                this.name = null
                this.email_contact = null
                this.subject = null
                this.body = null

                $('html, body').animate({ scrollTop: 0 }, 'slow');

            },
            redirect(name_route) {
                //console.log('redirect')
                if(this.$route.name !== name_route ) {
                    window.scrollTo(0, 0)

                    this.$router.push({
                        name: name_route
                    })
                }
            },
            PrivacyPolicy() {
                window.open('https://www.motorola.com/us/legal/privacy-policy', '_blank')
            },
            redirectToSamePageSimple(name_route, element_id) {
                //console.log('redirectToSamePageSimple')
                document.getElementById(element_id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'start'
                })
            },
            redirectToSamePage(name_route, element_id) {
                //console.log(document.getElementById(element_id), 'redirectToSamePage')
                this.redirect(name_route)

                setTimeout(function() {
                    const yOffset = -1 * ($('#mo_footer').height() + 32);
                    const element = document.getElementById(element_id);
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({top: y, behavior: 'smooth'});

                }, 300);
            },
            redirectToPage(url, target = "_blank") {
                if(target == "_blank") {
                    window.open(url, '_blank')
                }
                else {
                    window.location.replace(url)
                }
            },
            async sendNewsletter() {

                // console.log(this.accept_terms, this.email)

                if(!this.accept_terms) {
                    return
                }

                if(this.email === null) {
                    return
                }

                let body = {
                    email: this.email
                }

                let response = await this.$sendRequest(`pressbox/confirmation`, 'POST', null, body, false,{
                    location: this.$storage.getUniversal('location')
                })

                if(response.success && response.data) {
                    // Estatus correcto en la respuesta
                    if(response.data.newsletter != undefined) {

                        if(response.data.exist) {
                            // this.showExist()
                            this.$notify({
                                type: this.$t('footer.newsletter.type'),
                                title: this.$t('footer.newsletter.title'),
                                text: this.$t('footer.newsletter.already_subscribe')
                            })
                        }
                        else {
                            this.$notify({
                                type: this.$t('footer.newsletter.type'),
                                title: this.$t('footer.newsletter.title'),
                                text: this.$t('footer.newsletter.subscribe')
                            })
                            // this.showInfo()
                        }
                    }
                    else {
                        this.$notify({
                            type: this.$t('footer.newsletter.error'),
                            title: this.$t('footer.newsletter.title'),
                            text: this.$t('footer.newsletter.subscribe_error:')
                        })
                        this.showError()
                    }
                }

                this.email = null
                this.accept_terms = false

            },
            async openModal() {

                this.modal = true

            },
            handleClose(name_modal) {
                this.modal = false
            },
        },
        mounted() {
            var forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        },
        // notifications: {
        //     showInfo: {
        //         type: VueNotifications.types.info,
        //         title: `Hey!`,
        //         message: 'You have subscribed to the newsletter'
        //     },
        //     showExist: {
        //         type: VueNotifications.types.info,
        //         title: `Hey!`,
        //         message: `You're, already suscribe newletter`
        //     },
        //     showError: {
        //         type: VueNotifications.types.error,
        //         title: `Hey!`,
        //         message: 'You not possible to subscribe to the newsletter'
        //     },
        //     showInfoContact: {
        //         type: VueNotifications.types.info,
        //         title: `Hey!`,
        //         message: 'Very soon we will get in touch with you'
        //     },
        // },
    }
</script>

<style lang="scss" scoped>

    #mo_footer {

        .span-link {
            //color: #eee !important;
        }
        .span-link:hover {
            text-decoration: underline;
            text-decoration-style: simple;
        }

        .max-width-360 {
            max-width: 360px;
        }

        .text-custom-center {
            text-align: center;
        }
        @media (min-width: 1270px) {
            .justify-content-custom-start {
                justify-content: start !important;
            }
            .text-custom-center {
                text-align: left;
            }
            .offset-custom-1 {
                margin-left: 8.33333%;
            }
            .col-custom-8 {
                flex: 0 0 66.66667%;
                max-width: 66.66667%;
            }
            .col-custom-4 {
                flex: 0 0 33.33333%;
                max-width: 33.33333%;
            }
            .col-custom-4 {
                flex: 0 0 33.33333%;
                max-width: 33.33333%;
            }
            .col-custom-3 {
                flex: 0 0 25%;
                max-width: 25%;
            }
            .col-custom-2 {
                flex: 0 0 16.66667%;
                max-width: 16.66667%;
            }
            .px-custom-2 {
                padding-left: 0.5rem !important;
                padding-right: 0.5rem !important;
            }
            .px-custom-5 {
                padding-left: 3rem !important;
                padding-right: 3rem !important;
            }
        }


    }

</style>
