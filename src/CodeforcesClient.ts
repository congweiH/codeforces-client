import crypto from "crypto";
import fetch from "node-fetch";

export class CodeforcesClient {
  static basePath: string = "https://codeforces.com/api";

  static apiKey: string = "";
  static secret: string = "";

  static getUrl(methodName: string, params: object = {}): string {
    const time: number = Math.round(Date.now() / 1000);
    const randomInt: number = 123456;

    let paramList: string[][] = [
      ["apiKey", this.apiKey],
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

    let hash: crypto.Hash = crypto.createHash("sha512");

    let toHash = `${randomInt}/${methodName}?`;
    for (let i = 0; i < paramList.length; i++) {
      if (i > 0) {
        toHash += "&";
      }
      toHash += `${paramList[i][0]}=${paramList[i][1]}`;
    }
    toHash += `#${this.secret}`;
    const hashStr = hash.update(toHash, "utf8").digest("hex");

    let queryParams: string[] = [];
    paramList.forEach((item) => {
      queryParams.push(`${item[0]}=${item[1]}`);
    });
    const url = `${this.basePath}/${methodName}?${queryParams.join(
      "&"
    )}&apiSig=${randomInt}${hashStr}`;

    return url;
  }

  static async sendRequest(methodName: string, params: object = {}) {
    const response = await fetch(this.getUrl(methodName, params));
    return response.json();
  }
}
