// Updated Table Components

import React from 'react';

// Table Component
export function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md rounded-md">
        {children}
      </table>
    </div>
  );
}

// TableHeader Component
export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100 text-gray-700">{children}</thead>;
}

// TableRow Component
export function TableRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors border-b border-gray-200">
      {children}
    </tr>
  );
}

// TableHead Component
export function TableHead({ children }: { children: React.ReactNode }) {
  return (
    <th className="text-left p-4 font-semibold text-gray-800 uppercase border-b border-gray-200">
      {children}
    </th>
  );
}

// TableBody Component
export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>;
}

// TableCell Component
export function TableCell({ children }: { children: React.ReactNode }) {
  return (
    <td className="p-4 text-gray-700 border-b border-gray-200">{children}</td>
  );
}
