import express from "museria-ms/src/server/transports/express/index.js";
const ServerExpressMuseria = express();
export default (Parent) => {
    return class ServerExpressMuseriaGlobal extends (Parent || ServerExpressMuseria) {
        /**
         * @see ServerExpressMuseria.prototype.getClientRoutes
         */
        getClientRoutes() {
            return super.getClientRoutes().filter(r => r.name != 'removeSong');
        }
        /**
         * @see ServerExpressMuseria.prototype.getApiMasterRoutes
         */
        getApiMasterRoutes() {
            return super.getApiMasterRoutes().filter(r => r.name != 'removeSong');
        }
        /**
         * @see ServerExpressMuseria.prototype.getApiButlerRoutes
         */
        getApiButlerRoutes() {
            return super.getApiButlerRoutes().filter(r => r.name != 'removeSong');
        }
        /**
         * @see ServerExpressMuseria.prototype.getApiSlaveRoutes
         */
        getApiSlaveRoutes() {
            return super.getApiSlaveRoutes().filter(r => r.name != 'removeSong');
        }
    };
};
