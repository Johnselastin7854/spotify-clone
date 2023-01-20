// Selecting Elements
const masterPlay=document.getElementById("masterPlay");
const progressBar= document.getElementById("myProgressBar");
const playGif=document.getElementById("gif");
const songItems = Array.from(document.getElementsByClassName("songItem"));
const songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
const previousBtn= document.getElementById("previous");
const nextBtn = document.getElementById("next");
const masterSongName = document.getElementById("masterSongName");


// initializing variables
let songIndex=0;
let audioElement = new Audio ("./assets/songs/1.mp3");


let songs = [
    {songName: "Elangaathu  [Ilaiyaraaja]", filePath: "./assets/songs/1.mp3", coverPath: "./assets/covers/1.jpg"},
    {songName: "Manpuru Mangaye [A. R. Rahman]", filePath: "./assets/songs/2.mp3", coverPath: "./assets/covers/2.jpg"},
    {songName: "Aaruyire [A. R. Rahman]", filePath: "./assets/songs/3.mp3", coverPath: "./assets/covers/3.jpg"},
    {songName: "Pachchai Nirame [A. R. Rahman]", filePath: "./assets/songs/4.mp3", coverPath: "./assets/covers/4.jpg"},
    {songName: "Muzumathi  [A. R. Rahman] ", filePath: "./assets/songs/5.mp3", coverPath: "./assets/covers/5.jpg"},
    {songName: "Anbae Anbae [A. R. Rahman] ", filePath: "./assets/songs/2.mp3", coverPath: "./assets/covers/6.jpg"},
    {songName: "Kaatrukulle [Yuvan Shankar Raja]", filePath: "./assets/songs/2.mp3", coverPath: "./assets/covers/7.jpg"},
    {songName: "Manjal Veyil [Harris Jayaraj]", filePath: "./assets/songs/2.mp3", coverPath: "./assets/covers/8.jpg"},
    {songName: "New York Nagaram [A. R. Rahman]", filePath: "./assets/songs/2.mp3", coverPath: "./assets/covers/9.jpg"},
    {songName: "Nee Kavithaigala [Deepu]", filePath: "./assets/songs/4.mp3", coverPath: "./assets/covers/10.jpg"},
]


// Adding cover and songs inside the html
songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})

//Handle Pause and Play

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        playGif.style.opacity= 1 ;
        masterSongName.innerText = songs[songIndex].songName;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add("fa-play-circle");
        masterPlay.classList.remove("fa-pause-circle");
        playGif.style.opacity= 0 ;
    }
})


// Listen to events

audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    // console.log(audioElement.currentTime)
    // console.log(audioElement.duration)
    progressBar.value = progress;
});

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100;
});

const makeAllPlay = ()=>{
    songItemPlay.forEach((elements)=>{
        elements.classList.remove("fa-pause-circle");
        elements.classList.add("fa-play-circle");
        
    })
}
songItemPlay.forEach((element)=>{
    element.addEventListener("click",(e)=>{
      
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        element.classList.add("fa-pause-circle");
        element.classList.remove("fa-play-circle");
        audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        playGif.style.opacity= 1 ;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");

    })
})



// Next Button
nextBtn.addEventListener("click",()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playGif.style.opacity= 1 ;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    
})

previousBtn.addEventListener("click",()=>{
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `./assets/songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    playGif.style.opacity= 1 ;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

    
})