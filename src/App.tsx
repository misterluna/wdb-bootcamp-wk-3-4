import * as React from 'react';

import { Button } from '@chakra-ui/button';

import { PrimaryButton } from './stories/PrimaryButton';

export const App = () => {
  return (
    <>
      <PrimaryButton size="md" label="Primary" />
      <Button size="md"></Button>
    </>
  );
};
