import { Card, GameState } from './interfaces/game-state';
// import { getHandValue } from './preflop/get-hand-value';
// import { isHandPairs } from './preflop/get-hand-is-pairs';
// import { isSameSuit } from './preflop/get-hand-is-same-suit';
enum Turns {
  PREFLOP = 'preflop',
  FLOP = 'flop',
  TURN = 'turn',
  RIVER = 'river',
}
export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    // const call = () => betCallback(gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0));

    const raise = () =>
      betCallback(
        gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0) + gameState.minimum_raise,
      );

    return raise();
    // const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');

    // const holeCards = player['hole_cards'];

    // const communityCards = gameState['community_cards'];

    // const turn = this.getTurn(communityCards);

    // const playerBets = gameState.players.map(player => {
    //   return player.bet;
    // });

    // const maxBet = Math.max(...playerBets);

    // let valueOfPocket = getHandValue([player.hole_cards[0], player.hole_cards[1]]);
    // const pairsInPocket = isHandPairs([player.hole_cards[0], player.hole_cards[1]]);
    // const szinInpocket = isSameSuit([player.hole_cards[0], player.hole_cards[1]]);

    // switch (turn) {
    //   case Turns.PREFLOP: {
    //     console.log('in preflop');
    //     if (pairsInPocket) {
    //       console.log('pairs');
    //       if (valueOfPocket < 14) {
    //         console.log('should call 1');
    //         return call();
    //       }
    //       console.log('should raise 1');
    //       return raise();
    //     }
    //     if (szinInpocket) {
    //       console.log('szin');
    //       valueOfPocket = valueOfPocket * 2;
    //     }
    //     if (valueOfPocket > 18 && valueOfPocket < 48) {
    //       console.log('should call 2');
    //       return call();
    //     } else if (valueOfPocket >= 48) {
    //       console.log('should raise 2');
    //       return raise();
    //     }
    //     console.log('should fold 1');
    //     return call();
    //   }
    //   default: {
    //     return call();
    //   }
    // }
  }

  public getTurn(cCards: Card[]) {
    if (cCards.length === 3) {
      return Turns.FLOP;
    } else if (cCards.length === 4) {
      return Turns.TURN;
    } else if (cCards.length === 5) {
      return Turns.RIVER;
    }
    return Turns.PREFLOP;
  }

  public showdown(): void {}
}

export default Player;
