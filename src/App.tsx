import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Search from './components/search/Search';
import News from './components/news/News';
import Videos from './components/videos/Videos';

const Navigation: React.FC = () => {
	return (
		<nav className="navigation">
			<ul className="nav-list">
			<li className="nav-item">
				<Link to="/news">News</Link>
			</li>
			<li className="nav-item">
				<Link to="/videos">Videos</Link>
			</li>
			<li className="nav-item">
				<Link to="/search">Search</Link>
			</li>
			</ul>
		</nav>
	);
};

const App: React.FC = () => {
	return (
		<Router>
			<div>
			<Navigation />
			<Routes>
				<Route path="/news" element={<News />} />
				<Route path="/videos" element={<Videos />} />
				<Route path="/search" element={<Search />} />
			</Routes>
			</div>
		</Router>
	);
};

export default App;
