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
      betCallback(gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0));
    };

    const raise = () => {
      console.log(
        'DEBUG ',
        gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise,
      );
      betCallback(
        gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0) + gameState.minimum_raise,
      );
    };

    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');

    const holeCards = player['hole_cards'];

    const communityCards = gameState['community_cards'];

    const turn = this.getTurn(communityCards);

    const playerBets = gameState.players.map(player => {
      return player.bet;
    });

    const maxBet = Math.max(...playerBets);

    let valueOfPocket = 18;
    const pairsInPocket = true;
    const szinInpocket = true;

    switch (turn) {
      case Turns.PREFLOP: {
        console.log('in preflop');
        if (pairsInPocket) {
          console.log('pairs');
          if (valueOfPocket < 14) {
            console.log('should call 1');
            return call();
          }
          console.log('should raise 1');
          return raise();
        }
        if (szinInpocket) {
          console.log('szin');
          valueOfPocket = valueOfPocket * 2;
        }
        if (valueOfPocket > 18 && valueOfPocket < 48) {
          console.log('should call 2');
          return call();
        } else if (valueOfPocket >= 48) {
          console.log('should raise 2');
          return raise();
        }
        console.log('should fold 1');
        return betCallback(0);
      }
      default: {
        return call();
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
