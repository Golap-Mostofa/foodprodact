const searchFood = ()=>{
    const searchfild = document.getElementById('search-field');
    const searchText = searchfild.value;
    // clear data
    searchfild.value = '';

    // doad data

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data=>displaySeacrhResuld(data.meals))
}
const displaySeacrhResuld=(meals)=>{
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if(meals.length == 0){
        const head = document.getElementById('head')
        head.innerText = "search result not's found"
    }
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
     <div class="card " onclick="loadMealDelail(${meal.idMeal})">
             <img src="${meal.strMealThumb}" class="card-img-top img-thumbnail" alt="...">
            <div class="card-body   ">
                <h5 class="card-title fw-bold">${meal.strMeal}</h5>
                <p class="card-text">
                    ${meal.strInstructions.slice(0,160)}
                </p>
            </div>
            <button class="btn btn-dark fw-bold fs-5 text-warning" type="submit">BY NOW</button>
      </div>
        `;
        searchResult.appendChild(div)
    });
}
const loadMealDelail=(mealId)=>{
    console.log(mealId);
    const urllink = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(urllink)
    .then(res=>res.json())
    .then(data=>displayMeailDeatels(data.meals[0]))
}

const displayMeailDeatels = meal =>{
    console.log(meal);
    const meilDeteilss = document.getElementById('meil-detels')
    meilDeteilss.innerText= ''
    const diV = document.createElement('div')
    diV.classList.add('card')
    diV.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text"> ${meal.strInstructions.slice(0,160)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    meilDeteilss.appendChild(diV)
}
