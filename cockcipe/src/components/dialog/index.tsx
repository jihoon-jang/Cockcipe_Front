import React from 'react';

export function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 ${open ? 'block' : 'hidden'}`}
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={() => onOpenChange(false)}
        />
        <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
          {children}
        </div>
      </div>
    </div>
  );
}

export function DialogTrigger({
  asChild,
  children,
  onClick,
}: {
  asChild?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const triggerProps = asChild ? {} : { className: 'cursor-pointer' };
  return (
    <div {...triggerProps} onClick={onClick}>
      {children}
    </div>
  );
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 border-b pb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold text-gray-800">{children}</h2>;
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-gray-600 mt-2">{children}</p>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-4">{children}</div>;
}
