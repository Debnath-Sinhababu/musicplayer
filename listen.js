let controls=document.querySelector('.music-controls');
let container=document.querySelector('.img_container');
let goback=document.querySelector("#back");
let goforward=document.querySelector('#forward');
let play=document.querySelector('#play');
let pause=document.querySelector('#pause');
let arr=[{bool:true,music:"music1"},{bool:false,music:"music2"},{bool:false,music:"music3"},{bool:false,music:"music4"}];
let audio;
let count=0;
let progress=document.querySelector('.progress');
let bar= document.querySelector('.progress-bar');
let image=container.querySelector('img');
let d=5;
let a;
let b=45;
let abc;
let cur;
let b1=0;
let b2=0;
let x=165;


function rotate(){
    // var csty=getComputedStyle(a).getPropertyValue('transform')
    // console.log(csty)
    //parseInt(getComputedStyle(a).getPropertyValue('transform'));
  
    if(b>360)
    b=0;
  //   console.log(b);
    //d+=5;
    let c= b+'deg';
  //   a.style.transform=""
  a.style.transform=`rotate(${c})`;
  b=b+d;
abc=requestAnimationFrame(rotate);
  

}
play.addEventListener('click',function (p) {
    for(let i=0;i<arr.length;i++){
        if(arr[i].bool==true){
            play.classList.add('hide');
            pause.classList.remove('hide');
            let p=arr[i].music+".mp3";
            audio=new Audio(p);
            if(cur>0)
            audio.currentTime=cur;
            

            audio.play();
            
 
        }
    }
   image.classList.add('image1');
   a=container.querySelector('.image1');
  abc=requestAnimationFrame(rotate);

/* audio.ontimeupdate = (event) =>{
     console.log('The Current time attribute has been updated.Again.')
 }
 */

audio.addEventListener('timeupdate',function (event) {
let currenttime=parseFloat(event.srcElement.currentTime);
 let duration=parseFloat(event.srcElement.duration);
 //console.log(currenttime);
     
 let time1=currenttime;
 let dur=duration;
 
   x=duration;
    while(time1>=60 ){
        b1+=parseInt(time1/60);
        time1=parseInt(time1%60);
        
    }
    while(dur>=60){
        b2+= parseInt(dur/60);
        dur=parseInt(dur%60);
    }
    
    
    if(currenttime<60){
        b1=0;
       time1=parseInt(time1); 
        if(currenttime<10)
    document.querySelector('.starttime').textContent=`${b1}.0${time1}`;
    else
    document.querySelector('.starttime').textContent=`${b1}.${time1}`  
    
    }
    else{
        console.log(b1,time1);
        if(time1<10)
        document.querySelector('.starttime').textContent=`${b1}.0${time1}`;
  else
    document.querySelector('.starttime').textContent=`${b1}.${time1}`;
    b1=0;
    }
    document.querySelector('.duration').textContent=`${b2}.${dur}`; 
    b2=0; 
     let blue= parseFloat (document.querySelector('.starttime').textContent);
     let result1= parseFloat(document.querySelector('.duration').textContent)
     if(blue<=result1){
        
     let result=blue/result1;
     result=parseInt(result*100);
     
     let width= parseInt(getComputedStyle(progress).getPropertyValue('width'));
     
     width=result+'%';
    
     
     progress.style.width= width;
     if(blue==result1){
         audio.pause();
         audio.currentTime=0;
         b1=0;
         currenttime=0;
         document.querySelector('.starttime').textContent=`${b1}.0${currenttime}`;
         let w= parseInt(getComputedStyle(progress).getPropertyValue('width'));
     
         w=0+"%";
         progress.style.width=w;
         
         pause.classList.add('hide');
         play.classList.remove('hide');
         cur=0;
         cancelAnimationFrame(abc);
         b=0;
     }
     }


})
     


});
 bar.addEventListener('click',function (event) {
    
     let full_width=parseFloat(getComputedStyle(bar).getPropertyValue('width'));
     
     
 
     let skip_part=event.offsetX;
     
     let percen=(skip_part)/full_width;
    
    // let skip_music=parseInt(percen*x);
    audio.currentTime= percen*100;
    //  percen=parseFloat(percen*100);
     
     
     //console.log(skip_music);
     
    //  let width1= parseInt(getComputedStyle(progress).getPropertyValue('width'));
     
    //   width1=percen+"%";
    //   console.log(width1);
     
    //   progress.style.width=width1;
     
      
      

 })
pause.addEventListener('click',function (p) {
    for(let i=0;i<arr.length;i++){
        if(arr[i].bool==true){
            pause.classList.add('hide');
            play.classList.remove('hide');
            let p=arr[i].music+".mp3";
            // let audio=new Audio(p);
            audio.pause();
           cur=audio.currentTime;
           
            cancelAnimationFrame(abc);
            image.classList.remove('image1');
            b=0;
  //   console.log(b);
    //d+=5;
    let c= b+'deg';
  //   a.style.transform=""
  a.style.transform=`rotate(${c})`;
     
        }
    }


});
 goforward.addEventListener('click',function (p) {
     count++;
     if(count>3)
     count=0;
     arr[count].bool=true;
    //  }
     for(let i=0;i<arr.length;i++){
         if(i!=count){
         arr[i].bool=false;
         

         
         }
     }
     audio.pause();
     audio.currentTime=0;
     cur=0;
     pause.classList.add('hide');
     play.classList.remove('hide');
     
 })
 goback.addEventListener('click',function (p) {
     count--;
     if(count<0)
        count=3;
     
     arr[count].bool=true;
    //  }
     for(let i=0;i<arr.length;i++){
         if(i!=count){
         arr[i].bool=false;
         
         }

     }
    
         
     
     audio.pause();
     audio.currentTime=0;
     cur=0;
     pause.classList.add('hide');
     play.classList.remove('hide');
     

 })
 

 



