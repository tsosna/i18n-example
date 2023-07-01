import { PUBLIC_URL, PUBLIC_URL_DEV } from "$env/static/public"
import { dev } from "$app/environment"
import { i } from "@inlang/sdk-js"

export const title = 'nomadoM'
export const description = i('description-web-site')
export const url = dev ? PUBLIC_URL_DEV : PUBLIC_URL