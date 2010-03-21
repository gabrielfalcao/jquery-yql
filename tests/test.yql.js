module("YQL");
var oldAjax = $.ajax;
test('It should recover data from a given query', function() {
         expect(5);

         $.ajax = function (params){
             equal(params.url, "http://query.yahooapis.com/v1/public/yql");
             equal(params.dataType, "jsonp", "dataType of the request should be jsonp");
             equal(params.async, true);
             same(params.data, {format: "json", callback: "?", q: "SELECT * FROM something", env: 'store://datatables.org/alltableswithkeys'});
             params.success("it should be that huge JSON");
         }

         $.yql(
             'SELECT * FROM something',
             function (data){
                 equal(data, "it should be that huge JSON");
             }
         );

         $.ajax = oldAjax;
     });


asyncTest('It should fetch the right jsonp from yahoo api', function() {
         expect(2);
         $.yql(
             'SELECT * FROM weather.forecast WHERE location=90210',
             function (data){
                 equal(typeof data.query.results, "object", "the query result should be a javascript object");
                 equal(typeof data.query.results.channel.wind, "object", "the result contains wind-related data");
                 start();
             }
         );
     });

test('It should replace variables in the query string', function () {
         expect(1);

         $.ajax = function (params) {
             equal(params.data.q, "SELECT * FROM weather.forecast WHERE location=90210");
         };

         $.yql(
             'SELECT * FROM weather.forecast WHERE location=#{location}',
             {location: '90210'},
             function (data) { }
         )

         $.ajax = oldAjax;
     });

test('It should replace another variable in the query string', function () {
         expect(1);

         $.ajax = function (params) {
             equal(params.data.q, 'SELECT * FROM woman WHERE hairColor="red"');
         };

         $.yql(
             'SELECT * FROM woman WHERE hairColor=#{color}',
             {color: 'red'},
             function (data) { }
         )

         $.ajax = oldAjax;
     });

asyncTest('Querying a yahoo official table (flickr)', function () {
              expect(3);
              $.yql("SELECT * FROM flickr.photos.recent", function (data) {
                        ok(data.query.results.photo.length > 0, "Cool, the result ain't empty")
                        ok(data.query.results.photo[0].farm, "Has farm info")
                        ok(data.query.results.photo[0].title, "Has title")
                        start();
                    });
          });

asyncTest('Querying a community table (github)', function () {
              expect(1);
              $.yql("SELECT * FROM github.repo WHERE id='gabrielfalcao' AND repo='jquery-yql'", function (data) {
                        equal(data.query.results.repository.url, "http://github.com/gabrielfalcao/jquery-yql");
                        start();
                    });
          });

