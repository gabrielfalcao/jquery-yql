# Changes since latest release:

## version 0.2.1

* Some bug fixes

## version 0.2

* Now it works with any tables, unless its JSONP support is screwed.

## version 0.1

> Make queries to yahoo default tables (does not support community tables)

Supports the following possibilities:

* Simple querying:

    $.yql("QUERY TO YAHOO TABLES", function (data) {
        alert("this is the success callback");
    });

* Parameter replacements:

    $.yql("QUERY #{times} SOME #{table}",
        {
            times: 13,
            table: 'fake-example'
        },
        function (data) {
            alert("this is the success callback");
        }
    );

> Which is equivalent to:

    $.yql('QUERY 13 SOME "fake-example"',
        function (data) {
            alert("this is the success callback");
        }
    );
