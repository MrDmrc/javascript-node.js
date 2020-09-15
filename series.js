var series = ['beyto',21,false,0.8];

/*
for(var i=0;i<series.length;i++){
    console.log(series[i]);
}
*/
/*yukarıda ile alttaki aynı işlevi 
görmektedi sadece işlem kalabalığını 
önleyebiliyor bazer
*/
series.forEach(function(k){
    console.log(k);
})