<template>
	<div id="template-default" class="p-0">
		<mo-alert></mo-alert>
		<mo-loading></mo-loading>

		<notifications position="bottom right" />

		<mo-navbar></mo-navbar>
		<Nuxt />
		<mo-footer></mo-footer>
	</div>
</template>

<script>
// Components
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Alert from "@/components/Alert.vue";
import Loading from "@/components/Loading.vue";

export default {
	layout: "default",
	components: {
		"mo-navbar": Navbar,
		"mo-footer": Footer,
		"mo-alert": Alert,
		"mo-loading": Loading,
	},
    head() {
        return {
            meta: [
                { 
                    hid: 'robots', 
                    name: 'robots', 
                    content: 'index, follow' 
                }
            ],
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: `https://motorolanews.com${this.$route.path}`
                }
            ]
        }
    },  
    watch: {
        '$route'(to, from) {

            if(process.browser) {
                if(process.env.VUE_APP_STAGE === 'prod') {
                    // console.log(window.location)
                    let pathname = window.location.pathname
                    this.$gtag.pageview({ page_path: pathname })
                }

                window.scrollTo(0,0)
            }

        }
    },      
	data() {
		return {};
	},
	mounted() {
        
    },
};
</script>

<style lang="scss" scoped>
#template-default {
	min-height: 100vh;
}
</style>
