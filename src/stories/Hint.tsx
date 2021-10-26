import React from 'react';

import { Box, Button, Icon, HStack, Text } from '@chakra-ui/react';
import { HiLightBulb } from 'react-icons/hi';

interface HintProps {
  /**
   * Button contents
   */
  size?: 'full' | 'icon';
  labelColor?: 'black' | 'orange';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Hint = ({ size, labelColor, ...props }: HintProps) => {
  const icon = (
    <Button
      type="button"
      variant="hintIcon"
      className={['storybook-button', `storybook-button-hint`].join(' ')}
      {...props}>
      <Icon as={HiLightBulb} style={{ fontSize: '30px', color: 'white' }} />
    </Button>
  );

  const full = (
    <Box
      className={['storybook-hint', `storybook-button-hint`].join(' ')}
      w="155px"
      backgroundColor="#FFF0E6"
      borderRadius="48px"
      {...props}>
      <HStack w="155px">
        {icon}
        <Text
          paddingLeft="16px"
          color={labelColor === 'orange' ? 'orange.500' : 'black'}
          fontWeight="400">
          Get Hint
        </Text>
      </HStack>
    </Box>
  );

  return size === 'full' ? full : icon;
};
