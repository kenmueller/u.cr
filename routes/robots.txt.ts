import type { RequestHandler } from '@sveltejs/kit'

import { base } from '$app/paths'

import errorFromValue from '$lib/error/from/value'

const robots = ({ origin }: URL) =>
	`User-agent: *
Sitemap: ${new URL(`${base}/sitemap.xml`, origin).href}`

let data: string | null = null

export const GET: RequestHandler = ({ url }) => {
	try {
		return {
			headers: {
				'cache-control': 'no-cache',
				'content-type': 'text/plain'
			},
			body: (data ??= robots(url))
		}
	} catch (value) {
		const { code, message } = errorFromValue(value)
		return { status: code, body: message }
	}
}
