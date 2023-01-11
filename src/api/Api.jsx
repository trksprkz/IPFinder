import React from 'react'

function Api() {
    var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () { console.log(this.responseText); });
oReq.open("GET", "https://api.ipbase.com/v2/info?ip=1.1.1.1");
oReq.setRequestHeader("apikey", "iH2FnWq11pMKgJcKyjhwzxDs604ikYSdTdoojY8e");
oReq.send();
  return (
    <div>Api</div>
  )
}

export default Api
