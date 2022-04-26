sendEmail = () => {
    let nome = $('#name').val();
    let email = $('#email').val();
    let assunto = $('#subject').val();
    let messagem = $('#message').val();
    if (nome &&
        email &&
        assunto &&
        messagem) {

        $headers = "From: " + email;
        $headers = "From: " + email + "\r\n";
        $headers += "Reply-To: " + email + "\r\n";
        $headers += "MIME-Version: 1.0\r\n";
        $headers += "Content-Type: text/html; charset=ISO-8859-1\r\n";

        assunto = "Voce recebeu um email do site HenriqueDoSax. - " + assunto;

        let logo = 'img/henrique_logo.png';
        let link = '#';
        let body = ""
        body = `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>`;
        body += `<table style='width: 100%;'>`;
        body += `<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>`;
        body += `<a href='${link}'><img src='${logo}' alt=''></a><br><br>`;
        body += `</td></tr></thead><tbody><tr>`;
        body += `<td style='border:none;'><strong>Nome:</strong> ${nome}</td>`;
        body += `<td style='border:none;'><strong>Email:</strong> ${email}</td>`;
        body += `</tr>`;
        body += `<tr><td style='border:none;'><strong>Assunto:</strong> ${assunto}</td></tr>`;
        body += `<tr><td></td></tr>`;
        body += `<tr><td colspan='2' style='border:none;'>${messagem}</td></tr>`;
        body += `</tbody></table>`;
        body += `</body></html>`;




        window.open('mailto:henriquedosax@hotmail.com?subject=' + assunto + '&body=' + messagem)
    } else {
        alert("Você precisa preencher todos os campos.")
    }

}


sendZap = () => {
    let a = document.createElement('a');
    a.href = "https://wa.me/5571988228958"
    a.target = "_blank"
    a.click()
}