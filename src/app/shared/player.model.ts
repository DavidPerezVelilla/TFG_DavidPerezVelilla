import { Team } from "./team.model";


export class Player {
  player_name: string;
  cost: number;
  mov: number;
  str: number;
  agl: number;
  thr: number;
  arm: number;
  hab: Array<string>
  team: Team;

}
