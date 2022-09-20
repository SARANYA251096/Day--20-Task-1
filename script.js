async function foo() {

  try {
      let res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
      let res1 = await res.json();
      let div = document.createElement("div");
      div.classList.add("conatiner-fluid", "d-flex:", "justify-content:center", "m-5", "p-5")
      div.innerHTML = `<div class="card text-white bg-secondary mb-3" style="max-width: 20rem; margin-left:400px;" >
      <div class="card-header" style="text-align:center;">Zoo animals</div>
      <div class="card-body">
      <p class="card-title">${res1.name}</p>
      <img src="${res1.image_link}" class="card-img-top">
      </div>
    </div>
      </div>
    </div>`
      document.body.append(div);

  } 
  catch (error) {
      console.log(error);
  }

}
foo();