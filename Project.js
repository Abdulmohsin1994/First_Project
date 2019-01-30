
function x(){
    
function addX1_1(){
   player = $('#co1-1').text('X')
}
 $('#co1-1').on('click',addX1_1)

function addX1_2(){
    $('#co1-2').text('X')
}
$('#co1-2').on('click',addX1_2)

function addX1_3(){
    $('#co1-3').text('X') 
}
$('#co1-3').on('click',addX1_3)

function addX2_1(){
    $('#co2-1').text('X')
}
 $('#co2-1').on('click',addX2_1)

 function addX2_2(){
    $('#co2-2').text('X')
}
 $('#co2-2').on('click',addX2_2)

 function addX2_3(){
    $('#co2-3').text('X')
}
 $('#co2-3').on('click',addX2_3)

 function addX3_1(){
    $('#co3-1').text('X')
}
 $('#co3-1').on('click',addX3_1)

 function addX3_2(){
    $('#co3-2').text('X')
}
 $('#co3-2').on('click',addX3_2)

 function addX3_3(){
    $('#co3-3').text('X')
}
 $('#co3-3').on('click',addX3_3)

}

function o(){
    
    function addX1_1(){
    $('#co1-1').text('O')
}
 $('#co1-1').on('click',addX1_1)

function addX1_2(){
    $('#co1-2').text('O')
}
$('#co1-2').on('click',addX1_2)

function addX1_3(){
    $('#co1-3').text('O') 
}
$('#co1-3').on('click',addX1_3)

function addX2_1(){
    $('#co2-1').text('O')
}
 $('#co2-1').on('click',addX2_1)

 function addX2_2(){
    $('#co2-2').text('O')
}
 $('#co2-2').on('click',addX2_2)

 function addX2_3(){
    $('#co2-3').text('O')
}
 $('#co2-3').on('click',addX2_3)

 function addX3_1(){
    $('#co3-1').text('O')
}
 $('#co3-1').on('click',addX3_1)

 function addX3_2(){
    $('#co3-2').text('O')
}
 $('#co3-2').on('click',addX3_2)

 function addX3_3(){
    $('#co3-3').text('O')
}
 $('#co3-3').on('click',addX3_3)
}
$('#ch').hide();
var player = 'X';

function changePlayer(){
    if (player === 'X'){
        player = 'O'
    } else {
        player = 'X'
    }
}

function playTurn(){
    function addX1_1(){
         $('#co1-1').text(player)
         $('#co1-1').off();
         Win();
        changePlayer();
     }
      $('#co1-1').on('click',addX1_1)
      
     function addX1_2(){
         $('#co1-2').text(player)
         $('#co1-2').off();
         Win();
         changePlayer()
     }
     $('#co1-2').on('click',addX1_2)
     
     function addX1_3(){
         $('#co1-3').text(player) 
         $('#co1-3').off();
         Win();
         changePlayer()
     }
     $('#co1-3').on('click',addX1_3)
     
     function addX2_1(){
         $('#co2-1').text(player)
         $('#co2-1').off();
         Win();
         changePlayer();
     }
      $('#co2-1').on('click',addX2_1)
     
      function addX2_2(){
         $('#co2-2').text(player)
         $('#co2-2').off();
         Win();
         changePlayer();
     }
      $('#co2-2').on('click',addX2_2)
     
      function addX2_3(){
         $('#co2-3').text(player)
         $('#co2-3').off();
         Win();
         changePlayer();
     }
      $('#co2-3').on('click',addX2_3)
     
      function addX3_1(){
         $('#co3-1').text(player)
         $('#co3-1').off();
         Win();
         changePlayer();
     }
      $('#co3-1').on('click',addX3_1)
     
      function addX3_2(){
         $('#co3-2').text(player)
         $('#co3-2').off();
         Win();
         changePlayer();
     }
      $('#co3-2').on('click',addX3_2)
     
      function addX3_3(){
         $('#co3-3').text(player)
         $('#co3-3').off();
         Win();
         changePlayer();
     }
      $('#co3-3').on('click',addX3_3)
     
}

let valid = false;
function Win(){
  

    if(valid === false) {

    
    
if ($('#co1-1').text() === player && $('#co1-2').text()   === player&& $('#co1-3').text()  === player ){
        
    $('#ch').text(player + " Is winner");
    $('#co1-1 , #co1-2 , #co1-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
    
}
else if ($('#co2-1').text() === player && $('#co2-2').text()   === player && $('#co2-3').text()  === player ){
        
    $('#ch').text( player + " Is winner");
    $('#co2-1 , #co2-2 , #co2-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co3-1').text() === player && $('#co3-2').text()   === player&& $('#co3-3').text()  === player){
        
    $('#ch').text(player +" Is winner");
    $('#co3-1 , #co2-2 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
    
}
 
else if ($('#co1-1').text() === player && $('#co2-1').text()   === player && $('#co3-1').text()  === player ){
        
    $('#ch').text(player +" Is winner");
    $('#co1-1 , #co2-1 , #co3-1').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-2').text() === player && $('#co2-2').text()   === player && $('#co3-2').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-2 , #co2-2 , #co3-2').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-3').text() === player && $('#co2-3').text()   === player && $('#co3-3').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-3 , #co2-3 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-1').text() === player && $('#co2-2').text()   === player && $('#co3-3').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-1 , #co2-2 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-3').text() === player && $('#co2-2').text()   === player && $('#co3-1').text()  === player ){
        
    $('#ch').text(player +" Is winner");
    $('#co1-3 , #co2-2 , #co3-1').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else {
    $('#ch').text("TIE");
   
    
}
    }
    

}

function reset(){
    /*$('#co1-1').text('');
    $('#co1-2').text('');
    $('#co1-3').text('');
    $('#co2-1').text('');
    $('#co2-2').text('');
    $('#co2-3').text('');
    $('#co3-1').text('');
    $('#co3-2').text('');
    $('#co3-3').text('');
    $('#ch').text('');*/
    location.reload();
    playTurn();
}   
function playTurnCo(){
    function addX1_1(){
         $('#co1-1').text('X')
         $('#co1-1').off();
         Owin();
         if($('#co1-2').text() === "X" && $('#co1-3').text() === " "){
            $('#co1-3').text('O')
            $('#co1-3').off();
            }
            else if($('#co1-3').text() === "X" && $('#co1-2').text() === " "){
                $('#co1-2').text('O')
                $('#co1-2').off();
                }
           else  if($('#co2-1').text() === "X" && $('#co3-1').text() === " "){
                $('#co3-1').text('O')
                $('#co3-1').off();
                }
            else   if($('#co2-2').text() === "X" && $('#co3-3').text() === " "){
                    $('#co3-3').text('O')
                    $('#co3-3').off();
                    }
       else   if($('#co2-2').text() === " "){
         $('#co2-2').text('O')
         $('#co2-2').off();
         }
         else if ($('#co2-1').text() === " "){
            $('#co2-1').text('O')
            $('#co2-1').off();
         }
         else if ($('#co1-2').text() === " "){
            $('#co1-2').text('O')
            $('#co1-2').off();
         }
         else if ($('#co1-3').text() === " "){
            $('#co1-3').text('O')
            $('#co1-3').off();
         }
         else if ($('#co3-1').text() === " "){
            $('#co3-1').text('O')
            $('#co3-1').off();
         }
         else if ($('#co3-2').text() === " "){
            $('#co3-2').text('O')
            $('#co3-2').off();
         }
         else if ($('#co2-3').text() === " "){
            $('#co2-3').text('O')
            $('#co2-3').off();
         }
         else if ($('#co3-3').text() === " "){
            $('#co3-3').text('O')
            $('#co3-3').off();
         }
         WinO()
         
         }
       
       
     
      $('#co1-1').on('click',addX1_1)
      
     function adX1_2(){
         $('#co1-2').text('X')
         $('#co1-2').off();
         Owin();
         if($('#co2-2').text() === "X" && $('#co3-2').text() === " "){
            $('#co3-2').text('O')
            $('#co3-2').off();
            }
        else  if($('#co1-3').text() === "X" && $('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
        else if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            else if ($('#co1-3').text() === " "){
               $('#co1-3').text('O')
               $('#co1-3').off();
            }
            
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
            else if ($('#co2-3').text() === " "){
               $('#co2-3').text('O')
               $('#co2-3').off();
            }
            else if ($('#co3-1').text() === " "){
               $('#co3-1').text('O')
               $('#co3-1').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
            
             WinO()
         
     }
    
     $('#co1-2').on('click',adX1_2)
    
     function adX1_3(){
         $('#co1-3').text('X') 
         $('#co1-3').off();
         Owin();
         if($('#co2-2').text() === "X" && $('#co3-1').text() === " "){
            $('#co3-1').text('O')
            $('#co3-1').off();
            }
           else if($('#co3-3').text() === "X" && $('#co2-3').text() === " "){
                $('#co2-3').text('O')
                $('#co2-3').off();
                }
         else if($('#co1-2').text() === "X"  && $('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
           else  if($('#co3-3').text() === "X" && $('#co2-3').text() === " "){
                $('#co2-3').text('O')
                $('#co2-3').off();
                }
              else   if($('#co1-1').text() === "X" && $('#co1-2').text() === " "){
                    $('#co1-2').text('O')
                    $('#co1-2').off();
                    }
                    else   if($('#co2-3').text() === "X" && $('#co3-3').text() === " "){
                        $('#co3-3').text('O')
                        $('#co3-3').off();
                        }
       else   if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
            else if ($('#co2-3').text() === " "){
               $('#co2-3').text('O')
               $('#co2-3').off();
            }
            
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
            else if ($('#co3-1').text() === " "){
               $('#co3-1').text('O')
               $('#co3-1').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
             WinO()
         
     }
     
     $('#co1-3').on('click',adX1_3)
     
     function adX2_1(){
         $('#co2-1').text('X')
         $('#co2-1').off();
         Owin();
         if($('#co2-2').text() === "X" && $('#co2-3').text() === " "){
            $('#co2-3').text('O')
            $('#co2-3').off();
            }
            
         else if($('#co3-1').text() === "X" && $('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
       else   if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            else if ($('#co3-1').text() === " "){
               $('#co3-1').text('O')
               $('#co3-1').off();
            }
            
            else if ($('#co2-3').text() === " "){
               $('#co2-3').text('O')
               $('#co2-3').off();
            }
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
            else if ($('#co1-3').text() === " "){
               $('#co1-3').text('O')
               $('#co1-3').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
             WinO()
        
     }
     
      $('#co2-1').on('click',adX2_1)
     
      function adX2_2(){
         $('#co2-2').text('X')
         $('#co2-2').off();
         Owin();
           if($('#co2-1').text() === "X" && $('#co2-3').text() === " "){
            $('#co2-3').text('O')
            $('#co2-3').off();
            }
           else  if($('#co2-3').text() === "X" && $('#co2-1').text() === " "){
                $('#co2-1').text('O')
                $('#co2-1').off();
                }
         
        else  if($('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
            else if ($('#co3-1').text() === " "){
                $('#co3-1').text('O')
                $('#co3-1').off();
             }
             else if ($('#co1-3').text() === " "){
                $('#co1-3').text('O')
                $('#co1-3').off();
             }
             else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
           
            
            else if ($('#co2-3').text() === " "){
               $('#co2-3').text('O')
               $('#co2-3').off();
            }
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
           
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            
            WinO()
      }
      
      $('#co2-2').on('click',adX2_2)
     
      function adX2_3(){
         $('#co2-3').text('X')
         $('#co2-3').off();
         Owin();
         if($('#co2-2').text() === "X" && $('#co2-1').text() === " "){
            $('#co2-1').text('O')
            $('#co2-1').off();
            }
         
        else  if($('#co1-3').text() === "X" && $('#co3-3').text() === " "){
            $('#co3-3').text('O')
            $('#co3-3').off();
            }
            else if($('#co3-1').text() === "X" && $('#co1-3').text() === " "){
                $('#co1-3').text('O')
                $('#co1-3').off();
                }
         else if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co1-3').text() === " "){
               $('#co1-3').text('O')
               $('#co1-3').off();
            }
            else if ($('#co3-3').text() === " "){
               $('#co3-3').text('O')
               $('#co3-3').off();
            }
            
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
             WinO()
         
     }
    
      $('#co2-3').on('click',adX2_3)
     
      function adX3_1(){
         $('#co3-1').text('X')
         $('#co3-1').off();
         Owin();
         if($('#co3-3').text() === "X" && $('#co3-2').text() === " "){
            $('#co3-2').text('O')
            $('#co3-2').off();
            }
           
        else  if($('#co2-2').text() === "X" && $('#co1-3').text() === " "){
            $('#co1-3').text('O')
            $('#co1-3').off();
            }
          else   if($('#co1-1').text() === "X" && $('#co2-1').text() === " "){
                $('#co2-1').text('O')
                $('#co2-1').off();
                }
            else  if($('#co2-2').text() === "O" && $('#co1-2').text() === " "){
                $('#co1-2').text('O')
                $('#co1-2').off();
                }
            
         else if($('#co2-1').text() === "X" && $('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
            
        else  if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            
          
            else if ($('#co1-1').text() === " "){
                $('#co1-1').text('O')
                $('#co1-1').off();
             }
             else if ($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
             }
            else if ($('#co1-3').text() === " "){
               $('#co1-3').text('O')
               $('#co1-3').off();
            }
            else if ($('#co2-3').text() === " "){
                $('#co2-3').text('O')
                $('#co2-3').off();
             }
           
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
           
            WinO()
         
     }
     
      $('#co3-1').on('click',adX3_1)
     
      function adX3_2(){
         $('#co3-2').text('X')
         $('#co3-2').off();
         Owin();
         if($('#co3-1').text() === "X" && $('#co3-3').text() === " "){
            $('#co3-3').text('O')
            $('#co3-3').off();
            }
            
            else if($('#co2-2').text() === "X" && $('#co1-2').text() === " "){
                $('#co1-2').text('O')
                $('#co1-2').off();
                }
        else  if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co3-1').text() === " "){
               $('#co3-1').text('O')
               $('#co3-1').off();
            }
            else if ($('#co3-3').text() === " "){
               $('#co3-3').text('O')
               $('#co3-3').off();
            }
            
          
            else if ($('#co1-2').text() === " "){
                $('#co1-2').text('O')
                $('#co1-2').off();
             }
             else if ($('#co1-3').text() === " "){
                $('#co1-3').text('O')
                $('#co1-3').off();
             }
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            else if ($('#co2-3').text() === " "){
                $('#co2-3').text('O')
                $('#co2-3').off();
             }
           
            else if ($('#co2-1').text() === " "){
               $('#co2-1').text('O')
               $('#co2-1').off();
            }
            WinO()
        
     }
     
      $('#co3-2').on('click',adX3_2)
     
      function adX3_3(){
         $('#co3-3').text('X')
         $('#co3-3').off();
         Owin();
         if($('#co2-3').text() === "X" && $('#co1-3').text() === " "){
            $('#co1-3').text('O')
            $('#co1-3').off();
           }
           else  if($('#co1-1').text() === "O" && $('#co3-1').text() === " "){
            $('#co3-1').text('O')
            $('#co3-1').off();
            }
         else   if($('#co3-1').text() === "X" && $('#co3-2').text() === " "){
            $('#co3-2').text('O')
            $('#co3-2').off();
           }
         else if($('#co2-2').text() === "X" && $('#co1-1').text() === " "){
            $('#co1-1').text('O')
            $('#co1-1').off();
            }
            else  if($('#co3-2').text() === "X" && $('#co3-1').text() === " "){
                $('#co3-1').text('O')
                $('#co3-1').off();
                }

            else if($('#co3-3').text() === "X" && $('#co2-3').text() === " "){
                $('#co2-3').text('O')
                $('#co2-3').off();
                }

           else  if($('#co2-2').text() === "O" && $('#co1-2').text() === " "){
                $('#co1-2').text('O')
                $('#co1-2').off();
                }
                
               
        else  if($('#co3-2').text() === "X" && $('#co3-1').text() === " "){
            $('#co3-1').text('O')
            $('#co3-1').off();
            }
         else  if($('#co3-1').text() === "X" && $('#co3-2').text() === " "){
                $('#co3-2').text('O')
                $('#co3-2').off();
                }
        else  if($('#co2-2').text() === " "){
            $('#co2-2').text('O')
            $('#co2-2').off();
            }
            else if ($('#co2-3').text() === " "){
               $('#co2-3').text('O')
               $('#co2-3').off();
            }
            else if ($('#co3-2').text() === " "){
               $('#co3-2').text('O')
               $('#co3-2').off();
            }
            
          
            else if ($('#co1-3').text() === " "){
                $('#co1-3').text('O')
                $('#co1-3').off();
             }
             else if ($('#co3-1').text() === " "){
                $('#co3-1').text('O')
                $('#co3-1').off();
             }
            else if ($('#co1-2').text() === " "){
               $('#co1-2').text('O')
               $('#co1-2').off();
            }
            else if ($('#co2-1').text() === " "){
                $('#co2-1').text('O')
                $('#co2-1').off();
             }
           
            else if ($('#co1-1').text() === " "){
               $('#co1-1').text('O')
               $('#co1-1').off();
            }
            WinO()
         
     }
    
      $('#co3-3').on('click',adX3_3)
     
}

function Owin(){
     if($('#co2-2').text() === "O" && $('#co1-2').text() === "O"){
        if($('#co3-2').text() === " "){
         $('#co3-2').text('O')
        $('#co3-2').off();
        }
        }

       else  if($('#co1-1').text() === "O" && $('#co2-1').text() === "O"){
        if($('#co3-1').text() === " "){
            $('#co3-1').text('O')
            $('#co3-1').off();
            }
        }

           else  if($('#co1-3').text() === "O" && $('#co2-3').text() === "O"){
            if($('#co3-3').text() === " "){
                $('#co3-3').text('O')
                $('#co3-3').off();
                }
            }

                else if($('#co3-1').text() === "O" && $('#co2-1').text() === "O"){
                    if($('#co1-1').text() === " "){
                    $('#co1-1').text('O')
                    $('#co1-1').off();
                    }
                }
                    else if($('#co2-3').text() === "O" && $('#co3-3').text() === "O"){
                        if($('#co1-3').text() === " "){
                        $('#co1-3').text('O')
                        $('#co1-3').off();
                        }
                    }
                    else  if($('#co1-1').text() === "O" && $('#co3-1').text() === "O"){
                        if($('#co2-1').text() === " "){
                            $('#co2-1').text('O')
                            $('#co2-1').off();
                            }
                        }
                        else  if($('#co1-2').text() === "O" && $('#co3-2').text() === "O"){
                            if($('#co2-2').text() === " "){
                                $('#co2-2').text('O')
                                $('#co2-2').off();
                                }
                            }
                        else  if($('#co1-3').text() === "O" && $('#co3-3').text() === "O"){
                            if($('#co2-3').text() === " "){
                                $('#co2-3').text('O')
                                $('#co2-3').off();
                                }
                            }
                            else  if($('#co1-1').text() === "O" && $('#co1-3').text() === "O"){
                                if($('#co1-2').text() === " "){
                                    $('#co1-2').text('O')
                                    $('#co1-2').off();
                                    }
                                }
                                else  if($('#co3-1').text() === "O" && $('#co3-3').text() === "O"){
                                    if($('#co3-2').text() === " "){
                                        $('#co3-2').text('O')
                                        $('#co3-2').off();
                                        }
                                    }
                                    else  if($('#co1-3').text() === "O" && $('#co2-2').text() === "O"){
                                        if($('#co3-1').text() === " "){
                                            $('#co3-1').text('O')
                                            $('#co3-1').off();
                                            }
                                        }
                                        else  if($('#co1-1').text() === "O" && $('#co2-2').text() === "O"){
                                            if($('#co3-3').text() === " "){
                                                $('#co3-3').text('O')
                                                $('#co3-3').off();
                                                }
                                            }
                                            else  if($('#co3-3').text() === "O" && $('#co2-2').text() === "O"){
                                                if($('#co1-1').text() === " "){
                                                    $('#co1-1').text('O')
                                                    $('#co1-1').off();
                                                    }
                                                }
                                                else  if($('#co3-1').text() === "O" && $('#co2-2').text() === "O"){
                                                    if($('#co1-3').text() === " "){
                                                        $('#co1-3').text('O')
                                                        $('#co1-3').off();
                                                        }
                                                    }
}
function WinO(){
  

    if(valid === false) {

    player="O"
    
if ($('#co1-1').text() === player && $('#co1-2').text()   === player&& $('#co1-3').text()  === player ){
        
    $('#ch').text(player + " Is winner");
    $('#co1-1 , #co1-2 , #co1-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
    
}
else if ($('#co2-1').text() === player && $('#co2-2').text()   === player && $('#co2-3').text()  === player ){
        
    $('#ch').text( player + " Is winner");
    $('#co2-1 , #co2-2 , #co2-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co3-1').text() === player && $('#co3-2').text()   === player&& $('#co3-3').text()  === player){
        
    $('#ch').text(player +" Is winner");
    $('#co3-1 , #co2-2 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
    
}
 
else if ($('#co1-1').text() === player && $('#co2-1').text()   === player && $('#co3-1').text()  === player ){
        
    $('#ch').text(player +" Is winner");
    $('#co1-1 , #co2-1 , #co3-1').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-2').text() === player && $('#co2-2').text()   === player && $('#co3-2').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-2 , #co2-2 , #co3-2').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-3').text() === player && $('#co2-3').text()   === player && $('#co3-3').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-3 , #co2-3 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-1').text() === player && $('#co2-2').text()   === player && $('#co3-3').text()  === player ){
        
    $('#ch').text(player +" Is  winner");
    $('#co1-1 , #co2-2 , #co3-3').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else if ($('#co1-3').text() === player && $('#co2-2').text()   === player && $('#co3-1').text()  === player ){
        
    $('#ch').text(player +" Is winner");
    $('#co1-3 , #co2-2 , #co3-1').css('background-color' , 'lightgreen');
    $('#ch').show();
    setTimeout(reset, 2000);
    valid = true;
}
else {
    $('#ch').text("TIE");
   
    
}
    }
}

 $('#one').on('click', playTurnCo)
 $('#two').on('click', playTurn)
  $('#b').on('click',reset);
