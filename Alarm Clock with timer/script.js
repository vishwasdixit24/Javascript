let hr = document.getElementById("option-h")
let min = document.getElementById("option-m")
let sec = document.getElementById("option-s")
let ap = document.getElementById("option-ampm")
let audio = new Audio('alarm.wav')

// Blink code
let blink = document.querySelectorAll("b")
setInterval(() => { blink[0].classList.toggle("blink") }, 500)
setInterval(() => { blink[1].classList.toggle("blink") }, 500)

// Options
for (let i = 0; i <= 12; i++) {
    let a = i < 10 ? `<option value="0${i}">0${i}</option>` : `<option value="${i}">${i}</option>`
    hr.insertAdjacentHTML('beforeend', a)
}
for (let i = 0; i < 60; i++) {
    let a = i < 10 ? `<option value="0${i}">0${i}</option>` : `<option value="${i}">${i}</option>`
    min.insertAdjacentHTML('beforeend', a)
}
for (let i = 0; i < 60; i++) {
    let a = i < 10 ? `<option value="0${i}">0${i}</option>` : `<option value="${i}">${i}</option>`
    sec.insertAdjacentHTML('beforeend', a)
}

// Date and time code
let time = () => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let dd = a.toDateString()
    let ampm = "AM"

    if (h >= 12) {
        ampm = "PM"
        if (h > 12) { h = h - 12 }
    } else if (h == 0) {
        h = 12;
        ampm = "AM"
    }
    if (h < 10) { h = "0" + h }
    if (m < 10) { m = "0" + m }
    s = s < 10 ? "0" + s : s;

    document.getElementById("hour").innerHTML = h
    document.getElementById("min").innerText = m
    document.getElementById("sec").innerText = s
    document.getElementById("ampm").innerHTML = `&nbsp;${ampm}`
    document.getElementById("date").innerHTML = dd;
    let tttt = [h, m, s, ampm]
    return tttt
}
setInterval(time, 500);

// Alarm code
function cancel(timeoutId, intervalId) {
    // console.log(timeoutId, intervalId)
    let timeout = timeoutId.slice(3)
    clearTimeout(parseInt(timeout))
    clearInterval(parseInt(intervalId))
    document.getElementById(timeoutId).parentElement.remove()
}

function mute() {
    audio.pause()
}

function sett(t) {
    if (t > 0) {
        let timeoutId = setTimeout(() => {
            audio.play()     // play alarm     
        }, t * 1000)
        let intervalId = setInterval(() => {
            t--           // to decrease countdown
            let x = t
            if (x < 61) { x = x }
            else if (x < 3601) { x = `${Math.floor(x / 60)}min ${x % 60}` }
            else {
                x = `${Math.floor(x / 3600)}hr ${Math.floor((x % 3600) / 60)}min ${x % 60}`
            }
            document.getElementById(`time${timeoutId}`).innerText = `${x}s`
            if (t < 0) {
                cancel('btn' + timeoutId, intervalId)
            }
        }, 1000)

        let div =
            `<div class="alarm-box" id="id${timeoutId}">Alarm set after : 
        <span id="time${timeoutId}">&nbsp;</span>
        <button class="btn" id="btn${timeoutId}" data-inter="${intervalId}" onclick="cancel(this.id, this.dataset.inter)">Cancel Alarm</button>
        </div>`
        document.getElementById("alarms").insertAdjacentHTML('beforeend', div)
        // console.log(t, timeoutId, intervalId)
    }
    else {
        // console.log("Set Alarm else")
    }
}

function setTimer() {
    if (hr.value.includes("h") || min.value.includes("m") || sec.value.includes("s")) {
        hr.value = hr.value.includes("h") ? '00' : hr.value
        min.value = min.value.includes("m") ? '00' : min.value
        sec.value = sec.value.includes("s") ? '00' : sec.value
    }
    let t = (parseInt(hr.value) * 60 * 60) + (parseInt(min.value) * 60) + parseInt(sec.value)
    // console.log(t)
    sett(t)
}

function setAlarm() {
    if (ap.value.includes("AM/PM")) {
        return console.log("Enter a valid Time")
    }
    else {
        hr.value = hr.value.includes("h") ? '00' : hr.value
        min.value = min.value.includes("m") ? '00' : min.value
        sec.value = sec.value.includes("s") ? '00' : sec.value
    }
    let h = parseInt(hr.value), m = parseInt(min.value), s = parseInt(sec.value), ampm = ap.value, [hh, mm, ss, aapp] = time()
    if (ampm == "PM" && h < 12) {
        h = h + 12
    } else if (ampm == "AM" && h == 12) { h = 0 }

    hh = parseInt(hh)
    mm = parseInt(mm)
    ss = parseInt(ss)
    if (aapp == "PM" && hh < 12) {
        hh = hh + 12
    } else if (aapp == "AM" && hh == 12) { hh = 0 }

    let x = (h - hh), y = (m - mm), z = (s - ss)
    t = (x * 60 * 60) + (y * 60) + (z)
    if (t < 1) { t = 24 * 60 * 60 + t }
    // console.log(t)
    sett(t)
}