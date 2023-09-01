import { Config } from "./config.js";
import crypto from "crypto";
import fetch from "node-fetch";

export class Api {
  static getUrl(methodName, params = {}) {
    const time = parseInt(Date.now() / 1000);
    const randomInt = 123456;

    let paramList = [
      ["apiKey", Config.apiKey],
      ["time", String(time)],
    ];
    for (const [key, value] of Object.entries(params)) {
      paramList.push([key, String(value)]);
    }

    // 排序
    paramList.sort((x, y) => {
      if (x[0] === y[0]) {
        return x[1].localeCompare(y[1]);
      }
      return x[0].localeCompare(y[0]);
    });

    let hash = crypto.createHash("sha512");

    let toHash = `${randomInt}/${methodName}?`;
    for (let i = 0; i < paramList.length; i++) {
      if (i > 0) {
        toHash += "&";
      }
      toHash += `${paramList[i][0]}=${paramList[i][1]}`;
    }
    toHash += `#${Config.secret}`;
    hash = hash.update(toHash, "utf8").digest("hex");

    let queryParams = [];
    paramList.forEach((item) => {
      queryParams.push(`${item[0]}=${item[1]}`);
    });
    const url = `${Config.basePath}/${methodName}?${queryParams.join(
      "&"
    )}&apiSig=${randomInt}${hash}`;

    return url;
  }

  static async getContestList() {
    const response = await fetch(this.getUrl("contest.list"));
    return response.json();
  }
}
