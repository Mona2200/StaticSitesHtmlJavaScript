function $galleryimg(n) {
  let a = document.querySelector(".gallery_block_over_"+n)
  a.style.cssText=`opacity: 1;`
}

function $galleryimg_leave(n) {
  let a = document.querySelector(".gallery_block_over_"+n)
  a.style.cssText=`opacity: 0;`
}

function $galleryimg_full(n) {
  let pos = document.querySelector(".fullscreen_img")
  pos.insertAdjacentHTML('afterbegin', '<img id="glrimg" src="../site2/img/gallery_'+n+'.jpg" alt="'+n+'">')
  let ar = document.querySelector(".fullscreen")
  ar.insertAdjacentHTML('beforeEnd', '<img class="arrow_right" src="../site2/img/arrow_right.png" alt="" height="20px" width="20px" onclick="$flipright('+n+')"><img class="arrow_left" src="../site2/img/arrow.png" alt="" height="20px" width="20px" onclick="$flipleft('+n+')">')
  let scrollTop = window.pageYOffset
  let scrollLeft = window.pageXOffset
  let obj = document.querySelector(".fullscreen")
  let objscroll = document.querySelector(".fullscreen_block")
  obj.classList.remove("fullscreen_close")
  let img = document.querySelector(".fullscreen_img")
  objscroll.style.top = scrollTop+'px'
  objscroll.style.left = scrollLeft+'px'
  scrollTop = scrollTop+110
  img.style.top = scrollTop+'px'
  let btnclose = document.querySelector(".btn_close")
  btnclose.style.top = scrollTop+'px'
  scrollTop = scrollTop+300
  let arrowright = document.querySelector(".arrow_right")
  let arrowleft = document.querySelector(".arrow_left")
  arrowleft.style.top = scrollTop+'px'
  arrowright.style.top = scrollTop+'px'
  const body = document.body
  body.style.overflowY = 'hidden'
  if (n == 1) {
    let a = document.querySelector(".arrow_left")
    a.remove()
  }
  if (n == 7) {
    let a = document.querySelector(".arrow_right")
    a.remove()
  }
  }

function $gallery_close() {
  let pos = document.querySelector("#glrimg")
  pos.remove()
  let arR = document.querySelector(".arrow_right")
  let arL = document.querySelector(".arrow_left")
  if (arR) arR.remove()
  if (arL) arL.remove()
  let obj = document.querySelector(".fullscreen")
  obj.classList.add("fullscreen_close")
  const body = document.body
  body.style.overflowY = ''
}

function $flipleft(n) {
  n = n-1
  if (n > 0) {
    $gallery_close()
    $galleryimg_full(n)
  }
}

function $flipright(n) {
  n = n+1
  if (n < 8) {
    $gallery_close()
    $galleryimg_full(n)
  }
}
