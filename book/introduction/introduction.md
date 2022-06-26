# Introduction

Cornucopia is a tool designed to generate type-checked Rust interfaces from your PostgreSQL queries. It works by preparing your queries against an actual database and then running an extensive validation suite. Once the queries are prepared and validated, the Rust code is generated into a module, which can be imported and used as usual.

Compared to other Rust database interfaces, Cornucopia's approach has the benefits of being very simple to use while also generating code that is free of heavy macros or complex generics.

This book contains more detailed explanations of all the available features, but here are some highlights:
* SQL-first. Your SQL is the only source of truth. No intricate ORM.
* Powerful query validation. Catch errors before runtime, now with pretty diagnostics!
* Supports custom user types (composites, domains, and enums) and one-dimensional arrays.
* Sync and async driver support, with optional pooling.
* Ergonomic non-allocating row mapping.
* Granular type nullity control.
* Available as a library and a CLI.

```admonish info
If you just want to get started without having to read all of this, you can take a look at our [examples](/examples/examples.html).
```