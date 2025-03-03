
let nav = document.getElementsByTagName("nav")[0]
window.onload = () => {
    let blur = document.getElementsByClassName('blur')[0]

    blur.style.display = 'none'
    nav.style.display = 'block'




}


document.addEventListener("scroll", (a) => {
    if (scrollY > 1) {
        nav.style.backgroundColor = "#201f31b2"

    }
    else {
        nav.style.backgroundColor = "#201f31"
    }



})
let menu = document.getElementsByClassName('men')[0]
function move() {
    menu.style.animation = 'open forwards 2s ease'


}
function move2(params) {
    menu.style.animation = 'close forwards 2s ease'

}
function redirect() {
    window.location.href = 'index.html'

}


let aa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "z", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let sy = ["!", "@", "#", "$", "%", "^", "&", "*"]
let player_url;
let ha = []
let h = []
let video = document.getElementsByTagName("iframe")[0]
let time;
let index = sessionStorage.getItem("video_index")

let info = document.getElementsByClassName('info')[0]
let small_info = document.getElementsByClassName('small_info')[0]
let content_vi = document.getElementsByClassName('content_vi')[0]
let epi = document.getElementsByClassName("episods")[0]
let small_episods = document.getElementsByClassName("small_episods")[0]


fetch('https://api-production-2f49.up.railway.app/data')
    .then(a => a.json())
    .then(data => {
        function hash(e) {

            time++
            //  console.log(time)
            if (time > 100) {
                alert('ERROR HASH() function crash ')
                return

            }
            else {

                let a = Math.floor(Math.random() * (0 + aa.length) + 1)
                let b = Math.floor(Math.random() * (0 + n.length) + 1)
                let c = Math.floor(Math.random() * (0 + sy.length) + 1)
                let d = Math.floor(Math.random() * (0 + aa.length) + 1)
                let e = Math.floor(Math.random() * (0 + n.length) + 1)
                let f = Math.floor(Math.random() * (0 + sy.length) + 1)


                let final = aa[a] + aa[d] + n[b] + n[e] + sy[c] + sy[f]
                let i = 0


                if (ha.length >= 1) {
                    if (ha.indexOf(final) === -1) {
                        ha.push(final)


                    }
                    else {


                        hash()
                    }

                }
                if (ha.length === 0) {

                    ha.push(final)

                }







            }

        }
        let j = 0
        while (j < data.series.length) {
            hash()




            j++



        }
        let ta = 0

        while (ta < data.series.length) {



            data.series[ta].id = ha[ta]
            ta++

        }



        info.innerHTML += `
 <div class="info_text">
            <div class="pic" style="background-image:url(${data.series[index].p_url});"></div>
            <h1 style="font-size: 20px;">${data.series[index].title}</h1>
            <p style="border: 1px solid yellow transparent; width: 100%;"> Watch ${data.series[index].title} on Buggyroll adfree <br>
                ${data.series[index].info}
            </p>
        </div>
`
        small_info.innerHTML += `
               <div class="small_pic"  style="background-image:url(${data.series[index].p_url}"></div>
        <h1>${data.series[index].title}</h1>
        <p>Watch ${data.series[index].title} on Buggyroll adfree <br>
                ${data.series[index].info}</p>`
        let i = 0
        let u = 0
        if (data.series[index].ep === true) {
            while (data.series[index].episodes.length != u) {
                hash()
                data.series[index]

                small_episods.innerHTML += `
                <button id="${u}" style="background-color:#4d5059; color:white; margin-top:6px;">${u + 1}</button>
                
                `
                epi.innerHTML += `
                <button id="${u}" style="background-color:#4d5059; color:white; margin-top:6px;">${u + 1}</button>
                
                `


                u++

            }
            player_url = data.series[index].episodes[0].url

            small_episods.addEventListener("click", (a) => {
                player_url = data.series[index].episodes[a.target.id].url



            })
            epi.addEventListener("click", (a) => {
                player_url = data.series[index].episodes[a.target.id].url



            })


        }
        else {
            small_episods.innerHTML += `
            <button id="0" style="background-color:#4d5059; color:white;  ;margin-top:6px;">Full</button>
            `
            epi.innerHTML += `
            <button style="background-color:#4d5059; color:white;  ;margin-top:6px;">Full</button>
            
            `
            player_url = data.series[index].url

            small_episods.addEventListener("click", (a) => {

            })
            epi.addEventListener("click", (a) => {

            })


        }

        data.series.forEach(element => {





            content_vi.innerHTML += `
             <div class="video_v" id="${ha[i]}"  style="background-image:url(${element.p_url})" >
      
        <p>${element.title}</p>
        

    </div> 
            `
            i++


        });
        content_vi.addEventListener("click", (ab) => {
            let ind = data.series.findIndex(a => a.id == ab.target.id)
            sessionStorage.setItem("video_index", ind)
            window.location.reload()


        })


        setInterval(() => {
            if (video.src != player_url) {

                video.src = player_url

            }

        }, 1000)
    })
