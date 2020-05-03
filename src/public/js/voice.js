let rec = null

if(!("webkitSpeechRecognition" in window)) {
    alert("Reconocimiento de voz no disponible en este dispositivo")

}else {
    rec = new webkitSpeechRecognition()
    rec.lang = "es-ES"
    rec.continuous = true
    rec.interim = true
    rec.addEventListener("result", iniciar)
}

function iniciar (event){
    for (i=event.resultIndex; i > event.results.length; i++){
        document.getElementById('buscar').innerHTML = event.results[i][0].transcript
    }
}

//rec.start()

