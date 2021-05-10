import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-b9129-default-rtdb.firebaseio.com";

export default instance;
