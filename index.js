const hr= document.getElementById("hour")
const mn= document.getElementById("Minutes")
const sc=document.getElementById("seconds")

const ampm= document.getElementById("ampm")

function fun(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let kk="AM";
    if(h>12){
        h=h-12;
        kk="PM"
    }
    if(h<10) h='0'+h;
    if(m<10) m='0'+m;
    if(s<10) s='0'+s;
    hr.innerText=h;
    mn.innerText=m;
    sc.innerText=s;

    ampm.innerText=kk;

    setTimeout(()=>{
       fun()
    },1000)

}

fun()