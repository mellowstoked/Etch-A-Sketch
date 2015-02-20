

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
          $(this).css("background", "#FF6600");
      });
};


$(document).ready(function(){
  addDivs(16);


  $('.grid').on('click', function(){
      sketch();
  });

  $(".clearGrid").click(function(){
      clearGrid();
      newGrid()
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

  alert("work");
    var canvas = document.getElementById('canvas_picker').getContext('2d');
    var img = new Image();
    img.src = "colorwheel.png";

    //copy the image to the canvas
    $(img).load(function(){
        alert("load");
        canvas.drawImage(img,0,0);
    });

    $('#canvas_picker').click(function(event){
        //get coordinates
        var x = event.pageX - this.offsetLeft;
        var y = event.pageY - this.offsetTop;
        //getting image data and RGB values
        var img_data = canvas.getImageData(x,y,1,1).data;
        var R = img_data[0];
        var G = img_data[1];
        var B = img_data[2];
        var rgb = R + ',' + G + ',' + B;

        $('.grid').on('mouseover', function(){
            $(this).css("background", "rgb");
        });
      });

});