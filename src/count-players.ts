import { Player, PlayerStatus } from './interfaces/game-state';
export const countPlayerInGame = (players: Player[]): number => {
  return players.filter(player => player.status === PlayerStatus.ACTIVE).length;
};
