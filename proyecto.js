Papa.parse("https://raw.githubusercontent.com/elisahonorato/pagweb/main/pag%20web.xlsx%20-%20Hoja%201.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: function (respuesta) {
            var proyectos = respuesta.data;
            var n = new URLSearchParams(window.location.search).get('nro');
            if (n !== null) {
                console.log(n);
                console.log(proyectos);
                console.log($('#proyectos'));
                $('#proyectos')[0].innerHTML = '<h1>' + proyectos[n].name + '</h1><h4>' + proyectos[n].director + ' (' + proyectos[n].year + ')</h4><img src="images/' + proyectos[n].pic_lg + '"><p>' + proyectos[n].description + '</p><h3>Trailer</h3><p>Puedes ver algunas escenas de la película en <a href="' + proyectos[n].trailer + '" target="_blank">Youtube</a><p>';

            } else {
                document.querySelector('section').innerHTML = '<h1> Los Mortífagos se tomaron la página, Howgarts y el Ministerio de la Magia. Pero Dumbledore lo reparará</h1><h4>Por favor, vuelve a escoger cualquiera de las <a href="index.html">películas</a></h4>';
                document.body.style.backgroundPosition = 'bottom right';
                document.body.style.backgroundImage = 'url("images/erroramable.png")';
                document.body.style.backgroundRepeat = 'no-repeat';
                document.body.style.backgroundSize = 'auto 90%';
            }
    }
});