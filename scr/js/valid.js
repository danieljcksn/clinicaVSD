function validateForm() {
    const name = document.forms["consulta"]["nome"].value
    const tname = name.toLowerCase().trim().split(" ")
    // // const email = null
    const phone = document.forms["consulta"]["phone"].value
    const mensage = document.forms["consulta"]["mensage"].value

    if (tname.length <= 1) {
        alert("Favor Preencher Campo Nome com Nome e Sobrenome")
        return false
    }else if (phone.length > 11 || phone.length < 11) {
        alert("Seu Número Deve Conter 11 dígitos incluindo o DDD")
        return false
    }else if (mensage.length > 120) {
        alert("Sua Mensagem Deve ter no Máximo 120 Caracteres")
        return false
    }
    else {
        M.toast({html: 'Mensagem enviada com sucesso!'})
        return true
    }
}
