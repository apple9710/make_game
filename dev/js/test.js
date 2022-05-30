var userId = ["sw" , "jy"]

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
    },
    "sh":{
        "name":"성훈",
        "hp":100,
        "atk": 10,
        "dfe": 10,
        "dodge": 0.1,
        "cri":0.15,
        "speed":100,
        "atS":1,
    }
}

// user1
var user1 = document.getElementById('user1_info')
var us1Stat = user1.querySelectorAll('span')

function submit(){
    var inputInfo = document.getElementById('sub1').value
    var arr = []

    for(const key in charInfo){
        var arr2 = []
        if(inputInfo == key){
            for(let k in charInfo[key]){
                arr.push(charInfo[key][k])
                arr2 += arr
            }
        }
    }
    console.log(arr)
    for(let i = 0; i<arr.length; i++){
        us1Stat[i].innerHTML = arr[i]
    }
}

function submit2(){
    var inputInfo2 = document.getElementById('sub2').value
    
    for(let key in charInfo){

        if(inputInfo2 == key){
            console.log(charInfo[key].name)
            
        }
    }
}