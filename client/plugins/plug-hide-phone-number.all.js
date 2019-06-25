/**
 * 手机号码隐藏中间四位
 * 服务端、前端共用
 */
export default ({app}, inject) => {
    inject('hidePhoneKeyNumber', (tel) => {
        const MAX_NUM = 11;
        const telStr = tel.toString();
        let telResult = '';

        if (!isNaN(telStr) && telStr.length === MAX_NUM) {
            const reg = /(\d{3})\d{4}(\d{4})/;

           telResult = telStr.replace(reg, '$1****$2');
        }

        return telResult;
    });
}
