import init, { greet } from "../../wasm/pkg";
//@ts-ignore
import wasmModule from "../../wasm/pkg/wasm_bg.wasm?module";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler() {
	await init(wasmModule);
	const helloWorld = greet();
	return new Response(helloWorld);
}
