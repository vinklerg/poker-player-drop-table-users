import { GameState } from "./interfaces/game-state";

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');
    const playerBets = gameState.players.map(player => {
      return player.bet;
    });

    const maxBet = Math.max(...playerBets);
    if (maxBet > player.bet) {
      return betCallback(maxBet - player.bet);
    }

    const holeCards = player['hole_cards'];

    const communityCards = gameState['community_cards'];

    const rank = communityCards
      .map(card => card.rank)
      .some(communityCardRank => {
        return holeCards.map(card => card.rank).some(cardRank => cardRank === communityCardRank);
      });

    const handValue = holeCards.map(card => parseInt(card.rank) || 10).reduce((acc, curr) => acc + curr, 0);

    const color = communityCards
      .map(card => card.suit)
      .some(communityCardRank => {
        return holeCards.map(card => card.suit).some(cardRank => cardRank === communityCardRank);
      });

    if (handValue > 20) {
      betCallback(gameState['small_blind'] * 10);
    } else if (rank || color) {
      betCallback(gameState['small_blind'] * 5);
    } else if (handValue < 8 && !color) {
      betCallback(0);
    } else {
      betCallback(gameState['small_blind'] * 1);
    }
  }

  public showdown(gameState: any): void {}
}

export default Player;
