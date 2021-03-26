getQuote();

function getQuote() {
    fetch('https://api.kanye.rest')
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById("quote").innerHTML = data.quote;

            const tweet = encodeURIComponent(`"${data.quote}"-@kanyewest`);
            document.getElementById('tweet').href = `https://twitter.com/intent/tweet?text=${tweet}`;
        });
}

