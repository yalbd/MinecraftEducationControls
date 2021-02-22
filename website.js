let videoArray = ['a.mp4', 'w.mp4', 's.mp4', 'd.mp4', 'ctrl+w.mp4', 'h.mp4', 'q.mp4', 'lert_mouse_button.mp4', 'right_mouse_button.mp4', 'shift.mp4', 'space.mp4']
let nameArray = ['when you press a you will move to the left side:', 'when you press w you will go forward:', 'when you press s you will go backward:', 
'when you press d you will go to the right side:', 'when you press ctrl + w you will run:',
 'when you press h you see and hide the controls:', 'when you press q you will throw the object in you hand:', 'when you press left mouse button you will harvest the block infront of you:', 'when you press right mouse button you will place a block:'
, 'when you press shift you will crouch:', 'when you press space you will jump:']

let title = document.createElement('h1');
title.textContent = 'Minecraft education controls';
document.body.appendChild(title);


let i = 0;
for (let videoName of videoArray) {
    let animalName = document.createElement('h2');
    animalName.textContent = nameArray[i];
    document.body.appendChild(animalName);
    
    let video = document.createElement('video');
    video.src = 'assets/' + videoName;
    video.type = 'video/mp4';
    video.controls = 'true';
    video.autoplay = 'true';
    video.muted = 'true';
    video.loop = 'true';
    document.body.appendChild(video);
    i++;
}

// let img = document.createElement('img');
// img.src = 'images/blabla.jpg'
// document.body.append(img)






