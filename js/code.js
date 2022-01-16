function cargar(){
    const xhttp  = new XMLHttpRequest();
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
         //console.log(data)
         let ul1 = document.querySelector(".ul-1");
         let ul2 = document.querySelector(".ul-2");
         let ul3 = document.querySelector(".ul-3");
         let ul4 = document.querySelector(".ul-4");
        for(let x = 0; x<data.length; x++){
            console.log(data[x].name +" "+data[x].country+" "+ data[x].domains+" "+ data[x].web_pages);
            //pais de la universidad
            let li1 = document.createElement('li');
            li1.innerHTML = data[x].country;
            ul1.appendChild(li1);
            //nombre de la universidad 
            let a = document.createElement('a');
            let li2 = document.createElement('li');
            a.innerHTML =`${data[x].name}`;
            a.href = data[x].web_pages;
            li2.appendChild(a)
            ul2.appendChild(li2);

            //domino de las universidades en republica domnicana
            let li3 = document.createElement('li');
            li3.innerHTML = data[x].domains;
            ul3.appendChild(li3);


        }
    }
}
xhttp.open("GET", "http://universities.hipolabs.com/search?country=dominican+republic", true);
xhttp.send()
}
cargar();





//scroll anmaton

window.addEventListener("scroll",()=>{
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})