import axios from "axios";

const instance = axios.create({
  baseURL: "https://securityapi.burningheartihs.org",
  // baseURL: "http://localhost:3000",
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
// export {instance as axios};
