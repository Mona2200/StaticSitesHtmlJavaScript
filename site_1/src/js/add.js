var x = 0;

function addInput() {
	if (x < 10) {
    var str = '<div class="col-lg-8"><input class="in amount in_pl" list="services" name="services"></div> <div id="input' + (x + 1) + '"></div>';
    document.getElementById('input' + x).innerHTML = str;
    x++;
  } else
  {
  	alert('Вы не можете выбрать больше 10 услуг');
  }
}
