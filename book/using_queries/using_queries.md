# Using your generated queries
Once you have written your queries and generated your Rust code with Cornucopia, it's time to use them. Hurray 🎉!

Let's say you have generated your Rust module into `src/cornucopia.rs`, then this is as simple as importing the items you need from it, like so:
```rust
mod cornucopia;

use cornucopia::authors;
```

# Building the query object
Building a query object starts with either the query function:
```rust
authors().bind(&client, Some("Greece"));
```
or the generated parameter struct:
```rust
use cornucopia_async::Params;

authors().params(
    &client, 
    AuthorsParams {
        country: Some("Greece")
    }
);
```
The query function is useful when you have a few obvious parameters, while the parameter struct is more explicit.

Note that in order to use the `params` method, you need to import the `Params` trait from your (sync or async) cornucopia client.

```admonish note
Queries that don't have a return value (simple insertions, for example) don't generate a query object. Instead, when calling `bind` or `params` they execute and return the number of rows affected.
```

# Row mapping (optional)
Query objects have a `map` method that allows them to transform the query's returned rows without requiring intermediate allocation. The following example is pretty contrived but illustrates how you can use this feature.
```rust
enum Country {
    Greece,
    TheRest
}

impl<'a> From<&'a str> for Country {
    fn from(s: &'a str) -> Self {
        if s == "Greece" {
            Self::Greece
        } else {
            Self::TheRest
        }
    }
}

struct CustomAuthor {
    full_name: String,
    country: Country,
    age: usize,
}

authors()
    .bind(&client)
    .map(|author| {
        let full_name = format!(
            "{}, {}",
            author.last_name.to_uppercase(),
            author.first_name
        );
        let country = Country::from(author.country);
        CustomAuthor {
            full_name,
            country,
            age: author.age,
        }
    });
```
The result of a map is another query object.

# Getting rows out of your queries
Once the query object has been built, use one of the following methods to select the expected number of rows:
* `opt`: one or zero rows (error otherwise).
* `one`: exactly one row (error otherwise).
* `iter`: iterator of zero or more rows.
* `all`: like `iter`, but collects the rows in a  `Vec`.

Here are some example uses:
```rust
author_by_id().bind(&client, &0).opt().await?;
author_by_id().bind(&client, &0).one().await?; // Error if this author id doesn't exist
authors().bind(&client).all().await?;
authors().bind(&client).iter().await?.collect::<Vec<_>>(); // Acts the same as the previous line
```

```admonish note
If your queries are sync, you don't need to `.await` them.
```