init()
    function init(){
        var url="https://api.covid19api.com/summary"
        var data=''

        $.get(url,function(data){
            console.log(data.Global);
            data=`
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.TotalRecovered}</td>`
            $("#data").html(data)
        })
    }
    function clearData(){
        $("#data").empty()
        
    }
function refreshData(){
    clearData()
    init()
}

var myForm=document.getElementById('myForm')

myForm.addEventListener('submit',function(e){

    e.preventDefault()
    var country = document.getElementById('country').value
    
    var url = "https://api.covid19api.com//total/dayone/country/"+country;
    fetch(url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        var length = res.length
        var index = length-1
        var confirmed=document.getElementById('confirmed')
        var recovered = document.getElementById('recovered')
        var deaths = document.getElementById('deaths')

        confirmed.innerHTML=''
        recovered.innerHTML=''
        deaths.innerHTML=''
        
        confirmed.append("Total Cases:-"+res[index].Confirmed)
        recovered.append("Total Recovered:-"+res[index].Recovered)
        deaths.append("Total Deaths:-"+res[index].Deaths)
    })
})
