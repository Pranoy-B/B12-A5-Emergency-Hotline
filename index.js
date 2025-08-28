// heart toggle

const hearts = document.querySelectorAll(".heart")
for (let i = 0; i<hearts.length; i++){
    hearts[i].addEventListener("click", function(){
      const totalHeart = parseInt(document.getElementById("total-heart").innerText)
    let currentHeart = totalHeart
    const heartClick = 1
    let newTotalHeart = heartClick + currentHeart
    document.getElementById("total-heart").innerText = newTotalHeart  
    })
}

// calling section
const callButtons = document.querySelectorAll(".call-btn")
for(let i=0; i<callButtons.length; i++){
    callButtons[i].addEventListener("click",function(){
        const coinBalance = parseInt(document.getElementById("coins").innerText)
        if(coinBalance >= 20){
            const callRate = 20
            let newBalance = coinBalance - callRate
            document.getElementById("coins").innerText = newBalance
            const card = this.closest(".card");
            const serviceName = card.querySelector(".service-name").innerText;
            const phoneNumber = card.querySelector(".service-number").innerText;
            alert("Calling " + serviceName + " " +phoneNumber);
        }
        else {
            alert("Not Enough Balance")
        }
    })
}

// const callButtons = document.querySelectorAll(".call-btn")
// for(let i=0; i<callButtons.length; i++){
//     callButtons[i].addEventListener("click",function(){
//         const coinBalance = parseInt(document.getElementById("coins").innerText)
//         if(coinBalance >= 20){
//             const callRate = 20
//             let newBalance = coinBalance - callRate
//             document.getElementById("coins").innerText = newBalance
//             alert("Calling" + this.innerText)
//         }
//         else {
//             alert("Not Enough Balance")
//         }
//     })
// }