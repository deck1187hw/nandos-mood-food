import { format, formatDistance } from 'date-fns'
const DEFAULT_TIME = "dd MMMM yyyy HH:mm:ss";
function getPeriAttrs(tf) {
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



function getTotal(audioFeatures) {
    const total = audioFeatures.valence + audioFeatures.danceability + audioFeatures.energy;
    const tf = total / 3; // average        
    const peri = getPeriAttrs(tf);
    return {
        peri: peri,
        percentage: Math.ceil(tf * 100),
        tf: tf
    };
}

function epochConverter(epochTime) {
    const dateFormatted = new Date(epochTime * 1000);
    return {
        main: format(dateFormatted, `${DEFAULT_TIME}`),
        relative: formatDistance(dateFormatted, new Date(), {
            addSuffix: true
        })
    }

}
export { getPeriAttrs, getTotal, epochConverter }