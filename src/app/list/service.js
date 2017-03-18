export const ListServiceName = 'list';
export const ListService = [
'$http',
class ListService{

		constructor($http){
			this.$http = $http;
			this.endpoint = 'api/instafeed';
		}

		getFeed(){
			return this.$http.get(this.endpoint);
		}
	}
];