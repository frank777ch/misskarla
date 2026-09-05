/** Número de Miss Karla en formato internacional sin "+" (Perú = 51). */
export const WHATSAPP_NUMERO = '51995623008';
/** Cómo se muestra el número en pantalla. */
export const WHATSAPP_VISIBLE = '995 623 008';
/** Para el enlace tel: */
export const WHATSAPP_TEL = '+51995623008';

/** Arma el enlace a WhatsApp con el mensaje prellenado. */
export function enlaceWhatsApp(mensaje: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensaje)}`;
}
