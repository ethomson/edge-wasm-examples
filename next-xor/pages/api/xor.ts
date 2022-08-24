//@ts-ignore
import wasmModule from "../../wasm/pkg/wasm_bg.wasm?module";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler() {
    const { exports } = await WebAssembly.instantiate(wasmModule) as any;

    const result = exports.xor(0xdeadbeef, 0xcafebabe);
	return new Response(result);
}
