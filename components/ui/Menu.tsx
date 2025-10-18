"use client";

import { usePathname } from "next/navigation";
import MenuItem from "./MenuItem";

export default function Menu() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-4">
        <MenuItem 
            text="Posts" 
            href="/" 
            active={pathname === "/"} 
        />
        <MenuItem 
            text="About me" 
            href="/aboutme" 
            active={pathname === "/aboutme"}
        />
        <MenuItem 
          text="Contact me" 
          href="/contactme" 
          active={pathname == '/contactme'} 
        />
      </ul>
    </nav>
  );
}
