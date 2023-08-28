import { ethers } from "ethers";
import { InvestMode } from "../../../types";

export function calculateEstimatedTxResult(
  transactionInfo: any,
  userAddress: string,
  investMode: InvestMode,
): number {
  const logs = transactionInfo.logs.map((log: any) => log.raw)
  const contractAddress = transactionInfo.contract_address

  const transferTopic = ethers.utils.id(
    ethers.utils.hexlify(ethers.utils.toUtf8Bytes("Transfer(address,address,uint256)"))
  );

  const transferLogs = logs.filter((log: any) =>
    log.topics.some((topic: any) => parseInt(topic, 10) === parseInt(transferTopic!, 10))
  );

  const mintTransfer = transferLogs.find((transferLogs: any) => {
    const fromAddress = transferLogs.topics[1];
    const toAddress = transferLogs.topics[2];

    if (investMode === 'deposit') {
      return (
        fromAddress &&
        parseInt(toAddress, 16) === parseInt(userAddress, 16) &&
        parseInt(fromAddress, 16) === 0
      );
    } else {
      return (
        toAddress &&
        parseInt(toAddress, 16) === parseInt(userAddress, 16) &&
        parseInt(fromAddress, 16) === parseInt(contractAddress, 16)
      );
    }
  });

  return parseInt(mintTransfer!.data, 16);
}
