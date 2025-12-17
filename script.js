document.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date();
    const horas = hoje.getHours();
    const saudacao = document.createElement("p");                                                                                                                         

    if (horas < 12) saudacao.textContent = "Bom dia! Pronto para aprender Matemática?";
    else if (horas < 18) saudacao.textContent = "Boa tarde! Vamos estudar Matemática?";
    else saudacao.textContent = "Boa noite! Continue seus estudos de Matemática!";
                                                                              
    document.body.insertBefore(saudacao, document.body.children[1]);                                                                                          
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
