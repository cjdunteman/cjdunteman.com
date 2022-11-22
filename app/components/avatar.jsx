import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';

const AvatarDemo = () => (
  <Avatar.Root>
    <Avatar.Image/>
    <Avatar.Fallback />
  </Avatar.Root>
);

export default AvatarDemo;