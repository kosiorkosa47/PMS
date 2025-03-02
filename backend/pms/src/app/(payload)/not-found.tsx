'use client';

import Link from 'next/link';

export default function PayloadNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-4">The resource you're looking for doesn't exist.</p>
      <Link 
        href="/admin"
        className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Go to Admin Dashboard
      </Link>
    </div>
  );
}
