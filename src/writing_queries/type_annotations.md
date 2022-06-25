# Type annotations
Type annotations allow you to reuse your returned rows and params between queries by declaring them using a special annotation:

```sql
--: Author(age?)

--! authors : Author
SELECT * FROM Authors;

--! authors (country?) : Author
SELECT *
FROM Authors
WHERE Authors.nationality = :country;
```
As seen here, queries can mix and match between types declared inline (like (`(country?)` or `Author(age?)`), and types declared through type annotations (like `Author`). Notice that the former has a set of parenthesis, while the latter does not.