import React from 'react';

import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Icon,
  VStack,
  HStack,
  Text,
  Spacer,
  Collapse,
} from '@chakra-ui/react';
import { HiLightBulb } from 'react-icons/hi';
import { IoMdCube } from 'react-icons/io';

import { Hint } from './Hint';
import { PrimaryButton } from './PrimaryButton';
import { Tag } from './Tag';

interface MilestoneCardProps {
  /**
   * Card contents
   */
  title: string;
  text: string;
  hintLabel?: string;
  hintSize: 'full' | 'icon' | undefined;
  hintLabelColor: 'black' | 'orange' | undefined;
  tags: JSX.Element[];
}

/**
 * Primary UI component for user interaction
 */
export const MilestoneCard = ({
  title,
  text,
  hintLabel,
  hintSize,
  hintLabelColor,
  tags,
  ...props
}: MilestoneCardProps) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <Box
      backgroundColor="white"
      w="600px"
      p="24px"
      padding-top="10px"
      borderRadius="8px"
      boxShadow="0px 4px 20px 5px rgba(213, 213, 213, 0.5);">
      <VStack>
        <HStack w="100%" align="space-between" justify="space-between">
          <VStack pb="20px">
            <Text textStyle="h3">{title}</Text>
            <HStack w="100%" justify="start">
              {tags}
            </HStack>
          </VStack>
          <Hint
            label={hintLabel}
            size={hintSize}
            labelColor={hintLabelColor}></Hint>
        </HStack>
        {/* Text Section */}
        <Collapse startingHeight={100} in={show}>
          <Text
            bgGradient={
              show
                ? 'linear-gradient(0deg, rgba(0,0,0,1) 60%, rgba(0,0,0,1) 100%)'
                : 'linear-gradient(0deg, rgba(255,255,255,1) 60%, rgba(0,0,0,1) 100%)'
            }
            bgClip="text">
            {text}
          </Text>
        </Collapse>
        <Button
          size="sm"
          onClick={handleToggle}
          mt="1rem"
          marginTop="1rem"
          colorScheme="orange"
          variant="link">
          {show ? <ChevronUpIcon /> : <ChevronDownIcon />}
          <Text textStyle="section2">{show ? 'SHOW iLESS' : 'EXPAND'}</Text>
        </Button>
        {/* Bottom row of buttons */}
        <HStack w="100%" justify="space-between" pt="20px">
          <PrimaryButton size="md" label="Upload Work" />
          <Button w="155px" variant="tagXl" bg="white">
            <HStack w="155px">
              {<Icon as={IoMdCube} color="#B3B0BC" />}
              <Text paddingLeft="13px" fontWeight="400" color="#B3B0BC">
                Sample Output
              </Text>
            </HStack>
          </Button>
          <Button w="155px" variant="tagXl" bg="white">
            <HStack w="155px">
              {<Icon as={IoMdCube} color="#B3B0BC" />}
              <Text paddingLeft="13px" fontWeight="400" color="#B3B0BC">
                Sample Output
              </Text>
            </HStack>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};
