document.addEventListener("DOMContentLoaded", function() {
    const introContainer = document.querySelector(".intro-container");
    const navbar = document.querySelector(".navbar");
    const secontainer = document.querySelector(".second-container");

    setTimeout(function() {
        introContainer.classList.add("collapsed");
        navbar.classList.add("active");
        secontainer.classList.add("active");
    }, 5000); 
});


const contactButton = document.getElementById('contact-button');

contactButton.addEventListener('mouseover', function() {
    if (!contactButton.classList.contains('copied')) {
        contactButton.textContent = 'Copy Email?';
    }
});

contactButton.addEventListener('mouseout', function() {
    if (!contactButton.classList.contains('copied')) {
        contactButton.textContent = 'Get in touch';
    }
});

contactButton.addEventListener('click', function() {
    contactButton.classList.add('copied');
    contactButton.textContent = 'Email Copied !';
});


const typewriter = document.querySelector('.typewriter');
const text = [
    "I am a junior at FAST-NUCES being a passionate frontend developer. My journey in the realm of computer science has been a captivating exploration, driven by an insatiable curiosity for cutting-edge technologies. Amidst this journey, my fascination with Artificial Intelligence and machine learning algorithms has grown exponentially. The prospect of crafting intelligent systems that can adapt, learn, and evolve is an enthralling challenge that continually propels my aspirations. Through my dedication and unwavering enthusiasm, I am committed to contributing meaningfully to the ever-evolving landscape of technology and innovation."
];

let lineIndex = 0;
let charIndex = 0;

function typeText() {
    if (lineIndex < text.length) {
        if (charIndex < text[lineIndex].length) {
            typewriter.textContent += text[lineIndex][charIndex];
            charIndex++;
            setTimeout(typeText, 20); 
        } else {
            typewriter.textContent += '\n';
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 500); 
        }
    }
}

typeText();

// submit button

$(function(){
  

  var white = 'rgb(255,255,255)';
  var seafoam = 'rgb(68,77,91)';  
  $buttonShapes = $('rect.btn-shape');
  $buttonColorShape = $('rect.btn-shape.btn-color');
  $buttonText = $('text.textNode');
  $buttonCheck = $('text.checkNode');
  
  
  var buttonProps = {
    buttonWidth : $buttonShapes.attr('width'),
    buttonX : $buttonShapes.attr('x'),
    buttonY : $buttonShapes.attr('y'),
    textScale : 1,
    textX : $buttonText.attr('x'),
    textY : $buttonText.attr('y')
  };
  
  //This is the update handler that lets us tween attributes
  function onUpdateHandler(){
    $buttonShapes.attr('width', buttonProps.buttonWidth);
    $buttonShapes.attr('x', buttonProps.buttonX);
    $buttonShapes.attr('y', buttonProps.buttonY);
    $buttonText.attr('transform', "scale(" + buttonProps.textScale + ")");
    $buttonText.attr('x', buttonProps.textX);
    $buttonText.attr('y', buttonProps.textY);
  }
  
  //Finally, create the timelines
  var hover_tl = new TimelineMax({
    tweens:[
      TweenMax.to( $buttonText, .15, { fill:white } ),
      TweenMax.to( $buttonShapes, .25, { fill: seafoam })
    ]
  });
  hover_tl.stop();
  
  var tl = new TimelineMax({onComplete:bind_mouseenter});
  //This is the initial transition, from [submit] to the circle
  tl.append( new TimelineMax({
    align:"start",
    tweens:[
      TweenMax.to( $buttonText, .15, { fillOpacity:0 } ),
      TweenMax.to( buttonProps, .25, { buttonX: (190-64)/2, buttonWidth:64, onUpdate:onUpdateHandler } ),
      TweenMax.to( $buttonShapes, .25, { fill: white })
    ], 
    onComplete:function(){ 
      $buttonColorShape.css({
        'strokeDasharray':202,
        'strokeDashoffset':202
      });
    }
  }) );
  
  //The loading dasharray offset animation… 
  tl.append(TweenMax.to($buttonColorShape, 1.2, {
    strokeDashoffset:0, 
    ease:Quad.easeIn,
    onComplete:function(){
      //Reset these values to their defaults.
      $buttonColorShape.css({
        'strokeDasharray':453,
        'strokeDashoffset':0
      });
    }
  }));

  //The Finish - transition to check
  tl.append(new TimelineMax({
    align:"start",
    tweens:[
      TweenMax.to($buttonShapes, .3, {fill:seafoam}),
      TweenMax.to( $buttonCheck, .15, { fillOpacity:1 } ),
      TweenMax.to( buttonProps, .25, { buttonX: 3, buttonWidth:190, onUpdate:onUpdateHandler } )
    ]
  }));
  
  //The Reset - back to the beginning
  //For demo only - probably you would want to remove this.
  tl.append(TweenMax.to($buttonCheck, .1, {delay:1,fillOpacity:0}));

  tl.append(new TimelineMax({
    align:"start",
    tweens:[
      TweenMax.to($buttonShapes, .3, {fill:white}),
      TweenMax.to($buttonText, .3, {fill:seafoam, fillOpacity:1})
    ],
    onComplete:function() {
      $('.kk-submit').removeClass('is-active');
    }
  }));
  tl.stop();
  
  //-- On Click, we launch into the cool transition
  $('.kk-submit').on('click', function(e) {
    //-- Add this class to indicate state
    $(e.currentTarget).addClass('is-active');
    e.preventDefault();
    tl.restart();
    $('.kk-submit').off('mouseenter');
    $('.kk-submit').off('mouseleave');
  });
  
  bind_mouseenter();
  
  function bind_mouseenter() {
    $('.kk-submit').on('mouseenter', function(e) {
      hover_tl.restart();
      $('.kk-submit').off('mouseenter');
      bind_mouseleave();
    });
  }
  function bind_mouseleave() {  
    $('.kk-submit').on('mouseleave', function(e) {
      
      $('.kk-submit').off('mouseleave');
      bind_mouseenter();      
    });
  }
  
});





function btn_active(){
    document.querySelector('.texto_centro').className = "texto_centro active_txt";
      document.querySelector('.cont_centrar').className = "cont_centrar activebtn";
      setTimeout(function(){
          document.querySelector('.cont_centrar').className = "cont_centrar activebtn_fin";
        document.querySelector('.texto_centro').className = "texto_centro op_0";
      },2000);
    }




    const carousel = document.querySelector(".image-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const images = carousel.querySelectorAll("img");
    
    let currentIndex = 0;
    
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
    
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
    
    function updateCarousel() {
      images.forEach((img, index) => {
        if (index !== currentIndex) {
          img.style.opacity = 0;
        } else {
          img.style.opacity = 1; // Reset opacity for the current image
        }
      });
    }
    
    updateCarousel();
    



    document.addEventListener("DOMContentLoaded", function () {
      const events = document.querySelectorAll(".event");
  
      events.forEach((event) => {
          if (isElementInViewport(event)) {
              event.classList.add("show");
          }
      });
  
      function isElementInViewport(element) {
          const rect = element.getBoundingClientRect();
          return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
              rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
      }
  
      window.addEventListener("scroll", () => {
          events.forEach((event) => {
              if (isElementInViewport(event)) {
                  event.classList.add("show");
              }
          });
      });
  });
  


  const inputElements = document.getElementsByClassName('input-box');
  const labels = document.getElementsByClassName('input-label');
  
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].addEventListener('input', function() {
      if (inputElements[i].value.trim() !== '') {
        labels[i].style.top = '0';
        labels[i].style.color = 'white';
        labels[i].style.opacity = '1';

      } else {
        labels[i].style.top = '70%'; // You can adjust this value as needed
      }
    });
  }
  