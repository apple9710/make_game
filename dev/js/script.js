

var btn = document.querySelector('button')

btn.addEventListener('click', function(){

    var expt = document.getElementById('export')
    var atkCount = expt.querySelector('.atk')
    var dfcCount = expt.querySelector('.dfc')
    var lastDmg = expt.querySelector('.last_dmg')
    var atkEx = atkCount.querySelectorAll('span')
    var dfcEx = dfcCount.querySelectorAll('span')
    var lastCost = lastDmg.querySelectorAll('span')


// 공격력 계산

// 유저 스탯
    var damegeClac ={
        "stk" : 1,
        "wpDmg": [20,50],
        "crk" : 1,
        "crkDmg": 1.1,
    }

    
    var wpA = Math.floor(Math.random() * (damegeClac.wpDmg[1] - damegeClac.wpDmg[0] + 1) ) + damegeClac.wpDmg[0]

    var atk =  wpA * (1 + damegeClac.stk * 0.01)
    var ctk = damegeClac.crk * 100;
    var ctkTF = 'false'
    var num = Math.floor(Math.random() * ctk)

    if(
        num < 50){
        ctkTF = 'true'
        atk = atk * damegeClac.crkDmg;
    }

    var atkStat = [
        damegeClac.wpDmg[0]+" ~ "+damegeClac.wpDmg[1],
        damegeClac.stk,
        wpA,
        ctkTF,

        Math.floor(atk),
        
    ]
    // 공격속성, 속성 방어력, 방관, 치명타 저항, 치명타확률, 치명타 추가피해량, 상태이상여부, 막을 확률,
    for(let i = 0; i < atkStat.length; i++){
        atkEx[i].innerHTML = atkStat[i]
    }
    



    // 공격력 끝

    var dfcStat = {
        "dfe" : 10,
        "shieldStat": 1,
    }

    var dfc = dfcStat.dfe * (1 + (dfcStat.shieldStat * 0.01))


    var dfeStat = [
        dfcStat.dfe,
        dfcStat.shieldStat,
        Math.floor(dfc)
    ]

    for(let i = 0; i <dfeStat.length; i++){
        dfcEx[i].innerHTML = dfeStat[i]
    }
    



    // 결과값

    var lastHit = Math.floor(atk) - Math.floor(dfc) 
    if(lastHit < 0){ lastHit = 0}
    var lastCount = [
        lastHit,
    ]

    for(let i = 0; i < lastCost.length ; i++){
        lastCost[i].innerHTML = lastCount[i]
    }
    
    
    


})

    



    
