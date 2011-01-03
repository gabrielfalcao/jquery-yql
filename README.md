# jQuery YQL
> Version 0.3.0

# What is this ?

A simple jQuery plugin that queries Yahoo's YQL, fetch the results
through JSONP, and calls success callback with the results.

# In a nutshell:
  <script type="text/javascript" src="jquery.yql.js"></script>
  <script type="text/javascript">
    $(function(){
      $.yql(
        "SELECT * FROM github.repo WHERE id=#{username} AND repo=@repository",
        {
          username: "gabrielfalcao",
          repository: "jquery-yql"
        },
        function (data) {
            if (data.results.repository["open-issues"].content > 0) {
                alert("Hey dude, you should check out your new issues!");
            }
        }
      );
     });
  </script>

## Explanation

jquery-yql automatically handles variable replacement within the query.

So if you use a query that looks like this:

    "SELECT * FROM some_yql_table WHERE some_field=#{foo} AND another_field=#{bar}"

with the object:

    {
        'foo': 'Just a string',
        'bar': 42
    }

You don't need to worry about adding quotes to non-numeric fields, for
example. Because we already do it for you.

Thus, the query above will become this:

    'SELECT * FROM some_yql_table WHERE some_field="Just a string" AND another_field=42'

See ? jquery-yql automatically identifies if the value must be a string or number.

### "@" variables

Because of the ticket [#4](https://github.com/gabrielfalcao/jquery-yql/issues#issue/4) I've added support to `@variable` too.
So it's not a big deal, just works in the same way of the `#{variable}`.

But allow me show it:

    "SELECT * FROM some_yql_table WHERE some_field=@foo AND another_field=@bar"

becomes:

    'SELECT * FROM some_yql_table WHERE some_field="Just a string" AND another_field=42'

### Last thing

If you left variables without the respective key-value mapping
*mapped* in the translation `object`, jquery-yql will not touch it.


Once again, I show you:

    "SELECT * FROM person WHERE name=@name AND age=#{years} AND wealth=@value'

with

    {
        'name': 'Gabriel',
        'years': '22'
    }

Then, jquery-yql will resolve to:

    'SELECT * FROM person WHERE name="Gabriel" AND age=22 AND wealth=@value'


# License

> Copyright (C) 2010  Gabriel Falcão <gabriel@nacaolivre.org>
>
> Copyright (C) 2010  Lincoln de Sousa <lincoln@comum.org>
>
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
