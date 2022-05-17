import { Player } from "./player.model";
import { Race } from "./race.model";


export class Team {
  team_name: string;
  description: string;
  img: string;
  icon: string;
  race: Race
  players: Array<Player>;
}
