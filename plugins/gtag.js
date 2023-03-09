import Vue from "vue"
import VueGtag from "vue-gtag"

export default ({ app }) => {

    if(process.env.VUE_APP_STAGE === 'prod') {
        Vue.use(
            VueGtag,
            {
                config: {
                    id: 'G-4EL8966DLD',
                    params: {
                        send_page_view: true
                    }
                },
                onReady() {
                    // console.log("onReady")
                },
                onBeforeTrack() {
                    // console.log("onBeforeTrack")
                },
                onAfterTrack() {
                    // console.log(app.router)
                    // console.log("onAfterTrack")
                }
            },
            // app.router
        )
    }

    
}
