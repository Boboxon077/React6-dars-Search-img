import Search from "../components/Search";
import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import Galery from "../components/Galery";

const API =
  "https://api.unsplash.com/search/photos?client_id=bT0NbybKe5O0sw7dNebC2ZOtENFLJzb6eBb_2SNN9MA&page=1&query=";

function Home() {
  const [url, setUrl] = useState(API + "features");
  const { data, isPending, error } = useFetch(url);

  const setNewUrl = (url) => {
    setUrl(API + url);
  };

  return (
    <div>
      <h1>Search :</h1>
      <Search setNewUrl={setNewUrl} />
      {data && <Galery data={data} />}
      {isPending && <h1>Loading ...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default Home;
