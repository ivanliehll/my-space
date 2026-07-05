import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
	{
		id: 1,
		title: "Coldplay - Yellow",
		artist: "Coldplay",
		cover: "assets/music/cover/1.webp",
		url: "assets/music/url/01. Coldplay - Yellow (Official Video).mp3",
		duration: 0,
	},
	{
		id: 2,
		title: "Ed Sheeran - Shivers",
		artist: "Ed Sheeran",
		cover: "assets/music/cover/2.webp",
		url: "assets/music/url/02. Ed Sheeran - Shivers [Official Video].mp3",
		duration: 240,
	},
	{
		id: 3,
		title: "BoyWithUke ft. Oliver Tree - Sick of U",
		artist: "BoyWithUke ft. Oliver Tree",
		cover: "assets/music/cover/3.webp",
		url: "assets/music/url/03. BoyWithUke ft. Oliver Tree - Sick of U (Official Music Video).mp3",
		duration: 180,
	},
	{
		id: 4,
		title: "Imagine Dragons - Demons",
		artist: "Imagine Dragons",
		cover: "assets/music/cover/4.webp",
		url: "assets/music/url/04. Imagine Dragons - Demons (Official Music Video).mp3",
		duration: 200,
	},
	{
		id: 5,
		title: "Avicii - Heaven",
		artist: "Avicii",
		cover: "assets/music/cover/5.webp",
		url: "assets/music/url/05. Avicii - Heaven (Tribute Video).mp3",
		duration: 200,
	},
];

export const DEFAULT_SONG: Song = {
	title: "Sample Song",
	artist: "Sample Artist",
	cover: "/favicon/favicon.ico",
	url: "",
	duration: 0,
	id: 0,
};

export const DEFAULT_METING_API =
	"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
