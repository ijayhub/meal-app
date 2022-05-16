
import Meal from './Meal'
import { useState, useEffect } from 'react';

const Home = () => {
    
    const [foods, setFoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
    
    const fetchFood = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setFoods(data.meals);
                setIsLoading(false);
            });
    };
    useEffect(() => {
			setTimeout(() => {
				fetchFood();
			}, 100);

			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

    
    // 
   
    return (
			<div>
            {isLoading && <div className='loading'>Loading ...</div>}
				{!isLoading && <Meal foods={foods} title='Meal App' fetchFood={fetchFood} />}
				<div className='meal-btn'>
                
				</div>
			</div>
		);
}

export default Home
