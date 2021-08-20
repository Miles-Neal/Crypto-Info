
//Nav bar 
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelectorAll('.navbar-links');




toggleButton.onclick = function() {
    for (var i = 0; i < navbarLinks.length; i++)
        navbarLinks[i].classList.toggle('active')
}


///nav



// current market

// current market
var apikey = {
    key: '8dd3bd4c-f48a-4d67-a584-ad34992025eb',
    key2: 'b1692f44-986f-4f8a-b280-4d38ddb658ce',
  key3: 'ac87bdf0-0751-4996-b487-7882831af862'
}

request('GET', 'https://mlb-cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=10&CMC_PRO_API_KEY=' + apikey.key)
    .then((r1) => {
        var x1 = JSON.parse(r1.target.response);
        console.log(x1.data);
        let data1 = x1.data
        let rank = data1[0].cmc_rank;
        console.log(document.body)

        for (let x = 0; x < data1.length; x++) {
            let rank = data1[x].cmc_rank;
            console.log(rank)
            let symbol = data1[x].symbol;
            console.log(symbol)
            let name = data1[x].name;
            console.log(name)
            let price = data1[x].quote.USD.price;
            console.log(price)
            let market_cap = data1[x].quote.USD.market_cap;
            console.log(market_cap)




            let table = document.querySelector("#table_body")
            let newtr = document.createElement('tr');
            newtr.className = "rank"
            table.appendChild(newtr)

            let ranktd = document.createElement('td');
            ranktd.className = "rank_td"
            newtr.appendChild(ranktd)
            ranktd.innerHTML = rank;

            let symtd = document.createElement('td');
            symtd.className = "sym_id"
            newtr.appendChild(symtd)
            symtd.innerHTML = symbol;


            let nametd = document.createElement('td');
            nametd.className = "name_td"
            newtr.appendChild(nametd)
            nametd.innerHTML = name;
            nametd.style.cursor = "pointer"


            let pricetd = document.createElement('td');
            pricetd.className = "rank_td"
            newtr.appendChild(pricetd)
            pricetd.innerHTML = "$" + price;

            let markettd = document.createElement('td');
            markettd.className = "rank_td"
            newtr.appendChild(markettd)
            markettd.innerHTML = market_cap;
        }

        let symc = document.getElementsByClassName('sym_id')[0];
        let symc2 = document.getElementsByClassName('sym_id')[1];
        let symc3 = document.getElementsByClassName('sym_id')[2];
        let symc4 = document.getElementsByClassName('sym_id')[3];
        let symc5 = document.getElementsByClassName('sym_id')[4];
        let symc6 = document.getElementsByClassName('sym_id')[5];
        let symc7 = document.getElementsByClassName('sym_id')[6];
        let symc8 = document.getElementsByClassName('sym_id')[7];
        let symc9 = document.getElementsByClassName('sym_id')[8];
        let symc10 = document.getElementsByClassName('sym_id')[9];


        let img1 = document.createElement('img')
        let img2 = document.createElement('img')
        let img3 = document.createElement('img')
        let img4 = document.createElement('img')
        let img5 = document.createElement('img')
        let img6 = document.createElement('img')
        let img7 = document.createElement('img')
        let img8 = document.createElement('img')
        let img9 = document.createElement('img')
        let img10 = document.createElement('img')

        img1.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fbit.png?1629328984534/bit.png"
        img1.style.marginLeft = "10px";
        img1.style.width = "25px";
        symc.appendChild(img1)

        img2.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fethereum.png?1629329049674"
        img2.style.marginLeft = "10px";
        img2.style.width = "25px";
        symc2.appendChild(img2)

        img3.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fcardano-ada-logo.png?1629329037543"
        img3.style.marginLeft = "10px";
        img3.style.width = "25px";
        symc3.appendChild(img3)

        img4.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fbinance.png?1629328995655"
        img4.style.marginLeft = "10px";
        img4.style.width = "25px";
        symc4.appendChild(img4)

        img5.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Ftether11.png?1629329068487"
        img5.style.marginLeft = "10px";
        img5.style.width = "25px";
        symc5.appendChild(img5)

        img6.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fxrp.png?1629329078613"
        img6.style.marginLeft = "10px";
        img6.style.width = "25px";
        symc6.appendChild(img6)


        img7.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fdogecoin-logo-png-transparent.png?1629329043553"
        img7.style.marginLeft = "10px";
        img7.style.width = "25px";
        symc7.appendChild(img7)


        img8.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fusdc.png?1629329074187"
        img8.style.marginLeft = "10px";
        img8.style.width = "25px";
        symc8.appendChild(img8)


        img9.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fpolkadot-new-dot-logo.png?1629329056911"
        img9.style.marginLeft = "10px";
        img9.style.width = "25px";
        symc9.appendChild(img9)


        img10.src = "https://cdn.glitch.com/3c27c6bc-9ba3-4408-9508-17174e65a450%2Fthumbnails%2Fsolana.png?1629329061099"
        img10.style.marginLeft = "10px";
        img10.style.width = "25px";
        symc10.appendChild(img10)


        // let img2 = document.createElement('img')
        // img2.style.marginLeft = "10px";
        // img2.src = "images/bit.png"
        // img2.style.width = "20px";
        // name1.appendChild(img2)

        let market_header = document.querySelector("#market_header")
        let name1 = document.getElementsByClassName('name_td')[0];
        let name2 = document.getElementsByClassName('name_td')[1];
        let name3 = document.getElementsByClassName('name_td')[2];
        let name4 = document.getElementsByClassName('name_td')[3];
        let name5 = document.getElementsByClassName('name_td')[4];
        let name6 = document.getElementsByClassName('name_td')[5];
        let name7 = document.getElementsByClassName('name_td')[6];
        let name8 = document.getElementsByClassName('name_td')[7];
        let name9 = document.getElementsByClassName('name_td')[8];
        let name10 = document.getElementsByClassName('name_td')[9];

        let market_head = document.querySelector("#marke_table")
        let bit = document.querySelector("#bit")
        let eth = document.querySelector("#eth")
        let bin = document.querySelector("#bin")
        let cardano = document.querySelector("#cardano")
        let tether = document.querySelector("#tether")
        let doge = document.querySelector("#doge")
        let usd = document.querySelector("#usd")
        let xrp = document.querySelector("#xrp")
        let polkadot = document.querySelector("#polkadot")
        let solana = document.querySelector("#solana")


        market_header.onclick = function(e) {
            e.preventDefault()
            market_head.style.display = "block";
            bit.style.display = "none";
            eth.style.display = "none";
            bin.style.display = "none";
            cardano.style.display = "none";
            tether.style.display = "none";
            usd.style.display = "none";
            doge.style.display = "none";
            polkadot.style.display = "none";
            solana.style.display = "none";
            xrp.style.display = "none";
        }
        name1.onclick = function(e) {
            e.preventDefault()
            bit.style.display = "block";
            market_head.style.display = "none";
            // bit.style.marginTop = "-950px"
        }

        name2.onclick = function(e) {
            e.preventDefault()
            eth.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-950px"
        }

        name4.onclick = function(e) {
            e.preventDefault()
            bin.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1350px"
        }

        name3.onclick = function(e) {
            e.preventDefault()
            cardano.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }

        name5.onclick = function(e) {
            e.preventDefault()
            tether.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }

        name6.onclick = function(e) {
            e.preventDefault()
            xrp.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }


        name7.onclick = function(e) {
            e.preventDefault()
            doge.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }


        name8.onclick = function(e) {
            e.preventDefault()
            usd.style.display = "block";

            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }


        name9.onclick = function(e) {
            e.preventDefault()
            polkadot.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }


        name10.onclick = function(e) {
            e.preventDefault()
            solana.style.display = "block";
            market_head.style.display = "none";
            bit.style.marginTop = "-1750px"
        }




    }).catch(err => {
        console.log(err);
    })

function request(method, url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    });
}

//NewsApi (ARTICLES)
let proxy = "https://mlb-cors-anywhere.herokuapp.com/"
let url = "https://newsapi.org/v2/everything?qInTitle=Cryptocurrency&from=2021&sortBy=popularity&apiKey=883f5a15ece4472ebb7f00a8c1fa170c&qInTitle='Cryptocurrency'"

let container = document.querySelector(".container-div")
function getData() {
    return fetch(url)
        .then(function(response) {
            return response.json();
         })
        .then(function(data) {
            for (i=0; i < 20; i++) {
                let article = data.articles[i];
                let div = document.createElement("div");
                div.innerHTML="<div class='article-div'><h3>" + article.source.name + "</h3><a href='" + article.url + "'>" + article.title + "</a><h3>" + article.author + "</h3><img src='" + article.urlToImage + "'><br><br><br></div>"
                
                container.append(div)
            }
            console.log(data);
            console.log(article);
         });
}
getData();

const topicInput = document.querySelector("#topic-input");
const submitButton = document.querySelector("#submit-button");

let store = document.querySelector(".store-div")
function getnewData(topic) {
    let link = "https://newsapi.org/v2/everything?qInTitle=" + topic + "&from=2021&sortBy=popularity&apiKey=883f5a15ece4472ebb7f00a8c1fa170c"

    return fetch(link)
        .then(function(response) {
            return response.json();
         })
        .then(function (data) {
            console.log(data);
            for (i=0; i < 5; i++) {
                let trackArticle = data.articles[i];
                let newDiv = document.createElement("div");
                newDiv.innerHTML="<div class='article-div'><h3>" + trackArticle.source.name + "</h3><a href='" + trackArticle.url + "'>" + trackArticle.title + "</a><h3>" + trackArticle.author + "</h3><img src='" + trackArticle.urlToImage + "'><br><br><br></div>"
                
                store.append(newDiv)
            }
            console.log(data);
         });
}

submitButton.onclick = function (e) {
    e.preventDefault();
    let topic = topicInput.value;
    getnewData(topic);
}
