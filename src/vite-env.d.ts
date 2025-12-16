interface ViteTypeOptions {
	// By adding this line, you can make the type of ImportMetaEnv strict
	// to disallow unknown keys.
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	readonly VITE_API_BASEURL: string;
	// here you must declare all variables that you have in .env file as it says in the restriction on row 4
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
