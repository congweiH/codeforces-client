import { Api } from "./api.js";

const res = await Api.getContestList();

console.log(res);
