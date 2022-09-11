const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const imgDiv = document.querySelector('.img');
const body = document.body;
let index=1;
nextBtn.addEventListener('click',()=>
{
    index++;
    if(index==6)
    {
        index=1;
    }
    backgroundChnage(imgDiv);
    backgroundChnage(body);
})

preBtn.addEventListener('click',() =>
{
    index--;
    if(index == 0)
    {
        index=5;
    }
    backgroundChnage(imgDiv);
    backgroundChnage(body);
})

function backgroundChnage (tag) 
{
    tag.style.background = `url(Images/img${index}.jpg)`
    tag.style['background-size']='100% auto';
    tag.style['background-position']='center';
}