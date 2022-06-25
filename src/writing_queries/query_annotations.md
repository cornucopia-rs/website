# Query annotations
Query annotations decorate a SQL statement and describe the name, parameters and returned row of the query.

At their most basic, they look like this

```sql
--! select_authors_from_country
SELECT id, name, age 
FROM Authors 
WHERE Authors.nationality = :country;
```
The `--!` token indicates a Cornucopia query annotation, and `select_authors` is the name of the query.

## Nullity

By default, parameters and returned row columns will all be inferred as non-null. If you want to control their nullity, you can use the `?` syntax:
```sql
--! select_authors_from_country (country?) : (age?)
SELECT id, name, age 
FROM Authors 
WHERE Authors.nationality = :country;
```
which means that the parameter `country` and returned column `age` will be inferred as nullable (`Option` in Rust). The set of parenthesis before the colon represents bind parameters, while the one after represents returned row columns (both optional).

You can also granularly modify the nullity of composites and arrays like so:
```sql
--! select_authors_from_country : (compos?.some_field?, arr?[?])
SELECT compos, arr 
FROM example 
```
which means that the `compos` column and its field `some_field` are both nullable and that the `arr` column and its elements are also nullable.

## Generated item names
By default, Cornucopia will generate a `struct` for your parameters (as a whole) and for the returned row. The name of these items is based on the name of the query. 

If you want to customize the generated items' names, you can use
```sql
--! select_authors_from_country (country?) : Author()
SELECT id, name, age 
FROM Authors 
WHERE Authors.nationality = :country;
```
This way, the generated struct for the returned row of this query will be named `Author` instead of `SelectAuthorsFromCountry`. The parameter struct will not be renamed.