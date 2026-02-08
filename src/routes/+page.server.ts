import { error } from '@sveltejs/kit';
import { API_ENDPOINT } from '$env/static/private';

interface articleListT {
	data: {
		id: number;
		documentId: string;
		title: string;
		publishedAt: Date;
	}[];
}

export async function load({ fetch }): Promise<articleListT> {
	const url = new URL(`${API_ENDPOINT}/articles`);
	url.searchParams.append('fields[0]', 'documentId');
	url.searchParams.append('fields[1]', 'title');
	url.searchParams.append('fields[2]', 'publishedAt');
	url.searchParams.append('sort', 'publishedAt:desc');
	url.searchParams.append('pagination[limit]', '5');
	const res = await fetch(url);
	if (res.ok) {
		const data = (await res.json()) as articleListT;
		return data;
	} else {
		if (res.status === 404) {
			error(404, {
				message: 'Not found'
			});
		}
	}

	throw new Error(`Server returned status code ${res.status}`);
}
