import crypto from "crypto";
import fetch from "node-fetch";

export class CfApi {
  static basePath = "https://codeforces.com/api";

  static apiKey = "";
  static secret = "";

  static getUrl(methodName, params = {}) {
    const time = parseInt(Date.now() / 1000);
    const randomInt = 123456;

    let paramList = [
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

    let hash = crypto.createHash("sha512");

    let toHash = `${randomInt}/${methodName}?`;
    for (let i = 0; i < paramList.length; i++) {
      if (i > 0) {
        toHash += "&";
      }
      toHash += `${paramList[i][0]}=${paramList[i][1]}`;
    }
    toHash += `#${this.secret}`;
    hash = hash.update(toHash, "utf8").digest("hex");

    let queryParams = [];
    paramList.forEach((item) => {
      queryParams.push(`${item[0]}=${item[1]}`);
    });
    const url = `${this.basePath}/${methodName}?${queryParams.join(
      "&"
    )}&apiSig=${randomInt}${hash}`;

    return url;
  }

  static async getBlogEntryComments(blogEntryId) {
    const response = await fetch(
      this.getUrl("blogEntry.comments", {
        blogEntryId,
      })
    );
    return response.json();
  }

  static async getBlogEntryView(blogEntryId) {
    const response = await fetch(
      this.getUrl("blogEntry.view", {
        blogEntryId,
      })
    );
    return response.json();
  }

  static async getBlogEntryView(blogEntryId) {
    const response = await fetch(
      this.getUrl("blogEntry.view", {
        blogEntryId,
      })
    );
    return response.json();
  }

  static async getContestHacks(contestId, asManager = false) {
    const response = await fetch(
      this.getUrl("contest.hacks", {
        contestId,
        asManager,
      })
    );
    return response.json();
  }

  static async getContestList(gym = false) {
    const response = await fetch(
      this.getUrl("contest.list", {
        gym,
      })
    );
    return response.json();
  }

  static async getContestRatingChanges(contestId) {
    const response = await fetch(
      this.getUrl("contest.ratingChanges", {
        contestId,
      })
    );
    return response.json();
  }

  static async getContestStandings(
    contestId,
    { asManager, from, count, handles, room, showUnofficial }
  ) {
    const response = await fetch(
      this.getUrl("contest.standings", {
        contestId,
        asManager,
        from,
        count,
        handles,
        room,
        showUnofficial,
      })
    );
    return response.json();
  }

  static async getContestStatus(contestId, { asManager, handle, from, count }) {
    const response = await fetch(
      this.getUrl("contest.status", {
        contestId,
        asManager,
        from,
        count,
        handle,
      })
    );
    return response.json();
  }
}