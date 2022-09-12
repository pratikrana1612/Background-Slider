const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const imgDiv = document.querySelector('.img');
const body = document.body;
let index=1;
nextBtn.addEventListener('click',()=>
{
    index++;
    if(index===6)
    {
        index=1;
        const activeDiv = document.querySelector('.active');
        activeDiv.classList.remove('active');
        document.querySelector('.container .img1').classList.add('active')
        backgroundChnage(body);
    }
    else{
        const activeDiv = document.querySelector('.active');
        activeDiv.nextElementSibling.classList.add('active');
        activeDiv.classList.remove('active');
        backgroundChnage(body);
    }
})
preBtn.addEventListener('click',() =>
{
    index--;
    if(index===0)
    {
        index=5;
        const activeDiv = document.querySelector('.active');
        activeDiv.classList.remove('active');
        document.querySelector('.container .img5').classList.add('active')
        backgroundChnage(body);
    }
    else{
        const activeDiv = document.querySelector('.active');
        activeDiv.previousElementSibling.classList.add('active');
        activeDiv.classList.remove('active');
        backgroundChnage(body);
    }
})

function backgroundChnage (tag) 
{
    tag.style.backgroundImage = `url(Images/img${index}.jpg)`
}