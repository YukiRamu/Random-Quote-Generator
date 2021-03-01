/* Yuki Matsubara Morning Class_WMAD2 Week2 Weekly Assignment */
//Author array
let authorArray = [
  "Charlie Brown",
  "Jim Pattison",
  "President Trump",
  "Steve Jobs",
  "Anne Bradsteet",
  "Confucius",
  "Aaron Hank",
  "Ball Hugo",
  "Barmes Jack",
  "Joe Hill",
  "William Ondrick"
];

//get all elements from HTML
const genBtn = document.getElementById("genBtn");
const quoteOutput = document.getElementById("quoteOutput");
const output = document.getElementById("output");
const header = document.getElementById("header");
const loader = document.getElementById("loader");

//Fetch random quotes from API
const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

const getQuote = () => {
  console.log("1. button was clicked");
  let randomIndex = Math.floor(Math.random() * (authorArray.length));
  fetch(url)
    .then(response => response.json())//convert Response to JSON
    .then((data) => { //can access actual data

      /* Loading Animation */
      const loadAnimation = async function () {
        console.log("2 loader Animation starts");

        loader.style.display = "block";
        console.log(loader.style.display);
      }

      /* Wait 1 sec */
      const wait = async function () {
        console.log("3 sconds waiting")
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 1000);
        });
      };

      /* Loading Stop */
      const loadStop = async function () {
        console.log("3. stop loader");
        console.log(loader.style.display);
        loader.style.display = "none";
      }

      /* Generate Quote */
      const generateQuote = async function () {
        console.log("3 quote generation starts");
        quoteOutput.innerHTML = `<p class="quo">" ${data.message} "</p>
        <p class="author"> - ${authorArray[randomIndex]} -</p>`; //show message and author
        header.style.transform = "translate(0%,0%)";
        header.style.top = "5%";
        header.style.left = "0%";
        output.setAttribute("class", "output clicked");
        console.log("4 quote generation ends");
      };

      const processAll = async function () {
        await loadAnimation();
        await wait();
        await loadStop();
        await generateQuote();
      }
      processAll();
    })

    .catch(() => {
      console.error("ERROR: Quote Generator Failed.");
    });
}

//call function when the button is clicked
genBtn.addEventListener('click', getQuote);


