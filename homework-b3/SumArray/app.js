//bai 1
const arr = [1,3,5,6,9,14];
let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
}
let baiMot = document.getElementById('baiMot');
baiMot.innerHTML = 'Tổng : '+ sumArr;

//bai 2
let arr2 = ['haha', 'hehe'];
let baiHai = document.getElementById('baiHai');
let bai2 = document.getElementById('baiHai').children;
for (let i = 0; i < arr2.length; i++) {
    bai2[i].innerHTML = arr2[i];
}

// bai 2.2

let baiHaihai = document.getElementById('baiHai');
let newItem1 = document.createElement('p');
let textNode1 = document.createTextNode('HaHa');

newItem1.appendChild(textNode1);
baiHaihai.insertBefore(newItem1, baiHaihai.childNodes[1]);

let newItem2 = document.createElement('p');
let textNode2 = document.createTextNode('Hehe');

newItem2.appendChild(textNode2);
baiHaihai.appendChild(newItem2, baiHaihai.lastChild);

// bai 3

let baiBa = document.getElementById('baiBa');
let btnBaiBa = document.getElementById('btn-baiBa');
let textBaiBa = document.querySelector('.text-baiBa');

function clickToHide () {
    if (textBaiBa.style.display == 'none') {
        btnBaiBa.innerHTML = 'Ẩn bớt';
        textBaiBa.style.display = 'block';
        baiBa.style.border = '2px solid black'
        baiBa.style.backgroundColor = 'pink';
    }
    else {
        btnBaiBa.innerHTML = 'Xem thêm';
        textBaiBa.style.display = 'none';
        baiBa.style.backgroundColor = 'black';
    }
}

//bai 3.3
let baiBon = document.getElementById('baiBon');
let thongBaoBaotri = document.getElementById('thongBaoBaotri');
function clickMaintenance () {
    if (baiMot.style.display == 'block') {
        thongBaoBaotri.style.display = 'block';
        baiMot.style.display = 'none';
        baiHai.style.display = 'none';
        baiBa.style.display = 'none';
        
    }
    else {
        thongBaoBaotri.style.display = 'none';
        baiMot.style.display = 'block';
        baiHai.style.display = 'block';
        baiBa.style.display = 'block';
    }
}