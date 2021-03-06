import { gql } from '@apollo/client';

export const GET_SINGLE_ALBUM = gql`
  query ($title: String!) {
    album(title: $title) {
      id
      title
      artists {
        name
      }
      year
      genres
      coverImage
      uri
    }
  }
`

export const GET_SPOTIFY = gql`
query ($title: String!) {
  spotifyAlbumId(title: $title) {
      id
    }
}
`
export const GET_ALBUMS_BY_ARTIST = gql`
query ($artist: String!) {
  artistAlbums(artist: $artist) {
    artist
    title
    id
    coverImage
    format
    year
    label
  }
}
`

export const GET_RANDOM_ALBUM = gql`
query {
  randomAlbum {
          id
          title
          artists {
            name
           }
          year
          genres
          coverImage
          resourceUrl
          styles
          year
          tracklist {
            position
            title
            duration
           }
          uri
          }
        }
        
`