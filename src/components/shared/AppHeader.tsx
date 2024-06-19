import { useRouter } from "next/router";
import Link from "next/link";
import removeTrailingSlash from "@/utils/removeTrailingSlash";

function AppHeader() {
  const router = useRouter();
  const pathname = removeTrailingSlash(router.pathname);

  return (
    <header className="z-40 mx-auto mt-8 flex max-w-[872px] flex-col gap-2 px-4 text-jefferson-light md:flex-row md:justify-center">
      <nav role="navigation">
        <ul role="list" className="flex flex-row gap-2 font-medium text-xl">
          <li>
            <Link href="/" passHref>
              <span
                className={`hover:text-jefferson-main ${pathname === "/" ? "text-jefferson-light" : ""}`}
              >
                Home
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
