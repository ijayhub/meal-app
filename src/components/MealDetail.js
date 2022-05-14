import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const MealDetail = () => {
    const [foods, setFoods] = useState([]);
	
    const { id } = useParams()
    const fetchFood = () => {
			fetch('https://www.themealdb.com/api/json/v1/1/random.php/' + id)
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setFoods(data.meals);
					
				});
		};
		useEffect(() => {
			setTimeout(() => {
				fetchFood();
			}, 100);

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

  return (
		<div>
			<Link to='/'>
				<button className='btn-detail'>To go back</button>
			</Link>
			{foods.map((food) => (
				<div key={food.idMeal}>
					<div className='detail-ingredients'>
						<h1>Ingredients</h1>
						<p>{food.strIngredient1}</p>
						<p>{food.strIngredient2}</p>
						<p>{food.strIngredient3}</p>
						<p>{food.strIngredient4}</p>
						<p>{food.strIngredient5}</p>
						<p>{food.strIngredient6}</p>
						<p>{food.strIngredient7}</p>
						<p>{food.strIngredient8}</p>
						<p>{food.strIngredient9}</p>
						<p>{food.strIngredient10}</p>
						<p>{food.strIngredient11}</p>
						<p>{food.strIngredient12}</p>
						<p>{food.strIngredient13}</p>
						<p>{food.strIngredient14}</p>
						<p>{food.strIngredient15}</p>
						<p>{food.strIngredient16}</p>
						<p>{food.strIngredient17}</p>
						<p>{food.strIngredient18}</p>
						<p>{food.strIngredient19}</p>
						<p>{food.strIngredient20}</p>
					</div>
					<h1 className='detail-title'>How to cook</h1>
					<div className='underline'></div>
					<p className='detail-text'>{food.strInstructions}</p>
					<div className='detail-vid'>
                        <a href={food.strYoutube}>Watch Video</a>
                        
                    </div>
                    
				</div>
			))}
		</div>
	);
}

export default MealDetail
