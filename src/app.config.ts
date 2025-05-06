import { IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export class AppConfig {
  @IsString()
  readonly APP_DOMAIN: string;
}

export function validateAppConfig(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(AppConfig, config, {
    enableImplicitConversion: true,
  });
  return validatedConfig;
}
