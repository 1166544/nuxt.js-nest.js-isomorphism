import { ConfigDefault } from './ConfigDefault';

/**
 * DB配置
 *
 * @export
 * @class ConfigDB
 * @extends {ConfigDefault}
 */
export class ConfigDB extends ConfigDefault {
	constructor() {
		super();
	}

	/**
	 * 开发MOGO DB配置
	 * @description Gets dev enviroment mongo config
	 * @returns dev enviroment mongo config
	 */
	private getDevEnviromentMongoConfig(): IMongoDBConfig {
		return {
			uri: 'localhost',
			port: 27017,
			db: 'admin',
			userName: 'admin',
			password: '123456'
		};
	}

	/**
	 * 生产MOGO DB配置
	 * @description Gets dev enviroment mongo config
	 * @returns dev enviroment mongo config
	 */
	private getProdEnviromentMongoConfig(): IMongoDBConfig {
		return {
			uri: 'localhost',
			port: 27017,
			db: 'admin',
			userName: 'admin',
			password: '123456'
		};
	}

	/**
	 * 获取MONGO DB层配置
	 * @description Gets db config
	 * @returns db config
	 */
	public getMongoDbConfig(): IMongoDBConfig {
		switch (this.getEnv()) {
			// 开发MOGO DB配置
			case ConfigDefault.ENV_DEV:
				return this.getDevEnviromentMongoConfig();
				break;
			// 生产MOGO DB配置
			case ConfigDefault.ENV_PROD:
				return this.getProdEnviromentMongoConfig();
				break;
			// 默认MOGO DB配置
			default:
				return this.getProdEnviromentMongoConfig();
				break;
		}
	}
}

/**
 * mongo db 基础配置
 * @description Idbconfig
 */
export interface IMongoDBConfig {
	uri: string;
	port: number;
	db: string;
	userName: string;
	password: string;
}
