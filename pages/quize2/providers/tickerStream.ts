export interface TickerStreamWS {
  E: number; // Event time
  c: string; // Close price
  e: string; // Event type
  h: string; // Highest price
  l: string; // Lowest price
  o: string; // Open price
  q: string; // Total traded quote asset volume
  s: string; // Symbol
  v: string; // Total traded base asset volume
}
