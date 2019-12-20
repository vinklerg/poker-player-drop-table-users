export type GameState = {
  tournament_id: string; // Id of the current tournament

  game_id: string; // Id of the current sit'n'go game. You can use this to link a
  // sequence of game states together for logging purposes, or to
  // make sure that the same strategy is played for an entire game

  round: number; // Index of the current round within a sit'n'go

  bet_index: number; // Index of the betting opportunity within a round

  small_blind: number; // The small blind in the current round. The big blind is twice the
  //     small blind

  current_buy_in: number; // The amount of the largest current bet from any one player

  pot: number; // The size of the pot (sum of the player bets)

  minimum_raise: number; // Minimum raise amount. To raise you have to return at least:
  //     current_buy_in - players[in_action][bet] + minimum_raise

  dealer: number; // The index of the player on the dealer button in this round
  //     The first player is (dealer+1)%(players.length)

  orbits: number; // Number of orbits completed. (The number of times the dealer
  //     button returned to the same player.)

  in_action: number; // The index of your player, in the players array

  players: Player[];
  community_cards: Card[];
};

export type Card = {
  rank: CardRank;
  suit: CardSuit;
};

export enum PlayerStatus {
  ACTIVE = 'active',
  FOLDED = 'folded',
  OUT = 'out',
}

export type Player = {
  //     entire tournament

  id: number; // Id of the player (same as the index)

  name: string; // Name specified in the tournament config

  status: PlayerStatus; // Status of the player:
  //   - active: the player can make bets, and win the current pot
  //   - folded: the player folded, and gave up interest in
  //       the current pot. They can return in the next round.
  //   - out: the player lost all chips, and is out of this sit'n'go

  version: string; // Version identifier returned by the player

  stack: number; // Amount of chips still available for the player. (Not including
  //     the chips the player bet in this round.)

  bet: number; // The amount of chips the player put into the pot
  hole_cards: Card[];
};
export enum CardRank {
  R_ACE = 'A',
  R_KING = 'K',
  R_JACK = 'J',
  R_QUEEN = 'Q',
  R_2 = '2',
  R_3 = '3',
  R_4 = '4',
  R_5 = '5',
  R_6 = '6',
  R_7 = '7',
  R_8 = '8',
  R_9 = '9',
  R_10 = '10',
}

export enum CardSuit {
  CLUBS = 'clubs',
  HEARTS = 'hearts',
  SPADES = 'spades',
  DIAMONDS = 'diamonds',
}
