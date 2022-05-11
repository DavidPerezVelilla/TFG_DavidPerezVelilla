import { Player } from "./player";
import { Race } from "./race";

export interface Team {
  $key: string;
  team_name: string;
  description: string;
  img: string;
  icon: string;
  race: Race
  players: Array<Player>;
}
