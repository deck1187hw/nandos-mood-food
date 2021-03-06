const _ = require('lodash');
class Spotify {

    constructor(data) {
        this.data = data;

    }
    getPeriAttrs(tf) {
        let peri = {
            title: "",
            color: ""
        }
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
        return peri
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
    getTrackExternalUrl() {
        return _.get(this.data, 'data.currentlyPlaying.data.item.external_urls.spotify') ? this.data.data.currentlyPlaying.data.item.external_urls.spotify : null
    }
    getGradient() {
        const opacity = 0.9
        const gradients = [
            `rgba(65, 88, 208, ${opacity}), rgba(200, 80, 192, ${opacity}), rgba(255, 204, 112, ${opacity})`,
            `rgba(217, 175, 217, ${opacity}), rgba(151, 217, 225, ${opacity})`,
            `rgba(255, 229, 59, ${opacity}), rgba(255, 37, 37, ${opacity})`,
            `rgba(215, 225, 230, ${opacity}), rgba(217, 226, 232, ${opacity})`,
            `rgba(178, 183,237, ${opacity}), rgba(232, 138, 152, ${opacity})`,
            `rgba(241, 138,230, ${opacity}), rgba(244, 96, 128, ${opacity})`,
            `rgba(76, 174,254, ${opacity}), rgba(9, 232, 254, ${opacity})`,
            `rgba(51, 18,108, ${opacity}), rgba(48, 200, 204, ${opacity})`,
            `rgba(252, 215,228, ${opacity}), rgba(173, 236, 234, ${opacity})`,
            `rgba(250, 241,213, ${opacity}), rgba(211, 157, 194, ${opacity})`,
            `rgba(105, 117,222, ${opacity}), rgba(116, 84, 175, ${opacity})`,

        ];

        return gradients[Math.floor(Math.random() * gradients.length)]
    }

}
module.exports = Spotify;
