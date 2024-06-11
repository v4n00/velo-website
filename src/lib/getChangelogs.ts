export const getChangelogs = async () => {
	const allPostFiles = import.meta.glob('/public/velo/changelogs/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const changelogs: string[] = [];
	let loading: boolean = true;

	iterablePostFiles.forEach(async (arr) => {
		const path = arr[0].slice('/public/'.length);

		fetch(path)
			.then((response) => response.text())
			.then((text) => {
				changelogs.push(text);
			})
			.finally(() => {
				loading = false;
			});
	});

	return { changelogs, loading };
};
