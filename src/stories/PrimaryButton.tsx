import React from 'react';

import { Button } from '@chakra-ui/react';

interface PrimaryButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const PrimaryButton = ({
  size,
  label,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      type="button"
      size={size}
      variant="primary"
      className={['storybook-button', `storybook-button--${size}`].join(' ')}
      {...props}>
      {label}
    </Button>
  );
};
