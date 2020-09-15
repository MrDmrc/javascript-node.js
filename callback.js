//callback function (iki fonskiyonu sıralı çağırma )

function soyle(text, callback) {

    console.log(text)
    callback();
}

soyle("meraba", function () {
    console.log("çay demleniyo..")
});