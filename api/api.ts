namespace $ {

	export const $bog_lk_api_countries_endpoint = 'https://countries.trevorblades.com'

	export const $bog_lk_api_petstore_endpoint = process.env?.NODE_ENV === 'prod'
		? 'https://petstore3.swagger.io/api/v3'
		: 'https://STAGE.swagger.io/api/v3'

	export const $bog_lk_api_petstore_init: RequestInit = {
		headers: {
			'api_key': 'special-key',
			'accept-language': 'en-US',
		},
		credentials: 'omit',
		cache: 'no-cache',
	}

}
