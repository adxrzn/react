import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export function obtenerFechaHoy(): string {
  return format(new Date(), "EEEE, d 'de' MMMM", { locale: es });
}

interface UserConfig {
    theme: string;
    language: string;
}

export function logConfig(config: Partial<UserConfig>) {
    console.log("Configuración parcial recibida:", config);
}