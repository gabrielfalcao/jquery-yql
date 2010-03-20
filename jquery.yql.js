/*
 * jQuery YQL plugin
 *
 * Copyright (c) 2010 Gabriel Falcão
 * Copyright (c) 2010 Lincoln de Sousa
 * Dual licensed under GPL 3+ license.
 *
 * http://www.gnu.org/copyleft/gpl.html
 *
 * Version: 0.1
 */

(function($){
     $.extend(
         {
             yql: function (query) {
                 var params = null;
                 var successCallback = null;

                 switch (arguments.length) {
                 case 3:
                     params = arguments[1];
                     successCallback = arguments[2]
                     $.each(
                         params, function (key) {
                             var name = "#{" + key + "}";
                             var value = this;
                             if (isNaN(parseInt(value))) {
                                 value = '"' + value + '"';
                             }
                             query = query.replace(name, value);
                         }
                     );

                     break;

                 case 2:
                     successCallback = arguments[1];
                     break;
                 }


                 $.ajax(
                     {
                         url: "http://query.yahooapis.com/v1/public/yql",
                         dataType: "jsonp",
                         success: successCallback,
                         data: {
                             q: query.replace('#{location}', '90210'),
                             format: "json",
                             callback: "?"
                         }
                     }
                 );
             }
         }
     );
 })(jQuery);
