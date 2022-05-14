import React from 'react';
import Home from "./components/Home";
import MealDetail from './components/MealDetail'
import './index.css';
import { Routes,Route } from 'react-router-dom'

function App() {
  return (
		<div>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/foods/:id' element={<MealDetail />}></Route>
			</Routes>
		</div>
	);
}

export default App;
