import { Hand } from './hand';

export const isSameSuit = (hand: Hand): boolean => {
  return hand[0].suit === hand[1].suit;
};
