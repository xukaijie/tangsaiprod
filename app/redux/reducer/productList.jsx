import {GETPRODUCTLIST} from 'actionPath/action.jsx';

import {PAGESIZE} from 'cmPath/config.jsx';

const initialstate={

	list:[],
	root:'Flashlights',
	parent:"All",
	currentPage:1,
	maxPage:1
}

export default function productList(state= initialstate, action) {

	switch (action.type) {

		case GETPRODUCTLIST:

			var data = action.data.data;
			var list = [];

			for (var i = 0;i < data.length;i++){

				list.push({

					name:data[i].name || "",
					img:data[i].img || ""
				})
			}

			return {

				...state,
                list:list,
				currentPage:action.data.currentpage,
				maxPage:action.data.pagenum,
                parent:action.parent,
				root:action.root
			}



		default:
			return state
	}
}