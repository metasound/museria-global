import client from "museria-ms/src/client";
const Client = client();
export default (Parent) => {
    return class ClientMuseriaGlobal extends (Parent || Client) {
    };
};
