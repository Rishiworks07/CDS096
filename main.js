const counts=document.querySelectorAll('.count')
const Speed=90
counts.forEach((counter)=>{
    function upData(){
        const target=Number(counter.getAttribute('data-target'))
        const count=Number(counter.innerText)
        const inc=target/Speed
        if(count<target){
            counter.innerText=Math.floor(inc+count)
            setTimeout(upData, 1)
        }else{
            counter.innerText=target
        }
    }upData()
})