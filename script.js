document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("play-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress-bar");
    const trackTitle = document.getElementById("track-title");
    const trackArtist = document.getElementById("track-artist");

    const tracks = [
        { title: "O Mahi O Mahi", artist: "Artist 1", src: "O Mahi O Mahi_320(PagalWorld.com.sb).mp3" },
        { title: "Heeriye", artist: "Artist 2", src: "_Heeriye_320(PagalWorld.com.sb).mp3" },
        { title: "Suniyan Suniyan", artist: "Artist 3", src: "Suniyan Suniyan Raatan_320(PagalWorld.com.sb).mp3" }
    ];

    let currentTrackIndex = 0;

    function loadTrack(index) {
        const track = tracks[index];
        audio.src = track.src;
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
    }

    function playPauseTrack() {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = "⏸️";
        } else {
            audio.pause();
            playBtn.textContent = "▶️";
        }
    }

    function prevTrack() {
        currentTrackIndex = (currentTrackIndex > 0) ? currentTrackIndex - 1 : tracks.length - 1;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    function nextTrack() {
        currentTrackIndex = (currentTrackIndex < tracks.length - 1) ? currentTrackIndex + 1 : 0;
        loadTrack(currentTrackIndex);
        playPauseTrack();
    }

    function updateProgressBar() {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress || 0;
    }

    function setProgress(e) {
        const newTime = (e.target.value / 100) * audio.duration;
        audio.currentTime = newTime;
    }

    playBtn.addEventListener("click", playPauseTrack);
    prevBtn.addEventListener("click", prevTrack);
    nextBtn.addEventListener("click", nextTrack);
    audio.addEventListener("timeupdate", updateProgressBar);
    progressBar.addEventListener("input", setProgress);

    // Load the first track
    loadTrack(currentTrackIndex);
});
