import serviceLocal from '~/services/service-local';

/**
 * 客户端启动时调用类
 */
class PlugInitConfigClient {
    constructor() {
        this.updateConfig();
    }

    /**
     * 更新配置数据
     */
    updateConfig() {
        const CONFIG_KEY = 'configData';

        // 当本地缓存不存在配置时，请求服务器下发
        if (!localStorage.getItem(CONFIG_KEY)) {
            serviceLocal.getEniromentData().then((value) => {
                // 将返回值放于localstorage中con
                if (value && value.data && value.data.data) {
                    const configData = JSON.stringify(value.data.data);
                    console.log('存储config值', configData);
                    localStorage.setItem(CONFIG_KEY, configData);
                }
            });
        }
    }
}

export default new PlugInitConfigClient();
