import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: React.FC<LabelProps> = (props) => {
  return (
    <label
      {...props}
      className={`block text-sm font-medium ${props.className}`}
    />
  );
};
