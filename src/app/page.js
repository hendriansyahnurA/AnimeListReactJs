import AnimeList from "./components/AnimeList"


const Home = async () => {

  const reponse = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?Limit=8`)
  const anime = await reponse.json();

  return (
    <div>
      <h1 className="m-3 text-2xl font-bold text-red-900">Paling Populer</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home