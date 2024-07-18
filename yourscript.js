console.log("Welcome to Spotify");

//Initialize the variable
let songIndex=0;
let audioElement = new audio('1.mp3');
let masterPlay = documentElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');


let songs = [
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
    {songName: "tere liye", filePath:"song/1.mp3", coverPath:"covers/.jpg"},
]

//audioElement.play();

//Handel play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =1; 
    }
    else{
        audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    }
})

// Listen to events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update Seekbar
    
})
