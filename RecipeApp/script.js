const recipeList = document.querySelector('.recipeList');
const recipeData = document.querySelector('.recipeData');
const loader = document.querySelector('.loader');
fetchApi();
async function fetchApi(){
    showLoader();
    const response = await fetch('https://dummyjson.com/recipes');
    const result = await response.json();
    if(result && result.recipes && result.recipes.length>0){
        hideLoader();
        displayRecipes(result.recipes);
    }
}
function displayRecipes(data){
    data.forEach((item)=>{
        const {id,name,cuisine,image,rating,ingredients,instructions} = item;
        const recipeItemWrapper = document.createElement('div');
        recipeItemWrapper.classList.add('recipeWrapper');

        const recipeId = document.createElement('p');
        recipeId.textContent = id;

        const recipeName = document.createElement('p');
        recipeName.textContent = name;

        const recipeCuisine = document.createElement('p');
        recipeCuisine.textContent = cuisine;

        const recipeimage = document.createElement('img');
        recipeimage.src = image;
        recipeimage.classList.add('recipeimage');


        const recipeRating = document.createElement('p');
        recipeRating.textContent = rating;

        const recipeIngre = document.createElement('div');
        recipeIngre.textContent = ingredients.map(value=>value).join(',');

        const recipeInstructions = document.createElement('div');
        recipeInstructions.textContent = instructions.map(value=>value).join(',');

        // recipe detail button 
        const recipeDetailBtn = document.createElement('button');
        recipeDetailBtn.textContent = 'RecipeDetail';
        recipeDetailBtn.classList.add('recipeDetail');
        recipeDetailBtn.addEventListener('click',()=>{
            BringData(id)
        });
        
        async function BringData(id){
            const response = await fetch(`https://dummyjson.com/recipes/${id}`);
            const result = await response.json();
            if(result){
               ShowRecipeData(result);
                window.scrollTo({
                    top : document.body.scrollHeight,
                    behavior : "smooth"
                }
                )
            }
        }
        function ShowRecipeData(data){
            recipeData.innerHTML = `
            <h3>Recipe name is(${name})</h3>
            <p>Type is (${cuisine})</p>
            `
        }

        recipeItemWrapper.appendChild(recipeimage);
        recipeItemWrapper.appendChild(recipeId);
        recipeItemWrapper.appendChild(recipeName);
        recipeItemWrapper.appendChild(recipeCuisine);
        recipeItemWrapper.appendChild(recipeRating);
        recipeItemWrapper.appendChild(recipeIngre);
        recipeItemWrapper.appendChild(recipeInstructions);
        recipeItemWrapper.appendChild(recipeDetailBtn);

        recipeList.appendChild(recipeItemWrapper);


    })
}
// showloader
function showLoader(){
    loader.classList.add('show');
    recipeList.classList.add('hide');
}
function hideLoader(){
    loader.classList.remove('show');
    recipeList.classList.remove('hide');
}