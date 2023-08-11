import { Chain } from "../types";

export function getVersionedServiceURL(path: string, chain: Chain) {
  const BASE_URL = 'https://sdkadjustments.app.brokkr-test.b42.tech/api';
  return `${BASE_URL}/${chain}/portfolio${path}`;
}