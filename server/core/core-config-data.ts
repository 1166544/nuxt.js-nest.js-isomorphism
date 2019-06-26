/**
 * 配置基类
 */
export class CoreConfigData {
    constructor(public configData?: any) {
        // hole
    }

    public getHostConfig(): any {
        return this.configData.getServerConfig();
    }

    public getConfig(): any {
        return this.configData;
    }
}
