# image-classifier-with-ml5
Detta är ett bildklassificeringsprogram skrivet i js med ml5.js ramverket

I detta repo så testar jag precis hur enkelt det är att sätta upp ett maskininlärningsexempel genom att använda mig av ml5.js ramverket.

Stegen för att skapa ett eget projekt är enkla:
1. Länka till ml5.js biblioteket via cdn:
2. Initiera modellen i en variabel.
2.1 Spara bilden i en variabel. (Alternativt hänvisa till den direkt i klassificeringsfunktionen)
3. Kör klassificeringsfunktionen för modellen och hänvisa till bilden.

Resultatet som loggas ut i webbläsarens konsol är en array med gissningar från modellen, vilken är ordnad efter modellens övertygelse att bilden representerar den labeln.

## Instruktioner

För att testa modellen själv, kopiera ner repot och byt src i img-taggen i image.html. 

Om du vill testa med en annan bild, spara din bild i "images" mappen och länka till den genom att ändra src för img-taggen i image.html.

Du kan sedan köra projektet med live-server och se resultatet i webbläsarens konsol.
