/** Datos públicos de DownMuVi (SysJoL Development). */

export const DOWNMUVI_APP_NAME = "DownMuVi";

/** Logotipo oficial de la app (Vite sirve /public en la raíz). */
export const DOWNMUVI_LOGO_PNG = "/logo-downmuvi/logo_downloader.png";

export const DOWNMUVI_SLIDES = [
  {
    src: "/downmuvi-app/captura-de-pantalla-principal-sin-login.png",
    alt: "DownMuVi: pantalla principal",
    caption: "Pantalla principal",
  },
  {
    src: "/downmuvi-app/descargador-bacth-autenticado-premiun.png",
    alt: "DownMuVi: descargador por lotes",
    caption: "Descargador por lotes",
  },
  {
    src: "/downmuvi-app/vista-mi-biblioteca-sin-login.png",
    alt: "DownMuVi: biblioteca",
    caption: "Biblioteca",
  },
  {
    src: "/downmuvi-app/mi-biblioteca-autenticado-premiun.png",
    alt: "DownMuVi: mi biblioteca con cuenta",
    caption: "Mi biblioteca (Pro)",
  },
  {
    src: "/downmuvi-app/seccion-estudio-premiun.png",
    alt: "DownMuVi: media lab y estudio",
    caption: "Media Lab / Estudio",
  },
  {
    src: "/downmuvi-app/seccion-chat-global.png",
    alt: "DownMuVi: chat global",
    caption: "Chat global",
  },
  {
    src: "/downmuvi-app/seccion-historial.png",
    alt: "DownMuVi: historial de descargas",
    caption: "Historial",
  },
  {
    src: "/downmuvi-app/seccion-ajustes.png",
    alt: "DownMuVi: ajustes",
    caption: "Ajustes",
  },
] as const;
export const DOWNMUVI_VERSION = "2.3.2";
export const DOWNMUVI_PLATFORM = "Windows";
export const DOWNMUVI_RELEASE_DATE = "2026-08-04";
export const DOWNMUVI_SIZE_MB = "394.9 MB";
export const DOWNMUVI_SIZE_BYTES = 414116930;
export const DOWNMUVI_ASSET_NAME = "DownMuVi_Installer_latest.exe";

/**
 * Instalador publicado — enlace «siempre última versión» (releases/latest/download).
 * No usar un enlace con versión fija: este redirige automáticamente al .exe más reciente.
 */
export const DOWNMUVI_DOWNLOAD_URL =
  "https://github.com/SysJoL/DownMuVi-Releases/releases/latest/download/DownMuVi_Installer_latest.exe";

/** Página pública de releases. */
export const DOWNMUVI_RELEASES_PAGE_URL =
  "https://github.com/SysJoL/DownMuVi-Releases/releases";

/** Release actual fija. */
export const DOWNMUVI_LATEST_RELEASE_URL =
  "https://github.com/SysJoL/DownMuVi-Releases/releases/tag/v2.3.2";

/** Repositorio de código fuente (desarrollo). */
export const DOWNMUVI_REPO_URL = "https://github.com/SysJoL-Development/DownMuVi";

/** Repositorio de releases (instaladores). */
export const DOWNMUVI_RELEASES_REPO_URL =
  "https://github.com/SysJoL/DownMuVi-Releases";

/** API de última release (datos técnicos para scripts/actualización automática). */
export const DOWNMUVI_API_LATEST_URL =
  "https://api.github.com/repos/SysJoL/DownMuVi-Releases/releases/latest";

/**
 * JSON estático en `public/` → en producción: `https://sysjol.onrender.com/downmuvi-latest.json`
 * (raíz del sitio, fuera del router SPA `/downmuvi/`).
 *
 * En cada release mantener en sync:
 * - `DOWNMUVI_VERSION` y `DOWNMUVI_DOWNLOAD_URL` (este archivo)
 * - `public/downmuvi-latest.json` (`version` + `downloadUrl` iguales al instalador publicado)
 */
export const DOWNMUVI_LATEST_JSON_PATH = "/downmuvi-latest.json";
