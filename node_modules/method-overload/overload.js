"use strict";
(function(context){

	var matchType = function (inputArray, matchArray){
		var runningMatch = true;
		for (var key in matchArray) {
			var notEqual = typeof matchArray[key] === "string" && matchArray[key][0] === "!";
			
			if (!notEqual){
				if (typeof inputArray[key] === "object" && typeof matchArray[key] === "object") {
					runningMatch = matchType(inputArray[key], matchArray[key]) && runningMatch;
				} else if (typeof inputArray[key] !== matchArray[key]) {
					runningMatch = false;
				}
			} else {
				if (typeof inputArray[key] === matchArray[key].substring(1)){
					runningMatch = false;
				}
			}
		}
		return runningMatch;
	}

	context.overload = context.overload || function(){
		var executionContext = this;
		var inputs = arguments;
		if (arguments.length === 1){
			inputs = arguments[0];
		}

		var exeArgs = [];
		var exefake = function (){};
		exefake.use = exefake.args = function(){return exefake;};

		var exe = function () {
			for (var key in exeArgs ) {
				var matchAndRun = exeArgs[key]
				if (matchType(arguments, matchAndRun.match)){
					return matchAndRun.execute.apply(this, arguments);
				}
			}
		};
		var argsFn = function() {
			var useArgs = arguments;

			return {use: function(callback){
				if (useArgs.length == 0){
					delete exe.args;
				}
				
				exeArgs.push({match: useArgs, execute: callback});
				
				if (inputs.length && matchType(inputs, useArgs)) {
					callback.apply(executionContext, inputs);
					return exefake;
				} else {
					return exe;
				}

			}};
		};
		exe.args = argsFn;
		return exe;
	}

	context.overload.define = context.overload.define || function (obj) {
		if (typeof obj === 'function') {
			try {
				return context.overload.define(new obj());
			} catch (err) {
				console.log("Class definition does not have a null constructor");
				return;
			}
		} else if (typeof obj !== 'object') {
			return;
		} else {
			var objectDefinition = {};

			var objKeys = Object.keys(obj);
			for (var i = 0; i < objKeys.length; i++) {
				var thisKey = objKeys[i];
				objectDefinition[thisKey] = typeof obj[thisKey];
			}
			if (obj.__proto__) {
				var inheritedDefs = context.overload.define(obj.__proto__);
				var inheritedKeys = Object.keys(inheritedDefs);
				for (var i = 0; i < inheritedKeys.length; i++){
					var inheritedKey = inheritedKeys[i]
					objectDefinition[inheritedKey] = objectDefinition[inheritedKey] || inheritedDefs[inheritedKey];
				}
			}

			return objectDefinition;
		}
	}

	if (typeof module != 'undefined' && module.exports) {module.exports = context["overload"];}
})(this)