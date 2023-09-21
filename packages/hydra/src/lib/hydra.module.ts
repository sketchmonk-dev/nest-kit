import { Module } from "@nestjs/common";
import { ConfigurableModuleClass } from "./hydra.options";
import providers, { tokens } from "./hydra.providers";

@Module({
    providers: [
        ...providers
    ],
    exports: [
        ...tokens
    ]
})
export class HydraClientModule extends ConfigurableModuleClass {}