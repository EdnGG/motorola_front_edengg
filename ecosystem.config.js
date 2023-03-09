module.exports = {
    apps: [{
        name: "motorolanews.com",
        script: "./node_modules/nuxt/bin/nuxt.js",
        args: "start",
        instances : "3",
        out_file: "/dev/null",
        error_file: "/dev/null",
        max_memory_restart: '500M',
        env: {
            "VUE_APP_BASE_URL": "/",
            "VUE_APP_KEY": "e4qZ6FCJM46iCoPEjf2s8c80SDm4LeUx",
            "VUE_APP_IV": "48404D635166546A576E5A7134743777",
            "VUE_APP_ALGORITHM": "aes-256-cbc",
            "VUE_APP_STAGE": "prod",
            "VUE_APP_PORT": 3001,
            "VUE_APP_URL": "https://motorolanews.com",
            "MAINTENANCE_MODE": false
        }
    }]
}