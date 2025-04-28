"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/articles",
    name: "Articles",
  },
  {
    link: "/projects",
    name: "Projects",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const activeStyle = useMemo(
    () => (link: string) => {
      const baseStyle =
        "relative block px-3 py-2 transition hover:text-teal-500";
      const activeIndicator = "text-teal-500";

      if (pathname === "/" && link === "/") {
        return baseStyle.concat(" ", activeIndicator);
      } else if (pathname.startsWith(link) && link !== "/") {
        return baseStyle.concat(" ", activeIndicator);
      } else {
        return baseStyle;
      }
    },
    [pathname]
  );

  const isActive = useMemo(
    () => (link: string) => {
      if (pathname === "/" && link === "/") {
        return true;
      } else if (pathname.startsWith(link) && link !== "/") {
        return true;
      } else {
        return false;
      }
    },
    [pathname]
  );

  return (
    <header
      className="pointer-events-none relative z-50 flex flex-none flex-col"
      style={{
        height: "var(--header-height)",
        marginBottom: "var(--header-mb)",
      }}
    >
      <div
        className="top-0 z-10 h-16 pt-6"
        // style={{ position: "var(--header-position)" }}
      >
        <div
          className="sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full"
          // style={{ position: "var(--header-inner-position)" }}
        >
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4">
                  <div className="flex flex-1">
                    <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  ">
                      <Link
                        aria-label="Home"
                        className="pointer-events-auto"
                        href="/"
                      >
                        <Image
                          alt=""
                          fetchPriority="high"
                          width="512"
                          height="512"
                          decoding="async"
                          data-nimg="1"
                          className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9"
                          style={{ color: "transparent" }}
                          sizes="2.25rem"
                          src="/66465098.png"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div
                      className="pointer-events-auto md:hidden"
                      data-headlessui-state="open"
                    >
                      <button
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur    "
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state="open active"
                        id="headlessui-popover-button-:Rbmiqja:"
                        onClick={toggleMenu}
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 "
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>

                      {isMenuOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
                            id="headlessui-popover-backdrop-:Rjmiqja:"
                            aria-hidden="true"
                          ></div>

                          <div
                            className="transition ease-in-out  fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
                            id="headlessui-popover-panel-:Rrmiqja:"
                            tabIndex={-1}
                            // style="--button-width: 88.73333740234375px;"
                            data-headlessui-state="open"
                            data-open=""
                          >
                            <div className="flex flex-row-reverse items-center justify-between">
                              <button
                                aria-label="Close menu"
                                className="-m-1 p-1"
                                type="button"
                                data-headlessui-state="open active"
                                data-open=""
                                data-active=""
                                onClick={toggleMenu}
                              >
                                <svg
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  className="h-6 w-6 text-zinc-500 "
                                >
                                  <path
                                    d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </button>
                              <h2 className="text-sm font-medium text-zinc-600 ">
                                Navigation
                              </h2>
                            </div>
                            <nav className="mt-6">
                              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800  ">
                                {ROUTES.map((route, idx) => (
                                  <li key={idx}>
                                    <Link
                                      onClick={closeMenu}
                                      className="block py-2"
                                      href={route.link}
                                    >
                                      {route.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </nav>
                          </div>
                        </>
                      )}
                    </div>
                    <div
                      style={{
                        position: "fixed",
                        top: "1px",
                        left: "1px",
                        width: "1px",
                        height: 0,
                        padding: 0,
                        margin: "-1px",
                        overflow: "hidden",
                        clip: "rect(0, 0, 0, 0)",
                        whiteSpace: "nowrap",
                        borderWidth: 0,
                        display: "none",
                      }}
                    ></div>
                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        {ROUTES.map((route, idx) => (
                          <li key={idx}>
                            <Link
                              className={`${activeStyle(route.link)}`}
                              href={route.link}
                            >
                              {route.name}
                              {isActive(route.link) && (
                                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0"></span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="flex justify-end md:flex-1">
                    <div className="pointer-events-auto">
                      <button
                        // onClick={toggleLightScheme}
                        type="button"
                        aria-label="Switch to dark theme"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20  "
                      >
                        <div className="justify-center items-center">
                          {/* <ion-icon name="sunny"></ion-icon> */}
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
