import React,{ Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
// import Es6Promise from "es6-promise";
// Es6Promise.polyfill()

if(!window.Promise) { // 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)
	document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
}

// this is required when you want react hmr
// if you don't need hmr,you can remove this
import { AppContainer } from "react-hot-loader"
import ROOT from "./router/index"

// 高清设置
require('utils/antm-viewport/antm-viewport.min')

// public styles go here
import "assets/css/reset/normalize.scss";
import "assets/css/common.scss";
import "assets/css/reset/reset.scss";

if (module.hot) {
	module.hot.accept();
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
	    { Component }
    </AppContainer>,
    document.getElementById('app')
  );
};
render(ROOT);

// this is required when you want react hmr
// if you don't need hmr,you can remove this
if (module.hot) {
	module.hot.accept(ROOT, () => {
		render(ROOT)
	});
}