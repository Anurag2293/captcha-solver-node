const tesseract = require("node-tesseract-ocr")

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

const img = "https://tesseract.projectnaptha.com/img/eng_bw.png"


async function solveCaptcha (imgURL) {
    try {
        const text = await tesseract.recognize(imgURL, config)
        console.log(text)
    } catch (error) {
        console.log(error.message)
    }
}

solveCaptcha(img)