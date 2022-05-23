

var charInfo = {
    "sw": {
        "name":"시우",
        "hp":100,
        "atk": 10,
        "dfe": 10,
        "dodge": 0.07,
        "cri":0.1,
        "speed":100,
        "atS":1,
    },
    "jy":{
        "name":"준영",
        "hp":"75",
        "atk": 13,
        "dfe": 5,
        "dodge": 0.1,
        "cri":0.15,
        "speed":110,
        "atS":1.1,
    }
}



// user1
var user1 = document.getElementById('user1_info')
var us1Stat = user1.querySelectorAll('span')

function submit(){
    var inputInfo = document.getElementById('sub1').value
    console.log(inputInfo)
}

function submit2(){
    var inputInfo = document.getElementById('sub2').value
    
    console.log(charInfo.inputInfo)
}

console.log(us1Stat.length)