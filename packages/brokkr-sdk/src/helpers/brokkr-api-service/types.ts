import { InvestMode } from "../../types";

export interface Simulation {
  save: boolean;
  save_if_fails: boolean;
  simulation_type: string;
  network_id: string;
  from: string;
  to: string;
  input: string;
}

export interface EstimatePortfolioReturnRequest {
  simulations: Simulation[];
  userAddress: string;
  investMode: InvestMode;
  outputTokenDecimals: number;
}