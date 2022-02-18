
const resolvendoAnagrama = (x) => {
    let combinacoes = []

    for (i = 0; i < x.length; i++) {

        for(j = i +1; j < x.length + 1; j++) {
            combinacoes.push(x.slice(i, j))
        }
    }

    return combinacoes.length
}

console.log(resolvendoAnagrama("ovo"))


