import axios from "axios";
import { useEffect, useState } from "react";

const useGameData = (url) => {
  const [games, setGames] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    SetLoading(true);
    axios(url)
      .then((data) => setGames(data.data))
      .catch((err) => SetError(err))
      .finally(() => SetLoading(false));
  }, [url]);

  return { games, loading, error };
};

export default useGameData;
