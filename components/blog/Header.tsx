import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router"
import { navLinks } from '../../utils/constants';

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const router = useRouter();

  const currentRoute = router.asPath.slice(1);

  return (
      <nav className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-blue-100 pt-8 pb-1'>
          <div className="md:float-left block">
            <Link href='/'>
              <p className="satisfy-font cursor-pointer font-bold text-2xl sm:text-6xl text-orange-600 drop-shadow-lg">
                Cristian Villota J.
              </p>
            </Link>
            <p className="text-sky-200 md:ml-6 ml-0 text-shadow text-xs md:text-xl font-semibold">
                Front end and 3D developer
            </p>
          </div>

          <div className="hidden sm:float-left md:contents">
            {
              navLinks.map((item, id) => (
                <Link key={id} href={`/${item.slug}`}>
                  <a className={`${currentRoute === item.slug ? "font-bold text-sky-500" : ""} md:float-right mt-2 align-middle text-sky-200 ml-4 text-lg md:text-xl hover:font-bold`}>
                    {item.title}
                  </a>
                </Link>
              ))
            }
          </div>
          {
            // Mobile menu
          }
          <div className="md:hidden">
            <div
              className={`${isNavOpen ? "hidden" : ""} space-y-2 absolute top-4 right-5 px-8 py-8`}
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-sky-100"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-sky-100"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-sky-100"></span>
            </div>

            <div className={`${isNavOpen ? "flex" : "hidden"} bg-sky-100 justify-end p-3 my-3`}>
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)}
              >
                <svg
                  className="h-8 w-8 bg-sky-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="flex flex-col-reverse whitespace-nowrap items-end z-10">
                {
                  navLinks.map((item, id) => (
                    <Link key={id} href={`/${item.slug}`}>
                      <a 
                        className={`
                          ${currentRoute === item.slug ? "font-bold" : ""} 
                          md:float-right mt-2 align-middle text-sky-900 ml-4 text-lg md:text-xl hover:font-bold`
                        } 
                        onClick={() => setIsNavOpen((prev) => !prev)}
                      >
                        {item.title}
                      </a>
                    </Link>
                  ))
                }
              </ul>
            </div>
          </div>
          {
            // End Mobile menu
          }
        </div>
      </nav>
    )
};

export default Header;