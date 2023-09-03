import { Party } from "./Party.js";
import { ProblemResult } from "./ProblemResult.js";

export type RanklistRow = {
  party: Party;
  rank: number;
  points: number;
  penalty: number;
  successfulHackCount: number;
  unsuccessfulHackCount: number;
  problemResults: Array<ProblemResult>;
  lastSubmissionTimeSeconds: number;
};
