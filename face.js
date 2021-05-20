//class=pupils,eye,eyes,face,centre-div;

let pupils=document.getElementsByClassName('pupil');
let pupilsArr=Array.from(pupils);
let pupilStartPoint=-100;
let pupilRange=200;

//mouse X Position

let mouse_X_Start_Point=0;
let mouse_X_End_Point=window.innerWidth;
let current_X_Position=0;
let frac_X_Value=0;
let mouse_X_Range=mouse_X_End_Point-mouse_X_Start_Point;
//mouse Y Poistion

let mouse_Y_End_Point=window.innerHeight;
let current_Y_Position=0;
let frac_Y_Value=0;

//function call mouseMove

const mouseMove=(event)=>{
    current_X_Position=event.clientX-mouse_X_Start_Point;
    frac_X_Value=current_X_Position/mouse_X_Range;

    current_Y_Position=event.clientY;
    frac_Y_Value=current_Y_Position/mouse_Y_End_Point;

    let pupil_X_Current_Position = pupilStartPoint+(frac_X_Value*pupilRange);
    let pupil_Y_Current_Position = pupilStartPoint+(frac_Y_Value*pupilRange);
    pupilsArr.forEach(currPupil=>{
        currPupil.style.transform=`translate(${pupil_X_Current_Position}px,${pupil_Y_Current_Position}px)`;
    })
}
const windowResize=(event)=>{
    mouse_X_End_Point=window.innerWidth;
    mouse_X_Range=mouse_X_End_Point-mouse_X_Start_Point;
    mouse_Y_End_Point=window.innerHeight;
}
window.addEventListener('mousemove',mouseMove);
window.addEventListener('resize',windowResize);