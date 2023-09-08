let music = new Audio("");
// music.play();
const songs = [
  {
    id: 1,

    Songname: `Beautiful<br>
    <div class="subtitle">Eminem</div>`,
    poster: "./image/8.jpg",
  },
  {
    id: 2,
    Songname: `Don't go<br>
    <div class="subtitle">Justin Beiber</div>
`,
    poster: "./image/5.jpg",
  },
  {
    id: 3,
    Songname: `God's Plan<br>
    <div class="subtitle">Drake</div>
`,
    poster: "./image/3.jpg",
  },
  {
    id: 4,
    Songname: `Godzilla<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/6.jpg",
  },
  {
    id: 5,
    Songname: `Love the Way You Lie<br>
    <div class="subtitle">Eminem  Rihana</div>
`,
    poster: "./image/10.jpg",
  },
  {
    id: 6,
    Songname: `Magenta_riddim<br>
    <div class="subtitle">Drake</div>
`,
    poster: "./image/4.jpg",
  },
  {
    id: 7,
    Songname: `Not Afraid<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/10.jpg",
  },
  {
    id: 8,
    Songname: `Smack_That<br>
    <div class="subtitle">Akon & eminem</div>
`,
    poster: "./image/1.jpg",
  },
  {
    id: 9,
    Songname: `Survival<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/9.jpg",
  },
  {
    id: 10,
    Songname: `Work<br>
    <div class="subtitle">Rihana & drake</div>
`,
    poster: "./image/4.jpg",
  },
  {
    id: 11,

    Songname: `Beautiful<br>
    <div class="subtitle">Eminem</div>`,
    poster: "./image/8.jpg",
  },
  {
    id: 12,
    Songname: `Don't go<br>
    <div class="subtitle">Justin Beiber</div>
`,
    poster: "./image/5.jpg",
  },
  {
    id: 13,
    Songname: `God's Plan<br>
    <div class="subtitle">Drake</div>
`,
    poster: "./image/3.jpg",
  },
  {
    id: 14,
    Songname: `Godzilla<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/6.jpg",
  },
  {
    id: 15,
    Songname: `Love the Way You Lie<br>
    <div class="subtitle">Eminem  Rihana</div>
`,
    poster: "./image/10.jpg",
  },
  {
    id: 16,
    Songname: `Magenta_riddim<br>
    <div class="subtitle">Drake</div>
`,
    poster: "./image/4.jpg",
  },
  {
    id: 17,
    Songname: `Not Afraid<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/7.jpg",
  },
  {
    id: 18,
    Songname: `Smack_That<br>
    <div class="subtitle">Akon & eminem</div>
`,
    poster: "./image/1.jpg",
  },
  {
    id: 19,
    Songname: `Survival<br>
    <div class="subtitle">Eminem</div>
`,
    poster: "./image/9.jpg",
  },
  {
    id: 20,
    Songname: `Work<br>
    <div class="subtitle">Rihana & drake</div>
`,
    poster: "./image/4.jpg",
  },
];
const makeallbackground=()=>{
  Array.from(document.getElementsByClassName("songitem")).forEach((el)=>{
     el.style.background='rgb(255, 255, 255,.0)'


  })
}
let download_music=document.getElementById("download_music")
  
const makeallplay=()=>{

     Array.from(document.getElementsByClassName("playicon")).forEach((e)=>{
      e.classList.remove("fa-pause");
      e.classList.add("fa-circle-play");
     })

}
// Array.from(document.getElementsByClassName("fa-pause")).array.forEach(element => {
//    element.addEventListener("click",(e)=>{
//     e.classList.remove("fa-circle-play");
//     e.classList.add("fa-pause");
//     music.pause();
//    })
// });
 

  Array.from(document.getElementsByClassName("poster")).forEach((e,i)=>{
      e.getElementsByTagName("img")[0].src=songs[i].poster;
  })


Array.from(document.getElementsByClassName("songitem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].Songname;
});
let masterplay = document.getElementById("masterplay");
let wave = document.getElementsByClassName("wave1");
let master_title = document.getElementById("master_title");
let seek=document.getElementById("seek");
let bar2=document.getElementById("bar2");
let dot=document.getElementsByClassName("dot")[0];

masterplay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    Array.from(wave).forEach((e) => {
      e.classList.add("active1");
    });
    masterplay.classList.add("fa-pause");
    masterplay.classList.remove("fa-play");
  }
   else{
    music.pause();
    Array.from(wave).forEach((e) => {
      e.classList.remove("active1");
    });
    masterplay.classList.remove("fa-pause");
    masterplay.classList.add("fa-play");
   }
  
});

let popsong_left = document.getElementById("pop_song_left");

let popsong_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("popsongs")[0];

let pop_artist = document.getElementsByClassName("item")[0];

let pop_artist_right = document.getElementById("popular_artistright");
let pop_artist_left = document.getElementById("popular_artistleft");

popsong_right.addEventListener("click", () => {
  pop_song.scrollLeft += 250;
});
popsong_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 250;
});

pop_artist_right.addEventListener("click", () => {
  
  pop_artist.scrollLeft += 250;
});
pop_artist_left.addEventListener("click", () => {
  pop_artist.scrollLeft -= 250;
});
let index = 0;
let poster_master_play = document.getElementById("master_poster");

Array.from(document.getElementsByClassName("songitem")).forEach((e) => {
 

  e.addEventListener("click", (el) => {

   if( el.target.classList.contains("fa-pause")){
    el.target.classList.add("fa-play-circle");
    el.target.classList.remove("fa-pause");
    music.pause();
    masterplay.classList.add("fa-play");
    masterplay.classList.remove("fa-pause");
    
   
  
  
}
else{
    
    index = el.target.id;
    console.log(index);
    music.src = `audio/${index}.mp3`;
    music.play();
    download_music.href=`audio/${index}.mp3`;
    poster_master_play.src = songs[index-1].poster; //kyinkii array 0 s shuru hota hai
    masterplay.classList.add("fa-pause");
    masterplay.classList.remove("fa-play");
    const mastertitle = songs.filter((item) => {
      return item.id==index;//ab id hai to index ka darr nai hai;

})

//cause filter modified array return karta hai
mastertitle.forEach((ele)=>{
     let{Songname}=ele;
      master_title.innerHTML=Songname;
      download_music.setAttribute("download",Songname)


}

)
makeallbackground();
Array.from(document.getElementsByClassName("songitem"))[index-1].style.background='rgb(255, 255, 255,.3)'

makeallplay();
el.target.classList.add("fa-pause");
el.target.classList.remove("fa-play-circle");
Array.from(wave).forEach((e) => {
  e.classList.add("active1");
});


  }
  
   

    
  
  });
 
});
let currentstart=document.getElementById("currentstart");
let currentend=document.getElementById("currentend");
music.addEventListener('timeupdate',()=>{
  let music_cur=music.currentTime;
  let music_dur=music.duration;
  
 let min1=Math.floor(music_dur/60);
 let sec1=Math.floor(music_dur%60);
 if(sec1<10){
  sec1=`0${sec1}`
 }

 currentend.innerText=`${min1}:${sec1}`
 let min2=Math.floor(music_cur/60);
 let sec2=Math.floor(music_cur %60);
 if(min2<10){
  min2=`0${min2}`
 }
 if(sec2<10){
  sec2=`0${sec2}`
 }
 currentstart.innerHTML=`${min2}:${sec2}`
 let progressbar=parseInt((music_cur/music_dur)*100);
 let seekbar=progressbar;
 dot.style.left=`${seekbar}%`;
 bar2.style.width=`${seekbar}%`



seek.addEventListener("change",()=>{
  
    music.currentTime=seek.value*music.duration/100;


})
});
let vol_icon=document.getElementById("vol_icon");
let vol=document.getElementById("vol");
let vol_bar=document.getElementsByClassName("volbar")[0];
let vol_dot=document.getElementById("vol_dot");
vol.addEventListener('change',()=>{ 
  if(vol.value==0){
     vol_icon.classList.remove("fa-volume-low");
     vol_icon.classList.remove("fa-volume-high");
     vol_icon.classList.add("fa-volume-xmark");

  }
  if(vol.value>0){
    vol_icon.classList.remove("fa-volume-high");
     vol_icon.classList.remove("fa-volume-xmark");
     vol_icon.classList.add("fa-volume-low");
  }
  if(vol.value==100){
    vol_icon.classList.add("fa-volume-high");
    vol_icon.classList.remove("fa-volume-xmark");
    vol_icon.classList.remove("fa-volume-low");

  }
 
  let vol_a=vol.value;
  vol_bar.style.width=`${vol_a}%`;
  vol_dot.style.left=`${vol_a}%`;
  music.volume=vol_a/100;
})
let back=document.getElementById("back");
let next=document.getElementById("next");
back.addEventListener("click",()=>{
            if(index==1){
              index=Array.from(document.getElementsByClassName("songitem")).length;
            }



       index-=1;
     
       music.src = `audio/${index}.mp3`;
       music.play();
       poster_master_play.src = songs[index-1].poster; //kyinkii array 0 s shuru hota hai
       masterplay.classList.add("fa-pause");
       masterplay.classList.remove("fa-play");
       const mastertitle = songs.filter((item) => {
         return item.id==index;//ab id hai to index ka darr nai hai;
   
   })
   //cause filter modified array return karta hai
   mastertitle.forEach((ele)=>{
        let{Songname}=ele;
         master_title.innerHTML=Songname;
   
   
   
   }
   
   )
   makeallbackground();
   Array.from(document.getElementsByClassName("songitem"))[index-1].style.background='rgb(255, 255, 255,.3)'
   
   makeallplay();
   el.target.classList.add("fa-pause");
   el.target.classList.remove("fa-play-circle");
   Array.from(wave).forEach((e) => {
     e.classList.add("active1");
   });
  
  

})
next.addEventListener("click",()=>{
  
console.log(index);

index++;
console.log(index);

if(index>Array.from(document.getElementsByClassName("songitem")).length){
  console.log(index);
  index=1;
  
}

music.src = `audio/${index}.mp3`;
music.play();
poster_master_play.src = songs[index-1].poster; //kyinkii array 0 s shuru hota hai
masterplay.classList.add("fa-pause");
masterplay.classList.remove("fa-play");
const mastertitle = songs.filter((item) => {
return item.id==index;//ab id hai to index ka darr nai hai;

})

//cause filter modified array return karta hai
mastertitle.forEach((ele)=>{
let{Songname}=ele;
master_title.innerHTML=Songname;



}

)
makeallbackground();
Array.from(document.getElementsByClassName("songitem"))[index-1].style.background='rgb(255, 255, 255,.3)'

makeallplay();
el.target.classList.add("fa-pause");
el.target.classList.remove("fa-play-circle");
Array.from(wave).forEach((e) => {
e.classList.add("active1");
})










})

//search data start
let search_result=document.getElementsByClassName("search_result")[0];
songs.forEach((ele)=>{
     const{id,Songname,poster}=ele;
     let card=document.createElement("a");
     card.href="#"+id;
     card.classList.add("card");
     card.innerHTML=`<img  src="${poster}"/>
     <div class="content">
      ${Songname}
      
     </div>`
     search_result.appendChild(card)

       
})
let input=document.getElementsByTagName('input')[0];
input.addEventListener('keyup',()=>{
  let input_value=input.value.toUpperCase();
  let item=search_result.getElementsByTagName("a");
  for(let index=0;index<item.length;index++){
    let as=item[index].getElementsByClassName("content")[0];
    
    let text_value=as.textContent||as.innerHTML;
    console.log(text_value);
    if(text_value.toUpperCase().indexOf(input_value)>-1){
      item[index].style.display="flex";

    }else{
      item[index].style.display="none";

    }
    if(input.value==0){
     search_result.style.display="none"
    }
    else{
      search_result.style.display=""
    }
  }

})