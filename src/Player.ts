export class Player {
  public betRequest(gameState: any, betCallback: (bet: number) => void): void {
    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');
    const playerBets = gameState.players.map(player => {
      return player.bet;
    });

    const maxBet = Math.max(playerBets);
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

    if (rank) {
      betCallback(gameState['small_blind'] * 5);
    } else {
      betCallback(gameState['small_blind'] * 1);
    }
  }

  public showdown(gameState: any): void {}
}

export default Player;
