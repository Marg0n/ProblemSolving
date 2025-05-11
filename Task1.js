

const persons = [
  {
    name: "Sokhorio",
    age: 31,
    gender: "male",
  },
  {
    name: "Mina",
    age: 26,
    gender: "female",
  },
  {
    name: "Nina",
    age: 26,
    gender: "female",
  },
  {
    name: "Lily",
    age: 28,
    gender: "female",
  },
  {
    name: "Tony",
    age: 78,
    gender: "male",
  },
];

//* Function to filter out all females and return an array of names
const getMaleNames = (persons) => {

  const results = persons
                    .filter(person => person.gender !== "female")
                    .map(person => person.name);

  return results;
};

const prints = getMaleNames(persons);

console.log(prints);