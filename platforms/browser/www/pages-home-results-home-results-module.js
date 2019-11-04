(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-results-home-results-module"],{

/***/ "./src/app/components/popmenu/popmenu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" class=\"animated fadeInDown\">\n  <ion-fab-button (click)=\"togglePopupMenu()\">\n    <ion-ripple-effect></ion-ripple-effect>\n    <ion-icon name=\"apps\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n<div class=\"popup-menu\">\n  <div class=\"popup-menu-overlay\" [ngClass]=\"{'in': openMenu}\"></div>\n  <div class=\"popup-menu-panel\" [ngClass]=\"{'in': openMenu}\">\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"cog\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Config</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"beer\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Activities</span>\n    </div>\n    <div class=\"popup-menu-item\">\n      <ion-icon name=\"person\" slot=\"middle\" size=\"large\"></ion-icon>\n      <span>Settings</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".popup-menu-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.15s ease-in-out;\n  background-image: linear-gradient(rgba(79, 36, 172, 0.85) 0%, rgba(79, 36, 172, 0.65) 100%);\n}\n.popup-menu-overlay.in {\n  opacity: 1;\n  visibility: visible;\n}\n.popup-menu-toggle {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  bottom: 10px;\n  left: 50%;\n  margin-left: -20px;\n  background-color: var(--ion-color-primary);\n  border-radius: 50%;\n  z-index: 101;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-toggle.out {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  transition: all 0.15s ease-in-out;\n}\n.popup-menu-toggle.out:before {\n  transition: all 0.15s ease-in-out;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n}\n.popup-menu-panel {\n  position: fixed;\n  width: 300px;\n  border-radius: 5%;\n  bottom: 80px;\n  left: 50%;\n  margin-left: -150px;\n  padding: 20px;\n  background-color: var(--ion-color-primary);\n  z-index: 102;\n  transition: all 0.25s ease-in-out;\n  transition-delay: 0.15s;\n  -webkit-transform-origin: 50% 100%;\n  transform-origin: 50% 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  display: -moz-flex;\n  display: flex;\n  flex-wrap: wrap;\n}\n.popup-menu-panel .popup-menu-item {\n  margin: auto;\n  -moz-flex: 1 0 30%;\n  flex: 1 0 30%;\n  display: -moz-flex;\n  display: flex;\n  -moz-flex-direction: column;\n  flex-direction: column;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  opacity: 0;\n  transition: all 0.25s ease-in-out;\n}\n.popup-menu-panel .popup-menu-item ion-icon {\n  margin: 0 auto;\n  text-align: center;\n  color: #fff;\n}\n.popup-menu-panel .popup-menu-item span {\n  padding: 0;\n  margin: 0 0 auto 0;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 500;\n  line-height: 18px;\n}\n.popup-menu-panel .popup-menu-item:active i {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n.popup-menu-panel .popup-menu-item:active span {\n  color: #dd4135;\n  transition: all 0.15s;\n}\n.popup-menu-panel.in {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  transition-delay: 0s;\n}\n.popup-menu-panel.in .popup-menu-item {\n  -webkit-transform: scale(1);\n  transform: scale(1);\n  opacity: 1;\n  transition-delay: 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YS9EZXNrdG9wL1Byb2plY3RzL1BhYXNoby9zcmMvYXBwL2NvbXBvbmVudHMvcG9wbWVudS9wb3BtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BvcG1lbnUvcG9wbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUVBLGlDQUFBO0VBRUEsMkZBQUE7QUNBSjtBRENJO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURHQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUVBLGlDQUFBO0FDQUo7QURDSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFFQSxpQ0FBQTtBQ0NSO0FEQVE7RUFFSSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNFWjtBREdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFFQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsZUFBQTtBQ0RKO0FERUk7RUFDSSxZQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsa0JBQUE7RUFFQSxhQUFBO0VBSUEsMkJBQUE7RUFFQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBRUEsaUNBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NaO0FEQ1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ1o7QURFWTtFQUNJLGNBQUE7RUFFQSxxQkFBQTtBQ0FoQjtBREVZO0VBQ0ksY0FBQTtFQUVBLHFCQUFBO0FDQWhCO0FESUk7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7QUNGUjtBREdRO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFFQSx1QkFBQTtBQ0RaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3BtZW51L3BvcG1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQb3B1cCBNZW51IC8vXG4ucG9wdXAtbWVudS1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg3OSwzNiwxNzIsIC44NSkgMCUsIHJnYmEoNzksMzYsMTcyLCAuNjUpIDEwMCUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDc5LDM2LDE3MiwgLjg1KSAwJSwgcmdiYSg3OSwzNiwxNzIsIC42NSkgMTAwJSk7XG4gICAgJi5pbiB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxufVxuXG4ucG9wdXAtbWVudS10b2dnbGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAmLm91dCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjE1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBvcHVwLW1lbnUtcGFuZWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMzAwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgICBib3R0b206IDgwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgei1pbmRleDogMTAyO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLnBvcHVwLW1lbnUtaXRlbSB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMSAwIDMwJTtcbiAgICAgICAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xuICAgICAgICAtbW96LWZsZXg6IDEgMCAzMCU7XG4gICAgICAgIC1tcy1mbGV4OiAxIDAgMzAlO1xuICAgICAgICBmbGV4OiAxIDAgMzAlO1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogLW1vei1mbGV4O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCBhdXRvIDA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgJjphY3RpdmUge1xuICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyMjEsNjUsNTMpO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4xNXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5pbiB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgICAgIC5wb3B1cC1tZW51LWl0ZW0ge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IC4xNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuMTVzO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLnBvcHVwLW1lbnUtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxMDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmdiYSg3OSwgMzYsIDE3MiwgMC44NSkgMCUsIHJnYmEoNzksIDM2LCAxNzIsIDAuNjUpIDEwMCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3OSwgMzYsIDE3MiwgMC44NSkgMCUsIHJnYmEoNzksIDM2LCAxNzIsIDAuNjUpIDEwMCUpO1xufVxuLnBvcHVwLW1lbnUtb3ZlcmxheS5pbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3B1cC1tZW51LXRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDEwMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbn1cbi5wb3B1cC1tZW51LXRvZ2dsZS5vdXQ6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuXG4ucG9wdXAtbWVudS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgYm90dG9tOiA4MHB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMTAyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tb3otYm94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IC1tb3otZmxleDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSB7XG4gIG1hcmdpbjogYXV0bztcbiAgLXdlYmtpdC1ib3gtZmxleDogMSAwIDMwJTtcbiAgLXdlYmtpdC1mbGV4OiAxIDAgMzAlO1xuICAtbW96LWJveC1mbGV4OiAxIDAgMzAlO1xuICAtbW96LWZsZXg6IDEgMCAzMCU7XG4gIC1tcy1mbGV4OiAxIDAgMzAlO1xuICBmbGV4OiAxIDAgMzAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogLW1vei1mbGV4O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1vei1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2UtaW4tb3V0O1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBpb24taWNvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbSBzcGFuIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgYXV0byAwO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgaSB7XG4gIGNvbG9yOiAjZGQ0MTM1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuLnBvcHVwLW1lbnUtcGFuZWwgLnBvcHVwLW1lbnUtaXRlbTphY3RpdmUgc3BhbiB7XG4gIGNvbG9yOiAjZGQ0MTM1O1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjE1cztcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzO1xufVxuLnBvcHVwLW1lbnUtcGFuZWwuaW4ge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xufVxuLnBvcHVwLW1lbnUtcGFuZWwuaW4gLnBvcHVwLW1lbnUtaXRlbSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/popmenu/popmenu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/popmenu/popmenu.component.ts ***!
  \*********************************************************/
/*! exports provided: PopmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopmenuComponent", function() { return PopmenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopmenuComponent = /** @class */ (function () {
    function PopmenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.openMenu = false;
    }
    PopmenuComponent.prototype.ngOnInit = function () {
    };
    PopmenuComponent.prototype.togglePopupMenu = function () {
        return this.openMenu = !this.openMenu;
    };
    PopmenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'popmenu',
            template: __webpack_require__(/*! ./popmenu.component.html */ "./src/app/components/popmenu/popmenu.component.html"),
            styles: [__webpack_require__(/*! ./popmenu.component.scss */ "./src/app/components/popmenu/popmenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], PopmenuComponent);
    return PopmenuComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.module.ts ***!
  \***********************************************************/
/*! exports provided: HomeResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPageModule", function() { return HomeResultsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/popmenu/popmenu.component */ "./src/app/components/popmenu/popmenu.component.ts");
/* harmony import */ var _home_results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-results.page */ "./src/app/pages/home-results/home-results.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"]
    }
];
var HomeResultsPageModule = /** @class */ (function () {
    function HomeResultsPageModule() {
    }
    HomeResultsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_results_page__WEBPACK_IMPORTED_MODULE_6__["HomeResultsPage"], _components_popmenu_popmenu_component__WEBPACK_IMPORTED_MODULE_5__["PopmenuComponent"]]
        })
    ], HomeResultsPageModule);
    return HomeResultsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button color=\"secondary\"></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            <ion-text color=\"light\">\n                <ion-text color=\"light\" class=\"fw700\">Paasho</ion-text>\n            </ion-text>\n        </ion-title>\n    </ion-toolbar>\n    <ion-toolbar color=\"dark\">\n        <ion-searchbar [(ngModel)]=\"searchKey\"></ion-searchbar>\n        <ion-buttons slot=\"end\">\n            <ion-button size=\"small\" shape=\"round\" color=\"medium\" (click)=\"searchFilter()\">\n                <ion-icon name=\"options\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<!-- <div class=\"scrollmenu\" color=\"dark\">\n    <ion-button *ngFor=\"let item of  list\">\n        <div class=\"card card-1\">\n            <img src=\"../../../assets/img/Lerning100.jpg\">\n            <p style=\"font-size: 9px;\">{{item}}</p>\n        </div>\n\n    </ion-button>\n</div>\n -->\n<!--     <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"alertLocation()\">\n        <ion-icon name=\"locate\"></ion-icon>\n        <ion-item *ngFor=\"let item of  list\">\n            <ion-thumbnail slot=\"start\">\n                <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\n            </ion-thumbnail>\n            <ion-label>{{item}}</ion-label>\n        </ion-item>\n\n    </ion-button>\n -->\n\n\n\n\n\n<ion-content padding>\n    <app-scrollview>\n\n    </app-scrollview>\n\n    <div class=\"scrollmenu\">\n        <ion-item *ngFor=\"let item of  list\">\n            <div class=\"card card-1\">\n                <img src=\"../../../assets/img/Lerning100.jpg\">\n                <p style=\"font-size: 9px;\">{{item}}</p>\n            </div>\n\n        </ion-item>\n\n    </div>\n\n    <ion-card no-margin class=\"no-radius\">\n        <ion-item lines=\"none\" color=\"medium\">\n            <ion-label>\n                <h2 no-margin class=\"fw500 no-margin\">\n                    <ion-text color=\"dark\">Alert / Toast test</ion-text>\n                </h2>\n\n                <p class=\"text-11x no-margin\">\n                    <ion-text color=\"primary\">{{yourLocation}}</ion-text>\n                </p>\n            </ion-label>\n            <ion-button shape=\"round\" fill=\"outline\" size=\"small\" color=\"primary\" (click)=\"alertLocation()\">\n                Location\n                <ion-icon name=\"locate\"></ion-icon>\n            </ion-button>\n        </ion-item>\n    </ion-card>\n\n    <ion-card class=\"bg-white\">\n        <ion-img [src]=\"themeCover\"></ion-img>\n        <ion-button expand=\"full\" color=\"dark\" (click)=\"presentImage(themeCover)\" no-margin>\n            Modal 1: Modal Image\n        </ion-button>\n    </ion-card>\n\n    <ion-button margin shape=\"round\" expand=\"full\" color=\"secondary\" (click)=\"searchFilter()\">\n        Modal 2: Search Filter\n    </ion-button>\n\n    <ion-tabs>\n        <ion-tab-bar slot=\"bottom\">\n            <ion-tab-button tab=\"schedule\">\n                <ion-icon name=\"calendar\"></ion-icon>\n                <ion-label>Schedule</ion-label>\n                <ion-badge>6</ion-badge>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"speakers\">\n                <ion-icon name=\"contacts\"></ion-icon>\n                <ion-label>Speakers</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"map\">\n                <ion-icon name=\"map\"></ion-icon>\n                <ion-label>Map</ion-label>\n            </ion-tab-button>\n\n            <ion-tab-button tab=\"about\">\n                <ion-icon name=\"information-circle\"></ion-icon>\n                <ion-label>About</ion-label>\n            </ion-tab-button>\n        </ion-tab-bar>\n    </ion-tabs>\n\n</ion-content>\n<ion-footer>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-item {\n  border-radius: 0;\n  border-bottom: 1px dotted var(--ion-color-medium);\n}\n:host ion-card.no-radius {\n  border-radius: 0;\n}\n.scrolling-wrapper-flexbox {\n  display: flex;\n  flex-wrap: initial;\n  overflow-x: auto;\n}\n.scrolling-wrapper-flexbox .card {\n  flex: 0 0 auto;\n}\ndiv.scrollmenu {\n  background-color: #333;\n  overflow: auto;\n  white-space: nowrap;\n}\ndiv.scrollmenu a {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 100px;\n  text-decoration: none;\n}\nimg1 {\n  border: 2px solid #BA55D3;\n  border-radius: 50%;\n  padding: 5px;\n  width: 50px;\n  background-color: #4B0082;\n  box-shadow: 1px 1px 1px 1px yellow;\n}\n.card {\n  background: #1E90FF;\n  border-radius: 50%;\n  display: inline-block;\n  height: 50px;\n  border: 1px solid #fff;\n  padding: 7px;\n  margin: 1rem;\n  position: relative;\n  width: 50px;\n}\n.card-1 {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.card-1:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\ndiv.scrollmenu a:hover {\n  background-color: #777;\n}\n.scrolling-wrapper {\n  -webkit-overflow-scrolling: touch;\n}\n.container {\n  display: flex;\n  overflow-x: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YS9EZXNrdG9wL1Byb2plY3RzL1BhYXNoby9zcmMvYXBwL3BhZ2VzL2hvbWUtcmVzdWx0cy9ob21lLXJlc3VsdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLG9DQUFBO0FDQVI7QURFSTtFQUNJLGdCQUFBO0VBQ0EsaURBQUE7QUNBUjtBREdRO0VBQ0ksZ0JBQUE7QUNEWjtBRE1BO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNISjtBRElJO0VBQ0ksY0FBQTtBQ0ZSO0FETUE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0hKO0FETUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0hKO0FETUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDSEo7QURNQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDSEo7QURNQTtFQUNJLHdFQUFBO0VBQ0EscURBQUE7QUNISjtBRE1BO0VBQ0ksNEVBQUE7QUNISjtBRE1BO0VBQ0ksc0JBQUE7QUNISjtBRE1BO0VBQ0ksaUNBQUE7QUNISjtBRE1BO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lLXJlc3VsdHMvaG9tZS1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIH1cbiAgICBpb24tY2FyZCB7XG4gICAgICAgICYubm8tcmFkaXVzIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogaW5pdGlhbDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC5jYXJkIHtcbiAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxufVxuXG5kaXYuc2Nyb2xsbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5kaXYuc2Nyb2xsbWVudSBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMDBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZzEge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNCQTU1RDM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEIwMDgyO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCB5ZWxsb3c7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMUU5MEZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJkLTEge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKTtcbn1cblxuLmNhcmQtMTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuZGl2LnNjcm9sbG1lbnUgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn1cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn0iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IGlvbi1pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IGlvbi1jYXJkLm5vLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlci1mbGV4Ym94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBpbml0aWFsO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLnNjcm9sbGluZy13cmFwcGVyLWZsZXhib3ggLmNhcmQge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuZGl2LnNjcm9sbG1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvdmVyZmxvdzogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuZGl2LnNjcm9sbG1lbnUgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZzEge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQkE1NUQzO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjAwODI7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCB5ZWxsb3c7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogIzFFOTBGRjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogN3B4O1xuICBtYXJnaW46IDFyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5jYXJkLTEge1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4uY2FyZC0xOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn1cblxuZGl2LnNjcm9sbG1lbnUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59XG5cbi5zY3JvbGxpbmctd3JhcHBlciB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home-results/home-results.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-results/home-results.page.ts ***!
  \*********************************************************/
/*! exports provided: HomeResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeResultsPage", function() { return HomeResultsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/modal/search-filter/search-filter.page */ "./src/app/pages/modal/search-filter/search-filter.page.ts");
/* harmony import */ var _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../modal/image/image.page */ "./src/app/pages/modal/image/image.page.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


// Modals


// Call notifications test by Popover and Custom Component.

var HomeResultsPage = /** @class */ (function () {
    function HomeResultsPage(navCtrl, menuCtrl, popoverCtrl, alertCtrl, modalCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.popoverCtrl = popoverCtrl;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.searchKey = '';
        this.yourLocation = '123 Test Street';
        this.themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
    }
    HomeResultsPage.prototype.ionViewWillEnter = function () {
        this.menuCtrl.enable(true);
        this.list = [1, 100, 334, 343, 34, 34, 343, 23423, 23423, 23423];
    };
    HomeResultsPage.prototype.settings = function () {
        this.navCtrl.navigateForward('settings');
    };
    HomeResultsPage.prototype.alertLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var changeLocation;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Change Location',
                            message: 'Type your Address.',
                            inputs: [
                                {
                                    name: 'location',
                                    placeholder: 'Enter your new Location',
                                    type: 'text'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Change',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var toast;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    console.log('Change clicked', data);
                                                    this.yourLocation = data.location;
                                                    return [4 /*yield*/, this.toastCtrl.create({
                                                            message: 'Location was change successfully',
                                                            duration: 3000,
                                                            position: 'top',
                                                            closeButtonText: 'OK',
                                                            showCloseButton: true
                                                        })];
                                                case 1:
                                                    toast = _a.sent();
                                                    toast.present();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        changeLocation = _a.sent();
                        changeLocation.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeResultsPage.prototype.searchFilter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _pages_modal_search_filter_search_filter_page__WEBPACK_IMPORTED_MODULE_2__["SearchFilterPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.presentImage = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_image_image_page__WEBPACK_IMPORTED_MODULE_3__["ImagePage"],
                            componentProps: { value: image }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage.prototype.notifications = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            var popover;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverCtrl.create({
                            component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"],
                            event: ev,
                            animated: true,
                            showBackdrop: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomeResultsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-results',
            template: __webpack_require__(/*! ./home-results.page.html */ "./src/app/pages/home-results/home-results.page.html"),
            styles: [__webpack_require__(/*! ./home-results.page.scss */ "./src/app/pages/home-results/home-results.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], HomeResultsPage);
    return HomeResultsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-results-home-results-module.js.map