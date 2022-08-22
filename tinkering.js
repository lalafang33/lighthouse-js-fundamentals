var tier = "nsfw deck";
var output = "You'll receive";

switch (tier) {
    case "deck of legends":
        output += "a custom card, ";
    case "collector's deck":
        output += "a signed version of Exploding Kittens deck, ";
    case "nsfw deck":
        output += "one copy of NSFW (Not Safe For Work) Exploding kittens card game and ";
    default: 
        output += "one copy of the Exploding Kittens card game.";
}
console.log(output);
