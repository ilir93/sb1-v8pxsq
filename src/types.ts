export interface ColumnGroup {
  name: string;
  span: number;
}

export interface KeywordRowData {
  keyword: string;
  url: string;
  rank: number;
  searchVolume: number;
  searchIntent: string;
  totalClicks: number;
  totalImpressions: number;
  averageCTR: number;
  installs: number;
  regUsers: number;
  pageviews: number;
  avgTimeOnPage: number;
  lcp: number;
  cls: number;
  fid: number;
  seoScore: string;
  lastChanges: string;
  investedAmount: number;
}