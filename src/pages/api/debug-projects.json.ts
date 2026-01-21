import type { APIRoute } from 'astro';
import { sanityClient } from '../../utils/helpers';

/**
 * DEBUG endpoint - shows raw Sanity data
 * Visit: http://localhost:4321/api/debug-projects.json
 */
export const GET: APIRoute = async () => {
	try {
		console.log('[Debug] Starting Sanity query...');

		const sanityProjects = await sanityClient.fetch(
			`*[_type == "project"] {
				_id,
				_type,
				_rev,
				order,
				content,
				mainImage,
				gallery,
				videoUrl
			}`
		);

		console.log('[Debug] Query completed');
		console.log('[Debug] Found projects:', sanityProjects?.length || 0);
		console.log('[Debug] Raw data:', JSON.stringify(sanityProjects, null, 2));

		return new Response(
			JSON.stringify({
				timestamp: new Date().toISOString(),
				count: sanityProjects?.length || 0,
				data: sanityProjects || [],
			}, null, 2),
			{
				status: 200,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	} catch (error) {
		console.error('[Debug] Error:', error);
		return new Response(
			JSON.stringify({
				error: String(error),
				stack: error instanceof Error ? error.stack : undefined,
			}, null, 2),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		);
	}
};
