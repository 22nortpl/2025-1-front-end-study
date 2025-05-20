let bodyTag = document.body;

console.log(bodyTag);

let hongikFestival = {

    name: "축제 라인업",
   
    date: "2025.05.14 - 2025.05.16",
   
    location: "서울특별시 마포구 홍익대학교",
   
    lineup: {
   
    day1: "MC 동현, KiiiKiii, Changmo, Beenzino",
   
    day2: "규태씨, 심아일랜드, MADEIN, 이승윤",
   
    day3: "철와우, 잔나비, AESPA, PSY, YB",
   
    }
   
   }

// section 태그를 찾는다.

let sectionTag = document.querySelector("section");


// h2 태그를 만든다.

let h2Tag = document.createElement("h2");


// h2 태그에 텍스트를 추가한다.

h2Tag.innerText = hongikFestival.name;


// h2 태그를 body 태그에 추가한다.

sectionTag.appendChild(h2Tag);


// 화면을 본다.

let KiiiKiiiTag = document.createElement("p");

KiiiKiiiTag.innerText = hongikFestival.lineup.day1;

MadeinTag.innerText = hongikFestival.lineup.day2;

AespaTag.innerText = hongikFestival.lineup.day3;

sectionTag.appendChild(KiiiKiiiTag);
sectionTag.appendChild(MadeinTag);
sectionTag.appendChild(AespaTag);