namespace $ {

	export class $bog_lk_api2_client extends $mol_object {

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

}
