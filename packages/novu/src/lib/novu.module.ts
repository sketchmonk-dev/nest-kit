import { Module } from "@nestjs/common";
import { ConfigurableModuleClass } from "./novu.options";
import { NOVU_CLIENT_TOKEN, novuProvider } from "./novu.providers";

@Module({
    providers: [
        novuProvider
    ],
    exports: [
        NOVU_CLIENT_TOKEN
    ]
})
export class NovuModule extends ConfigurableModuleClass {}