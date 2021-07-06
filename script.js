
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

Papa.parse('https://raw.githubusercontent.com/elisahonorato/pagweb/main/pag%20web.xlsx%20-%20Hoja%201.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (respuesta) => {
        const myProjects = respuesta.data;
        var products = $('#projects')[0]
        myProjects.forEach(({ image, number }) => {
            products.innerHTML += `
                <a href="proyecto.html?nro=${number}">
                    <div class="itemBox" data-item="${type}">
                        <img src="${image}" >
                    </div>
                </a>`
        })
    }
})
//El scroll
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});




