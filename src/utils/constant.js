const GOOGLE_API_KEY = "AIzaSyD9_VQKtPTJpPVCJRRRKYcNUrA1L7DwPv4";

export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + GOOGLE_API_KEY;

export const testing= "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key="+GOOGLE_API_KEY;