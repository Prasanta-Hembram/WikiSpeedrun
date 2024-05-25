// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */

import { initFormatters } from './formatters.js'
import type { Locales, Translations } from './i18n-types.js'
import { loadedFormatters, loadedLocales, locales } from './i18n-util.js'

const localeTranslationLoaders = {
	de: () => import('./de/index.js'),
	en: () => import('./en/index.js'),
	es: () => import('./es/index.js'),
	fr: () => import('./fr/index.js'),
	hi: () => import('./hi/index.js'),
	id: () => import('./id/index.js'),
	it: () => import('./it/index.js'),
	jp: () => import('./jp/index.js'),
	nl: () => import('./nl/index.js'),
	pl: () => import('./pl/index.js'),
	ru: () => import('./ru/index.js'),
	se: () => import('./se/index.js'),
	vi: () => import('./vi/index.js'),
	zh: () => import('./zh/index.js'),
}

const updateDictionary = (locale: Locales, dictionary: Partial<Translations>): Translations =>
	loadedLocales[locale] = { ...loadedLocales[locale], ...dictionary }

export const importLocaleAsync = async (locale: Locales): Promise<Translations> =>
	(await localeTranslationLoaders[locale]()).default as unknown as Translations

export const loadLocaleAsync = async (locale: Locales): Promise<void> => {
	updateDictionary(locale, await importLocaleAsync(locale))
	loadFormatters(locale)
}

export const loadAllLocalesAsync = (): Promise<void[]> => Promise.all(locales.map(loadLocaleAsync))

export const loadFormatters = (locale: Locales): void =>
	void (loadedFormatters[locale] = initFormatters(locale))
