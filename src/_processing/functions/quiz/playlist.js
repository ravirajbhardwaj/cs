// You need to implement the Playlist constructor function and its prototype method

function Playlist() {
  // Initialize songs property
  this.songs = [];
}

// Define addSong method on Playlist's prototype
Playlist.prototype.addSong = function (song) {
  return this.songs.push(song);
};

const playlist = new Playlist();

console.log(playlist.addSong("Tum hi ho"));
console.log(playlist.songs);
