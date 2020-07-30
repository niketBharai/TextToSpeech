const synth = window.speechSynthesis; //speech API

//DOM

const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');

//voices array

let voices = [];

//function getVoices(){} 


const getVoices = () => {
    voices = synth.getVoices();
    //console.log(voices);

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = voice.name + '(' + voice.lang + ')';
        option.setAttribute('data-lang', voice.lang);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option);
    });
};

getVoices();
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

const speak = () => {
    if (synth.speaking) {
        console.error('already speaking.....');
        return;
    }
    if (textInput.value !== '') {
        const speakText = new SpeechSynthesisUtterance(textInput.value); //get text - speak 

        speakText.onend = e => {
            console.log("It's Over");

        }

        const SelectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name'); //grab the selected voice

        voices.forEach(voice => {
            if (voice.name === SelectedVoice) {
                speakText.voice = voice;
            }
            
            
    
        });



        speakText.rate = rate.value;

        synth.speak(speakText)
    }
}

textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak();
});

rate.addEventListener('change', e => (rateValue.textContent = rate.value)); 





console.log("Niket Bharai");
             console.log("");
             console.log("");
             console.log("");
             console.log("");
             console.log("");
             console.log("");
