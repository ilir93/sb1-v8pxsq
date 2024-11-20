import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Pagination() {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-sm text-gray-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
        <span className="font-medium">100</span> results
      </p>

      <div className="flex gap-2">
        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          <ChevronLeft size={16} />
          Previous
        </button>
        <button className="px-4 py-2 text-sm bg-blue-600 text-white border border-transparent rounded-lg shadow-sm hover:bg-blue-700">
          1
        </button>
        <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
          3
        </button>
        <button className="flex items-center gap-1 px-4 py-2 text-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50">
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}