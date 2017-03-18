import {ListServiceName} from './service';

console.log(ListServiceName);

export const ListCtrl = ['$scope', ListServiceName, class ListCtrl{
	constructor($scope, ListService){
		this.title = 'List';

		ListService.getFeed()
			.then((posts) => {
				$scope.posts = posts.data.data;
			});
		}
	}
];