import {DefaultServiceName} from './service';

console.log(DefaultServiceName);

export const DefaultCtrl = ['$scope', DefaultServiceName, class DefaultCtrl {
	constructor($scope, DefaultService){
		this.title = 'Hello World';

	DefaultService.getFeed()
		.then((posts) => {
			$scope.posts = posts.data.data;
		});
	}
}];


// 	DefaultService.getFeed()
// 		.then( ({
// 			status, data: {
// 				images: {
// 					standard_resolution: {
// 						children
// 					}
// 				}
// 			}
// 		}) => {
// 			if( status !== 200 ) { 
// 				$cope.error = `Error fetching\nStatus: $(status)`;
// 			}
// 				$scope.posts = children
// 				.filter(child => child.data.preview)
// 				.map(child => child.data);
// 		})
// 		.catch(err => console.error(err));
// 	}