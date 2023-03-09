export default {
    project: "Motorola News",
    // env: "dev",
    env: process.env.VUE_APP_STAGE,
    server: {
        local: {
            page_url: "http://localhost:8081",
            api: "http://localhost:3000",
            reference: "com.motorola.news",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                reference: "com.motorola.news",
                location:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiIxIiwibG9jYXRpb24iOiIxIn0.YvSjmdfoWb-FaS-63n7BwHc1Zyn0k_qerxWlcDefK44",
                lang: "en",
                authorization:
                    "Bearer NWY2ZWZiODEtYjI2MC00ZDNjLWFjYjMtYzVjZGM5NmZlMjg1",
            },
        },
        dev: {
            page_url: "https://www.motorolanews.com/",
            api: "https://sandbox-api.motorolanews.com",
            reference: "com.monotorola.news",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                reference: "com.motorola.news",
                lang: "en",
                location:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiIxIiwibG9jYXRpb24iOiIxIn0.YvSjmdfoWb-FaS-63n7BwHc1Zyn0k_qerxWlcDefK44",
                authorization:
                    "Bearer NWY2ZWZiODEtYjI2MC00ZDNjLWFjYjMtYzVjZGM5NmZlMjg1",
            },
        },
        prod: {
            page_url: "https://www.motorolanews.com/",
            api: "https://api.motorolanews.com",
            reference: "com.motorola.news",
            headers: {
                Accept: "application/json, text/plain, /",
                "Content-Type": "application/json",
                reference: "com.motorola.news",
                lang: "en",
                location:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZWdpb24iOiIxIiwibG9jYXRpb24iOiIxIn0.YvSjmdfoWb-FaS-63n7BwHc1Zyn0k_qerxWlcDefK44",
                authorization:
                    "Bearer NWY2ZWZiODEtYjI2MC00ZDNjLWFjYjMtYzVjZGM5NmZlMjg1",
            },
        },
    },
};
