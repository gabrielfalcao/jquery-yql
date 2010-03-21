# jQuery YQL
> Version 0.2

# What is this ?

A simple jQuery plugin that queries Yahoo's YQL, fetch the results
through JSONP, and calls success callback with the results.

# In a nutshell:
  <script type="text/javascript" src="jquery.yql.js"></script>
  <script type="text/javascript">
    $(function(){
      $.yql(
        "SELECT * FROM github.repo WHERE id='#{username}' AND repo='#{repository}'",
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

# License

> Copyright (C) 2010  Gabriel Falcão <gabriel@nacaolivre.org>
>
> Copyright (C) 2010  Lincoln de Sousa <lincoln@comum.org>
>
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU General Public License as published by
> the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
>
> This program is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
> GNU General Public License for more details.
>
> You should have received a copy of the GNU General Public License
> along with this program.  If not, see <http://www.gnu.org/licenses/>.
