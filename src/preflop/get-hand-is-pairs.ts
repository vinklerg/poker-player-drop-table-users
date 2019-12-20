import { Hand } from './hand';

export const isHandPairs = (hand: Hand): boolean => {
  return hand[0].rank === hand[1].rank;
};
