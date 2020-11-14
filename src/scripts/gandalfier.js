const gandalfImgs = [
    'https://uploads.jovemnerd.com.br/wp-content/uploads/Gandalf-Fuck-Yeah.jpg',
    'https://i.pinimg.com/originals/58/b2/ac/58b2ac4d438ce0427712e69c4bfbdbc2.jpg',
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/05/gandalf-the-white-1024x580.jpg',
    'https://files.mormonsud.net/wp-content/uploads/2018/09/gandalf.jpg',
    'https://cms.qz.com/wp-content/uploads/2018/08/gandalf-lord-of-the-rings-e1534255368438.jpg?quality=75&strip=all&w=900&h=900&crop=1',
    'https://vandal-us.s3.amazonaws.com/spree/products/80195/original/open-uri20180820-270-110ja3g.jpg',
    'https://lh3.googleusercontent.com/proxy/jJsaE_12BRQht4_5FUY9cey6oDzywPWwuo_adB2_g-LFnQXyGpA92Mmh8f9j2hzi9i4F5mBahMBitZm5el1Lr7CevBfrIbd6vq0yvZs27S-eRHVnD-4f4vQv7mE',
    'https://quintacapa.com.br/wp-content/uploads/2019/09/gandalf-teoria-bombado.png',
    'https://ogimg.infoglobo.com.br/in/22205230-858-a4f/FT1500A/690/Ian-McKellen.jpg',
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/05/s-l1600-500x500.jpg',
    'https://media3.giphy.com/media/ONostKY8aj8bK/giphy.gif',
    'https://media1.giphy.com/media/8abAbOrQ9rvLG/giphy.gif',
    'https://thumbs.gfycat.com/BothThirstyCats-small.gif',
    'https://jpimg.com.br/uploads/2017/04/1975558995-ian-mckellen-brinca-sobre-brasileira-que-rezava-para-elfo-de-o-senhor-dos-aneis.jpg',
    'https://i2.wp.com/giphygifs.s3.amazonaws.com/media/FPjbHO0jJxGsE/giphy.gif'
];

const changedImgs = [];

const runLoop = setInterval(() => {
    const html = document.querySelector("html");

    if (html) {
        replaceImages();
    }
}, 1000);

function replaceImages() {
    const images = document.querySelectorAll("img");

    images.forEach((image) => {
        if(!changedImgs.includes(image.src)) {
            let width = image.width;
            let height = image.height;
    
            image.src = gandalfImgs[Math.floor(Math.random() * gandalfImgs.length)];
            image.width = width;
            image.height = height;
    
            changedImgs.push(image.src);
        }
    })
}
