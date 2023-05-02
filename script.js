// bottom.setAttribute('hidden',"")
// dop.style.visibility=hidden
// d.style.visibility=hidden
function tempData(){
    dname=searchInput.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${dname}`).then(data=>data.json()).then(data=>displayData(data))
}
function displayData(Ddata){
    disname=Ddata[0].word
    posname=Ddata[0].meanings[0].partOfSpeech
    samp=Ddata[0].phonetics[0].text
    wordM=Ddata[0].meanings[0].definitions[0].definition
    wordE=Ddata[0].meanings[0].definitions[0].example


    console.log(samp);

    displayname.innerHTML=`<p">${disname}</p>`
    pos.innerHTML=`<p">${posname}</p>`
    pose.innerHTML=`<p">${samp}</p>`
    wordMean.innerHTML=`<p">${wordM}</p>`
    wordExample.innerHTML=`<p">${wordE}</p>`


    if(disname == " "){
       
    }
    else{
        dis.style.visibility = 'hidden';
        dop.style.visibility = 'visible';
    }

   
}
function tempData1(){
    sname=searchInput.value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${sname}`).then(data=>data.json()).then(data=>displayData1(data))

}


function displayData1(Sdata){
    
    
     k=Sdata[0].phonetics[0].audio
    sound.src=`${(Sdata[0].phonetics[0].audio)}`
    if(k==" "){
        d.style.visibility='hidden';

    }
    else{
        d.style.visibility='visible';
    }
    
    sound.play();
}