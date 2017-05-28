import {GETPRODUCTLIST} from 'actionPath/action.jsx';

import {PAGESIZE} from 'cmPath/config.jsx';

const initialstate={

	list:[],
	currentPage:1,
	maxPage:4
}

export default function productList(state= initialstate, action) {

	switch (action.type) {

		case GETPRODUCTLIST:

			console.log(action)
			var data = action.data;
			var list = [];

			for (var i = 0;i < data.length;i++){

				list.push({

					name:data[i].name || "",
					img:data[i].img || ""
				})
			}

			console.log(list)

			return {

				...state,
                list:list
			}



		default:
			return state
	}
}