import { GET_SINGLE_ALBUM }from '../../queries';
import { useQuery } from '@apollo/client';
import './AlbumCard.css'

function AlbumCard({ title }) {
  const { loading, error, data } = useQuery(GET_SINGLE_ALBUM, {
    variables: { title }
  })
  
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const displayGenres = (list) => {
   return list.map(genre => <p className='genre' data-cy='genre'>{genre}</p>)
  }

  const deconstruct = ({ coverImage, title, year, artists, genres }) => {
    return (
      <>
      <img className='cover' data-cy='cover'src={data.coverImage}/>
      <h2 className='title' data-cy='title'>{title}</h2>
      <h3 className='artist' data-cy='artist'>{name}</h3>
      <p className='date' data-cy='date'>This Edition Released in {year}</p>
      <div className='genre-container' data-cy='genre-container'>
        {displayGenres(genres)}
      </div>
      <button className='discogs-link' data-cy='discogs-link' >Purchase on Discogs</button>
      </>
    )
  }

  return (
    <div className='card' data-cy='card'>
      { deconstruct() }
    </div>
  )
}

export default AlbumCard