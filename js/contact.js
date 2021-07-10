function sendMail(params){
    let tempParams = {
        from_name: document.getElementById('fromName').value,
        message: document.getElementById('msg').value
    }

    emailjs.send('service_zjcxsmm','template_onqkk4f', tempParams)
    .then(function(res){
        console.log('Success', res.status);
    })
}