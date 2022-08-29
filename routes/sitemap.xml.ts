import type { RequestHandler } from '@sveltejs/kit'

import { base } from '$app/paths'

import errorFromValue from '$lib/error/from/value'

const urls = ['/']

const sitemap = ({ origin }: URL) =>
	`<?xml version="1.0" encoding="UTF-8" ?>\
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" \
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" \
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 \
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\
${urls
	.map(
		url =>
			`<url><loc>${encodeURI(
				new URL(`${base}${url}`, origin).href
			)}</loc></url>`
	)
	.join('')}\
</urlset>`

let data: string | null = null

export const GET: RequestHandler = ({ url }) => {
	try {
		return {
			headers: {
				'cache-control': 'no-cache',
				'content-type': 'application/xml'
			},
			body: (data ??= sitemap(url))
		}
	} catch (value) {
		const { code, message } = errorFromValue(value)
		return { status: code, body: message }
	}
}
