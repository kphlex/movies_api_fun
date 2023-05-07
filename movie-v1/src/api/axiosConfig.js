import axios from 'axios';

export default axios.create({
    baseURL: 'https://a876-98-50-47-223.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true",
    "Access-Control-Allow-Origin": "*"}
});
