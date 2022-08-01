# CLI
The CLI exposes two main commands: `schema` and `live`.

```admonish note
This is only an overview of the CLI. You should read the help message for more complete information (`cornucopia --help`)
```

## Generating code
The code generation can be made either against a database that you manage or by letting Cornucopia manage an ephemeral database container for you.

### `schema`: Automatic container management
The `cornucopia generate` command creates a new container, loads your schema(s), generates your queries and cleanups the container. You will need to provide the path to one or more schema files to build your queries against.

### `live`: Manual database management
If you want to manage the database yourself, use the `cornucopia generate live` command to connect to an arbitrary live database. You will need to provide the connection url.

## Useful flags
### `sync`
By default, Cornucopia will generate asynchronous code, but it can also generate synchronous code using the `--sync` flag.

### `derive_ser`
If you need to serialize the rows returned by your queries, you can use the `--derive_ser` flag, which will derive `Serialize` on your row types.


### `podman`
You can use `podman` as a container manager by passing the `-p` or `--podman` flag.