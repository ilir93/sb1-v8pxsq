import React from 'react';
import { ColumnGroup } from '../types';
import { Info } from 'lucide-react';

interface TableHeaderProps {
  columns: ColumnGroup[];
}

interface ColumnInfo {
  label: string;
  tooltip: string;
}

const columnInfos: { [key: string]: ColumnInfo } = {
  keyword: { label: 'Keyword', tooltip: 'The target search term or phrase' },
  url: { label: 'URL', tooltip: 'The webpage URL targeting this keyword' },
  rank: { label: 'Rank', tooltip: 'Current position in search results (lower is better)' },
  searchVolume: { label: 'Search Volume', tooltip: 'Monthly search volume for this keyword' },
  searchIntent: { label: 'Search Intent', tooltip: 'User intent behind the search query (Commercial, Informational, etc.)' },
  totalClicks: { label: 'Total Clicks', tooltip: 'Number of clicks from search results' },
  totalImpressions: { label: 'Total Impressions', tooltip: 'Number of times the page appeared in search results' },
  averageCTR: { label: 'Average CTR', tooltip: 'Click-through rate (percentage of impressions that result in clicks)' },
  installs: { label: 'Installs', tooltip: 'Number of app installations from this landing page' },
  regUsers: { label: 'Reg Users', tooltip: 'Number of registered users from this keyword' },
  pageviews: { label: 'Pageviews', tooltip: 'Total number of page views' },
  avgTimeOnPage: { label: 'Avg. Time on Page', tooltip: 'Average time users spend on the page' },
  lcp: { label: 'LCP', tooltip: 'Largest Contentful Paint - measures loading performance' },
  cls: { label: 'CLS', tooltip: 'Cumulative Layout Shift - measures visual stability' },
  fid: { label: 'FID', tooltip: 'First Input Delay - measures interactivity' },
  seoScore: { label: 'SEO Score', tooltip: 'Overall SEO optimization score out of 100' },
  lastChanges: { label: 'Last Changes', tooltip: 'Date of most recent content updates' },
  investedAmount: { label: 'Invested Amount', tooltip: 'Total money invested in this keyword' }
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead>
      <tr className="bg-gray-50 border-b border-gray-200">
        {columns.map((group, index) => (
          <th
            key={index}
            colSpan={group.span}
            className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider text-center border-r border-gray-200 last:border-r-0"
          >
            {group.name}
          </th>
        ))}
      </tr>
      <tr className="bg-gray-50 border-b border-gray-200">
        {Object.entries(columnInfos).map(([key, info]) => (
          <th key={key} className="px-4 py-3 text-left text-sm font-medium text-gray-700 group">
            <div className="flex items-center gap-1">
              {info.label}
              <div className="relative">
                <Info size={14} className="text-gray-400" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-48 z-10">
                  {info.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                    <div className="border-4 border-transparent border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
}