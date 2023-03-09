var crypto = require('crypto')


const toBuffer = (ab) => {
    const buf = Buffer.alloc(ab.byteLength);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        buf[i] = view[i];
    }
    return buf;
}

const encrypt = (data) => {
	try {

        const key = Buffer.from(process.env.VUE_APP_KEY, 'utf-8')
        const iv = Buffer.from(process.env.VUE_APP_IV, 'hex')
        const encoded = Buffer.from(data, 'utf-8')

        const cipher = crypto.createCipheriv(process.env.VUE_APP_ALGORITHM, key, iv)
        const encryptedData = Buffer.concat([cipher.update(encoded), cipher.final()])

        return encryptedData.toString('base64')
    }
    catch (err) {
        // console.log(err)
        return null
    }

}

const decrypt = (data) => {
	try {

		const data_local = data

        const key = Buffer.from(process.env.VUE_APP_KEY, 'utf-8')
        const iv = Buffer.from(process.env.VUE_APP_IV, 'hex')

        const decipher = crypto.createDecipheriv(process.env.VUE_APP_ALGORITHM, key, iv)
        const dencryptedData = Buffer.concat([decipher.update(data_local), decipher.final()])
        return String.fromCharCode.apply(null, dencryptedData)
    }
    catch (err) {
        return null
    }
}

export default { encrypt, decrypt }
