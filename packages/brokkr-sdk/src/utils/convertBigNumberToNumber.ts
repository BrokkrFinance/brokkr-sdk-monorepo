import { BigNumberish, ethers } from "ethers";

export function convertBigNumberToNumber(bigNumber: BigNumberish, decimals=0) {
  return parseFloat(ethers.utils.formatUnits(bigNumber, decimals));
}

