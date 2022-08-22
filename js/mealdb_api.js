

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
        console.log(meal);
        const {strMeal, strMealThumb} = meal;
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.innerHTML = `
        <div class="meal-info text-center">
        <img src="${strMealThumb}" class="img-fluid" alt="">
        <p class="mt-2"><a href="" class="text-decoration-none text-white text-center">${strMeal}</a><p>
         </div>
        `
        showMeals.appendChild(div);
    })
}