import { Party } from "./Party.js";
import { HackVerdictEnum } from "./HackVerdictEnum.js";
import { Problem } from "./Problem.js";
import { JudgeProtocol } from "./JudgeProtocol.js";

export type Hack = {
  id: number;
  creationTimeSeconds: number;
  hacker: Party;
  defender: Party;
  verdict: HackVerdictEnum;
  problem: Problem;
  test: string;
  judgeProtocol: JudgeProtocol;
};
