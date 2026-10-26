import assert from "node:assert/strict";
import test from "node:test";
import { buildAlbumSlides } from "../src/utils/album-viewer.ts";
import { scanAllAlbums } from "../src/utils/album-scanner.ts";
import { getDefaultFancyboxConfig } from "../src/utils/fancybox-config.ts";

test("Fancybox starts at the clicked slide through its top-level option", () => {
	assert.equal(getDefaultFancyboxConfig(1).startIndex, 1);
	assert.equal(getDefaultFancyboxConfig().startIndex, 0);
});

const photo = (src, metadata = {}) => ({
	id: src,
	src,
	alt: "sample",
	tags: [],
	...metadata,
});

test("slides preserve local and remote image order and resolve paths", () => {
	const slides = buildAlbumSlides(
		[photo("/local.jpg"), photo("https://cdn.example/photo.jpg")],
		(src) => (src.startsWith("https:") ? src : `/blog${src}`),
	);
	assert.deepEqual(
		slides.map((slide) => slide.src),
		["/blog/local.jpg", "https://cdn.example/photo.jpg"],
	);
});

test("missing metadata leaves a single image captionless", () => {
	assert.deepEqual(
		buildAlbumSlides([photo("/one.jpg")], (src) => src),
		[{ src: "/one.jpg" }],
	);
	assert.deepEqual(
		buildAlbumSlides([], (src) => src),
		[],
	);
});

test("all caption fields escape HTML and quotes before reaching Fancybox", () => {
	const [slide] = buildAlbumSlides(
		[
			photo("/one.jpg", {
				title: '<img onerror="alert(1)">',
				description: "A&B's",
				date: "2026-10-27",
				location: "<place>",
			}),
		],
		(src) => src,
	);
	assert.equal(
		slide.caption,
		"&lt;img onerror=&quot;alert(1)&quot;&gt;<br>A&amp;B&#39;s<br>2026-10-27<br>&lt;place&gt;",
	);
});

test("scanner does not fabricate a date when a photo has no date", () => {
	const album = scanAllAlbums().find((item) => item.id === "sample");
	assert.ok(album);
	assert.equal(album.photos[0].date, "2026-10-27");
	assert.equal(album.photos[2].date, undefined);
});
