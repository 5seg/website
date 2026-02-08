import { error } from '@sveltejs/kit';
import { API_ENDPOINT } from '$env/static/private';

interface articleListT {
	data: {
		id: number;
		documentId: string;
		title: string;
		publishedAt: Date;
	}[];
	meta: {
		pagination: {
			page: number;
			pageSize: number;
			/** how many pages */
			pageCount: number;
			/** total articles */
			total: number;
		};
	};
}

export async function load({ fetch, url }): Promise<articleListT> {
	const page = url.searchParams.get('page') ?? '1';
	const builtURL = new URL(`${API_ENDPOINT}/articles`);
	builtURL.searchParams.append('fields[0]', 'documentId');
	builtURL.searchParams.append('fields[1]', 'title');
	builtURL.searchParams.append('fields[2]', 'publishedAt');
	builtURL.searchParams.append('sort', 'publishedAt:desc');
	builtURL.searchParams.append('pagination[page]', page);
	builtURL.searchParams.append('pagination[pageSize]', '2');
	const res = await fetch(builtURL);
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
