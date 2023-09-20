console.log("Welcom to Spotify")

let songspotify_clone = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));    

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath:"songs/1.mp3", coverPath: "covers/1.jpg" },
    {songName: "Cielo - Huma-Huma", filePath:"songs/2.mp3", coverPath: "covers/2.jpg" },
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath:"songs/3.mp3", coverPath: "covers/3.jpg" },
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath:"songs/4.mp3", coverPath: "covers/4.jpg" },
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath:"songs/5.mp3", coverPath: "covers/5.jpg" },
    {songName: "Rabba", filePath:"songs/6.mp3", coverPath: "covers/6.jpg" },
    {songName: "Sakhiyaan", filePath:"songs/7.mp3", coverPath: "covers/7.jpg" },
    {songName: "Bhula Dena", filePath:"songs/8.mp3", coverPath: "covers/8.jpg" },
    {songName: "Tumhari Kasam", filePath:"songs/9.mp3", coverPath: "covers/9.jpg" },
    {songName: "Na Jaana", filePath:"songs/10.mp3", coverPath: "covers/10.jpg" },
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{


    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllplays();
        songspotify_clone = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songspotify_clone+1}.mp3`;
        masterSongName.innerText = songs[songspotify_clone].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

})  


document.getElementById('next').addEventListener('click', ()=>{
    if(songspotify_clone>=9){
    songspotify_clone = 0;
}
    else{
        songspotify_clone += 1
    }
    audioElement.src = `songs/${songspotify_clone+1}.mp3`;
    masterSongName.innerText = songs[songspotify_clone].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songspotify_clone<=0){
    songspotify_clone = 0;
}
    else{
        songspotify_clone -= 1
    }
    audioElement.src = `songs/${songspotify_clone+1}.mp3`;
    masterSongName.innerText = songs[songspotify_clone].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

})