function validateForm() {
    const name = document.forms["myForm"]["fname"].value;
    // const email = null
    // const telefone = null
    // const mensage = null
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }else {
        M.toast({html: 'Mensagem enviada com sucesso!'})
    }
    // alert('msg')
}
