import Link from 'next/link';

import { useAuth } from '../../context/Auth';
import { useUser } from '../../context/User';

const AuthForm = () => {
  const { userState } = useUser();
  const { logout } = useAuth();

  return (
    <div className="">
      {!userState ? (
        <Link href="/login">
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 mx-2
      border  border-slate-400 
      bg-blue-500
      text-white 
      hover:bg-blue-700
      hover:border-slate-700
      "
          >
            <span>Sign in / Sign up</span>
          </a>
        </Link>
      ) : (
        <Link href="/login">
          <a
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 mx-2
      border  border-slate-400 
      bg-blue-500
      text-white 
      hover:bg-blue-700
      hover:border-slate-700
      "
            onClick={() => logout()}
          >
            <span>Log out</span>
          </a>
        </Link>
      )}
    </div>
  );
};

export default AuthForm;
