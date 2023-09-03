import { Party } from "./Party.js";
import { Problem } from "./Problem.js";
import { TestsetEnum } from "./TestsetEnum.js";
import { VerdictEnum } from "./VerdictEnum.js";

export type Submission = {
  id: number;
  contestId: number;
  creationTimeSeconds: number;
  relativeTimeSeconds: number;
  problem: Problem;
  author: Party;
  programmingLanguage: string;
  verdict: VerdictEnum;
  testset: TestsetEnum;
  passedTestCount: number;
  timeConsumedMillis: number;
  memoryConsumedBytes: number;
  points: number;
};
