import React from 'react'
import { Link } from 'react-router-dom'

const Meal = ({ foods, title,fetchFood }) => {
    
    
    return (
			<div className='container-meal'>
				<h1 className='header'>{title}</h1>
				<div className='underline'></div>
				{foods.map((food) => (
					<div key={food.idMeal}>
						<h3 className='meal-title'>{food.strMeal}</h3>
						<Link to={`/foods/${food.idMeal}`}>
							<img
								src={food.strMealThumb}
								alt='food'
								className='meal-img responsive'
                        />
                        
						</Link>
					</div>
				))}
				<button onClick={fetchFood} className='btn'>Click to see more meals</button>
			</div>
		);
}

export default Meal
