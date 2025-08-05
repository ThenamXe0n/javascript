const indianSongs = [
  {
    songname: "Kesariya",
    poster:
      "https://cdn-images.dzcdn.net/images/cover/96989e827b559696c30fc097f85c1ea2/0x1900-000000-80-0-0.jpg",
    url: "./songs/Kesariya.mp3",
    album: "Brahmāstra",
    singer: "Arijit singh",
  },
  {
    songname: "Shayad",
    poster:
      "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
    url: "./songs/Shayad.mp3",
    album: "Love Aaj Kal (2020)",
  },
  {
    songname: "pushpa",
    poster:
      "https://i.pinimg.com/736x/31/b1/ea/31b1ea4c9e3d8302460b69f00e31c74a.jpg",
    url: "./songs/Angaaron.mp3",
    album: "Bhediya",
  },
  // {
  //   songname: "Jab Tak",
  //   poster: "https://i1.sndcdn.com/artworks-000187659727-42c16u-t500x500.jpg",
  //   url: "https://link.to/jabtak-song.mp3",
  //   album: "M.S. Dhoni: The Untold Story",
  // },
  // {
  //   songname: "Tujhe Kitna Chahne Lage",
  //   poster:
  //     "https://c.saavncdn.com/763/Tujhe-Kitna-Chahne-Lage-From-Kabir-Singh--Hindi-2019-20190531075012-500x500.jpg",
  //   url: "https://link.to/tujhekitna-song.mp3",
  //   album: "Kabir Singh",
  // },
  // {
  //   songname: "Zaalima",
  //   poster:
  //     "https://upload.wikimedia.org/wikipedia/en/9/9b/Zaalima_Raees_Cover.jpg",
  //   url: "https://link.to/zaalima-song.mp3",
  //   album: "Raees",
  // },
  // {
  //   songname: "Shayad",
  //   poster:
  //     "https://c.saavncdn.com/862/Love-Aaj-Kal-Hindi-2020-20200214140423-500x500.jpg",
  //   url: "https://link.to/shayad-song.mp3",
  //   album: "Love Aaj Kal (2020)",
  // },
  // {
  //   songname: "Raataan Lambiyan",
  //   poster:
  //     "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
  //   url: "https://link.to/raataan-song.mp3",
  //   album: "Shershaah",
  // },
  // {
  //   songname: "Rabba Janda",
  //   poster:
  //     "https://c-cdnet.cdn.smule.com/smule-gg-uw1-s-7/arr/a7/42/d3311dc5-c9ac-4ec5-a50a-994ce4468620.jpg",
  //   url: "https://link.to/agartum-song.mp3",
  //   album: "Mission Majnu",
  // },
  // {
  //   songname: "Zamaana Lage",
  //   poster:
  //     "https://static.toiimg.com/thumb/msid-121509837,imgsize-89694,width-400,resizemode-4/121509837.jpg",
  //   url: "https://link.to/maanmeri-song.mp3",
  //   album: "Metro... In Dino",
  // },
];
let songNo = 0;
let currentSong = indianSongs[songNo];

//element declearation

const songListSectionOne = document.getElementById("song_container_one");
const songListAsideSection = document.getElementById("aside_song_section");
const footersongContainer = document.getElementById("currentSongFooter");
const sidePoster = document.getElementById("currentsong_side_poster");
const sidesongName = document.getElementById("currentsong_side_name");
const sidesongSinger = document.getElementById("currentsong_singer");
const sideheadingname = document.getElementById("uppersongName");
const songPlayer = document.getElementById("songPlayer");
const playBtn = document.getElementById("play_btn");

//function declaration
function handleLoadMainSongs() {
  songListSectionOne.innerHTML = "";

  indianSongs.slice(0, 8).forEach((song) => {
    console.log("loop", song);
    songListSectionOne.innerHTML += `<div
              class="h-full text-white flex items-center gap-x-4 w-full bg-[#3a3a3a]">
              <img
              class="h-full w-auto "
              src=${song.poster}
              alt=${song.songname}
              />
              <h6 class="font-bold">${song.songname}</h6>
            </div>`;
  });
}
handleLoadMainSongs();

function handleLoadAsideSongs() {}

function loadCurrentSong() {
  footersongContainer.innerHTML = `<div
            class="h-full aspect-square w-auto ml-3 overflow-hidden bg-red-600"
          >
            <img
              src=${currentSong.poster}
              alt="currentSong"
              id="currentSong"
            />
          </div>
          <div class="ml-3">
            <h6 class="capitalize leading-[16px] text-sm font-semibold">
              ${currentSong.songname} <br />
              <span class="text-sm font-thin"> ${currentSong.singer}</span>
            </h6>
          </div>`;

  sidePoster.src = currentSong.poster;
  sidesongName.innerText = currentSong.songname;
  sideheadingname.innerText = currentSong.songname;
  sidesongSinger.innerText = currentSong.singer;

  //loading audio to songPlayer
  songPlayer.innerHTML = `<source src=${currentSong.url} type="audio/mp3">`;
}

loadCurrentSong();

function handleplaysong(e) {
  if (e.target.checked) {
    songPlayer.play();
  } else {
    songPlayer.pause();
  }
}

function handleplaynextsong() {
  songPlayer.pause();
  songPlayer.innerHTML = "";
  let nextSongIndex = songNo + 1;
  currentSong = indianSongs[nextSongIndex];
  loadCurrentSong();
  songPlayer.play();
  console.log(currentSong);
  console.log(songPlayer.innerHTML);
}

playBtn.addEventListener("change", handleplaysong);
