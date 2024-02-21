/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_JSONLINK_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
