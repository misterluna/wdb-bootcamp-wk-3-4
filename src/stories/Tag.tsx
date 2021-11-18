import React from 'react';

import { Box, Button, Icon, HStack, Text } from '@chakra-ui/react';
import { BsVectorPen } from 'react-icons/bs';
import { IoMdCube } from 'react-icons/io';

interface TagProps {
  /**
   * Button contents
   */
  variant?: 'tagSm' | 'tagSmColor' | 'tagMd' | 'tagMdColor' | 'tagLg' | 'tagXl';
  label?: string;
  iconType?: 'cube' | 'pen';
  type: 'text' | 'icon' | 'full';
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Tag = ({ iconType, label, variant, type, ...props }: TagProps) => {
  const icon = (iconType: 'cube' | 'pen' | undefined) => (
    <Icon as={iconType === 'cube' ? IoMdCube : BsVectorPen} />
  );

  const iconTag = <Button variant="tagIcon">{icon(iconType)}</Button>;

  const textTag = (
    <Button
      variant={
        variant === 'tagSm' ||
        variant === 'tagSmColor' ||
        variant === 'tagMd' ||
        variant == 'tagMdColor'
          ? variant
          : 'tagMdColor'
      }>
      <Text>{label}</Text>
    </Button>
  );

  const fullTag = (
    <Button
      w="155px"
      variant={variant === 'tagXl' || variant === 'tagLg' ? variant : 'tagXl'}
      boxShadow="1px 2px 4px rgba(213, 213, 213, 0.25);"
      {...props}>
      <HStack w="155px">
        {icon(variant === 'tagXl' ? 'cube' : 'pen')}
        <Text paddingLeft="13px" fontWeight="400">
          {label}
        </Text>
      </HStack>
    </Button>
  );

  switch (type) {
    case 'text':
      return textTag;
    case 'icon':
      return iconTag;
    case 'full':
      return fullTag;
    default:
      return fullTag;
  }
};
