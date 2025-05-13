const music = new Audio("alien.mp3");

music.play();



function myFunction(){
  document.getElementById("demo").scr = "hi.jpeg";
  const music = new Audio("boom.mp3")
  music.play();
}

let score = 0;

function GiveData()
{
  score = score + 1;
  document.getElementById("demo").innerHTML = score;
  const image = document.getElementById("Alien");
  if (score == 75)
  image.src = "teal.avif"
  if (score == 150)
    image.src = "Yell.webp"
  if (score == 225)
    image.src = "red.webp"
  if (score == 300)
      image.src = "You win.jpg"
  if (score == 1000)
      image.src = "TOPPPPP.jpeg"
  }

