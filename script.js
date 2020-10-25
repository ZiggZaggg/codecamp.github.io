
dataImages = [
    {photo: 'Web Images/PMOD.jpg', title: 'Mudshadow Propaganda', description: 'Princes 2018 EP hits the sweet spot with some funky, tribal ooze'},
    {photo: 'Web Images/Nobu folla.jpg', title: 'Nobu Folla', description: 'The Japanese master of chaotic, mind-boggling frequencies presents Folla'},
    {photo: 'Web Images/original.jpg', title: 'Decay', description: 'Efdemin releases an instant classic, soothing train tracks'}
];

let currentPhoto = 0;


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', dataImages[photoNumber].photo);
    $('#photo_title').html(dataImages[photoNumber].title);
    $('#photo_description').html(dataImages[photoNumber].description);
};

loadPhoto(currentPhoto);

$('#right_arrow').click(() => {
    if (currentPhoto >= 0 && currentPhoto < 2) {
        currentPhoto++;
        loadPhoto(currentPhoto);

    } else {
        loadPhoto(currentPhoto);
    }
});

$('#left_arrow').click(() => {
    if (currentPhoto > 0 && currentPhoto <= 2) {
        currentPhoto--;
        loadPhoto(currentPhoto);

    } else {
        loadPhoto(currentPhoto);

    }
});

let images = ['Web Images/PMOD.jpg', 'Web Images/Nobu folla.jpg', 'Web Images/original.jpg'];

images.forEach((item, index) => {
    $('.thumbnail_container').append(`<div class="thumbnail"><div class="title_container"><div class="title">${dataImages[index].title}</div></div><img  src="${item}" class="thumbnail_image" data-index="${index}"></div>`);
    $('.thumbnail_image').click(event => {

        let indexClicked = $(event.target).attr('data-index');
        loadPhoto(indexClicked);
    });

});





