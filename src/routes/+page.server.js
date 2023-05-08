import config from '../../config.json' ;
const options = {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${config.data.token}`
	},
};

export async function load() {
	const { data } = await fetch('https://api.spacetraders.io/v2/my/ships', options).then(res => res.json())
	return { data };
}