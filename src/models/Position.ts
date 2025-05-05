import { Player } from "./Player";

export type Positions = Record<Position, Player[]>;

export type Position = "ATA" | "MEI" | "DEF" | "GOL"; 