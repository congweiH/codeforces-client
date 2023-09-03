导入

```bash
npm install @congwei1104/codeforces-client
```

使用

```js
import { CodeforcesClient, MethodType } from "@congwei1104/codeforces-client";

// 获取比赛列表
const res = await CodeforcesClient.sendRequest(MethodType.Contest_List);
```
