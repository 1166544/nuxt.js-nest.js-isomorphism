import mongoose from 'mongoose';
import configService from '../../../client/core/service/config.service';
import { ConfigDefault } from '../../../../config/default.config';
import { ConfigDB, IMongoDBConfig } from '../../../../config/db.config';

/**
 * data base providers
 */
export const databaseProviders: Array<any> = [
	{
		provide: 'DATABASE_CONNECTION',
		useFactory: async (): Promise<any> => {
			// 获取默认配置
			const configer: ConfigDefault = configService.getConfig();
			const configDB: ConfigDB = new ConfigDB();

			// 更新当前环境配置
			configDB.updateEnv(configer.getEnv());

			// 组装连接字符串
			const configData: IMongoDBConfig = configDB.getMongoDbConfig();
			const configStr: string = `mongodb://${configData.userName}:${configData.password}@${configData.uri}:${configData.port}/${configData.db}`;
			const connectResult: any = await mongoose.connect(configStr);

			return connectResult;
		}
	}
];
