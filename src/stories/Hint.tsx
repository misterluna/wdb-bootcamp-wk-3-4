import React from 'react';

import { Box, Button, Icon } from '@chakra-ui/react';
import { HiLightBulb } from 'react-icons/hi';

interface HintProps {
  /**
   * Button contents
   */
  size?: 'full' | 'icon';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Hint = ({ size, ...props }: HintProps) => {
  const icon = (
    <Button
      type="button"
      variant="hintIcon"
      className={['storybook-button', `storybook-button-hint`].join(' ')}
      {...props}>
      <Icon as={HiLightBulb} style={{ fontSize: '30px' }} />
    </Button>
  );

  const full = (
    <Box
      className={['storybook-hint', `storybook-button-hint`].join(' ')}
      w="155px"
      backgroundColor="#FFF0E6"
      borderRadius="48px"
      {...props}>
      {icon}
      Get Hint
    </Box>
  );

  return size === 'full' ? full : icon;
};
