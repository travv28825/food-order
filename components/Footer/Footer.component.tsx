import Link from 'next/link';
import LinkSocial from '../LinkSocial';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container  mx-auto text-center">
        <div className="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2022
            <Link href="https://github.com/travv28825/food-order">
              <a className="mx-2 text-blue-600" target="_blank">
                Source code
              </a>
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 justify-center md:mt-0">
            <LinkSocial social="github" />
            <LinkSocial social="facebook" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
