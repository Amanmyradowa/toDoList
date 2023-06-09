let data = localStorage.getItem('data');
data = JSON.parse(data);
if(!data){

    // step 1 create default data
    let beginLanguages = [
      {
        value: 'Vanilla JavaScript',
        delete:false,
      },
      {
        value: "Node.js",
        delete:false,
      },
      {
        value: "React.js",
        delete:false
      },
      {
        value: "React.js",
        delete:false
      }
    ];
    //step 2 write to localstorage 
    localStorage.setItem('data',JSON.stringify(beginLanguages));

    //step 3 show data frontend
    let todo_list_bottom = document.querySelector(".todo_list_bottom");
    
    for(let i=0; i<beginLanguages.length; i++) {
      todo_list_bottom.innerHTML += 
      `<div class="notes">
        <svg onclick="deleteList(${i})" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645Z" fill="red"/>
        </svg>
        <input onchange="line(${i})" type="checkbox">
        <div class="note"> ${beginLanguages[i].value}</div>
      </div>`
    }
  }else{
    //step 4 show data frontend else yagdayynda
    let todo_list_bottom = document.querySelector(".todo_list_bottom");
    
    for(let i=0; i<data.length; i++) {
      todo_list_bottom.innerHTML += 
      `<div class="notes" >
          <svg onclick="deleteList(${i})" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645Z" fill="red"/>
          </svg>
          <input onclick="line(${i})" ${data[i].delete ? "checked" : ""} type="checkbox">
          <div class="note ${data[i].delete ? 'line' : ''}">${data[i].value}</div>
      </div>`
    }
  
}

function line (i){
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  data[i].delete = !data[i].delete;
  
  localStorage.setItem("data", JSON.stringify(data));

  load();
}


function load(){
  let data = localStorage.getItem("data");
  data = JSON.parse(data);
  let todo_list_bottom = document.querySelector(".todo_list_bottom");

  todo_list_bottom.innerHTML = '';
  
  for(let i=0; i<data.length; i++) {
    todo_list_bottom.innerHTML += 
    `<div class="notes" >
        <svg onclick="deleteList(${i})" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.895431 16 2 16H14C15.1046 16 16 15.1046 16 14V2C16 0.895431 15.1046 0 14 0H2ZM5.35355 4.64645L8 7.29289L10.6464 4.64645C10.8417 4.45118 11.1583 4.45118 11.3536 4.64645C11.5488 4.84171 11.5488 5.15829 11.3536 5.35355L8.70711 8L11.3536 10.6464C11.5488 10.8417 11.5488 11.1583 11.3536 11.3536C11.1583 11.5488 10.8417 11.5488 10.6464 11.3536L8 8.70711L5.35355 11.3536C5.15829 11.5488 4.84171 11.5488 4.64645 11.3536C4.45118 11.1583 4.45118 10.8417 4.64645 10.6464L7.29289 8L4.64645 5.35355C4.45118 5.15829 4.45118 4.84171 4.64645 4.64645C4.84171 4.45118 5.15829 4.45118 5.35355 4.64645Z" fill="red"/>
        </svg>
        <input onclick="line(${i})" ${data[i].delete ? "checked" : ""} type="checkbox">
        <div class="note ${data[i].delete ? 'line' : ''}">${data[i].value}</div>
    </div>`
  }
}



let input = document.querySelector("input");

let add = () => {
  let value = input.value;

  const addLanguages = {
    value,
    delete:false,
  }
  let data = localStorage.getItem("data");
  data = JSON.parse(data);

  data.unshift(addLanguages);

  localStorage.setItem("data", JSON.stringify(data));
  load();
  input.value = ''
}

const deleted = () => {
  let beginLanguages = [
    {
      value: 'Vanilla JavaScript',
      delete:false,
    },
    {
      value: "Node.js",
      delete:false,
    },
    {
      value: "React.js",
      delete:false
    },
    {
      value: "React.js",
      delete:false
    }
  ];
  beginLanguages = JSON.stringify(beginLanguages)
  localStorage.setItem('data',beginLanguages);

  load();
}


function deleteList(index) {
  console.log(index);
  //step 1 take localstorage data and convert to readable
  let data = localStorage.getItem('data');
  data = JSON.parse(data); 

  //step 2 delete one element from that array that we given index
  data.splice(index,1);

  //step 3 write new data to localstorage
  data = JSON.stringify(data);
  localStorage.setItem('data',data);

  //step4 change frontend data
  load();
}