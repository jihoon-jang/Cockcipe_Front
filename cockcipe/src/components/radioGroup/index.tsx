import React from 'react';

interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onValueChange,
  children,
}) => {
  return <div>{children}</div>;
};

interface RadioGroupItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

export const RadioGroupItem: React.FC<RadioGroupItemProps> = ({
  value,
  id,
  ...props
}) => {
  return (
    <input
      type="radio"
      value={value}
      id={id}
      {...props}
      className={`mr-2 ${props.className}`}
    />
  );
};
