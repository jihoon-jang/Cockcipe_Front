import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) => {
  const baseStyle =
    'font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-lg'; // 둥근 모서리

  const variantStyles = {
    default:
      'bg-black text-white hover:bg-gray-800 transition duration-200 ease-in-out', // 어두운 배경과 흰색 텍스트
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
    ghost: 'text-gray-700 hover:bg-gray-100',
  };

  const sizeStyles = {
    default: 'px-4 py-2 text-base', // 기본 여백과 텍스트 크기
    sm: 'px-3 py-1 text-sm',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
