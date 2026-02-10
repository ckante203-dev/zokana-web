'use client';
import { useEffect } from 'react';

export default function Toast({ message, onClose }: { message: string, onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] animate-bounce-short">
      <div className="bg-black text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-gray-700">
        <span className="text-xl">🥤</span>
        <span className="text-xs font-black uppercase tracking-widest">{message}</span>
      </div>
    </div>
  );
}