import axios from "axios";
const URL = "";

function findAll() {
  return axios.get(URL).then((res) => res.data);
}

export default {
  findAll
};
