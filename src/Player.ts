import { Card, GameState } from './interfaces/game-state';
import { getHandValue } from './preflop/get-hand-value';
// import { getHandValue } from './preflop/get-hand-value';
// import { groupBy } from 'lodash';
// import { countPlayersInGame } from './count-players';
enum Turns {
  PREFLOP = 'preflop',
  FLOP = 'flop',
  TURN = 'turn',
  RIVER = 'river',
}
export class Player {
  public betRequest(gameState: GameState, betCallback: (bet: number) => void): void {
    // const call = () => betCallback(gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0));

    // const raise = (times = 1) =>
    //   betCallback(
    //     gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0) + gameState.minimum_raise * times,
    //   );

    // const raisePot = (i: number) => {
    //   if (gameState.players[gameState.in_action].stack >= gameState.pot * i) {
    //     return betCallback(
    //       gameState.current_buy_in - (gameState.players[gameState.in_action].bet || 0) + gameState.pot * i,
    //     );
    //   }
    //   return raise();
    // };
    const [player] = gameState.players.filter(player => player.name === 'DROP TABLE users');

    const valueOfPocket = getHandValue([player.hole_cards[0], player.hole_cards[1]]);
    if (valueOfPocket >= 9) {
      return betCallback(gameState.players[gameState.in_action].stack);
    }
    return betCallback(0);

    // const holeCards = player['hole_cards'];

    // const communityCards = gameState['community_cards'];

    // const turn = this.getTurn(communityCards);

    // let valueOfPocket = getHandValue([player.hole_cards[0], player.hole_cards[1]]);

    // switch (turn) {
    //   case Turns.PREFLOP: {
    //     if (valueOfPocket < 7) {
    //       return betCallback(0);
    //     }
    //     if (valueOfPocket > 7 && valueOfPocket < 10) {
    //       return call();
    //     }
    //     return raisePot(1);
    //   }
    //   case Turns.RIVER: {
    //     const countPlayers = countPlayersInGame(gameState.players);
    //     if (countPlayers == 2) {
    //       return raise();
    //     }

    //     const numOfColors = Object.values(
    //       groupBy([...communityCards.map(card => card.suit), ...holeCards.map(card => card.suit)]),
    //     ).sort((a, b) => b.length - a.length)[0].length;
    //     const numOfRanks = Object.values(
    //       groupBy([...communityCards.map(card => card.rank), ...holeCards.map(card => card.rank)]),
    //     ).sort((a, b) => b.length - a.length)[0].length;
    //     if (numOfColors >= 5 || numOfRanks >= 2) {
    //       return raisePot(1);
    //     }
    //     return call();
    //   }
    //   default: {
    //     const numOfColors = Object.values(
    //       groupBy([...communityCards.map(card => card.suit), ...holeCards.map(card => card.suit)]),
    //     ).sort((a, b) => b.length - a.length)[0].length;
    //     const numOfRanks = Object.values(
    //       groupBy([...communityCards.map(card => card.rank), ...holeCards.map(card => card.rank)]),
    //     ).sort((a, b) => b.length - a.length)[0].length;
    //     if (numOfColors >= 5 || numOfRanks >= 2) {
    //       return raisePot(1);
    //     }
    //     if (numOfColors >= 4) {
    //       return raisePot(0.5);
    //     }
    //     return call();
    //   }
    // }
  }

  public getTurn(cCards: Card[]) {
    if (cCards.length === 3) {
      return Turns.FLOP;
    }
    if (cCards.length === 4) {
      return Turns.TURN;
    }
    if (cCards.length === 5) {
      return Turns.RIVER;
    }
    return Turns.PREFLOP;
  }

  public showdown(): void {}
}

export default Player;
