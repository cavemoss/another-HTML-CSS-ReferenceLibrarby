let url = document.URL; url = String(url);

let index = url.indexOf('page') + 4;
let pageNumber = Number(url.slice(index,index+1)); 

let links = document.getElementsByTagName('a');
for(let link of links){
    if(link.innerHTML == pageNumber){
        link.className = 'active';
    }else{
        continue
    }
}

function min(num, min){
    return num < min ? min : num
}
function max(num, max){
    return num > max ? max : num
}

const back = document.getElementById('<'); back.href = `page${min(pageNumber-1, 1)}.html`
const forward = document.getElementById('>'); forward.href = `page${max(pageNumber+1, 5)}.html`
