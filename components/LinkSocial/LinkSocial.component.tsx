import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';

type Social = {
  social: 'github' | 'facebook' | 'twitter';
};

type DataSource = {
  profile: string;
  icon: JSX.Element;
};

const github = (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <title>GitHub</title>
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const facebook = (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const INITIAL_DATA: DataSource = {
  profile: '',
  icon: <></>,
};

function LinkSocial({ social }: Social) {
  const [data, setData] = useState(INITIAL_DATA);

  const generateSocial = useMemo(() => {
    switch (social) {
      case 'github':
        return {
          profile: 'https://github.com/travv28825',
          icon: github,
        };
      case 'facebook':
        return {
          profile: 'https://www.facebook.com/asney.hidalgopalmero/',
          icon: facebook,
        };

      default:
        return {
          profile: '',
          icon: <></>,
        };
    }
  }, [social]);

  useEffect(() => {
    const newData = generateSocial;
    setData(newData);
  }, [generateSocial]);

  return (
    <Link href={data.profile}>
      <a
        target="_blank"
        className="flex justify-between text-gray-600  hover:text-gray-900 dark:hover:text-gray-600"
      >
        {data.icon}
      </a>
    </Link>
  );
}

export default LinkSocial;
