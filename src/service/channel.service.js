import axios from "axios";
import authHeader from "./auth-header";

const URl = 'http://localhost:8080/api';

const createChannel = async (data) => {
    return axios.post("/channel", data, {
        headers: {
            Authorization: authHeader().Authorization
        }
    })
        .then((res) => { return res })
        .catch((error) => { return error })
}

const ChannelService = {
    createChannel
}

export default ChannelService