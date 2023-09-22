import { Inject, Provider } from "@nestjs/common";
import { Novu } from "@novu/node";
import { MODULE_OPTIONS_TOKEN, INovuModuleOptions } from "./novu.options";

export const NOVU_CLIENT_TOKEN = Symbol('NOVU_CLIENT');
export const InjectNovu = () => Inject(NOVU_CLIENT_TOKEN);
export const novuProvider: Provider = {
    inject: [MODULE_OPTIONS_TOKEN],
    provide: NOVU_CLIENT_TOKEN,
    useFactory: (options: INovuModuleOptions) => new Novu(options.apiKey, options.config)
}