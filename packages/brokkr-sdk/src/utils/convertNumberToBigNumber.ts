import { ethers } from "ethers";

type Digits = number;
type Units = 'wei' | 'kwei' | 'mwei' | 'gwei' | 'szabo' | 'finney' | 'ether';

export function convertNumberToBigNumber(number: number, unitName: Digits | Units = 'wei') {
  return ethers.utils.parseUnits(number.toString(), unitName);
}

