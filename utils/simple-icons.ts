const JSDELIVR_SOURCE = "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons";
const UNPKG_SOURCE = "https://unpkg.com/simple-icons@v6/icons";

function getSimpleIconLink(source: "jsdelivr" | "unpkg", slug: string) {
	return `${ source === "jsdelivr" ? JSDELIVR_SOURCE : UNPKG_SOURCE }/${ slug }.svg`;
}

export { JSDELIVR_SOURCE, UNPKG_SOURCE, getSimpleIconLink };
