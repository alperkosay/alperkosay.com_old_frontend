import emailjs from "@emailjs/browser";

export default (req, res) => {
    const body = JSON.parse(req.body);
    console.log(body);


    emailjs.send('service_yw7p7jn', 'template_taelj62', {user_name: body.name, user_email: body.email, message: body.subject}, '8rnHVwq8jxU7nr7Se')
        .then((result) => {
            console.log(result);
        }, (error) => {
            console.log(error);
        });

    res.status(200).send("ok");
}