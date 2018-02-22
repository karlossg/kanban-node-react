// https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

// fetchAlbums();

async function fetchAlbums() {
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json)
}

fetchAlbums();