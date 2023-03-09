// import getBrowserInfo from 'get-browser-info'

import { v4 } from 'uuid'
import { getData, setData } from 'nuxt-storage/local-storage'
export default ({ $storage }, inject) => {

    // console.log($storage.getLocalStorage('device'), 'DEVICE')

    let device = null
    if($storage.getLocalStorage('device') == null) {
        device = v4()
        $storage.setLocalStorage('device', device)
    }
    else {
        device = $storage.getLocalStorage('device')
    }

    inject('serie', { uuid: device })



}
