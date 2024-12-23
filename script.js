document.addEventListener('DOMContentLoaded', function() {
    const lights = document.querySelectorAll('.light');
    const colors = ['#FF3E3E', '#50F446', '#FF9F19', '#221DFF', '#FFFFFF'];
  
    function changeLightColor(light) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      light.setAttribute('fill', randomColor);
    }
  
    function blinkLights() {
      lights.forEach(light => {
        changeLightColor(light);
        light.style.opacity = Math.random() > 0.5 ? 1 : 0.5;
      });
    }
  
    setInterval(blinkLights, 500);
  });