export interface Investment {
  id: string;
  total_investment: number;
  total_roi: number;
  roi_percentage: number;
  date_started: string;
  last_payment_received_date: string;
}

export interface Investments {
  investments: Investment[];
}
