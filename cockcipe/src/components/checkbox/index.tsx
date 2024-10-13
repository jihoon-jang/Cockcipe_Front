import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  onCheckedChange,
  ...props
}) => {
  return (
    <input
      type="checkbox"
      onChange={(e) => onCheckedChange && onCheckedChange(e.target.checked)}
      {...props}
      className={`mr-2 ${props.className}`}
    />
  );
};
