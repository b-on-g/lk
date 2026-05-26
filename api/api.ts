namespace $ {

	export class $bog_lk_api_countries_client extends $mol_object {

		static endpoint() {
			return 'https://countries.trevorblades.com'
		}

		@ $mol_action
		static call< Variables, Result >(
			op : $mol_gql_operation< Variables, Result >,
		) {
			return this.$.$mol_gql.fetch( this.endpoint(), op )
		}

	}

	export class $bog_lk_api_petstore_client extends $mol_object {

		static endpoint() {
			return process.env?.NODE_ENV === 'prod'
				? 'https://petstore3.swagger.io/api/v3'
				: 'https://STAGE.swagger.io/api/v3'
		}

		static init() : RequestInit {
			return {
				headers: {
					'api_key': 'special-key',
					'accept-language': 'en-US',
				},
				credentials: 'omit',
				cache: 'no-cache',
			}
		}

		@ $mol_action
		static call< Params, Query, Body, Result >(
			op : $mol_openapi_operation< Params, Query, Body, Result >,
		) {
			return this.$.$mol_openapi.fetch( this.endpoint(), op, this.init() )
		}

	}

}
