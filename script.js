
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


