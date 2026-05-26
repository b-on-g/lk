namespace $ {

	export const $bog_lk_gql = $mol_gql_fetch( 'https://countries.trevorblades.com' )

	export const $bog_lk_petstore = $mol_openapi_fetch(
		'https://petstore3.swagger.io/api/v3',
		{
			headers: {
				'api_key': 'special-key',
				'accept-language': 'en-US',
			},
			credentials: 'omit',
			cache: 'no-cache',
		},
	)

}
