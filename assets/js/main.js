window.onscroll = function() {scrollFunction()};

// Collapsibles experience list
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("mouseover", function() {
    let content = this.nextElementSibling;
    
    content.style.maxHeight = content.scrollHeight + "px";    
  });
  
  coll[i].addEventListener("mouseout", function() {    
    let content = this.nextElementSibling;
    
    content.style.maxHeight = null;    
  });
}

// Collapsible courses
let expand = document.getElementById("courses");

expand.addEventListener("mouseover", function() {
    expand.style.maxHeight = expand.scrollHeight + "px";    
});

expand.addEventListener("mouseout", function() {
    expand.style.maxHeight = null;    
});

// Top button

function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}