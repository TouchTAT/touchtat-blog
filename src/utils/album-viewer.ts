import type { AlbumPhoto } from "../types/album.ts";

function escapeCaption(value: string): string {
	return value.replace(/[&<>"']/g, (character) => {
		const entities: Record<string, string> = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;",
		};
		return entities[character];
	});
}

/** Fancybox renders captions as HTML; only our line breaks are markup. */
export function buildAlbumSlides(
	photos: readonly AlbumPhoto[],
	resolveUrl: (src: string) => string,
): { src: string; caption?: string }[] {
	return photos.map((photo) => {
		const caption = [photo.title, photo.description, photo.date, photo.location]
			.filter((value): value is string => Boolean(value?.trim()))
			.map(escapeCaption)
			.join("<br>");
		return { src: resolveUrl(photo.src), ...(caption ? { caption } : {}) };
	});
}
