import Link from "next/link";

import { Options } from "./Options";

export function Nav() {
  return (
    <nav className="flex items-center justify-between h-12">
      <Link href="/">
        {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
        }
        <div className="text-2xl font-bold text-accent cursor-pointer">
          Alex Bussey
        </div>
      </Link>
      <ul className="flex items-center space-x-8">
        <Link href="/resume">
          {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
          }
          <span className="text-accent border-accent rounded-md border-2 py-2 px-4 cursor-pointer hover:text-dark hover:bg-accent dark:hover:text-primary">
            Resumé
          </span>
        </Link>
        <li>
          <Options />
        </li>
      </ul>
    </nav>
  );
}
