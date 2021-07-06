//El scroll
const myProjects = [
    {image: 'images/graphic1.jpg', number: 0},
    {image: 'images/graphic2.jpg', number: 1},
    {image: 'images/graphic3.jpg', number: 2},
    {image: 'images/illustration1.jpg', number: 3},
]
Papa.parse('csv_elisa', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (respuesta) => {
        const myProjects = respuesta.data;
        var products = $('#projects')[0]
        myProjects.forEach(({ image, number }) => {
            products.innerHTML += `
                <a href="proyecto.html?nro=${number}">
                    <div class="itemBox" data-item="graphic">
                        <img src="${image}" >+</h4><img src="images/'
                    </div>
                </a>`

        })
    }
})
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});
//La API
fetch("https://sheet.best/api/sheets/2d65936f-37f4-496f-b66e-c79975148520")
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.log("Pucha, algo falló", err);
    });
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-Filter');
        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
            list[i].addEventListener('click', function() {
                            Papa.parse("https://raw.githubusercontent.com/elisahonorato/pagweb/main/pag%20web.xlsx%20-%20Hoja%201.csv", {
                download: true,
                header: true,
                dynamicTyping: true,
                complete: function (respuesta) {
                    var proyectos = respuesta.data;
                    console.log(proyectos);
                    proyectos.forEach(function(proyecto,i){
                        document.querySelector("div.itemBox").innerHTML += "<article><a href='proyecto.html?nro=" + i + "'><img src='images/" + proyecto.pic_sm + "'><div><h2>" + proyecto.name + "</h2></div></article>";

                    })
            }
        });
            })

            if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
                itemBox[k].classList.remove('hide');
                itemBox[k].classList.add('active');
            }

        }
    })
}
function transition(event)   {
    console.log(event);
    document.getElementsByTagName("body")[0].style.background = "#117C60";

}
$('div.itemBox').mouseover(transition);

function nada() {
    document.getElementsByTagName("body")[0].style.background = "#fff";
}
$('div.itemBox').mouseleave(nada);



