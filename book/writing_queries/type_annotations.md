# Type annotations
Type annotations allow you to create structs for your parameters and rows. This can have many benefits (implementing custom logic on these types, named fields, etc.). Furthermore, this allows Cornucopia to share these types between multiple queries.

```admonish note
Cornucopia will **automatically** generate a struct **only for parameters which have two or more columns**. The name of the struct is based on the name of the query. For other cases, you will need to write the type annotation yourself.

Even if the parameter struct is automatically generated, type annotations can still be useful when you want to customize the name of the struct, declutter the query of nullity declarations or share the params struct between multiple queries.
```

To create type annotations, declare them using the `--:` syntax. Type annotations only need to declare the nullable columns. Here's how it looks:
```sql
--: Author(age?)

--! authors : Author
SELECT name, age FROM Authors;

--! authors_from_country (country?) : Author
SELECT name, age
FROM Authors
WHERE Authors.nationality = :country;
```

This will define a struct named `Author` containing typed fields for the `name` and `age` columns (with `age` being nullable). The same struct will be used for the `authors` and `authors_from_country` queries.

```admonish note
Type annotations are declared with this token: `--:`
```

## Inline types
You can also define type inline if you don't plan on reusing them across multiple queries:
```sql
--! authors_from_country (country?) : Author()
SELECT id, name, age 
FROM Authors 
WHERE Authors.nationality = :country;
```
Notice how inline types **must** have a set of parenthesis describing their nullable columns. This syntax is often more compact for simple cases. It doesn't have any other special meaning otherwise.