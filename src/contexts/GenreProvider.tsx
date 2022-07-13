import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface GenreProps {
  children: ReactNode;
}

interface GenreContext {
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

export const GenreContext = createContext({} as GenreContext);

export default function GenreProvider({ children }: GenreProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <GenreContext.Provider
      value={{
        selectedGenreId,
        setSelectedGenreId,
      }}
    >
      {children}
    </GenreContext.Provider>
  );
}
