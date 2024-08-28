const ExampleReceipe1 = {
  id: 1,
  userId: 1,
  zutaten: [
    { title: "Zucker", menge: "200g" },
    { title: "Backpulver", menge: "400g" },
  ],
  name: "AWS-23-10 Kuchen",
  backzeit: 10, // In Minuten
  totale_zeit: 30, // In Minuten
  tags: ["süß", "Kuchen"],
  level: "schwer",
};

const ExampleReceipe2 = {
  id: 2,
  userId: 1,
  zutaten: [
    { title: "Zucker", menge: "200g" },
    { title: "Backpulver", menge: "400g" },
  ],
  name: "Hacker Kuchen",
  backzeit: 10, // In Minuten
  totale_zeit: 30, // In Minuten
  tags: ["süß", "Kuchen"],
  level: "schwer",
};

const AllExampleReceipes = [ExampleReceipe1, ExampleReceipe2, ExampleReceipe2];

const ExampleUserData = {
  id: 1,
  email: "dagobert@gmail.com",
  password: "dagobert123", // Sollte später im frontend nicht in der Datnstruktur sein
  name: "Dagobert Duck",
  username: "dagibert0815",
  profileImgUrl:
    "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
};

module.exports = { ExampleReceipe1, ExampleUserData, AllExampleReceipes };
