import { Member } from "./Member.js";

export type Party = {
  contestId: number;
  members: Array<Member>;
  participantType:
    | "CONTESTANT"
    | "PRACTICE"
    | "VIRTUAL"
    | "MANAGER"
    | "OUT_OF_COMPETITION";
  teamId: number;
  teamName: string;
  ghost: boolean;
  room: number;
  startTimeSeconds: number;
};
