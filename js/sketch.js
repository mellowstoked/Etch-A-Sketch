

function addDivs(x_amount){
  for(var row = 0; row < x_amount; row++)
  {
    for(var column = 0; column < x_amount; column++)
    {
      $("#box").append("<div class='grid'></div>");
    }
  }
  $('.grid').width(960/x_amount);
  $('.grid').height(960/x_amount);
};

function clearGrid(){
  $(".grid").remove();
};


//function create a new grid with a size the client chooses
function newGrid(){
    var num_Dimension = prompt("Please enter a number between 1 and 64. The number you choose will determine the widht and height of the grid you decide to be artsy farsty on.")
    addDivs(num_Dimension);
    size = num_Dimension;
    if(num_Dimension > 0 && num_Dimension < 65){
      if(num_Dimension % 1 === 0){
        addDivs(num_Dimension);
      }
      else{
        alert("enter a whole number");
        newGrid(grid.size);
      };
    } else {
      newGrid(grid.size);
    };
};




//function is for click and then sketch feature
function sketch(){
  $('.grid').on("mouseover", function(){
          $(this).css("background", "#00ff00");
      });
};

var size = 16;
$(document).ready(function(){


addDivs(size);
  $('.grid').on('click', function(){
      sketch();
  });

  $(".clearGrid").click(function(){
      clearGrid();
       addDivs(size);
      $('.grid').on('click', function(){
      sketch();
    });
  });


  $(".gridSize").on('click', function(){
      newGrid();
      $('.grid').on('click', function(){
      sketch();
    });
  });

  //alert("work");
    var canvas = document.getElementById('canvas_picker').getContext('2d');
    var img = new Image();
    img.src = "colorwheel.png";

    //copy the image to the canvas
    $(img).load(function(){
        //alert("load");
        canvas.drawImage(img,0,0,150,150);
    });


    // http://www.javascripter.net/faq/rgbtohex.htm
  function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
  function toHex(n) {
    n = parseInt(n,10);
    if (isNaN(n)) return "00";
    n = Math.max(0,Math.min(n,255));
    return "0123456789ABCDEF".charAt((n-n%16)/16)  + "0123456789ABCDEF".charAt(n%16);
  }

    $('#canvas_picker').click(function(event){
        //get coordinates
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        //alert(x + "pageY" + y);
        //getting image data and RGB values
        var img_data = canvas.getImageData(x,y,3,3).data;
        var R = img_data[0];
        var G = img_data[1];
        var B = img_data[2];
        var rgb = R + ',' + G + ',' + B;
        var hex = rgbToHex(R,G,B);
        alert(rgb);
        $('.grid').unbind('mouseover');
        $('.grid').on('mouseover', function(){
            $(this).css("background", "#"+hex);
        });
      });

});