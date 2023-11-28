// Functions Calling Other Functions
// It is possible to call a function from within another function
// We are going to reuse the Fruit Processor function from before

// But first, let's imagine that this fruit processor can only work if it has smaller fruit pieces
// We thus need a machine that cuts the fruit into smaller pieces before processing it
// Let's make that function:

function cutFruitPieces(fruit) {
  return fruit * 4;
}

// Now, let's reuse the fruit processor function with the fruit cutting function inside:

function fruitProcessor(apples, oranges) {
  let applePieces = cutFruitPieces(apples);
  let orangePieces = cutFruitPieces(oranges);

  let juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange. OR ${apples} full apples and ${oranges} full oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
