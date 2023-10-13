const jokes = [
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "What's orange and sounds like a parrot? A carrot!",
    "Did you hear about the claustrophobic astronaut? He just needed a little space.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did one plate say to the other plate? Dinner's on me!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "How do you organize a space party? You 'planet'!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fake noodle? An 'impasta'!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "How does a snowman get around? By riding an 'icicle'!",
    "Why was the computer cold? It left its Windows open!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I used to play piano by ear, but now I use my hands.",
    "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Did you hear about the kidnapping at the playground? They woke up.",
    "How do you make a tissue dance? You put a little boogie in it!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What do you get when you cross a snowman with a vampire? Frostbite!",
    "I'm on a seafood diet. I see food and I eat it!",
    "How does a train eat? It goes chew chew!",
    "What did the left eye say to the right eye? Between you and me, something smells.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why couldn't the bicycle stand up by itself? It was two-tired!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "What's the difference between a snowman and a snowwoman? Snowballs!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why don't some couples go to the gym? Because some relationships don't work out!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a group of musical whales? An orca-stra!",
    "Why don't some fish play piano? You can't tuna fish!",
    "Why did the astronaut break up with his girlfriend? He needed space.",
    "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!",
    "What do you call a bear with no teeth? A gummy bear!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why was the math book sad? Because it had too many problems.",
    "I used to play piano by ear, but now I use my hands.",
    "How do you organize a space party? You 'planet'!",
    "Why can't you trust an atom? Because they make up everything!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What did one wall say to the other wall? I'll meet you at the corner!",
    "I used to play piano by ear, but now I use my hands.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fake noodle? An 'impasta'!",
    "How do you organize a space party? You 'planet'!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why couldn't the bicycle stand up by itself? It was two-tired!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What do you get when you cross a snowman with a vampire? Frostbite!",
    "I'm on a seafood diet. I see food and I eat it!",
    "How does a train eat? It goes chew chew!",
    "Did you hear about the kidnapping at the playground? They woke up.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I only know 25 letters of the alphabet. I don't know y.",
    "Why did the math book look sad? Because it had too many problems.",
    "What did the fish say when it hit the wall? Dam!",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a group of musical whales? An orca-stra!",
    "Why did the astronaut break up with his girlfriend? He needed space.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why can't you give Elsa from Frozen a balloon? Because she will let it go!",
    "How does a penguin build its house? Igloos it together!",
    "What's the difference between a poorly dressed man on a tricycle and a well-dressed man on a bicycle? Attire!",
    "Why don't some fish play piano? You can't tuna fish!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I used to play piano by ear, but now I use my hands.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "What's brown and sticky? A stick!",
    "Why did the chicken go to the seance? To talk to the other side!",
    "How do you make holy water? You boil the hell out of it!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "I'm friends with all electricians. We have great current connections.",
    "Oooo! Bhai ye mazak ho raha nahi maroo mujhe maroo",
  ];
  
  
  let button = document.querySelector("#btn1");
  let textField = document.querySelector("#jokeContent");
  let audio = document.getElementById("myaudio1");
  
  // button.addEventListener("click", function(){
  //     let random_joke = Math.floor(Math.random()*jokes.length-1)
  //     textField.textContent = jokes[random_joke]
  // })
  
  const jokeGenerator = () => {
    let random_joke = Math.floor(Math.random() * jokes.length - 1)
    textField.textContent = jokes[random_joke]
  }
  
  button.addEventListener("click", playsound);
  
  function playsound() {
    audio.play()
  };
  
  
  