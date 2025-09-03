
const loadLession = ()=>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLession(json.data))
    
}
const loadLevelWord = (id)=>{
    const url =`https://openapi.programming-hero.com/api/level/${id}`
    fetch(url)
    .then(res => res.json())
    .then(json => displayLoadLevelWord(json.data) )
}

 
    //   "id": 4,
    //   "level": 5,
    //   "word": "Diligent",
    //   "meaning": "পরিশ্রমী",
    //   "pronunciation": "ডিলিজেন্ট"

const displayLoadLevelWord = (words) =>{
const wordContainer= document.getElementById("word-container")
wordContainer.innerHTML=""

    words.forEach(word => {
        const card = document.createElement("div")
        card.innerHTML=`
        <div class="bg-white shadow-md py-10 px-5 rounded-xl text-center  space-y-5">
            <h1 class="font-bold text-2xl ">${word.word}</h1>
            <p class="font-medium text-xl">Meaning /Pronunciation</p>
            <div class="font-medium text-xl font-bangla">${word.meaning}/ ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
            </div>
        </div>
        `
        wordContainer.append(card)
    });
}



const displayLession = (lessions) => {
const levelContainer= document.getElementById("level-container")
levelContainer.innerHTML=""
   for(let lession of lessions){
    const btnDiv = document.createElement("div")
    btnDiv.innerHTML = `
                    <button onclick= "loadLevelWord(${lession.level_no})" class="btn btn-outline btn-primary ">
                    <i class="fa-solid fa-book-open"></i>Lesson - ${lession.level_no}
                    </button>
    
    
    `
    levelContainer.append(btnDiv)
   }
   
}

loadLession()