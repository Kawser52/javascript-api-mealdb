

const serarchFood = () =>{
    const getSearchValue= document.getElementById('search');
    const searchData = getSearchValue.value;
    console.log(searchData);
    getSearchValue.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayMeals(data.meals))
}
const displayMeals = meals =>{
    const showMeals = document.getElementById('meals-section')
    showMeals.innerHTML = '';
    meals.forEach(meal=>{
        const {idMeal, strMeal, strMealThumb} = meal;
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <div class="meal-info text-center" onclick = "loadMeal(${idMeal})">
        <img src="${strMealThumb}" class="img-fluid" alt="">
        <p class="mt-2"><a href="" class="text-decoration-none text-white text-center">${strMeal}</a><p>
         </div>
        `
        showMeals.appendChild(div);
    })
}

const loadMeal = mealID =>{
    console.log(mealID);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res=>res.json())
    .then(data=>loadMeailDetails(data.meals[0]))
}

const loadMeailDetails = mealDetails =>{
    console.log(mealDetails);
    const {idMeal, strMeal, strMealThumb, strInstructions} = mealDetails;
    const getMealDiv = document.getElementById('mealDetails')
    const div = document.createElement('div');
    div.classList.add('meals-det')
    div.innerHTML = `
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" id="mealDetails">
            <div class="modal-content">
                <div class="modal-header">
                <h2 class="modal-title" id="staticBackdropLabel">${strMeal}</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                     <img src="${strMealThumb}" alt="" class="img-fluid mb-3">
                     <h2 class="modal-title">${strMeal}</h2>
                     <p class="mt-3">${strInstructions.slice(0,500)}</p>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
            </div>
        </div>
    `
    getMealDiv.appendChild(div);
}

