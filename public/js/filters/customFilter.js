

angular.module('customFilter',[])
.filter('unique', function(){       
   return function(data, prop){
   	if(angular.isArray(data) && angular.isString(prop)){
   		var results = [];
   		var keys = {};
   		for (var i = 0; i < data.length; i++) {
   			var val = data[i][prop];
   			if(angular.isUndefined(keys[val])){
   				keys[val] = true;
   				results.push(val);
   			}
   		}
   		return results;
   	}else {
   		return data;
   	}
   }
}).filter('gradeAsk', function(){
   return function(data, prop){
      if(angular.isArray(data) && angular.isString(prop)){
         var results = [];
         var result = [];
         var keys = {};
         for (var i = 0; i < data.length; i++) {
            var val = data[i][prop];

            if(angular.isUndefined(keys[val])){
               keys[val] = true;
               results.push(Math.floor(val));
            }
         }
         // console.log(results);
         var gradeAskVal = '';
         var uniq = results.reduce(function (a,b){
            if(a.indexOf(b)<0) a.push(b);
            return a;
         },[]);

         console.log(uniq);

         for(var j=0; j<uniq.length; j++){
            for(var i=0; i<uniq[j]; i++){
               gradeAskVal+='*';
            }
            result.push(gradeAskVal);
            gradeAskVal='';
         }
         return result;
      }else {
         return data;
      }
   }
});

