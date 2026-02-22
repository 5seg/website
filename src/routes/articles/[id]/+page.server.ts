import { error } from '@sveltejs/kit';
import { API_ENDPOINT } from '$env/static/private';
import type { articleT } from '../../../types/blog.js';
import { Marked } from 'marked';
import markedShiki from 'marked-shiki';
import { bundledLanguages, createHighlighter } from 'shiki';
import type { BundledTheme } from 'shiki/bundle/web';

const isParsable = (lang: string) => Object.keys(bundledLanguages).includes(lang);

const extractLang = (str: string) => {
	const regex = /```(\w+)\n/g;
	let languages = [];
	let match;

	while ((match = regex.exec(str)) !== null) {
		if (isParsable(match[1])) languages.push(match[1]);
	}

	return languages;
};

export async function load({ fetch, url, params }) {
	const builtURL = new URL(`${API_ENDPOINT}/articles/${params.id}`);
	const res = await fetch(builtURL);
	const fromRoot = url.searchParams.get('ref') === 'top';
	if (res.ok) {
		const raw = (await res.json()) as articleT;
		const languages = extractLang(raw.data.content);
		const theme: BundledTheme = 'dark-plus';
		console.log('loading', languages);
		const highlighter = await createHighlighter({
			langs: languages,
			themes: [theme]
		});
		const html = await new Marked()
			.use(
				markedShiki({
					highlight(code, l) {
						const lang = isParsable(l) ? l : 'text';
						return highlighter.codeToHtml(code, {
							lang,
							theme: theme
						});
					}
				})
			)
			.parse(raw.data.content);
		return {
			title: raw.data.title,
			content: html,
			publishedAt: raw.data.publishedAt,
			fromRoot
		};
	} else {
		if (res.status === 404) {
			error(404, {
				message: 'Not found'
			});
		}
	}

	throw new Error(`Server returned status code ${res.status}`);
}
