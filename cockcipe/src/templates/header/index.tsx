import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderActionButton } from 'organisms/headerActionButton';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center mx-auto px-4">
        {/* 메인 로고 */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-bold text-xl">Cockcipe</span>
        </Link>
        {/* 버튼 */}
        <HeaderActionButton />
      </div>
    </header>
  );
};
