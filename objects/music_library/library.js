const library = {
  tracks: {
    t01: { id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three" },
    t02: { id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"},
    t03: { id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"}
  },
  playlists: {
    p01: { id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: { id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  }
};

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  // Access the Playlist Key:
  const playlists = library.playlists;
  // Iterate Through Playlists:
  for (let playlistId in playlists) {
    // Access Playlist Properties
    const playlist = playlists[playlistId];
    const name = playlist.name;
    const tracksCount = playlist.tracks.length;
    // Construct Output String:
    const output = `${playlistId}: ${name} - ${tracksCount} tracks`;
    // Print string:
    console.log(output);
  }
};

printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  // Access the Playlist Key:
  const tracks = library.tracks;
  // Iterate Through Playlists:
  for (let trackId in tracks) {
    // Access Playlist Properties
    const track = tracks[trackId];
    const name = track.name;
    const artist = track.artist;
    const album = track.album;
    // Construct Output String:
    const output = `${trackId}: ${name} by ${artist} (${album})`;
    // Print string:
    console.log(output);
  }
};

printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const playlist = library.playlists[playlistId];
  const name = playlist.name;
  const tracksCount = playlist.tracks.length;
  console.log(`${playlistId}: ${name} - ${tracksCount} tracks`);
  for (let trackId of playlist.tracks) {
    const track = library.tracks[trackId];
    const trackName = track.name;
    const artist = track.artist;
    const album = track.album;
    console.log(`${trackId}: ${trackName} by ${artist} (${album})`);
  }
};

printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const playlist = library.playlists[playlistId];
  playlist.tracks.push(trackId);
};

addTrackToPlaylist(`t03`, 'p01');

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// adds a track to the library
const addTrack = function(name, artist, album) {
  let newTrackId = generateUid();
  let newTrack = {
    id: newTrackId,
    name: name,
    artist: artist,
    album: album
  };
  library.tracks[newTrackId] = newTrack;
};

addTrack("New Song", "New Artist", "New Album");
printTracks();

// adds a playlist to the library
const addPlaylist = function(name) {
  let newPlaylistId = generateUid();
  let newPlaylist = {
    id: newPlaylistId,
    name: name,
  };
  library.playlists[newPlaylistId] = newPlaylist;
};

addPlaylist("Todd's Favorites");
printPlaylists();


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};