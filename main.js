var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
imgId = "";
speakData = "";
var utterThis = "";
var content = "";

function start() {
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    if (content == "selfie") {
        speak();
    }
}
function speak() {
    synth = window.speechSynthesis;
    speakData = "taking your selfie in five seconds ";
    utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

    setTimeout(function () {
        imgId = "img1";
        takeSnapshot();
        speakData = "taking your selfie in five seconds ";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 5000);

    setTimeout(function () {
        imgId = "img2";
        takeSnapshot();
        speakData = "taking your selfie in five seconds ";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 10000);

    setTimeout(function () {
        imgId = "img3";
        takeSnapshot();
        speakData = "taking your selfie in five seconds ";
        utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 15000);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: "png",
    png_quality: 90,
})

Webcam.attach("camera")
function takeSnapshot() {
    console.log(imgId)
    Webcam.snap(function (data_uri) {
        if (imgId = "Img1") {
            document.getElementById("result1").innerHTML = " <img id='selfie1' src='" + data_uri + "'/>"
        }
        if (imgId = "Img2") {
            document.getElementById("result2").innerHTML = " <img id='selfie2' src='" + data_uri + "'/>"
        }
        if (imgId = "Img3") {
            document.getElementById("result3").innerHTML = " <img id='selfie3' src='" + data_uri + "'/>"
        }
    })



}
function takeSelfie() {
    Webcam.snap(function (dataUrl) {
        document.getElementById("finalPhoto").innerHTML = '<img id="savedPhoto" src="' + dataUrl + '">'
    })
}

