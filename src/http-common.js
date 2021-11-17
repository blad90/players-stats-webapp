import axios from "axios";

export default axios.create({
    baseURL: "https://players-stats-api-hk.herokuapp.com/api",
    headers: {
        "Content-type" : "application/json"
    }
});