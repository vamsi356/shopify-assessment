 // Main image switcher
    function mainimage(el) {
      document.getElementById('pr').src = el.src;
    }
    // Color selection
    function selectcolor(color) {
      document.getElementById('selected').textContent = 'selected color:' + color.charAt(0).toUpperCase() + color.slice(1);
      if (color === 'red') {
        mainimage(document.getElementById('img3'));
      } else if (color === 'blue') {
        mainimage(document.getElementById('img2'));
      } else if (color === 'black') {
        mainimage(document.getElementById('img1'));
      }
    }
    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
      modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal(modal.id);
      });
    });
            // Tabs logic
        const tabLinks = document.querySelectorAll('.nav-link');
        const tabPanes = document.querySelectorAll('.tab-pane');
        tabLinks.forEach(link => {
          link.addEventListener('click', function() {
            tabLinks.forEach(l => l.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.getAttribute('data-tab')).classList.add('active');
          });
        });

                  // Modal logic
              function openModal(id) {
                document.getElementById(id).classList.add('active');
              }
              function closeModal(id) {
                document.getElementById(id).classList.remove('active');
                if (id === 'compareColoursModal') {
                  selectedColours = [];
                  swatches.forEach(s => s.style.outline = '');
                  compareImages.innerHTML = '';
                }
              }
              // Compare Colours logic
              const compareImages = document.getElementById('compare-images');
              const swatches = document.querySelectorAll('.compare-swatch');
              let selectedColours = [];
              swatches.forEach(swatch => {
                swatch.addEventListener('click', function() {
                  const color = this.getAttribute('data-color');
                  const img = this.getAttribute('data-img');
                  if (selectedColours.find(c => c.color === color)) {
                    selectedColours = selectedColours.filter(c => c.color !== color);
                    this.style.outline = '';
                  } else {
                    selectedColours.push({color, img});
                    this.style.outline = '3px solid #5f35de';
                  }
                  renderCompareImages();
                });
              });
              function renderCompareImages() {
                compareImages.innerHTML = '';
                selectedColours.forEach(c => {
                  const imgEl = document.createElement('img');
                  imgEl.src = c.img;
                  imgEl.alt = c.color + ' T-Shirt';
                  imgEl.style.width = '80px';
                  imgEl.style.borderRadius = '10px';
                  compareImages.appendChild(imgEl);
                });
              }