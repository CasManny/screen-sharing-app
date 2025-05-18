export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://sg.storage.bunnycdn.com/snapcast",
  CDN_URL: "https://snapcast.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-47a08e64-84d.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards = [
  {
    id: "1",
    username: "Josh",
    title: "Snapchat Message",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    username: "Anna",
    title: "Instagram Story",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/jason.png",
    views: 25,
    visibility: "private",
    duration: 98,
  },
  {
    id: "3",
    username: "Mike",
    title: "TikTok Dance",
    userImg: "/assets/images/jason.png",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-03"),
    views: 43,
    visibility: "public",
    duration: 203,
  },
  {
    id: "4",
    username: "Sophie",
    title: "YouTube Vlog",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-04"),
    userImg: "/assets/images/jason.png",
    views: 67,
    visibility: "unlisted",
    duration: 321,
  },
  {
    id: "5",
    username: "Daniel",
    title: "Product Review",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-05"),
    userImg: "/assets/images/jason.png",
    views: 89,
    visibility: "public",
    duration: 145,
  },
  {
    id: "6",
    username: "Emily",
    title: "Makeup Tutorial",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-06"),
    userImg: "/assets/images/jason.png",
    views: 134,
    visibility: "public",
    duration: 278,
  },
  {
    id: "7",
    username: "Chris",
    title: "Game Walkthrough",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-07"),
    userImg: "/assets/images/jason.png",
    views: 76,
    visibility: "private",
    duration: 412,
  },
  {
    id: "8",
    username: "Grace",
    title: "Cooking Show",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-08"),
    userImg: "/assets/images/jason.png",
    views: 59,
    visibility: "unlisted",
    duration: 301,
  },
  {
    id: "9",
    username: "Leo",
    title: "Fitness Routine",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-09"),
    userImg: "/assets/images/jason.png",
    views: 147,
    visibility: "public",
    duration: 254,
  },
  {
    id: "10",
    username: "Nina",
    title: "Travel Vlog",
    thumbnail: "/assets/images/video1.png",
    createdAt: new Date("2025-05-10"),
    userImg: "/assets/images/jason.png",
    views: 92,
    visibility: "public",
    duration: 365,
  },
];
