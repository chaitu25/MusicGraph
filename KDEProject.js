
function clicking(elem,elemButton,xy,z){
let dropdownBtn = document.getElementById(elemButton);
let menuContent = document.getElementById(elem);
let okok = document.getElementById(xy);
let ok = document.getElementById(z)
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      menuContent.style.width = "300px";
  menuContent.style.paddingTop = "10%";
  
   } 
   else {
      menuContent.style.display="";
      ok.style.display="";
   	okok.style.display="";
   }
})
}



function clickingQuery(elem,elemButton){
	let dropdownBtn = document.getElementById(elemButton);
let menuContent = document.getElementById(elem);
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      menuContent.style.width = "300px";
  menuContent.style.paddingTop = "10%";
   } else {
      menuContent.style.display="";
   }
})
}

function runningQuery(elem,elemButton){
 	let dropdownBtn = document.getElementById(elemButton);
let menuContent = document.getElementById(elem);
dropdownBtn.addEventListener('click',()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
      menuContent.style.width = "300px";
  menuContent.style.paddingTop = "10%";
   } else {
      menuContent.style.display="";
   }
})
}

  function run_query(query_run){
    
      let body = "query=" + encodeURIComponent(query_run);  
        var a = fetch("https://bd81-2a02-8084-d6ba-a180-613f-d064-2d7e-a81.ngrok.io/sparql?name=&infer=true&sameAs=true", 
    {"credentials":"omit",
    "headers":{"accept":"application/sparql-results+json,*/*;q=0.9",
    "accept-language":"en-US,en;q=0.9",
    "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
    "sec-fetch-mode":"cors","sec-fetch-site":"same-origin",
    "x-requested-with":"XMLHttpRequest"},
   
   "referrer":"https://bd81-2a02-8084-d6ba-a180-613f-d064-2d7e-a81.ngrok.io/sparql?name=&infer=true&sameAs=true",
    "referrerPolicy":"no-referrer-when-downgrade",
    "body": body,
    "method":"POST",
    "mode":"no-cors",
  }).then(res => res.json());
        return a
  }


  function my(table_, query_){

    a = run_query(query_);
    a.then(response => {
    var cols = [];
    console.log(response.head.vars[0])
    list = (response.results.bindings);        
    for (var i = 0; i < list.length; i++) { 
        for (var k in list[i]) { 
            if (cols.indexOf(k) === -1) { 
                cols.push(k); 
            } 
        } 
    }
    table_display(list, cols, table_)
  });
  }


  function table_display(list, cols, table_){
    // var table1 = document.createElement("table1");
    var table = document.getElementById(table_);
    var tr = table.insertRow(-1); 
    for (var i = 0; i < cols.length; i++) {               
      var theader = document.createElement("th"); 
      theader.innerHTML = cols[i]; 
      tr.appendChild(theader); 
    }
    for (var i = 0; i < list.length; i++) { 
          trow = table.insertRow(-1); 
      for (var j = 0; j < cols.length; j++) { 
          var cell = trow.insertCell(-1); 
          cell.innerHTML = list[i][cols[j]].value; 
      } 
    }
  }

