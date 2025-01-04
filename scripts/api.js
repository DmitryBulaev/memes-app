const MEMES_MOCK = [
  {
    id: "562391530",
    name: "Chill guy",
    url: "https://i.imgflip.com/9au02y.jpg",
    height: 415,
    width: 415,
  },
  {
    id: "124822590",
    name: "Left Exit 12 Off Ramp",
    url: "https://i.imgflip.com/22bdq6.jpg",
    height: 804,
    width: 767,
  },
];

class Api {
  constructor() {}

  getMemes() {
    return MEMES_MOCK;
  }
}
