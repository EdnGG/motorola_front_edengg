
// global.CONFIG = require('@/plugins/common/page.config.js')
import _AES from '~/utils/AES.js'
import _Request from '~/utils/sendRequest.js'
import _log from '~/utils/log.js'
import _UrlB from '~/utils/urlBeauty.js'
import _JWT from '~/utils/JWT.js'
import _envvar from '~/utils/variables.js'
import _informativeDate from '~/utils/informativeDate.js'

export default({$http}, inject) => {

    inject('aes', _AES)
    inject('log', _log)
    inject('urlB', _UrlB)
    inject('jwt', _JWT)
    inject('sendRequest', _Request)
    inject('envvar', _envvar)
    inject('informativeDate', _informativeDate)
}
