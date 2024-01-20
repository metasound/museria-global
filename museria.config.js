import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as dotenv from "dotenv";
import path from "path";
import fse from "fs-extra";
import selfsigned  from 'selfsigned';

const argv = yargs(hideBin(process.argv)).argv;
const faces = JSON.parse(fse.readFileSync(new URL("./faces.json", import.meta.url)));
const __dirname = new URL('.', import.meta.url).pathname;
dotenv.config({ path: path.join(__dirname, '.env') });
const loggerLevel = argv.loggerLevel || process.env.MUSERIA_LOGGER_LEVEL;
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || loggerLevelConsole;
export const face = argv.face || process.env.MUSERIA_FACE;
export const port = argv.port || process.env.MUSERIA_PORT;
export const initialNetworkAddress = argv.initialNetworkAddress || process.env.MUSERIA_INITIAL_NETWORK_ADDRESS || faces;
export const publicPort = argv.publicPort || process.env.MUSERIA_PUBLIC_PORT;
export const hostname = argv.hostname || process.env.MUSERIA_HOSTNAME;
export const logger = {
    transports: [
        { transport: 'LoggerConsole', options: { level: loggerLevelConsole } },
        { transport: 'LoggerFile', options: { level: loggerLevelFile } }
    ]
};
export const collections = {
    music: {
        limit: argv.collectionsMusicLimit || process.env.MUSERIA_COLLECTION_MUSIC_LIMIT
    }
};
export const storage = {
    path: argv.storagePath || process.env.MUSERIA_STORAGE_PATH,
    dataSize: argv.storageDataSize || process.env.MUSERIA_STORAGE_DATA_SIZE,
    tempSize: argv.storageTempSize || process.env.MUSERIA_STORAGE_TEMP_SIZE
};

const pems = selfsigned.generate();
export const server = {
    https: true
};
export default {
    face,
    port,
    initialNetworkAddress,
    publicPort,
    hostname,
    logger,
    collections,
    storage,
    server
};
