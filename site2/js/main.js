function $history() {
  let data = document.querySelector('.about_data_text')
  let point = document.querySelector('.about_data_text>p')
  let text = document.querySelector('.about_data_text>.h')
  if (text == null) {
    point.remove();
    data.insertAdjacentHTML('afterbegin', '<p class="h">Наше агентство было основано в прошлом году летом. Тогда мы взяли на себя ответственность дарить людям незабываемые эмоции и впечатления. Мы составили множество туров, помимо этого вы можете составить тур самостоятельно и сразу рассчитать его стоимость.</p>');
  }
  let btn = document.querySelector('#his')
  let bool = btn.classList.contains("color_line")
  if (!bool) {
    let data_color = document.querySelector('.color_line')
    data_color.classList.remove("color_line")
    btn.classList.add("color_line")
  }
}
function $choose() {
  let data = document.querySelector('.about_data_text')
  let point = document.querySelector('.about_data_text>p')
  let text = document.querySelector('.about_data_text>.c')
  if (text == null) {
    point.remove();
    data.insertAdjacentHTML('afterbegin', '<p class="c">Клиенты нашего агентства во время путешествий получают множество акций, поэтому познавать новые места с нами – это выгодно.</p>');
  }
  let btn = document.querySelector('#cho')
  let bool = btn.classList.contains("color_line")
  if (!bool) {
    let data_color = document.querySelector('.color_line')
    data_color.classList.remove("color_line")
    btn.classList.add("color_line")
  }
}
function $order() {
  let data = document.querySelector('.about_data_text')
  let point = document.querySelector('.about_data_text>p')
  let text = document.querySelector('.about_data_text>.o')
  if (text == null) {
    point.remove();
    data.insertAdjacentHTML('afterbegin', '<p class="o">Мы обязываемся предоставить вам исключительную поездку. Мы желаем сделать путешествия более доступными, ведь в мире огромное количество восхитительных мест, которые хочется показать каждому.</p>');
  }
  let btn = document.querySelector('#ord')
  let bool = btn.classList.contains("color_line")
  if (!bool) {
    let data_color = document.querySelector('.color_line')
    data_color.classList.remove("color_line")
    btn.classList.add("color_line")
  }
}

(function () {
   var app = "https://script.google.com/macros/s/AKfycbxAuLvOIBfcSIptXXXCa7NCqjX8k1mZLSO70k0qjV6MFz9gegIwnraYLRZxzxSMcshl/exec",
      output = '',
      xhr = new XMLHttpRequest();
   xhr.open('GET', app);
   xhr.onreadystatechange = function() {
     if (xhr.readyState !== 4) return;

     if (xhr.status == 200) {
        try {
            var r = JSON.parse(xhr.responseText),
               result = r["result"];
            for (var i = 0; i < result.length; i++){
                  var obj = r["result"][i];
                  output += obj.join("<br/>") + "<br/><hr/>";
            }
        } catch(e) {}
     } 
     
   document.getElementById('info').innerHTML = output;

   }
   xhr.send()
})()
