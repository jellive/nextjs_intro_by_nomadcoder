import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import Link from 'next/link'
import { useRouter } from 'next/router'

const API_KEY = '10923b261ba94d897ac6b81148314a3f'

export default function Home({ results }: { results: object[] }) {
  const router = useRouter()
  const onClick = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`)
  }
  return (
    <div className="container">
      <Seo title="Home" />
      {!results && <h4>Loading...</h4>}
      {results?.map((movie: any) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => onClick(movie.id, movie.title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export const getServerSideProps = async () => {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json()
  return {
    props: { results }
  }
}
