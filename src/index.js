const names = ["David", "Ana", "Yessica", "Diego", "Hernan", "Heisen"];

const randomName = () => {
  const name = names[Math.floor(Math.random() * names.length)];
  return console.log(name);
};

module.exports = { randomName };
