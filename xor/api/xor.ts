// @ts-ignore
import wasm from "./xor_wasm.wasm?module";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler() {
    const { exports } = await WebAssembly.instantiate(wasm) as any;

    const result = exports.xor(0xdeadbeef, 0xcafebabe);
	return new Response(result);
}
