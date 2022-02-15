function escada(n) {
    let Novo = new Array(n).fill(" ")
    
    while(Novo.indexOf(" ") !== - 1)  {
        Novo.shift()
        Novo.push("*")
        console.log(Novo.join(""))
        n++
    }
}

escada(6)