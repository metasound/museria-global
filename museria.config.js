import yargs from 'yargs';
import dotenv from 'dotenv';
import path from 'path';
import faces from "./faces.json" with { type: "json" };
const __dirname = new URL('.', import.meta.url).pathname;
dotenv.config({ path: path.join(__dirname, '.env') });
const argv = yargs(process.argv).argv;
const loggerLevel = argv.loggerLevel || process.env.MUSERIA_LOGGER_LEVEL;
const split = loggerLevel.split(',');
const loggerLevelConsole = split[0];
const loggerLevelFile = split[1] || loggerLevelConsole;

export default {
  face: argv.face || process.env.MUSERIA_FACE,
  port: argv.port || process.env.MUSERIA_PORT,
  initialNetworkAddress: argv.initialNetworkAddress || process.env.MUSERIA_INITIAL_NETWORK_ADDRESS || faces,
  publicPort: argv.publicPort || process.env.MUSERIA_PUBLIC_PORT,
  hostname: argv.hostname || process.env.MUSERIA_HOSTNAME,
  logger: {
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
