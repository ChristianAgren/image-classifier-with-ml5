// Initierar "MobileNet" modellen och sparar ner den
const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

// Bilden som vi vill klassificera
const image = document.getElementById('image');

// Callback för när modellen har laddat in
// Kan användas för att ladda om en komponent i ett Reactexempel.
function modelLoaded() {
    console.log('Model loaded');
}

// Funktion för att klassificera bilden som vi hämtar ovan
classifier.classify(image, (err, results) => {
    console.log(results);
});