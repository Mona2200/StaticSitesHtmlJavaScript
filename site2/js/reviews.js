function $flip_l(n) {
  n = n-1
  if (n == 2) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_3")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_2"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star_empty.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Я побывал в потрясающем месте. Тур был просто замечательным. Во время поездки возникла одна проблема, но турагент Светлана быстро помогла её решить. От поездки я в восторге, с нетерпеньем жду следующего путешествия.</p><img class="reviews_first_avatar" src="../src/img/rev_2.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Стёпушев Виталий Аркадьевич</p><p class="reviews_first_about_tour">Тур по Мальдивам<p></div></div><div class="reviews_imgs"><img src="../src/img/maldives_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldives_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldives_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldive_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(2)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(2)">')
  } else if (n == 0) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_1")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_3"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Я получила кучу разных эмоций, побывав в Индии. Очень красивая страна, богатая своей культурои и традициями. Мне очень понравилось общение с местными жителями. Я довольна тем, что доверилась вашеи компании, очень приятные сотрудники.</p><img class="reviews_first_avatar" src="../src/img/rev_3.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Левина Элеонора Павловна</p><p class="reviews_first_about_tour">Ослепительная Индия</p></div></div><div class="reviews_imgs"><img src="../src/img/india_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(3)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(3)">')
  }
  else if (n == 1) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_2")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_1"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Очень понравилась поездка с семьёй. Тур был подобран идеально. Мы посетили все самые интересные места, успели посетить и те, у которых богатая история. Очень понравилась необычная еда. Этот отдых запомнится ещё надолго.</p><img class="reviews_first_avatar" src="../src/img/rev_1.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Ренеева Ангелина Васильевна</p><p class="reviews_first_about_tour">Вкус Китая</p></div></div><div class="reviews_imgs"><img src="../src/img/china_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(1)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(1)">')
  }
}

function $flip_r(n) {
  n = n + 1
  if (n == 2) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_1")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_2"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star_empty.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Я побывал в потрясающем месте. Тур был просто замечательным. Во время поездки возникла одна проблема, но турагент Светлана быстро помогла её решить. От поездки я в восторге, с нетерпеньем жду следующего путешествия.</p><img class="reviews_first_avatar" src="../src/img/rev_2.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Стёпушев Виталий Аркадьевич</p><p class="reviews_first_about_tour">Тур по Мальдивам<p></div></div><div class="reviews_imgs"><img src="../src/img/maldives_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldives_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldives_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/maldive_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(2)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(2)">')
  } else if (n == 3) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_2")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_3"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Я получила кучу разных эмоций, побывав в Индии. Очень красивая страна, богатая своей культурои и традициями. Мне очень понравилось общение с местными жителями. Я довольна тем, что доверилась вашеи компании, очень приятные сотрудники.</p><img class="reviews_first_avatar" src="../src/img/rev_3.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Левина Элеонора Павловна</p><p class="reviews_first_about_tour">Ослепительная Индия</p></div></div><div class="reviews_imgs"><img src="../src/img/india_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/india_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(3)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(3)">')
  } else if (n == 4) {
    let place = document.querySelector(".reviews")
    let obj = document.querySelector(".reviews_3")
    obj.remove()
    place.insertAdjacentHTML('beforeEnd', '<div class="reviews_1"><div class="col-xl-5 offset-xl-2 reviews_first"><div class="reviews_first_stars"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"><img src="../src/img/star.png" alt="" height="20px" width="20px"></div><p class="reviews_first_text">Очень понравилась поездка с семьёй. Тур был подобран идеально. Мы посетили все самые интересные места, успели посетить и те, у которых богатая история. Очень понравилась необычная еда. Этот отдых запомнится ещё надолго.</p><img class="reviews_first_avatar" src="../src/img/rev_1.png" alt="" height="80px" width="80px"><div class="reviews_first_about"><p class="reviews_first_about_name">Ренеева Ангелина Васильевна</p><p class="reviews_first_about_tour">Вкус Китая</p></div></div><div class="reviews_imgs"><img src="../src/img/china_1.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_2.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_3.jpg" alt="" height="150px" width="150px"><img src="../src/img/china_4.jpg" alt="" height="150px" width="150px"></div></div>')
    let arrowl = document.querySelector(".reviews_arrow_l")
    let arrowr = document.querySelector(".reviews_arrow_r")
    arrowl.remove()
    arrowr.remove()
    place.insertAdjacentHTML('beforeEnd', '<img class="reviews_arrow_l" src="../src/img/left-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_l(1)"><img class="reviews_arrow_r" src="../src/img/right-arrow_rev.png" alt="" height="20px" width="20px" onclick="$flip_r(1)">')
  }
}
