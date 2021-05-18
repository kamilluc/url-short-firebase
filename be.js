const axios = require("axios");

const getLink = (hash) =>
  `https://url-short-d62db.firebaseio.com/urls/${hash}.json`;

const getData = async (hash) => {
  try {
    const url = getLink(hash);
    const response = await axios.get(url);

    const data = response.data;
    if (response === null) {
      console.log("=>null");
    }
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//obakowac w closure
const generateHash = () => {
  let hash = "";
  let j = 0;
  let asciTable = new Array(26).fill(65);
  asciTable = asciTable.map((v) => v + j++).map((v) => String.fromCharCode(v));
  for (let i = 0; i < 3; ++i) {
    const position = Math.floor(Math.random() * 26);
    hash += asciTable[position];
  }
  return hash;
};
const saveUrl = async (url) => {
  try {
    const hash = generateHash();
    const data = await getData(hash);

    // if(data!==null)
    if (data === null) {
      try {
        const url2 = "https://url-short-d62db.firebaseio.com/urls.json";
        const data2 = { [hash]: url };
        const response = await axios.post(url2, data2);

        const data3 = response.data;
        if (response === null) {
          console.log("=>null");
        }
        console.log("d3", data3);
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// getData("f1");
// console.log(generateHash());
saveUrl("https://github.com/axios/axios");
