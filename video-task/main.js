const video = document.querySelector('video');
const list = document.getElementById('sidenav-list');
const links = [];
let activeLinkIndex = 0;

function videoModel(name, url, poster) {
    return { name, url, poster };
}

const videos = [
    videoModel('Interview Experience', 'video-1.mp4', 'poster-video-1.jpg'),
    videoModel('Play On Beach', 'video-2.mp4', 'poster-video-2.jpg'),
    videoModel('Awesome Sky', 'video-3.mp4', 'poster-video-3.jpg'),
];

function changeVideo() {
    video.played && video.pause();
    const { url, poster } = videos[activeLinkIndex];
    video.src = `./assets/videos/${url}`;
    video.poster = `./assets/images/${poster}`;
}

function createLink({ name, url, poster }, index) {
    const link = document.createElement('li');
    link.classList.add('sidenav__item');
    index || link.classList.add('active');
    link.setAttribute('data-url', url);
    link.setAttribute('data-poster', poster);

    link.addEventListener('click', function () {
        const liIndex = links.findIndex((link) => link === this);
        if (activeLinkIndex === liIndex) return;
        links[activeLinkIndex].classList.remove('active');
        activeLinkIndex = liIndex;
        links[activeLinkIndex].classList.add('active');
        changeVideo();
    });

    const p = document.createElement('p');
    p.appendChild(document.createTextNode(name));
    link.appendChild(p);
    links.push(link);
    list.appendChild(link);
}

videos.forEach(createLink);

// init video
changeVideo();

video.addEventListener('click', function () {
    video.paused ? video.play() : video.pause();
});

let fullScreen = false;
video.addEventListener('dblclick', function () {
    (fullScreen = !fullScreen)
        ? video.parentNode.requestFullscreen()
        : document.exitFullscreen();
    video.classList.toggle('active');
});
