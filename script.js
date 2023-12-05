var currentTrackIndex = 0;

var playlistA = [
    { path: 'https://github.com/iagoicente/iagoicente.github.io/raw/main/musica%201.mp3', image: 'https://uploaddeimagens.com.br/images/004/683/014/full/10363702.jpg?1701807659' },
    { path: 'https://github.com/iagoicente/iagoicente.github.io/raw/main/musica%202.mp3', image: 'https://uploaddeimagens.com.br/images/004/683/016/full/Starship_Artemis_Lua.jpg?1701807733' },
    { path: 'https://github.com/iagoicente/iagoicente.github.io/raw/main/musica%203.mp3', image: 'https://uploaddeimagens.com.br/images/004/683/019/full/Pedra_Bonita_by_diego_Baravelli.jpg?1701807943' },
    { path: 'https://github.com/iagoicente/iagoicente.github.io/raw/main/musica%204.mp3', image: 'https://uploaddeimagens.com.br/images/004/683/021/full/17799090_1088150684663452_6294768116898235799_n.jpg?1701808042' }
  ];

var playlistB = [
    { path: '', image: '' },
    { path: 'https://raw.githubusercontent.com/iagoicente/site-musica/main/musicas/musica5.mp3', image: 'caminho/da/imagem5.jpg' },
    { path: 'https://raw.githubusercontent.com/iagoicente/site-musica/main/musicas/musica6.mp3', image: 'caminho/da/imagem6.jpg' }
];

var currentPlaylist = playlistA;

var audioPlayer = document.getElementById('audioPlayer');

audioPlayer.addEventListener('ended', function () {
    currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
    changeTrack(currentTrackIndex);
});

function changeTrack(trackIndex) {
    currentTrackIndex = trackIndex;

    var albumImage = document.getElementById('albumImage');
    var trackTime = document.getElementById('trackTime');

    // Verifica se a faixa pertence à Playlist B
    if (currentTrackIndex >= playlistA.length) {
        currentPlaylist = playlistB;
        currentTrackIndex -= playlistA.length; // Ajusta o índice para a Playlist B
    } else {
        currentPlaylist = playlistA;
    }

    audioPlayer.src = currentPlaylist[currentTrackIndex].path;
    albumImage.src = currentPlaylist[currentTrackIndex].image;

    // Inicia a reprodução imediatamente
    audioPlayer.play();

    // Adiciona o evento loadedmetadata após a configuração da fonte
    audioPlayer.addEventListener('loadedmetadata', function () {
        onLoadedMetadata();
    });
}

function onLoadedMetadata() {
    // Faça o que precisar com a informação de duração da faixa (por exemplo, exibir no seu HTML)
}

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    changeTrack(currentTrackIndex);
}

function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % currentPlaylist.length;
    changeTrack(currentTrackIndex);
}
