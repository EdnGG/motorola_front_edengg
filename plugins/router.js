
export default async({app, $http}) => {

    let failed_apply_ip = false

    try {
        await $http.get('https://api.ipify.org?format=json')
    }
    catch (err) {
        failed_apply_ip = true
        // console.log('addons browser blocked')
    }

    // console.log(failed_apply_ip)

    if(process.server && failed_apply_ip) {
        const ip = await getIP()
        app.store.commit('setIP', ip)
    }

}


function getIP() {
    return new Promise(resolve => {
        fetch('https://api.ipify.org?format=json')
        .then(x => x.json())
        .then(({ ip }) => {
            resolve(ip)
        });
    })
}
