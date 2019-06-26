import * as mkdirp from 'mkdirp';
import * as fs from 'fs';
import * as path from 'path';

/**
 * 服务基类
 */
export class CoreService {
    constructor() {
        // hole
    }

    /**
     * 读取文件内容
     *
     * @param {string} filePath
     * @param {string} [fileType='utf8']
     * @returns
     * @memberof EngineService
     */
    public async readFile(filePath: string, fileType: string = 'utf8') {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, fileType, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    /**
     * 读取文件，基础信息，包括状态
     *
     * @param {*} filePath
     * @returns
     * @memberof MindService
     */
    public async readFileStat(filePath) {
        return new Promise((resolve, reject) => {
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    reject(err);
                }
                resolve(stats);
            });
        });
    }

    /**
     * 保存文件
     *
     * @param {*} file
     * @param {*} totalPath
     * @param {*} fileName
     * @returns
     * @memberof MindService
     */
    public async saveFile(file, totalPath, fileName) {
        return new Promise((resolve, reject) => {
            // 块方式写入文件
            let uploadUrl: string = totalPath;
            let isSavedSuccess: boolean = false;
            const wstream: any = fs.createWriteStream(
                path.join(process.cwd(), totalPath, fileName),
            );

            wstream.on('open', () => {
                const blockSize = 128;
                const nbBlocks = Math.ceil(file.length / blockSize);
                for (let i: number = 0; i < nbBlocks; i += 1) {
                    const currentBlock = file.slice(
                        blockSize * i,
                        Math.min(blockSize * (i + 1), file.length),
                    );
                    wstream.write(currentBlock);
                }

                wstream.end();
            });
            wstream.on('error', (err: any) => {
                reject(err);
            });
            wstream.on('finish', () => {
                isSavedSuccess = true;
                uploadUrl = `${uploadUrl}/${fileName}`;
                resolve({
                    success: isSavedSuccess,
                    uploadUrl,
                });
            });
        });
    }

    /**
     * 检测目录是否存在，不存在则创建
     *
     * @param {*} pathUrl
     * @returns
     * @memberof MindController
     */
    public async checkDirExists(pathUrl) {
        return new Promise((resolve, reject) => {
            mkdirp(pathUrl, err => {
                if (err) {
                    console.error(err);
                    reject({ err, success: false });
                } else {
                    resolve({ pathUrl, success: true });
                }
            });
        });
    }
}
