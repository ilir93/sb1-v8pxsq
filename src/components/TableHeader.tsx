import React from 'react';
import { ColumnGroup } from '../types';

interface TableHeaderProps {
  columns: ColumnGroup[];
}

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
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Keyword</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">URL</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Rank</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Search Volume</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">Search Intent</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Total Clicks</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Total Impressions</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">Average CTR</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Installs</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">Reg Users</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Pageviews</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">Avg. Time on Page</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">LCP</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">CLS</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">FID</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-r border-gray-300">SEO Score</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Last Changes</th>
        <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Invested Amount</th>
      </tr>
    </thead>
  );
}