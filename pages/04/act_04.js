function isLessThan(a, b) {
    return a < b;
}

function isGtREqual2(a, b) {
    return a >= b;
}

function isSpeeding(speed) {
    return speed > 120;
}

function isTeenager(age) {
    return age >= 13 && age <= 18;
}

function isGoodMusic(artist) {
    const favoriteArtists = ["Artist1", "Artist2", "Artist3"]; // Reemplaza con tus artistas favoritos
    return favoriteArtists.includes(artist);
}

console.log(isLessThan(5, 10)); 
console.log(isGtREqual2(10, 5)); 
console.log(isSpeeding(130)); 
console.log(isTeenager(15)); 
console.log(isGoodMusic("Artist1")); 
console.log(isGoodMusic("ArtistX")); 
