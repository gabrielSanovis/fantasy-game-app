export interface Player {
    id: number;
    name: string;
    playerPosition: string;
    team: string;
    score: string;
}

export interface PlayerDTO {
    id: number;
    name: string;
    position: string;
    team: string;
    score: number;
}
