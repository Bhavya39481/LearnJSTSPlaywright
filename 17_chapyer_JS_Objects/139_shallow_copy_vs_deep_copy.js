// ELI5: An object is like a house. A variable holds its address, not another house.

// Passing an object to a function copies its address.
// The function and caller can both reach the same object and change it.
// Technically, JavaScript passes the reference value by value (often called
// "call by sharing"), not by reference.
function updatePlayer(player) {
    player.score = 10;
}

const player = { name: "Ava", score: 0 };
updatePlayer(player);
console.log("After the function changes the object:", player.score); // 10

// Spread makes a shallow copy: a new outer object, but nested objects are
// still shared, like two addresses pointing to the same room in the house.
const original = {
    name: "Ava",
    settings: { theme: "light" },
};
const shallowCopy = { ...original };

shallowCopy.name = "Mia";
shallowCopy.settings.theme = "dark";

console.log("Original name stays the same:", original.name); // Ava
console.log("Nested theme also changed:", original.settings.theme); // dark

// structuredClone makes a deep copy: nested objects are copied too.
const deepCopy = structuredClone(original);
deepCopy.settings.theme = "blue";

console.log("Deep copy theme:", deepCopy.settings.theme); // blue
console.log("Original theme stays the same:", original.settings.theme); // dark