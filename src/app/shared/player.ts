import { Team } from "./team";

export interface Player {
  player_name: string;
  team: Team;
  cost: number;
  mov: number;
  str: number;
  agl: number;
  thr: number;
  arm: number;
  hab: Array<string>

}
