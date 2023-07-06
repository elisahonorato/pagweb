const parseCSV = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    const result = Papa.parse(text, {
      header: true,
      dynamicTyping: true,
    });
    return result.data;
  };
  
  const renderProjects = (projects) => {
    const products = document.getElementById('projects');
    products.innerHTML = projects
      .map(({ pic_lg, type, number }) => `
        <a href="proyecto.html?nro=${number}">
          <div class="itemBox" data-item="${type}">
            <img src="${pic_lg}" alt="${type}">
          </div>
        </a>
      `)
      .join('');
  };
  
  const filterProjects = (filter) => {
    const itemBox = document.querySelectorAll('.itemBox');
    itemBox.forEach((box) => {
      const dataItem = box.getAttribute('data-item');
      if (filter === 'all' || filter === dataItem) {
        box.classList.add('active');
        box.classList.remove('hide');
      } else {
        box.classList.remove('active');
        box.classList.add('hide');
      }
    });
  };
  
  const handleFilterClick = (event) => {
    const filter = event.target.getAttribute('data-filter');
    const list = document.querySelectorAll('.list');
    list.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
    filterProjects(filter);
  };
  
  const handleScroll = () => {
    const secundario = document.getElementById('secundario').offsetHeight;
    const principal = document.getElementById('principal');
    if (window.scrollY > secundario + 10) {
      principal.classList.add('fixed-top');
    } else {
      principal.classList.remove('fixed-top');
    }
  };
  
  (async () => {
    const data = await parseCSV('https://raw.githubusercontent.com/elisahonorato/pagweb/main/assets/csv/pag%20web.xlsx%20-%20Hoja%201.csv');
    renderProjects(data);
  
    const list = document.querySelectorAll('.list');
    list.forEach((item) => {
      item.addEventListener('click', handleFilterClick);
    });
  
    window.addEventListener('scroll', handleScroll);
  })();
  

