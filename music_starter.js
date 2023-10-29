
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 
background(0)
   // vocal bar is red
 stroke(255,0,0)
   bezier(0,300,200,bass * 2.5 + 300,400,- bass * 2.5 + 300,600,300)
  
   if (song.currentTime()>19){
push()
stroke(255,0,100)
bezier(0,300,200,bass * 2.5 + 300,400,- bass * 2.5 + 300,600,300)
pop()
   }
   
   if (song.currentTime()>25){
      push()
      stroke(200,0,100)
      bezier(0,300,200,bass * 2.5 + 300,400,- bass * 2.5 + 300,600,300)
      pop()
         }
   
  
  
  
   stroke(255,75,0) 
   bezier(0,300,100,- vocal * 2.5 + 300,300,vocal * 2.5 + 300,600,300)
   
   if (song.currentTime()>19){
push()
stroke(255,25,150)
bezier(0,300,100,- vocal * 2.5 + 300,300,vocal * 2.5 + 300,600,300)
pop()
   }

   if (song.currentTime()>25){
      push()
      stroke(200,25,150)
      bezier(0,300,100,- vocal * 2.5 + 300,300,vocal * 2.5 + 300,600,300)
      pop()
         } 
   
   
   
   
   
   
         stroke(255,150,0)
   bezier(0,300,300,drum * 2.5 + 300,500,- drum * 2.5 + 300,600,300)
   
   if (song.currentTime()>19){
push()
stroke(255,75,200)
bezier(0,300,300,drum * 2.5 + 300,500,- drum * 2.5 + 300,600,300)
pop()
   }
   
   if (song.currentTime()>25){
      push()
      stroke(200,75,200)
      bezier(0,300,300,drum * 2.5 + 300,500,- drum * 2.5 + 300,600,300)
      pop()
         }
   
   
   
   
   
   
         stroke(255,225,0)
   bezier(0,300,200,- other * 2.5 + 300,400,other * 2.5 + 300,600,300)
   
   if (song.currentTime()>19){
push()
stroke(255,100,255)
bezier(0,300,200,- other * 2.5 + 300,400,other * 2.5 + 300,600,300)
pop()
   }

   if (song.currentTime()>25){
      push()
      stroke(200,100,255)
      bezier(0,300,200,- other * 2.5 + 300,400,other * 2.5 + 300,600,300)
      pop()
         }

 





   if (song.currentTime()>42.85){
push()
fill(106,38,252)
stroke(106,38,252)
quad(25,0,75,0,75,bass * 2.5,25,bass * 2.5) // bass top left
quad(525,0,575,0,575,bass * 2.5,525,bass * 2.5) // bass top right
quad(25,600,75,600,75,- bass * 2.5 + 600,25,- bass * 2.5 + 600) // bass bottom left
quad(525,600,575,600,575,- bass * 2.5 + 600,525,- bass * 2.5 + 600) // bass bottom right
pop()
 }

 
 
 
 
   if (song.currentTime()>30.75){
push()
fill(224,38,252)
stroke(224,38,252)
quad(150,0,200,0,200,vocal * 2,150,vocal * 2) // vocal top left
quad(400,0,450,0,450,vocal * 2,400,vocal * 2) // vocal top right
quad(150,600,200,600,200,- vocal * 2 + 600,150,- vocal * 2 + 600) // vocal bottom left
quad(400,600,450,600,450,- vocal * 2 + 600,400,- vocal * 2 + 600) // vocal bottom right
pop()
  }
  



if (song.currentTime()>19){
push()
   fill(252,38,109)
   stroke(252,38,109)

   quad(275,- drum * 1.5 + 600,325,- drum * 1.5 + 600,325,600,275,600) // bottom drum 
   quad(275,drum * 1.5,325,drum * 1.5,325,0,275,0) // top drum 
pop()
}

 

if (song.currentTime()>25){
push()
let from_nine = color(252,38,109)
let to_nine = color(167,38,252)
let colour_change_nine = lerpColor(from_nine,to_nine,drum)
stroke(colour_change_nine)
fill(colour_change_nine)

quad(275,- drum * 1.5 + 600,325,- drum * 1.5 + 600,325,600,275,600) // bottom drum 
   quad(275,drum * 1.5,325,drum * 1.5,325,0,275,0) // top drum 

pop()
 }

 if (song.currentTime()>70.3){
   push()
      fill(240,0,255)
      stroke(240,0,255)
   
      quad(275,- drum * 1.5 + 600,325,- drum * 1.5 + 600,325,600,275,600) // bottom drum 
      quad(275,drum * 1.5,325,drum * 1.5,325,0,275,0) // top drum 
   pop()
   }

   if (song.currentTime()>75.7){
      push()
         fill(255,0,200)
         stroke(255,0,200)
      
         quad(275,- drum * 1.5 + 600,325,- drum * 1.5 + 600,325,600,275,600) // bottom drum 
         quad(275,drum * 1.5,325,drum * 1.5,325,0,275,0) // top drum 
      pop()
      }


   fill(0,0,0,0)

strokeWeight(1)
stroke(255,0,0)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-100);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-90);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-80);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-70);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-60);

   if (song.currentTime()>19){
push()
let from_seven = color(255,0,0)
let to_seven = color(109,38,252)
let colour_change_seven = lerpColor(from_seven,to_seven,vocal)
stroke(colour_change_seven)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-100);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-90);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-80);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-70);
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-60);
pop()
 }

 if (song.currentTime()>25){
   push()
   let from_eight = color(109,38,252)
   let to_eight = color(38,252,224)
   let colour_change_eight = lerpColor(from_eight,to_eight,vocal)
   stroke(colour_change_eight)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-100);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-90);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-80);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-70);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-60);
   pop()
    }

    let red = color(255,40,100)
    let blue = color(38,250,255)
 
 
    if (song.currentTime()>30.75){
 push()
 let vocal_pulse = map(vocal,0,80,0,1)
 let vocalPulse = lerpColor(blue,red,vocal_pulse)
 stroke(vocalPulse);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-100);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-90);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-80);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-70);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-60);
 pop()
    }

    if (song.currentTime()>42.85){
push()
stroke(0,255,225)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-100);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-90);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-80);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-70);
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * vocal-60);
pop()
    }

strokeWeight(2)
   stroke(255,0,0)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);


  if (song.currentTime()>19){
push()
let from = color(255,0,0)
let to = color(230,0,100)
let colour_change = lerpColor(from,to,drum)
stroke(colour_change)
strokeWeight(3)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
pop()
  }

   if (song.currentTime()>25){
push()
let from_two = color(255,0,128)
let to_two = color(200,0,220)
let colour_change_two = lerpColor(from_two,to_two,drum)
stroke(colour_change_two)
strokeWeight(5)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
pop()
   }

   if (song.currentTime()>30.75){
push()
stroke(210,170,60)
strokeWeight(5)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
pop()
}

if (song.currentTime()>42.85){
   push()
   stroke(128,123,112)
   strokeWeight(5)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
   pop()
   }

   if (song.currentTime()>43.75){
      push()
      stroke(210,170,60)
      strokeWeight(5)
      circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
      pop()
      }
   
      if (song.currentTime()>70.5){
push()
stroke(255,68,0)
strokeWeight(5)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
pop() 
      }


      if (song.currentTime()>76){
         push()
         stroke(255,0,132)
         strokeWeight(5)
         circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * drum + 20);
         pop() 
               }


   strokeWeight(2)
   stroke(240,81,46)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * bass + 30);

   if (song.currentTime()>19){
push()
let from_three = color(240,81,46)
let to_three = color(250,46,175)
let colour_change_three = lerpColor(from_three,to_three,bass)
stroke(colour_change_three)

circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * bass + 30);
pop()
}

if (song.currentTime()>25){
push()
let from_four = color(250,46,175)
let to_four = color(160,50,240)
let colour_change_four = lerpColor(from_four,to_four,bass)
stroke(colour_change_four)
strokeWeight(3)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * bass + 30);
pop()
}




let purple_two = color(200,30,200)
let blue_two = color(0,0,255)

if (song.currentTime()>30.75){
   push()
   let bass_pulse_two = map(bass,35,80,0,1)
   let bassPulse_two = lerpColor(purple_two,blue_two,bass_pulse_two)
   stroke(bassPulse_two);
   strokeWeight(3)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * bass + 30);
   pop()
   }
   
   
   
   let pink = color(255,0,90)
   let lilac = color(100,30,250)
   
   
   if (song.currentTime()>42.85){
   push()
   let bass_pulse = map(bass,50,60,0,1)
   let bassPulse = lerpColor(lilac,pink,bass_pulse)
   stroke(bassPulse);
   strokeWeight(5)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * bass + 30);
   pop()
   }

   strokeWeight(2)
   stroke(240,156,46)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);

if (song.currentTime()>19){
push()
let from_five = color(240,156,46)
let to_five = color(230,46,240)
let colour_change_five = lerpColor(from_five,to_five,other)
stroke(colour_change_five)
strokeWeight(3)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);
pop()
}

if (song.currentTime()>25){
   push()
   let from_six = color(230,46,240)
   let to_six = color(240,46,172)
   let colour_change_six = lerpColor(from_six,to_six,other)
   stroke(colour_change_six)
   strokeWeight(5)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);
   pop()
 }


 if (song.currentTime()>30.75){
push()
stroke(255,170,0)
strokeWeight(5)
circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);
pop()
 }
 
 
 if (song.currentTime()>42.85){
   push()
   stroke(128,123,112)
   strokeWeight(5)
   circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);
   pop()
    }
   

    if (song.currentTime()>43.75){
      push()
      stroke(255,150,0)
      strokeWeight(5)
      circle(bar_pos_x, height / 2 + 0 * bar_spacing, 4 * other - 50);
      pop()
       }






}
 
   
