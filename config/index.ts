import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.APP_ID}`
export const API_KEY = `${process.env.API_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_SESSION_SAME_SITE = `${process.env.APP_SESSION_SAME_SITE}`
export const APP_INFO: AppInfo = {
  title: 'ClickMinded',
  description: '',
  copyright: '',
  privacy_policy: 'https://www.clickminded.com/privacy/',
  default_language: 'en',
  disable_session_same_site: APP_SESSION_SAME_SITE === 'true',
}

export const isShowPrompt = false
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
