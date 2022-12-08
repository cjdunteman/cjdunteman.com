'use client'

import * as Avatar from '@radix-ui/react-avatar';
import Link from 'next/link';
import 'styles/avatar.css'

const UserAvatar = () => (
  <Link href="/account">
    <Avatar.Root className="AvatarRoot">
      <Avatar.Image
        className="AvatarImage"
        src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
        alt="Pedro Duarte"
      />
      <Avatar.Fallback className="AvatarFallback" delayMs={600}>
        JD
      </Avatar.Fallback>
    </Avatar.Root>
  </Link>
);

export default UserAvatar;