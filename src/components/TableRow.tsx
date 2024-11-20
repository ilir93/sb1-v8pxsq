import React from 'react';
import { KeywordRowData } from '../types';
import { formatNumber, formatDate, formatDuration, formatMetric } from '../utils';

interface TableRowProps {
  data: KeywordRowData;
}

export function TableRow({ data }: TableRowProps) {
  const getMetricClass = (value: number, threshold: number, inverse: boolean = false) => {
    const isGood = inverse ? value < threshold : value > threshold;
    return isGood ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700';
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-900">{data.keyword}</td>
      <td className="px-4 py-3 text-sm">
        <a href={`https://${data.url}`} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
          {data.url}
        </a>
      </td>
      <td className={`px-4 py-3 text-sm font-medium ${getMetricClass(data.rank, 3, true)}`}>{data.rank}</td>
      <td className="px-4 py-3 text-sm text-gray-900">{formatNumber(data.searchVolume)}</td>
      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{data.searchIntent}</td>
      <td className="px-4 py-3 text-sm text-gray-900">{formatNumber(data.totalClicks)}</td>
      <td className="px-4 py-3 text-sm text-gray-900">{formatNumber(data.totalImpressions)}</td>
      <td className={`px-4 py-3 text-sm font-medium border-r border-gray-300 ${getMetricClass(data.averageCTR, 5)}`}>
        {data.averageCTR}%
      </td>
      <td className={`px-4 py-3 text-sm font-medium ${getMetricClass(data.installs, 100)}`}>{data.installs}</td>
      <td className={`px-4 py-3 text-sm font-medium border-r border-gray-300 ${getMetricClass(data.regUsers, 80)}`}>
        {data.regUsers}
      </td>
      <td className="px-4 py-3 text-sm text-gray-900">{formatNumber(data.pageviews)}</td>
      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">{formatDuration(data.avgTimeOnPage)}</td>
      <td className={`px-4 py-3 text-sm font-medium ${getMetricClass(data.lcp, 2.5, true)}`}>
        <a
          href={`https://pagespeed.web.dev/analysis/${data.url}/xt24bms0vk?form_factor=mobile`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {formatMetric(data.lcp)}s
        </a>
      </td>
      <td className={`px-4 py-3 text-sm font-medium ${getMetricClass(data.cls, 0.1, true)}`}>{data.cls}</td>
      <td className={`px-4 py-3 text-sm font-medium border-r border-gray-300 ${getMetricClass(data.fid, 100, true)}`}>
        {data.fid}ms
      </td>
      <td className={`px-4 py-3 text-sm font-medium border-r border-gray-300 ${getMetricClass(parseInt(data.seoScore), 80)}`}>
        {data.seoScore}
      </td>
      <td className="px-4 py-3 text-sm text-gray-900">{formatDate(data.lastChanges)}</td>
      <td className="px-4 py-3 text-sm text-gray-900">${formatNumber(data.investedAmount)}</td>
    </tr>
  );
}