const jsonObject = {
  "name": "Shobi",
  "age": 28,
  "city": "Chennai"
};

for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}
// Using a for...in loop
for (let key in jsonObject) {
  console.log(key + ": " + jsonObject[key]);
}

// Using a for...of loop
const entries = Object.entries(jsonObject);
for (let [key, value] of entries) {
  console.log(key + ": " + value);
}

// Using Array.forEach() method
Object.entries(jsonObject).forEach(([key, value]) => {
  console.log(key + ": " + value);
});