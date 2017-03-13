module.exports={
	//写各种配置
	//1.入口
	entry:'./main.js',
	//2.出口
	output:{
	    filename:'bundle.js',//整合文件名
	    path:'bulid/'     //输出路径
	},
	module:{
		loaders:[
		   {test:/\.js$/,
		   loader:'babel'},
		   
		   {test:/\.scss$/,
		   loader:'style!css!sass'},
		   
		   {test:/\.vue$/,
		   loader:'vue-loader'},
		   {
			  test: /vux.src.*?js$/,
			  loader: 'babel'
			},
			{
				test:/\.(png|jpg|gif|svg)$/,
				loader:'url-loader'
			}
			
		]
	},
	vue:{
		loaders:{
			js:'babel'
		}
	}
	
}

