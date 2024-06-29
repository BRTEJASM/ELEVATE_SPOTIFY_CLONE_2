console.log("Welcome To Spotify");

let songIndex = 0;
let audioElement = new Audio('kar-har-maidan-fateh_(motivatorindia.in).mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem')); 

let songs = [
    {songName: "Kar Har Maidan Fateh", filePath: "kar-har-maidan-fateh_(motivatorindia.in).mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\Kar-Har-Maidaan-Fateh.jpg"},
    {songName: "Sultan", filePath: "khun-me tere-mitti-sultan_(motivatorindia.in).mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\sultan.jpg"},
    {songName: "Chak Len De", filePath: "Aaj-Phatay-Check-lain-de_motivational_song.mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\Chak-Lein-De.jpg"},
    {songName: "Lakshya", filePath: "Lakshya-(motivatorindia.in).mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\lakshya-title-song-lyrics.jpg"},
    {songName: "Get Ready To Fight", filePath: "get-ready-to-fight_(motivatorindia.in).mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\get_ready_to_fight-motivational_songs.jpg"},
    {songName: "Zindagi Aa Raha Hu", filePath: "Zindagi-Aa-Raha-Hoon-(motivatorindia.in).mp3", coverPath: "C:\Users\Tejas_\Downloads\Elevate Internship\ELEVATE_SPOTIFY_CLONE\zindagi_aa_raha_hu_mai-motivational_songs.jpg"},
]

// songItems.forEach((element, i)=>{
//     console.log(element, i);
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

// })

// audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        elemenmt.target.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'kar-har-maidan-fateh_(motivatorindia.in).mp3/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;

    }
    audioElement.src = 'kar-har-maidan-fateh_(motivatorindia.in).mp3/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;

    }
    audioElement.src = 'kar-har-maidan-fateh_(motivatorindia.in).mp3/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})