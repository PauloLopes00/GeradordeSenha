let text = document.querySelector("input#senha")
        const senhacomp = document.querySelector("input#senha-lenght")
        let senhacomprimida = 16
        function gerasenha(){
            const caracteres = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKMNPQRSTUVWXYZ123456789?!@&*()[]"
            let senha = ""
            for(let i = 0; i< senhacomprimida ; i++){
                const randomNumber = Math.floor(Math.random() * caracteres.length)
                senha += caracteres.substring(randomNumber, randomNumber + 1)
            }
            
            text.value =  senha
        }

        function clicar(){
            navigator.clipboard.writeText(text.value)
        }

        senhacomp.addEventListener('input',addtamanhosenha)
        function addtamanhosenha(){
            senhacomprimida = senhacomp.value
            gerasenha()
        }
        gerasenha()