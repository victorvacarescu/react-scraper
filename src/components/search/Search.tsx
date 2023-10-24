import React, { useState, useEffect } from "react";
import moment from 'moment';
import './Search.css';

const Search: React.FC = () => {
	const [items, setItems] = useState([]);
  
	useEffect(() => {
		fetch('http://192.168.100.11:3000/news')
			.then((response) => response.json())
			.then((responseData) =>  setItems(responseData.data))
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	const formatDate = (isoDate: string): string => {
		const date = moment(isoDate);
		const formatedDate = date.format('YYYY-MM-DD HH:mm:ss');
		return formatedDate;
	  };
  
	return (
	  <div>
		<h1>Search Page</h1>
		<div className="table-container">
			<table className="table">
			<thead>
				<tr>
				<th>Title</th>
				<th>Description</th>
				<th>Thumbnail</th>
				<th>Link</th>
				<th>Publish Date</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item: Item) => (
				<tr key={item.id}>
					<td>{item.title}</td>
					<td>{item.description}</td>
					<td>
					<img src={item.thumbnail} alt="Thumbnail" width="100" />
					</td>
					<td>
					<a href={item.link} target="_blank" rel="noopener noreferrer">
						{item.link}
					</a>
					</td>
					<td>{formatDate(item.publishDate)}</td>
				</tr>
				))}
			</tbody>
			</table>
		</div>
	  </div>
	);
  };
  
  export default Search;


type Item = {
	id: number;
	title: string;
	description: string;
	thumbnail: string;
	link: string;
	publishDate: string;
}
