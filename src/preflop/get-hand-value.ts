import { CardRank } from '../interfaces/game-state';
import { Hand } from './hand';

const matrix = [
  [32, 18, 17, 16, 15, 14, 13, 12, 12, 12, 12, 11, 11],
  [16, 28, 16, 15, 14, 13, 12, 12, 6, 6, 6, 6, 6],
  [15, 14, 25, 14, 14, 12, 11, 10, 6, 6, 6, 6, 6],
  [14, 13, 14, 23, 13, 12, 10, 9, 6, 6, 6, 6, 6],
  [13, 12, 14, 13, 20, 12, 10, 9, 6, 6, 6, 6, 6],
  [12, 11, 12, 12, 12, 18, 10, 9, 6, 6, 6, 6, 6],
  [11, 10, 11, 10, 8, 10, 16, 9, 6, 6, 6, 6, 6],
  [10, 9, 10, 8, 8, 6, 9, 14, 8, 6, 6, 6, 6],
  [9, 6, 6, 6, 6, 6, 6, 9, 12, 8, 6, 6, 6],
  [11, 6, 6, 6, 6, 6, 6, 6, 6, 10, 6, 6, 6],
  [9, 6, 6, 6, 6, 6, 6, 6, 6, 6, 9, 6, 6],
  [9, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 8, 4],
  [9, 6, 6, 6, 6, 6, 6, 4, 4, 4, 4, 4, 7],
];

export const cardValues = {
  [CardRank.R_ACE]: 50,
  [CardRank.R_KING]: 12,
  [CardRank.R_JACK]: 12,
  [CardRank.R_QUEEN]: 12,
  [CardRank.R_2]: 2,
  [CardRank.R_3]: 3,
  [CardRank.R_4]: 4,
  [CardRank.R_5]: 5,
  [CardRank.R_6]: 6,
  [CardRank.R_7]: 7,
  [CardRank.R_8]: 8,
  [CardRank.R_9]: 9,
  [CardRank.R_10]: 10,
};

export const cardColumnValue = [
  CardRank.R_ACE,
  CardRank.R_KING,
  CardRank.R_QUEEN,
  CardRank.R_JACK,
  CardRank.R_10,
  CardRank.R_9,
  CardRank.R_8,
  CardRank.R_7,
  CardRank.R_6,
  CardRank.R_5,
  CardRank.R_4,
  CardRank.R_3,
  CardRank.R_2,
];

export const getHandValue = (hand: Hand): number => {
  const columnNum = cardColumnValue.indexOf(hand[0].rank);
  const lineNum = cardColumnValue.indexOf(hand[0].rank);
  return matrix[columnNum][lineNum];
};
