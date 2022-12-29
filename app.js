const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var correct = 0
    var incorrect = 0

    var q1 = form.querySelector("input[name = 'q1']:checked")
    var q2 = form.querySelector("input[name = 'q2']:checked")
    var q3 = form.querySelector("input[name = 'q3']:checked")

    if(!q1 || !q2 || !q3){
        alert("Please fill all the question!")
    }else{
        if(q1.value === 'Gsap'){
            correct++
        }else{
            incorrect++
        }
        if(q2.value === 'C++'){
            correct++
        }else{
            incorrect++
        }
        if(q3.value === 'Python'){
            correct++
        }else{
            incorrect++
        }

        alert("You got correct "+correct+" and incorrect "+incorrect)
    }
})