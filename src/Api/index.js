import axios from 'axios'

const apiConfig = axios.create({
	baseURL: 'https://api-football-v1.p.rapidapi.com/v3',
	headers: {
		'x-rapidapi-key': process.env.RAPID_API_KEY,
		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
	}
})

export default apiConfig
