import { CardRank } from '../interfaces/game-state';
import { Hand } from './hand';

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

export const getHandValue = (hand: Hand): number => {
  return cardValues[hand[0].rank] + cardValues[hand[1].rank];
};
