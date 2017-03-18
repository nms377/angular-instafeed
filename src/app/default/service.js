export const DefaultServiceName = 'default';
export const DefaultService = [
	'$http',
	class DefaultService{

		constructor($http){
			this.$http = $http;
			this.endpoint = 'api/instafeed';
		}

		getFeed(){
			return this.$http.get(this.endpoint);
		}
	}
];