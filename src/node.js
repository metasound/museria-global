import node from "museria-ms/src/node.js";
import express from "./server/transports/express/index.js";
import adapter from "spreadable-ms/src/logger/transports/adapter/index.js";
const Node = node();
const ServerExpressMuseriaGlobal = express();
const LoggerAdapter = adapter();

export default (Parent) => {
    return class NodeMuseriaGlobal extends (Parent || Node) {
        static get ServerTransport() { return ServerExpressMuseriaGlobal; }
        static get LoggerTransport() { return LoggerAdapter; }
        /**
         * @see Node.prototype.checkDocumentAvailability
         */
        async checkDocumentAvailability(info) {
            if (this.options.face && info.collection == 'music') {
                return false;
            }
            return super.checkDocumentAvailability.apply(this, arguments);
        }
    };
};
