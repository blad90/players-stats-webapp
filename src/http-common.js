import axios from "axios";

axios.create({
    baseURL: "https://players-stats-api-hk.herokuapp.com/api",
    headers: {
        "Content-type" : "application/json"
    }
});