# Marvel Memory Game

Play Here: https://trykhov.github.io/marvel_memory_game/

This is a game that I created in order to practice my Javascript and jQuery. My inspiration behind this game came from a game that I created in my Web Development online course. While that game was a completely different game with different mechanics, many of the techniques that I learned from that game were used in here.

## Motivation & inspiration

I originally picked a game of memory because I felt that it was a doable project of my current skills. In this project, I gained a deeper understanding of how jQuery.

Besides being a huge Marvel fan, I felt that the choice of theme gave me a sense of creative freedom. For example, each phase represented a difficulty where the higher the phase, the more characters there will be to memorize. This presented a sense of a challenge for the user as well as a way for me to practice building pages that connected to each other.


## Home Page

![home_gif](intro.gif)

As we can see from the demonstration above, the home page layout consists of the title of the game as well as the difficulties to choose from.

The circles with the words "Space", "Reality", etc. are representative of the Infinity Stones from the Marvel universe. They are purely aesthetic. One feature that I added was that if you hovered over a difficulty, it would light up and the corresponding Infinity Stone would light up with it. Again, purely aesthetics.

From what we can see, we see that each phase has a different number of elements to play with. As the player gets chooses a more difficult level, they will be faced with more elements to choose from.

## Game Mechancis

The game runs like a basic memory game. Select two items and if they're a match, then it's a point. If not, they're flipped back to their hidden modes.

![game_mechanics](game_mechanics.gif)

As we can see, the game keeps track of how many attempts it takes to get all the elements correctly.

Once a player completes the game, they can replay the level in hopes of trying to complete the game in fewer attempts. However, one thing I implemented was that I managed to program the game to randomly shuffle and assign the elements after every game. Look closely at the completed game and the next game:

![random](random_demo.gif)

We see that the images for Iron Man for example are in completely different places. This is due to the shuffling algorithm that I implemented.

## Limitations

This game is far from perfect. One of the few limitations that this game has concerns its mechanics. For example, when a player chooses options, the game allows them to choose another two before the first selections were finished executing.

In addition, from a design perspective, it could use some work such as coloring or perhaps the images look a bit blurry / squished.

## What I Learned

This project taught me a lot. Aside from practicing Javascript and jQuery, I learned a bit more about how they functioned. For example, learning how to get the elements to do the flip animation through CSS and HTML, I was able to learn how to program jQuery to create that animation by toggling the class that caused the flip element.

In addition, in implementing the algorithm that randomly assigned the elements after each game, I learned about the Fisher-Yates shuffle algorithm and how it creates a nearly statistically unbiased arrangements of combinations.

## Final Note

I had a lot of fun with this project. Hope you enjoy it as well!
