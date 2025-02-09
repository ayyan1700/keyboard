
const words = {
    A: ["Apple", "Ant", "Arm", "Art", "Air", "Alarm", "Amaze", "Able", "Awesome", "Angle"],
    B: ["Banana", "Ball", "Bat", "Bicycle", "Bird", "Book", "Box", "Button", "Bore", "Bright"],
    C: ["Cat", "Car", "Cup", "Candle", "Castle", "Cold", "Clock", "Clever", "Clear", "Coin"],
    D: ["Dog", "Dove", "Door", "Dragon", "Dream", "Dance", "Date", "Dawn", "Drama", "Dust"],
    E: ["Elephant", "Egg", "Energy", "Earth", "Eagle", "Ear", "Engine", "Enjoy", "Empty", "Event"],
    F: ["Fox", "Fish", "Fan", "Family", "Fun", "Forest", "Fight", "Flower", "Famous", "Flash"],
    G: ["Goat", "Gold", "Giraffe", "Gift", "Gate", "Ghost", "Grass", "Group", "Ground", "Glove"],
    H: ["House", "Hat", "Horse", "Heart", "Hope", "Hello", "Hut", "Holiday", "Health", "Harm"],
    I: ["Ice", "Island", "Idea", "Ink", "Iron", "Important", "Interesting", "Iris", "Inside", "Invite"],
    J: ["Jug", "Jump", "Jack", "Jelly", "Joke", "Joint", "Justice", "Journey", "Jewel", "Judge"],
    K: ["Kite", "King", "Kid", "Kangaroo", "Kettle", "Key", "Knee", "Knife", "Kingdom", "Kiss"],
    L: ["Lion", "Lamp", "Leaf", "Lemon", "Love", "Lace", "Lace", "Ladder", "Lucky", "Light"],
    M: ["Monkey", "Mountain", "Milk", "Moon", "Money", "Mango", "Map", "Mice", "Moment", "Music"],
    N: ["Nest", "Night", "Name", "Net", "New", "Need", "Nose", "Nail", "Nature", "Normal"],
    O: ["Octopus", "Orange", "Oxygen", "Open", "Ocean", "Owner", "Order", "Oval", "Obstacle", "Outfit"],
    P: ["Pineapple", "Piano", "Pen", "Pillow", "Pear", "Phone", "Pine", "Power", "Police", "Picture"],
    Q: ["Queen", "Quick", "Question", "Quiet", "Quilt", "Quack", "Quarter", "Queue", "Quill", "Quit"],
    R: ["Rabbit", "Rain", "Rocket", "Red", "Ring", "Road", "Read", "River", "Reckon", "Rage"],
    S: ["Sun", "Star", "School", "Snake", "Soap", "Shoe", "Spoon", "Stone", "Sail", "Speed"],
    T: ["Tiger", "Train", "Tree", "Tool", "Test", "Trophy", "Tire", "Think", "Thumb", "Track"],
    U: ["Umbrella", "Under", "Uncle", "Useful", "Uniform", "Unique", "Union", "Up", "Utter", "Urban"],
    V: ["Van", "Violet", "Vine", "Village", "Vase", "Vulture", "Vote", "Vision", "Vow", "Vibrant"],
    W: ["Water", "Wind", "World", "Wheel", "Work", "Walk", "Window", "Worm", "Wish", "Whale"],
    X: ["Xylophone", "Xenon", "X-ray", "Xmas", "Xenophobia", "X-factor", "Xerox", "Xenial", "Xenon", "Xylograph"],
    Y: ["Yellow", "Yarn", "Yogurt", "Young", "Yell", "Yawn", "Yoga", "Yolk", "Yacht", "Yip"],
    Z: ["Zebra", "Zipper", "Zero", "Zinc", "Zone", "Zoo", "Zoom", "Zodiac", "Zany", "Zest"]
};
function getRandomWord(letter) {
    const wordArray = words[letter];
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}
function updateWordList(letter) {
    const wordList = document.getElementById("wordList");
    wordList.innerHTML = ''; 
   
    const randomWord = getRandomWord(letter);

    const li = document.createElement("li");
    li.textContent = randomWord;
    wordList.appendChild(li);
}
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', function() {
        const keyText = key.textContent;
        updateWordList(keyText); 
    });
});