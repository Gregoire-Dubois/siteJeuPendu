
// URL de test pour le carousel
const imageStart = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/montage.jpg"
const imageOne ="/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduOne.jpg"
const imageTwo ="/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduTwo.png"
const imageThree ="/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduThree.png"
const imageFour ="/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduFour.png"
const imageFive ="/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduFive.png"
const imageSix = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduSix.png"
const imageSeven = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduSeven.png"
const imageEight = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduEight.png"
const imageNine = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduNine.png"
const imageTen = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduTen.png"
const imageEleven = "/Users/gregoiredubois/Documents/programmation/site_jeu_pendu_shifumi/images/penduEleven.png"

const imagesCollection = [
  imageStart,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix, 
  imageSeven, 
  imageEight, 
  imageNine, 
  imageTen,
  imageEleven, 
];

const affichage = document.querySelector(".blackBoard");
affichage.innerHTML = `<img src="${imagesCollection[imageOne]}"/>`;

// génerer le mot aléatoire


const wordsList = ["PYTHON", "JAVA", "GITHUB", "JAVASCRIPT", "KOBOL"];
const randomNumber = Math.round(Math.random() * wordsList.length);
const oneWord = wordsList[randomNumber];
console.log(oneWord);


// afficher le mot aléatoire sous les étoiles
const secretWord = [];
const star = "*";
for (let i = 0; i < oneWord.length; i++) {
  secretWord.push(star);
}
console.log(secretWord.join(""));
document.querySelector(".stars").innerHTML = secretWord.join("");

// déclaration du sélecteur CSS pour le boutton .btn
const btns = document.querySelectorAll(".btn");

//fonction pour écouter les click sur le clavier visuel
let unMask = [];
let chance = 11; // nombre max de chances
let msg = "";

let indexCarousel = 0;

btns.forEach((btns) => {
  let tryLetter = 0; //valeur de réponse, si vaut 1 ou plus alors c'est OK. si vaut 0 alors c'est faux

  btns.addEventListener("click", (e) => {
    // boucle de vérification des caractères saisis par l'utilisateur avec ceux du mot mystère
    for (let letter = 0; letter < oneWord.length; letter++) {
      if (e.target.innerText == oneWord[letter]) {
        secretWord.splice([letter], 1, e.target.innerText);
        tryLetter = 1;
        console.log(tryLetter);
      }
    }
    document.querySelector(".stars").innerHTML = secretWord.join("");
    if (tryLetter === 0) {
      chance--;
      msg = `Il vous reste ${chance} chance(s)`;
      document.querySelector(".vies").innerHTML = msg;

      indexCarousel++;
      imagesCollection[indexCarousel];
      affichage.innerHTML = `<img src="${imagesCollection[indexCarousel]}"/>`;
      console.log("index carousel vaut", indexCarousel);
    }
  });
  if (chance === 0) {
    return (document.querySelector(".gameOver").innerHTML = "Game Overs :(");
  }
});

// fin du carousel

// arreter la boucle lorsque le mot est trouvé

// mécanisme de rafraischissement de page si les chances sont épuisées et ou le mot trouvé

// pour le compteur de chances, faire une condition pour que le S de chance diparaisse quant il reste 1 seule chance

// animation carousel des images en cas d'échecs

// bloquage clavier virtuel en cas d'épuisement des chances

// injecter multiples mots dans base de données

// style de couleur dark ou non en fonction de l'heure système
