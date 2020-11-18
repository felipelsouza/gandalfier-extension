const gandalfImgs = [
    'https://uploads.jovemnerd.com.br/wp-content/uploads/Gandalf-Fuck-Yeah.jpg',
    'https://i.pinimg.com/originals/58/b2/ac/58b2ac4d438ce0427712e69c4bfbdbc2.jpg',
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/05/gandalf-the-white-1024x580.jpg',
    'https://files.mormonsud.net/wp-content/uploads/2018/09/gandalf.jpg',
    'https://cms.qz.com/wp-content/uploads/2018/08/gandalf-lord-of-the-rings-e1534255368438.jpg?quality=75&strip=all&w=900&h=900&crop=1',
    'https://vandal-us.s3.amazonaws.com/spree/products/80195/original/open-uri20180820-270-110ja3g.jpg',
    'https://lh3.googleusercontent.com/proxy/jJsa.muted = true;aE_12BRQht4_5FUY9cey6oDzywPWwuo_adB2_g-LFnQXyGpA92Mmh8f9j2hzi9i4F5mBahMBitZm5el1Lr7CevBfrIbd6vq0yvZs27S-eRHVnD-4f4vQv7mE',
    'https://quintacapa.com.br/wp-content/uploads/2019/09/gandalf-teoria-bombado.png',
    'https://ogimg.infoglobo.com.br/in/22205230-858-a4f/FT1500A/690/Ian-McKellen.jpg',
    'https://www.fatosdesconhecidos.com.br/wp-content/uploads/2018/05/s-l1600-500x500.jpg',
    'https://media3.giphy.com/media/ONostKY8aj8bK/giphy.gif',
    'https://media1.giphy.com/media/8abAbOrQ9rvLG/giphy.gif',
    'https://thumbs.gfycat.com/BothThirstyCats-small.gif',
    'https://jpimg.com.br/uploads/2017/04/1975558995-ian-mckellen-brinca-sobre-brasileira-que-rezava-para-elfo-de-o-senhor-dos-aneis.jpg',
    'https://i2.wp.com/giphygifs.s3.amazonaws.com/media/FPjbHO0jJxGsE/giphy.gif',
    'https://scontent.fudi1-1.fna.fbcdn.net/v/t31.0-8/10538684_734140796622035_808341996348885832_o.jpg?_nc_cat=104&ccb=2&_nc_sid=09cbfe&_nc_ohc=aBSHSMtF3XoAX_VmPkn&_nc_ht=scontent.fudi1-1.fna&oh=5efecf03e55a492cc32597df15276636&oe=5FD8DE2B',
    'https://ogimg.infoglobo.com.br/in/22205230-858-a4f/FT1500A/690/Ian-McKellen.jpg',
    'https://img.cinemablend.com/filter:scale/quill/6/6/d/b/d/b/66dbdbd94dea70fcf8b7e103b6eb25749f65cfdf.jpg?mw=600',
    'https://giantbomb1.cbsistatic.com/uploads/square_medium/12/120457/2117605-23.jpeg',
    'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/15/1523546512-ian-mckellen-almost-didnt-star-in-the-lord-of-the-rings-or-x-men-movies-because-of-mission-impossible.jpg',
    'https://t2.tudocdn.net/307995?w=646&h=284',
    'https://rollingstone.uol.com.br/media/_versions/gandolf_reproducao_widelg_1_widemd.jpg',
    'https://uploads.jovemnerd.com.br/wp-content/uploads/2017/12/ian-mckellan-gandalf-serie-amazon-senhor-dos-aneis-1210x540.jpg',
    'https://i.pinimg.com/originals/ff/09/fe/ff09fe3c0e57336b4163d0607475cbd3.jpg',
    'https://rollingstone.uol.com.br/media/_versions/legacy/2012/img-1008226-o-hobbit_widelg.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1M9hPO0-tRTmr2RbKiaAK52_q535v_u8Wpw&usqp=CAU',
    'https://i.ytimg.com/vi/N6MRFv5sj8E/maxresdefault.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcL1E-Ct8AXjwk1etKsDxsnOOjC3c9d-T7dQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6m0KBgJIPBwKIUmvorRrFvC9XPHgcwv2WiA&usqp=CAU',
    'https://middle-earth.xenite.org/files/2014/01/gandalf-the-white.jpg',
    'https://i2.wp.com/ocapacitor.com/wp-content/uploads/2017/12/Gandalf-the-Grey.jpg?resize=520%2C245&ssl=1'
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
        if (!changedImgs.includes(image.src)) {
            let width = image.width;
            let height = image.height;

            image.src = gandalfImgs[Math.floor(Math.random() * gandalfImgs.length) + 1];
            image.width = width;
            image.height = height;

            changedImgs.push(image.src);
        }
    })
}

function playMusic() {
    const url = chrome.runtime.getURL('music.mp3');
    let audio = new Audio(url);
    audio.loop = true;
    audio.autoplay = true;
}

playMusic();