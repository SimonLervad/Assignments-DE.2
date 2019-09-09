

  function openMenu(){

  var y = document.getElementsByClassName("content")[0];
  var x = document.getElementById("head");

    if (!x.classList.contains('closed') ) {
    //  x.style.display = "block";
    //  y.style.padding = "0 0 0 300px";
      x.classList.add("closed");
      y.classList.add("closed");
    } else {
    //  x.style.display = "none";
    //  y.style.padding = "0 0 0 0px";
      x.classList.remove("closed");
      y.classList.remove("closed");
    }




  }


  let init = function(){
    let menuBtn = document.getElementsByClassName('menubtn');

    for(i=0;i<menuBtn.length;i++){
      menuBtn[i].addEventListener('click',openMenu)
    }

  //  document.getElementsByClassName('menubtn')[1].addEventListener('click',openMenu)
  }
  window.addEventListener('load',init)
