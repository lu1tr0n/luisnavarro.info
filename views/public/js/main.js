$(".button-collapse").sideNav();
$(".tabs").tabs({});

$(".button-collapse").sideNav();
$(".tabs").tabs({});

$('ul.tabs').tabs();
$('.materialboxed').materialbox();

$("ul.menu li a").first().addClass("bg-color white-text");
$("ul.menu li a").on("click", function () {
    $("ul.menu li a").removeClass("bg-color white-text");
    $(this).addClass("bg-color white-text");
    $(".button-collapse").sideNav("hide");
});

// $(document).on("scroll", onScroll);

//smooth scroll
function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu a').removeClass("bg-color white-text");
            currLink.addClass("bg-color white-text");
        }
    });
}

$('html body header ul li a').click(function(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});

// Form Contact
// Dehabilitar mensaje
$('#ok').hide();
$('#error').hide();
$('#loading').hide();

// Funcion Submit para enviar los datos
$('#sendMail').submit(function(e){
  e.preventDefault();

  // Enviar los datos
  var dataString = 'name='+$('#name').val()+'&email1='+$('#email1').val()+'&message1='+$('#message1').val();
  $.ajax({
    type: "POST",
    url:"/send",
    data: dataString,
    beforeSend: function(){
      $('#loading').show();
      $("#ok").hide();
      $("#sendMail").hide();
    },
    error: function(){
      $('#loading').hide();
      $("#ok").show();
      $("#error").hide();
    },
    success: function(){
      // $("#ok").html(data);
      $("#ok").show();
      $("#loading").hide();
      $("#sendMail").hide();
    },
    done: function(data){
      // $("#ok").html(data);
      $("#ok").show();
      $("#loading").hide();
      $("#sendMail").hide();
    },
    complete: function(){
      $("#ok").show();
      $("#loading").hide();
      $("#sendMail").hide();
    }
});

  
});

// Graph HTML CSS3
var myCircleHTML = Circles.create({
  id:                  'circle-html5',
  radius:              70,
  value:               75,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

// Graph JAVSCRIPT
var myCircleJS = Circles.create({
  id:                  'circle-javascript',
  radius:              70,
  value:               70,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

// Graph BOOTSTRAP
var myCircleBS = Circles.create({
  id:                  'circle-bootstrap',
  radius:              70,
  value:               60,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

// Graph PHP
var myCircleBS = Circles.create({
  id:                  'circle-php',
  radius:              70,
  value:               65,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

// Graph NODEJS
var myCircleBS = Circles.create({
  id:                  'circle-nodejs',
  radius:              70,
  value:               70,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});

// Graph PYTHON
var myCircleBS = Circles.create({
  id:                  'circle-python',
  radius:              70,
  value:               78,
  maxValue:            100,
  width:               10,
  text:                function(value){return value + '%';},
  colors:              ['#e2e9ff', '#1e4896'],
  duration:            400,
  wrpClass:            'circles-wrp',
  textClass:           'circles-text',
  valueStrokeClass:    'circles-valueStroke',
  maxValueStrokeClass: 'circles-maxValueStroke',
  styleWrapper:        true,
  styleText:           true
});