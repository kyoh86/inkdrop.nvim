import { Denops } from "https://deno.land/x/denops_std@v3.9.3/mod.ts";
import { execute } from "https://deno.land/x/denops_std@v1.0.0/helper/mod.ts";
import { ensureString } from "https://deno.land/x/unknownutil@v2.1.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
    denops.dispatcher = {
        async echo(text: unknown): Promise<unknown> {
            ensureString(text);
            return await Promise.resolve(text);
        },
    };
    await execute(
        denops,
        `command! -nargs=1 InkdropEcho echomsg denops#request('${denops.name}', 'echo', [<q-args>])`,
    )
};
