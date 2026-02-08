export interface articleT {
	data: {
		id: number;
		/** used for /api/articles/:id */
		documentId: string;
		title: string;
		content: string;
		createdAt: Date;
		updatedAt: Date;
		publishedAt: Date;
	};
}
