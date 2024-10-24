import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full py-6 bg-background border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Cockcipe. All rights reserved.
          </p>

          <nav className="flex gap-4">
            <Link to="#" className="text-sm font-medium hover:underline">
              이용약관
            </Link>
            <Link to="#" className="text-sm font-medium hover:underline">
              개인정보처리방침
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
