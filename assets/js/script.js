

Papa.parse('https://raw.githubusercontent.com/elisahonorato/pagweb/main/assets/csv/pag%20web.xlsx%20-%20Hoja%201.csv', {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: (respuesta) => {
        const myProjects = respuesta.data;
        var products = $('#projects')[0]
        myProjects.forEach(({pic_lg, type, number }) => {
            products.innerHTML += `
                <a href="proyecto.html?nro=${number}">
                    <div class="itemBox" data-item="${type}">
                        <img src="${pic_lg}" alt=${type}">
                    </div>
                </a>`
        })
       
    }
})

let list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function() {
        let itemBox = document.querySelectorAll('.itemBox');
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


//El scroll
var secundario = document.getElementById("secundario").offsetHeight;
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > secundario + 10) {
        document.getElementById("principal").classList.add("fixed-top");
    } else {
        document.getElementById("principal").classList.remove("fixed-top");
    }
});




