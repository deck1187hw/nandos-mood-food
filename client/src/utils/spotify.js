/*
Valence:
A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).

*/


const _ = require('lodash');
class Spotify {

    constructor(data) {
        this.data = data;

    }
    getTotal(audioFeatures) {
        const total = audioFeatures.valence + audioFeatures.danceability + audioFeatures.energy;
        const tf = total / 3; // average
        let peri = "medium";
        if (tf >= 0 && tf < 0.2) {
            peri = {
                title: "extra-mild",
                color: "#5a642d"
            }
        }
        if (tf >= 0.2 && tf < 0.4) {
            peri = {
                title: "mild",
                color: "#97c31e"
            }
        }
        if (tf >= 0.4 && tf < 0.6) {
            peri = {
                title: "medium",
                color: "#faa500"
            }
        }
        if (tf >= 0.6 && tf < 0.8) {
            peri = {
                title: "hot",
                color: "#ce1a23"
            }
        }
        if (tf >= 0.8 && tf < 1) {
            peri = {
                title: "extra-hot",
                color: "#46230f"
            }
        }
        return {
            peri: peri,
            percentage: Math.ceil(tf * 100),
            tf: tf
        };
    }
    getPositiveness(typeFeature, audioFeatures) {
        let peri = "medium";
        let tf = audioFeatures[typeFeature];

        if (tf >= 0 && tf < 0.2) {
            peri = "extra-mild"
        }
        if (tf >= 0.2 && tf < 0.4) {
            peri = "mild"
        }
        if (tf >= 0.4 && tf < 0.6) {
            peri = "medium"
        }
        if (tf >= 0.6 && tf < 0.8) {
            peri = "hot"
        }
        if (tf >= 0.8 && tf < 1) {
            peri = "extra-hot"
        }


        return {
            peri: peri,
            percentage: Math.ceil(tf * 100),
            tf: tf
        };
    }
    getImage() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.album.images[0].url') ? this.data.data.currentlyPlaying.data.item.album.images[0].url : null
    }
    getSongTitle() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.name') ? this.data.data.currentlyPlaying.data.item.name : null
    }
    getAlbumName() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.album.name') ? this.data.data.currentlyPlaying.data.item.album.name : null
    }
    getAlbumYear() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.album.release_date') ? this.data.data.currentlyPlaying.data.item.album.release_date : null
    }
    getArtistName() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.album.artists[0].name') ? this.data.data.currentlyPlaying.data.item.album.artists[0].name : null
    }
    getAudioFeatures() {
        return _.get(this.data, 'data.audioFeatures.data.audio_features[0]') ? this.data.data.audioFeatures.data.audio_features[0] : null
    }
    getGradient() {
        const opacity = 0.9
        const gradients = [
            `rgba(65, 88, 208, ${opacity}), rgba(200, 80, 192, ${opacity}), rgba(255, 204, 112, ${opacity})`,
            `rgba(217, 175, 217, ${opacity}), rgba(151, 217, 225, ${opacity})`,
            `rgba(255, 229, 59, ${opacity}), rgba(255, 37, 37, ${opacity})`

        ];

        return gradients[Math.floor(Math.random() * gradients.length)]
    }

}
module.exports = Spotify;
