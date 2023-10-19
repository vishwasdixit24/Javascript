// function that press enter button when we hit enter on keyboard
var input = document.getElementById("name")
input.onkeypress = (event) => {
    if (event.keyCode == 13 || event.which == 13) {
        document.getElementById("btn").click();
    }
}

// to generate 10101010101010101010
const genCode = () => {
    let code = '';
    while (code.length < 150) {
        code = code.concat(Math.floor(Math.random() * 2));
    }
    return code;
}

const run = async () => {
    // defining variables
    let insert = document.getElementById("insert")
    let name = input.value
    let display = [`Connecting to Instagram...<br>`, `Finding User with Username: ${name}<br>`, `Username ${name} found...<br>`, `Trying to crack Password...<br>`, `Trying a combination of 4.5 Million passwords...<br>`, `Match not found...<br> Trying a combination of Another 2 Million passwords...<br>`, `Match not found...<br> Trying a combination of Another 4 Million passwords...<br>`, `Password match found...<br>`, `Account hack successful...<br>`, `Sending information to Email...<br>`, `Fooled You 😂 ...<br>`]
    let sec = [2000, 2000, 4000, 2000, 2000, 2000, 2000, 5000, 2000, 2000, 4000]

    let side = Array.from(document.getElementsByClassName("side"));

    // function to display percentage increase
    async function count() {
        let percent = 0
        while (percent !== 100) {
            let addd = Math.floor(Math.random() * 30 + 1)
            percent = percent + addd
            if (percent > 100) {
                percent = 100
            }
            await new Promise(a => setTimeout(a, 150))// resolves the promise after 150ms
            insert.innerHTML = `Initializing Hacking program... ${percent}%<br>`
        }
    }

    // function to display the text
    if (name == "") {
        insert.innerHTML = "Please Enter an Username <br>"
    }
    else {
        await count()
        let clear = setInterval(() => {
            side[0].innerHTML = genCode();
        }, 250)
        for (let i = 0; i < display.length; i++) {
            let x = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    insert.innerHTML += display[i]
                    resolve(1)
                }, sec[i])
            })
        }
        clearInterval(clear)
        side[0].innerHTML = "&nbsp;"
    }
}
