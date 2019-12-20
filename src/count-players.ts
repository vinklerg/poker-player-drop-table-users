import { Player, PlayerStatus } from './interfaces/game-state';
export const countPlayersInGame = (players: Player[]): number => {
  return players.filter(player => player.status === PlayerStatus.ACTIVE).length;
};
