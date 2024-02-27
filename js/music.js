const musicPlayer = document.getElementById('musicPlayer');
const playPauseButton = document.getElementById('playPauseButton');
const nextButton = document.getElementById('next-music');
const prevButton = document.getElementById('pre-music');
const nameMusicElement = document.getElementById('name-music');
const timeMusicElement = document.getElementById('time-music');
const timeStartMusicElement = document.getElementById('time-start-music');
const imageMusicElement = document.getElementById('image-music');
const repeatButton = document.getElementById('repeat-music');

let isRepeatActivated = false;

const tracks = [
    {
        title: "Goodbye",
        duration: "4:02",
        image: "./image/goodbye.jpg",
        audioSrc: "./audio/goodbye.mp3"
    },
    {
        title: "Rồi Sẽ Ổn Cả Thôi Mà",
        duration: "1:38",
        image: "./image/roiseoncathoima.jpg",
        audioSrc: "./audio/roiseonthoima.mp3"
    },
    {
        title: "Anh Đã Lớn Hơn Thế Nhiều",
        duration: "6:27",
        image: "./image/anhdalonhonthenhieu.jpg",
        audioSrc: "./audio/anhdalonhonthenhieu.mp3"
    },
    {
        title: "Giữa Đại Lộ Đông Tây",
        duration: "3:46",
        image: "./image/giuadailodongtay.jpg",
        audioSrc: "./audio/giuadailodongtay.mp3"
    },
    {
        title: "Hẹn Một Mai",
        duration: "4:38",
        image: "./image/henmotmai.jpg",
        audioSrc: "./audio/henmotmai.mp3"
    },
    {
        title: "Tháng Tư Là Lời Nói Dối Của Em",
        duration: "4:57",
        image: "./image/thangtulaloinoidoicuaem.jpg",
        audioSrc: "./audio/thangtuloinoidoicuaem.mp3"
    },
    {
        title: "Sài Gòn Tôi Mưa",
        duration: "5:29",
        image: "./image/saigontoimua.jpg",
        audioSrc: "./audio/saigontoimua.mp3"
    },
    {
        title: "Thuận Theo Ý Trời",
        duration: "3:54",
        image: "./image/thuantheoytroi.jpg",
        audioSrc: "./audio/thuantheoytroi.mp3"
    },
    {
        title: "Người Kế Nhiệm - 继者",
        duration: "4:03",
        image: "./image/nguoikenhiem.jpg",
        audioSrc: "./audio/nguoikenhiem.mp3"
    },
    {
        title: "Phi Điểu Và Ve Sầu - 飞鸟和蝉",
        duration: "4:53",
        image: "./image/phidieuvavesau.jpg",
        audioSrc: "./audio/phidieuvavesau.mp3"
    },
    {
        title: "Đảo Không Người - 无人之岛",
        duration: "4:43",
        image: "./image/daokhongnguoi.jpg",
        audioSrc: "./audio/daokhongnguoi.mp3"
    },
    {
        title: "Đánh Mất Em - 丢了你",
        duration: "4:37",
        image: "./image/danhmatem.jpg",
        audioSrc: "./audio/danhmatem.mp3"
    },
    {
        title: "For ya",
        duration: "2:29",
        image: "./image/forya.jpg",
        audioSrc: "./audio/forya.mp3"
    },
    {
        title: "Thời Không Sai Lệch - 错位时空",
        duration: "3:30",
        image: "./image/thoikhongsailech.jpg",
        audioSrc: "./audio/thoikhongsailech.mp3"
    },
    {
        title: "Đại Thiên Bồng - 大天篷",
        duration: "4:04",
        image: "./image/daithienbong.jpg",
        audioSrc: "./audio/daithienbong.mp3"
    },
    {
        title: "Có Thể Hay Không - 可不可以",
        duration: "4:06",
        image: "./image/cothehaykhong.jpg",
        audioSrc: "./audio/cothehaykhong.mp3"
    },
    {
        title: "Giày Cao Gót Màu Đỏ - 红色高跟鞋",
        duration: "3:33",
        image: "./image/giaycaogotmaudo.jpg",
        audioSrc: "./audio/giaycaogotmaudo.mp3"
    },
    {
        title: "Vây Giữ - 沦陷",
        duration: "3:58",
        image: "./image/vaygiu.jpg",
        audioSrc: "./audio/vaygiu.mp3"
    },
    {
        title: "Em Của Sau Này Sẽ Ở Đâu",
        duration: "3:17",
        image: "./image/emcuasaunayseodau.jpg",
        audioSrc: "./audio/emcuasaunayseodau.mp3"
    },
    {
        title: "Kiêu Ngạo - 嚣张",
        duration: "4:10",
        image: "./image/kieungao.jpg",
        audioSrc: "./audio/kieungao.mp3"
    },
    {
        title: "Xóa đi - Yên - 删了吧 - 烟",
        duration: "3:25",
        image: "./image/xoadi.jpg",
        audioSrc: "./audio/xoadi.mp3"
    },
    {
        title: "Đâu Đâu Cũng Là Em - 哪里都是你",
        duration: "3:42",
        image: "./image/daudaucunglaem.jpg",
        audioSrc: "./audio/daudaucunglaem.mp3"
    },
    {
        title: "Thiếu Niên - 少年",
        duration: "3:58",
        image: "./image/thieunien.jpg",
        audioSrc: "./audio/thieunien.mp3"
    },
    {
        title: "Người Từng Yêu - 爱过的人",
        duration: "4:00",
        image: "./image/nguoitungyeu.jpg",
        audioSrc: "./audio/nguoitungyeu.mp3"
    },
    {
        title: "May Mắn - 有幸",
        duration: "5:22",
        image: "./image/mayman.jpg",
        audioSrc: "./audio/mayman.mp3"
    },
    {
        title: "Một Bước Xa Xôi - 步之遥",
        duration: "5:14",
        image: "./image/motbuocxaxoi.jpg",
        audioSrc: "./audio/motbuocxaxoi.mp3"
    },
    {
        title: "Đại Ngư - 大鱼",
        duration: "4:39",
        image: "./image/daingu.jpg",
        audioSrc: "./audio/daingu.mp3"
    },
    {
        title: "Hướng Của Ánh Sáng - 光的方向",
        duration: "3:01",
        image: "./image/huongcuaanhsang.jpg",
        audioSrc: "./audio/huongcuaanhsang.mp3"
    },
];

let isPlaying = false;
let currentTrack = 0;
let pauseTime = 0;
let isPauseButtonClicked = false;

function playMusic(element) {
    const audioSrc = element.getAttribute('data-audio-src');
    const trackIndex = tracks.findIndex(track => track.audioSrc === audioSrc);
    playSelectedTrack(trackIndex);
}

function playSelectedTrack(trackIndex) {
    currentTrack = trackIndex;
    musicPlayer.src = tracks[currentTrack].audioSrc;
    musicPlayer.play();
    updateSongInfo(currentTrack);
    playPauseButton.classList.add('bx-pause-circle');
    playPauseButton.classList.remove('bx-play-circle');
}

function updateSongInfo(trackIndex) {
    const trackInfo = tracks[trackIndex];

    nameMusicElement.textContent = trackInfo.title;
    timeStartMusicElement.textContent = trackInfo.duration;

    const updateTimeInterval = setInterval(() => {
        const minutes = Math.floor(musicPlayer.currentTime / 60);
        const seconds = Math.floor(musicPlayer.currentTime % 60);
        timeMusicElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);

    musicPlayer.addEventListener('ended', () => {
        clearInterval(updateTimeInterval);

        if (!isRepeatActivated) {
            currentTrack = (currentTrack + 1) % tracks.length;
            playSelectedTrack(currentTrack);
        } else {
            musicPlayer.currentTime = 0;
            musicPlayer.play();
            timeMusicElement.textContent = '0:00'; 

            updateTimeInterval = setInterval(() => {
                const minutes = Math.floor(musicPlayer.currentTime / 60);
                const seconds = Math.floor(musicPlayer.currentTime % 60);
                timeMusicElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }, 1000);
        }
    });

    musicPlayer.addEventListener('timeupdate', () => {
        if (!isPauseButtonClicked && musicPlayer.currentTime >= musicPlayer.duration) {
            clearInterval(updateTimeInterval);

            if (!isRepeatActivated) {
                currentTrack = (currentTrack + 1) % tracks.length;
                playSelectedTrack(currentTrack);
            } else {
                musicPlayer.currentTime = 0;
                musicPlayer.play();
                timeMusicElement.textContent = '0:00'; 

                updateTimeInterval = setInterval(() => {
                    const minutes = Math.floor(musicPlayer.currentTime / 60);
                    const seconds = Math.floor(musicPlayer.currentTime % 60);
                    timeMusicElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                }, 1000);
            }
        }
        isPauseButtonClicked = false;
    });

    imageMusicElement.src = trackInfo.image;
}

document.addEventListener("DOMContentLoaded", function () {
    function playPauseMusic() {
        if (!isPlaying) {
            if (currentTrack === null || currentTrack === undefined) {
                currentTrack = 0;
            }

            musicPlayer.src = tracks[currentTrack].audioSrc;
            musicPlayer.currentTime = pauseTime;
            musicPlayer.play();
            playPauseButton.classList.add('bx-pause-circle');
            playPauseButton.classList.remove('bx-play-circle');
        } else {
            musicPlayer.pause();
            playPauseButton.classList.remove('bx-pause-circle');
            playPauseButton.classList.add('bx-play-circle');
            pauseTime = musicPlayer.currentTime;
            isPauseButtonClicked = true;
        }

        isPlaying = !isPlaying;
        updateSongInfo(currentTrack);
    }

    playPauseButton.addEventListener('click', playPauseMusic);

    musicPlayer.addEventListener('ended', function () {
        if (isRepeatActivated) {
            musicPlayer.currentTime = 0;
            musicPlayer.play();
        } else {
            currentTrack = (currentTrack + 1) % tracks.length;
            playSelectedTrack(currentTrack);
        }
    });

    function playNextTrack() {
        if (isRepeatActivated) {
            musicPlayer.currentTime = 0;
            musicPlayer.play();
        } else {
            currentTrack = (currentTrack + 1) % tracks.length;
            playSelectedTrack(currentTrack);
        }
    }

    function playPrevTrack() {
        if (isRepeatActivated) {
            musicPlayer.currentTime = 0;
            musicPlayer.play();
        } else {
            currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
            playSelectedTrack(currentTrack);
        }
    }

    nextButton.addEventListener('click', playNextTrack);
    prevButton.addEventListener('click', playPrevTrack);

    updateSongInfo(currentTrack);
});

const plusVolumeButton = document.getElementById('plus-volume');
const muteVolumeButton = document.getElementById('mute-volume');

plusVolumeButton.addEventListener('click', increaseVolume);
muteVolumeButton.addEventListener('click', toggleMute);

function increaseVolume() {
    if (musicPlayer.volume < 1.0) {
        musicPlayer.volume += 0.1;
    }
}

function toggleMute() {
    musicPlayer.muted = !musicPlayer.muted;

    muteVolumeButton.classList.toggle('text-orange-300');
    muteVolumeButton.classList.toggle('text-white');
}

function toggleRepeat() {
    isRepeatActivated = !isRepeatActivated;

    if (isRepeatActivated) {
        repeatButton.classList.add('text-green-500');
    } else {
        repeatButton.classList.remove('text-green-500');
    }

    console.log(isRepeatActivated);
}

repeatButton.addEventListener('click', toggleRepeat);
