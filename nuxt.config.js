require("dotenv").config();

import path from "path";
import webpack from "webpack";
import translatations from "./translatations";
import axios from "axios";

const PRIMARY_HOSTS = `localhost:*`;

export default {
    // Target: https://go.nuxtjs.dev/config-target
    // target: 'static',
    // ssr: true,
    // target: "server",

    // mode: "universal",
    // generate: {
    //     dir: "public",
    // },
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Motorola News",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                hid: "description",
                name: "description",
                content: "Pressbox digital Motorola",
            },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-icon-180x180.png",
            },
            { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" },
            { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" },
            { rel: "manifest", href: "/manifest.json" },
            //<link href='https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/css/froala_editor.pkgd.min.css' rel='stylesheet' type='text/css' />
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/css/froala_editor.pkgd.min.css",
            },
        ],
        script: [
            {
                src: "https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/js/froala_editor.pkgd.min.js",
            },
            {
                src: "https://cdn.jsdelivr.net/npm/froala-editor@3.0.1/js/plugins/lists.min.js",
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["~/assets/scss/custom-bootstrap.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        // '@/plugins/aos.js'
        "@/plugins/serie.js",
        "@/plugins/common/client.js",
        "@/plugins/vue-cookies.js",
        "@/plugins/filters.js",
        "@/plugins/router.js",

        { src: "~/plugins/i18n.js" },

        // Conexion a la base de datos mongoDB

        // { src: "~/plugins/db.js", mode: "server" },

        //vue-notification
        { src: "~/plugins/vue-notification/ssr", ssr: true },
        { src: "~/plugins/vue-notification/client", ssr: false },

        { src: "@/plugins/gtag.js", mode: "client", ssr: false },

        //common
    ],

    i18n: {
        locales: [
            "en_us",
            "es_arg",
            "es_mx",
            "pt_br",
            "es_co",
            "es_cl",
            "es_p",
        ],
        defaultLocale: "en_us",
        silentTranslationWarn: true,
        silentFallbackWarn: true,
        vueI18n: {
            fallbackLocale: "en_us",
            messages: translatations,
        },
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: false,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        "nuxt-bowser",
        "@nuxtjs/router",

        // '@nuxtjs/google-analytics'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",

        "vue-social-sharing/nuxt",

        "@nuxtjs/universal-storage",

        "@nuxtjs/i18n",

        "cookie-universal-nuxt",

        ["@nuxtjs/dotenv", { systemvars: true }],

        "nuxt-seo",

        "nuxt-helmet",

        // '@nuxtjs/google-gtag',

        "@nuxtjs/device",

        "nuxt-user-agent",

        "@nuxt/http",

        ["@nuxtjs/component-cache", { maxAge: 1000 * 60 * 60 }],

        "@nuxtjs/sitemap",

        "nuxt-maintenance-mode",
    ],

    sitemap: () => {
        return {
            hostname: process.env.VUE_APP_URL,
            gzip: true,
            defaults: {
                changefreq: "daily",
                priority: 1,
                lastmod: new Date(),
            },
            routes: async () => {
                let routes = ["/"];

                if (process.env.VUE_APP_STAGE === "prod") {
                    const { data } = await axios.get(
                        "https://api.motorolanews.com/sitemap"
                    );

                    if (data.http === 200) {
                        const url = data.data.urls || [];
                        routes = [...routes, ...url];
                    }

                    return routes;
                }

                return [];
            },
        };
    },

    storage: {
        localStorage: {
            prefix: "motorola",
        },
    },

    helmet: {
        // helmet options
        frameguard: { action: "deny" },
    },

    bootstrapVue: {
        // Add the icon plugin to the `componentsPlugins` array
        icons: true,
    },

    router: {
        middleware: "maintenance",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: ["jquery", "bootstrap", "lodash", "vuex"],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                _: "lodash",
            }),
        ],
    },
    server: {
        port: process.env.VUE_APP_PORT,
    },
    loading: true,

    render: {
        csp: {
            policies: {
                "frame-ancestors": ["'none'"],
                "script-src": [
                    "'self'",
                    "'unsafe-inline'",
                    "https://www.google-analytics.com",
                    "https://www.googletagmanager.com",
                    "https://www.instagram.com",
                    "https://cdn.jsdelivr.net",
                ],
            },
        },
    },
};
