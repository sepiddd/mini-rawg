import { useData } from "../hooks/useData";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const SideBar = () => {
  const { data: genres, loading, error } = useData<Genre>("/genres");
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default SideBar;
