# CLI
The CLI exposes two main commands: `migrations` and `generate`.

```admonish note
This is only an overview of the CLI. You should read the help message for more complete information (`cornucopia --help`)
```

## Generate
The code generation can be made either against a database that you manage, or by letting cornucopia manage an ephemeral database container for you.

In both cases, the `--sync` flag will generate sync Rust code, while the `--derive_ser` flag will derive `Serialize` on your row types.

### Automatic container management
The `cornucopia generate` command creates a new container, runs your migrations, generates your queries and cleanups the container. You can use `podman` as a container manager by passing the `-p` or `--podman` flag.

### Manual database managemment
If you want to manage the database and migrations yourself, use the `cornucopia generate live` command to connect to an arbitrary live database.

## Migrations
New empty migrations can be added using the command `cornucopia migration new`. This will create a new `.sql` migration file with a name and a timestamp. This is the recommended way to create migrations for automatic container management.

As a convenience, you can use `cornucopia migration run` to run migrations on your database. *This feature is not yet thoroughly tested. You probably want to use a more robust migration system instead.*