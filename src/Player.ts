enum Turns {
  PREFLOP = 'preflop',
  FLOP = 'flop',
  TURN = 'turn',
  RIVER = 'river',
}
import { GameState } from './interfaces/game-state';

export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    const call = () => {
      betCallback(gameState.current_buy_in - gameState.players[gameState.in_action].bet);
    };

    const raise = () => {
      betCallback(gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise);
    };

    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');

    const holeCards = player['hole_cards'];

    const communityCards = gameState['community_cards'];

    const turn = this.getTurn(communityCards);

    const playerBets = gameState.players.map(player => {
      return player.bet;
    });

    const maxBet = Math.max(...playerBets);

    return raise();
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
