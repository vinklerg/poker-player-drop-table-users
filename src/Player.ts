enum Turns {
  PREFLOP = 'preflop',
  FLOP = 'flop',
  TURN = 'turn',
  RIVER = 'river',
}
import { GameState } from './interfaces/game-state';

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');

    const holeCards = player['hole_cards'];

    const communityCards = gameState['community_cards'];

    const turn = this.getTurn(communityCards);

    const playerBets = gameState.players.map(player => {
      return player.bet;
    });

    const maxBet = Math.max(...playerBets);

    switch (turn) {
      case Turns.PREFLOP: {
        break;
      }
      case Turns.FLOP: {
        break;
      }
      case Turns.TURN: {
        break;
      }
      case Turns.RIVER: {
        break;
      }
    }

    const rank = communityCards
      .map(card => card.rank)
      .some(communityCardRank => {
        return holeCards.map(card => card.rank).some(cardRank => cardRank === communityCardRank);
      });

    const handValue = holeCards.map(card => parseInt(card.rank) || 12).reduce((acc, curr) => acc + curr, 0);

    const color = communityCards
      .map(card => card.suit)
      .some(communityCardRank => {
        return holeCards.map(card => card.suit).some(cardRank => cardRank === communityCardRank);
      });

    const ourCardsOneColor = holeCards[0].suit === holeCards[1].suit;

    if (handValue > 17 || ourCardsOneColor) {
      betCallback(gameState.pot * 0.3);
    } else if (rank || color) {
      if (maxBet > player.bet) {
        return betCallback(maxBet + gameState.small_blind);
      }
      return betCallback(maxBet);
    } else {
      return betCallback(gameState['small_blind'] * 1);
    }
  }

  public getTurn(cCards) {
    if (cCards.length === 3) {
      return Turns.FLOP;
    } else if (cCards.length === 4) {
      return Turns.TURN;
    } else if (cCards.length === 5) {
      return Turns.RIVER;
    }
    return Turns.PREFLOP;
  }

  public showdown(gameState: any): void {}
}

export default Player;
