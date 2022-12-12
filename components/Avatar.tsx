'use client'

import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';
import 'styles/avatar.css'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const UserAvatar = (avatar: { avatar: string}) => {
  return (
  <Link href="/account">
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src={avatar.avatar}
        alt="Pedro Duarte"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        <UserCircleIcon className="text-black"/>
      </Avatar.Fallback>
    </Avatar.Root>
  </Link>
  );
}

export default UserAvatar;