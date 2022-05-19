//index.js
import FigmaPage from "./components/FigmaPage.vue"; // 引入封装好的组件

export { FigmaPage } //实现按需引入*

const components = [FigmaPage];
const install = function(App) {
	components.forEach((component) => {
		App.component(component.name,component);
	});
};
export default { install } // 批量的引入*
