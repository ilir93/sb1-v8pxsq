import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Brain } from 'lucide-react';
import { KeywordData, columns } from './data';
import { TableHeader } from './components/TableHeader';
import { TableRow } from './components/TableRow';
import { Pagination } from './components/Pagination';

function App() {
  const [timeRange, setTimeRange] = useState('7d');
  const [language, setLanguage] = useState('all');
  const [tag, setTag] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1440px] mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Brain className="text-emerald-500" size={32} />
            Keywords Brain
          </h1>

          <div className="flex gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="60d">Last 60 days</option>
              <option value="90d">Last 90 days</option>
            </select>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Languages</option>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="tr">Turkish</option>
            </select>

            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Tags</option>
              <option value="featured">Featured</option>
              <option value="new">New</option>
              <option value="trending">Trending</option>
              <option value="competitive">Competitive</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <TableHeader columns={columns} />
              <tbody>
                {KeywordData.map((row, index) => (
                  <TableRow key={index} data={row} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Pagination />
      </div>
    </div>
  );
}

export default App;