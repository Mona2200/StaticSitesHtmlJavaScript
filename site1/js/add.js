var x = 0;

function addInput() {
	if (x < 10) {
		let p = document.querySelector('#inp')
		p.insertAdjacentHTML('beforeEnd', '<input class="in amount" list="services" name="services">')
    x++;
  } else
  {
  	alert('Вы не можете выбрать больше 10 услуг');
  }
}
