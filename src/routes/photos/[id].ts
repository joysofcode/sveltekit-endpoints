import type { RequestHandler } from './__types/[id]'

export const GET: RequestHandler = async ({ params }) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${params.id}`
	)
	const photo = await response.json()

	return {
		body: { photo },
		headers: {
			'Cache-Control': 's-maxage=60'
		}
	}
}
