let blur = document.getElementsByClassName('blur')[0]

window.onload = () => {
    blur.style.display = 'none'
    //     alert('loaded')
}
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



let nav = document.getElementsByTagName("nav")[0]
let content = document.getElementsByClassName('content')[0]
let aa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "z", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
let sy = ["!", "@", "#", "$", "%", "^", "&", "*"]
let ha = []
let time = 0
fetch('./data.json')
    .then(a => a.json())
    .then(data => {
        // Are u wondering how did i created undefined ? "if it are't crashing don't touch it ^_^"
        function hash() {

            time++
            console.log(time)
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
                        console.log('a')

                    }
                    else {

                        console.log("womp womp")
                        hash()
                    }

                }
                if (ha.length === 0) {
                    ha.push(final)

                }




            }

        }

        console.log(ha)






        let j = 0
        while (j < data.series.length) {
            hash()




            j++


            console.log(data)

        }
        let ta = 0

        while (ta < data.series.length) {


            data.series[ta].id = ha[ta]
            ta++

        }






        document.addEventListener("scroll", (a) => {
            if (scrollY > 1) {
                nav.style.backgroundColor = "#201f31b2"

            }
            else {
                nav.style.backgroundColor = " transparent"
            }



        })

        let a = document.createElement('a')
        document.body.appendChild(a)
        let slider = document.getElementsByClassName('slider')[0]
        let times = 0


        function upload(name, url, id) {
            content.innerHTML += `
<div   class="video" style="background-image:url(${url}) ;" id="${id} ">

<p id="name">${name}
</p>

</div>
`

        }
        for (let i = 0; i <= ha.length - 1; i++) {

            upload(data.series[i].title, data.series[i].p_url, ha[i])

        }
        let clicked
        let bi = content.querySelectorAll(".video").forEach((a) => {
            console.log(data.series.length)
            a.addEventListener("click", (b) => {

                clicked = data.series.findIndex(an => an.id === b.target.id.trim())
                console.log(`user clicked on movie named ${data.series[clicked].title}  with a id of ${data.series[clicked].id} `)
                sessionStorage.setItem('video_index', clicked)
                sessionStorage.setItem('video_id', data.series[clicked].id)
                window.location.href = "player.html"






            })

        })


        function Upload_spotlight(Anime_name, intro, url, number_of_times) {
            slider.style.width = number_of_times * 100 + 100 + "vw"
            //   console.log(slider)
            let spotlight = document.createElement('div')

            spotlight.id = number_of_times
            spotlight.classList.add('cover')
            if (intro === "") {
                intro = "ERROR `This dumbass forgot to input intro`"

            }
            if (Anime_name === "") {
                Anime_name = "ERROR `This dumbass forgot to input Name`"

            }
            spotlight.innerHTML = `

    <div class="cover_text">
        
        <h1>${Anime_name}</h1>
        <h2>${intro}</h2>
        <button id="watch">Watch</button>
        <button id="details">Details</button>
        
    </div>
    <div class="fill"> </div>
    <div class="img" style="background-image: url(${url});"></div>
 

`

            slider.appendChild(spotlight)

            //  console.log(number_of_times)
            times = number_of_times

        }
        // Upload_spotlight("That Time i Got Reincarnated as a slime", "That Time I Got Reincarnated as a Slime, also known as Regarding Reincarnated to Slime and by the contraction TenSura, is a Japanese fantasy light novel series written by Fuse, and illustrated by Mitz Vah", 'that-time-i-got-reincarnated-as-a-slime-pictures-7ksbwoa7inx5qkvr.jpg', 1)
        //Upload_spotlight('Anime Name','Intro','Background url',number of anime)
        Upload_spotlight("Silent Voice", "After bullying Shoko, a girl with hearing impairment, Shoya is consumed with guilt. Soon, several incidents at the school make things worse and he sets out to make amends", 'Poster/horizontal/a-silent-voice-characters-poster-a6q9kq6tb8oalsbn.jpg', 1)
        Upload_spotlight("Devil man crybaby", "Akira's best friend tells him that ancient demons have returned to take back the world from humans and suggests that he unite with a demon. Akira successfully does that, transforming into Devilman, a being with a demon's powers but who retains the soul of a human.", "Poster/horizontal/devilman-crybaby-netflix-poster-ezjviaaj8gef6bq6.jpg", 2)
        Upload_spotlight('Your Name', 'Two teenagers share a profound, magical connection upon discovering they are swapping bodies. Things manage to become even more complicated when the boy and girl decide to meet in person', 'Poster/horizontal/your-name.jpg', 3)
        Upload_spotlight("Skeleton Knight", "A gamer falls asleep-only to wake up in the world of the game he was playing; Arc has the powerful skills and weapons of his character, but there's just one problem, he's stuck looking like that character.", 'Poster/horizontal/skeleton-knight.jpg', 4)
        Upload_spotlight("I'm quitting Heroing", 'A war hero is banished by his own people, who fear his abilities and power. He then decides to join his enemies and help rebuild their army.', 'Poster/horizontal/im-quitting-heroing-feature-image.avif', 5)
        Upload_spotlight("I'm the Villainess, So I'm Taming the Final Boss", "I'm the Villainess, So I'm Taming the Final Boss is a Japanese light novel series written by Sarasa Nagase and illustrated by Mai Murasaki. It began serialization online in May 2017 on the user-generated novel publishing website Shōsetsuka ni Narō", 'Poster/horizontal/im-the-villainess-so-im-taming-the-final-boss.jpeg', 6)
        Upload_spotlight("Log Horizon", 'Log Horizon (Japanese: ログ・ホライズン, Hepburn: Rogu Horaizun) is a Japanese light novel series written by Mamare Touno and illustrated by Kazuhiro Hara. It began serialization online in 2010 on the user-generated novel publishing website Shōsetsuka ni Narō', 'Poster/horizontal/Log_horizon.png', 7)



        let z = 1
        //console.log(times + "times")
        function forward() {
            console.log("'forward")
            if (z != times) {
                z++
                a.href = `#${z}`
                a.click()
                a.remove()

            }
            else {
                i = z
                a.href = `#${z}`
                a.click()
                a.remove()
            }








        }
        function backward() {
            // console.log(i)
            if (z > 1) {
                z--
                a.href = `#${z}`
                a.click()
                a.remove()


            }
            else {
                z = times
                a.href = `#${z}`
                a.click()
                a.remove()
            }




        }
        setInterval(() => {

            forward()

        }, 10000);


    })
