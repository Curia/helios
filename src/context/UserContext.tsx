import React, { createContext, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import useSwr from 'swr';
import fetcher from '@/libs/fetcher';

// Types
import { AthleteResponse } from 'strava-v3';

interface IUserContext {
  user: AthleteResponse | undefined;
  loading: boolean;
  loggedOut: boolean;
}

const defaultUserState = {
  user: undefined,
  loading: false,
  loggedOut: true,
};

export const UserContext = createContext<IUserContext>(defaultUserState);

const getUser = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, mutate, error } = useSwr<AthleteResponse | undefined>(
    `/api/strava/athlete`,
    fetcher,
  );

  const loading = !data && !error;
  const loggedOut = error && error.status === 403;
  return {
    loading,
    loggedOut,
    user: data,
    mutate,
  };
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const { user, mutate, loggedOut, loading } = getUser();

  useEffect(() => {
    if (session && !user) {
      mutate();
    }
  }, [mutate, session, user]);

  return (
    <UserContext.Provider
      value={{
        user,
        loading: loading,
        loggedOut: loggedOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
