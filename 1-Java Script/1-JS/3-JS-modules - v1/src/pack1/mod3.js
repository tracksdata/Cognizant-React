

//--------------------------------------------------------
// var o={
//     doWork:function(){
//         console.log("im mod3");  
//     }
// }

//--------------------------------------------------------

var oneGlobal = oneGlobal || {};

(function () {
    var o = {
        doWork: function () {
            console.log("im mo3");
        }
    }
    oneGlobal.mod3 = o;
})();