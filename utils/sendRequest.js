import Vue from "vue";
import base64 from "base-64";
import utf8 from "utf8";
import CONFIG from "@/plugins/common/page.config.js";
import AES from "@/utils/AES";
import localStorage from "localStorage";

export default function sendRequest(
    url = null,
    method = "GET",
    params = null,
    body = null,
    query = false,
    custom_headers = null
) {
    //console.log(Vue.prototype.$aes, '$aes')
    // INIT
    let send_url = `${CONFIG.server[CONFIG.env].api}/${url}`;
    // let headers = (custom_headers == null) ? CONFIG.server[CONFIG.env].headers : custom_headers

    let headers = CONFIG.server[CONFIG.env].headers;

    if (custom_headers !== null) {
        headers = { ...headers, ...custom_headers };
    }

    // headers.device = localStorage.getItem('device')
    // headers.zone = localStorage.getItem('zone')

    let send_data = {
        method: method,
        headers: headers,
    };

    // PARAMS - BODY
    if (query) {
        let formBody = [];
        for (var property in body) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(body[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        if (method == "POST") {
            send_data.body = formBody;
        }
        if (method == "GET") {
            send_url = `${send_url}?${formBody}`;
        }
    } else {
        if (params !== null) {
            send_data.params = JSON.stringify(params);
        }
        if (body !== null) {
            send_data.body = JSON.stringify(body);
        }
    }

    // console.log(send_data, 'send_data')
    //console.log(Vue.prototype.$aes.encrypt(JSON.stringify(send_data)), 'encrypted')

    // // CONSOLES LOG
    // this.$log('SEND URL:', send_url)
    // this.$log('SEND DATA:', send_data)

    // FETCH
    let resp = fetch(send_url, send_data)
        .then((res) => res.text())
        .catch(async (error) => {
            // this.$log('ERROR:', error)
        })
        .then(async (response) => {
            response = AES.decrypt(Buffer.from(response, "base64"));
            response = JSON.parse(response) || null;

            if (response === null) {
                return {
                    error: [
                        {
                            code: 404,
                            message: "decoded failed",
                        },
                    ],
                    success: false,
                };
            }

            // this.$log('RESPONSE:', (response !== null) ? response : 'Response is null')

            if (response.http == 200 && response.data !== null) {
                // this.$log('DATA:', response.data)

                if (response.data == "OK") {
                    if (method == "POST") {
                        response.data = [
                            {
                                added: true,
                            },
                        ];
                    } else if (method == "PATCH") {
                        response.data = [
                            {
                                updated: true,
                            },
                        ];
                    }
                }

                return {
                    data: response.data,
                    success: true,
                };
            } else if (response.http == 202) {
                // this.$log('ERRORS:', response.errors)

                return {
                    errors: response.errors,
                    success: false,
                };
            } else if (response.http == 404) {
                // this.$log('404:', response)

                return {
                    error: [
                        {
                            code: 404,
                            message: "Url not found",
                        },
                    ],
                    success: false,
                };
            } else {
                return {
                    data: [],
                    success: false,
                };
            }
        });

    return resp;
}
