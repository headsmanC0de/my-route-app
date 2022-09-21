import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface AuthContextProps {
  user: string;
  signin: () => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

type AuthProviderProps = {
  children: ReactNode;
};

interface IUser {
  name: string | null;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const signin = (newUser: Dispatch<SetStateAction<IUser | null>>, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const signout = (callback) => {
    callback();
  };

  const store = { user, signin, signout };

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
};
