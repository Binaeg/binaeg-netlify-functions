import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [selectedPage, setSelectedPage] = useState(page);
  
  const router = useRouter();
  const currentRoute = router.pathname;

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function toggleUserMenu() {
    setUserMenuOpen(!userMenuOpen);
  }

  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* <Image
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=lime&shade=500"
                  alt="Your Company"
                  width="32"
                  height="32"
                /> */}
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link
                      href="/dashboard"
                      className={currentRoute === "/dashboard" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                      aria-current="page"
                    >
                      Übersicht
                    </Link>
                    <Link
                      href="/getraenketeam"
                      className={currentRoute === "/getraenketeam" ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}
                      aria-current="page"
                    >
                      Getränketeam
                    </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="flex max-w-xs items-center rounded-full bg-gray-800 text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={toggleUserMenu}
                    >
                      <span className="sr-only">Open user menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 2424"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  {userMenuOpen ? (
                    <div
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      id="user-menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-0"
                      >
                        Dein Profil
                      </Link>

                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex={-1}
                        id="user-menu-item-2"
                      >
                        Abmelden
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          {mobileMenuOpen ? (
            <div>
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <Link
                  href="/dashboard"
                  className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                  aria-current="page"
                >
                  Übersicht
                </Link>

                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Getränketeam
                </Link>
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="mt-3 space-y-1 px-2">
                  <Link
                    href="/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Dein Profil
                  </Link>

                  <Link
                    href="/dashboard"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Abmelden
                  </Link>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      {/* <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200"></div>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default Navbar;
