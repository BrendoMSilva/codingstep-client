window.onload = ev => {
    btnSend.addEventListener("click", (e) => {
        let email = email.value()

        fetch("http://codingstep.freevar.com/", {
            method: "post",
            body: {email: email}
        })
    })
}