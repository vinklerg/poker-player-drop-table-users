import { S_IFREG } from 'constants';

export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');
    const holeCards = player['hole_cards'];
    const bet = holeCards.sum(card => {
      return !parseInt(card.rank);
    });
    if (bet) {
      betCallback(gameState['small_blind'] * 5);
    } else {
      betCallback(0);
    }
  }

  public showdown(gameState: any): void {}
}

export default Player;
