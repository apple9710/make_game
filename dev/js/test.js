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
    }
}





// user1
var statKind = ["name","hp","atk","dfe","dodge" ,"cri" ,"speed" ,"at5"]
var user1 = document.getElementById('user1_info')
var us1Stat = user1.querySelectorAll('span')

function submit(){
    var inputInfo = document.getElementById('sub1').value
    
    for(const key in charInfo){
        
        if(inputInfo == key){
            for(let k in charInfo[key]){
                var arr = []
                
                arr = [charInfo[key][k]]
                var arr2 = []
                
                console.log(arr)
                for(let idx = 0; idx<statKind.length; idx++){
                    arr2 += arr
                    console.log(arr2)
                }
                
                for(let i = 0;i<user1.length; i++){

                    user1[i].innerHTML = arr[i]

                }
                
                
                // for(let i = 0 ; i<us1Stat.length; i++){
                //     console.log
                //     us1Stat[i].innerHTML = k[i]
                
                // }
            }

            
        }
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