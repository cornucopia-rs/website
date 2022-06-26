# Using your generated queries
Once you have written your queries and generated your Rust code with Cornucopia, it's time to use them. Hurray 🎉!

Let's say you have generated your Rust module into `src/cornucopia.rs`, then this is as simple as importing the items you need from it, like so:
```rust
use cornucopia::authors;
```

```admonish note
When a query's parameter or row has only one column, Cornucopia will not generate a struct for the parameter or row and use the inner type instead. Don't waste time looking for these items!
```

# Building the query object
Building a query starts with either the query function:
```rust
authors().bind(&client, Some("Greece"));
```
or the generated parameter struct:
```rust
AuthorsParams {
    country: Some("Greece")
}.bind(&client);
```
The query function is useful when you have a few obvious parameters, while the parameter struct is more explicit.

If you want even more clarity, you can mix both styles:
```rust
authors().params(&client, AuthorsParams {
    country: Some("Greece")
});
```

```admonish note
Queries that don't have a return value (insertions, for example) don't generate a query object. Instead, when calling `bind` or `params` they execute and return the number of rows affected.
```

# Row mapping (optional)
Query objects have a `map` method that allows them to transform the query's returned rows without requiring intermediate allocation:
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
    age: usize,
    country: String
}

all_authors()
    .bind(&client, Some("Greece"))
    .map(|author| {
        let full_name = format!(
            "{}, {}",
            author.last_name.to_uppercase(),
            author.first_name
        );
        CustomAuthor {
            full_name:,
            age: author.age,
            country: author.country.into()
        }
    });

```
The result of a map is another query object.

# Getting rows out of your queries
Once the query has been built, use one of the following methods to select the expected number of rows.
* `opt`: one or zero rows (error otherwise).
* `one`: exactly one row (error otherwise).
* `iter`: iterator of zero or more rows.
* `all`: like `iter`, but collects the rows in a  `Vec`.

Here are some examples:

```rust
author_by_id().bind(&client, &0).opt().await?;
author_by_id().bind(&client, &0).one().await?; // Error if this author id doesn't exist
select_42().bind(&client).one().await?;
all_authors().bind(&client).all().await?;
iter_authors().bind(&client).iter().await?.collect::<Vec<_>>();
```

```admonish note
If your queries are sync, you don't need to `.await` them.
```