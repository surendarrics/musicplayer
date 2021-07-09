
//data
const all_songs = [
    {
        name:"Blinding lights",
        Img: "https://cdn.shopify.com/s/files/1/1878/3879/products/N3018.jpg?v=1541935122",
        path: "./music/blind.mp3",
        singer: "The Weeknd",
        id:1
    },
    {
        name:"kummi adi",
        Img: "https://www.tamil2lyrics.com/wp-content/uploads/2017/05/kummi-adi-kummi-adi.png",
        path: "./music/kummi.mp3",
        singer: "A.R.Rahman GOAT",
        id:2
    },
    {
        name:"Lean on",
        Img: "./images/major.jpg",
        path: "./music/lean.mp3",
        singer: "Major Laser ft.dj Snake",
        id:3
    },
    {
        name:"Levitating",
        Img: "./images/lev.jpg",
        path: "./music/lev.mp3",
        singer: "Dua lipa",
        id:4
    },
    {
        name:"Positions",
        Img: "./images/positions.jpg",
        path: "./music/position.mp3",
        singer: "Ariana grande",
        id:5
    }
        
]
//classes
let previous = document.querySelector(".prev")
let play = document.querySelector(".play")
let next = document.querySelector(".next")
let slider = document.querySelector(".slider")
let songname = document.querySelector(".song")
let artist = document.querySelector(".by");
let track_img = document.querySelector("#track_image")
let timer;
let index_no = 0;
let playing_song = false;
let track = document.createElement("audio")
let box = document.querySelector(".box")



//naresh were doing functions now

box.addEventListener("mouseover", ()=> {
  
    track_img.style.width = "90%"
})

function load_track(index_no) {
    clearInterval(timer);
reset_slider();

    track.src = all_songs[index_no].path;
    songname.innerHTML = all_songs[index_no].name;
    track_img.src = all_songs[index_no].Img;
    artist.innerHTML = all_songs[index_no].singer;
    track.load();
timer = setInterval(range_slider, 1000);

}
load_track(index_no)


//if song is playing?
function just_play() {
    if(playing_song == false){
        playSong()
    } else {
        pauseSong();
    }
}


//play song

function playSong() {
    track.play();
    playing_song = true;
    play.innerHTML= '<i class="fa fa-pause" aria-hidden="true"></i>';


}

//pause song 
function pauseSong() {
    track.pause();
    playing_song = false;
    play.innerHTML= '<i class="fa fa-play" aria-hidden="true"></i>'

}
//reset slider
function reset_slider() {
    slider.value= 0;
}

//next song 

function next_song() {
if(index_no < all_songs.length -1) {
    index_no += 1;
    load_track(index_no);
     playSong()
}else{
    index_no = 0;
    load_track(index_no);
    playSong()
}
}
// previous song

function previous_song() {
    if(index_no > 0){
        index_no -= 1;
        load_track(index_no); 
        playSong() 
    }else{
        index_no = 4;
        load_track(index_no);
    playSong()
    }
}
function change_duration() {
    slider_position = track.duration* (slider.value/100);
    track.currentTime = slider_position;
}




function range_slider() {
    let position = 0;


if (!isNaN(track.duration)){
    position = track.currentTime * (100/ track.duration);
    slider.value = position;
}
}




