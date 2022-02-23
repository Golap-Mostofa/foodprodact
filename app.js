const searchFood = ()=>{
    const searchfild = document.getElementById('search-field');
    const searchText = searchfild.value;
    // console.log(searchText);
    searchfild.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    // console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data=>displaySeacrhResuld(data.meals))
}
const displaySeacrhResuld=(meals)=>{
    const searchResult = document.getElementById('search-result')
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
     <div class="card ">
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
