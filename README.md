# figwheel-asset-problem
Reproduction of issue with figwheel and empty asset-dir option

Steps to reproduce:

- `lein new figwheel myproject -- --reagent`
- move assets from resources/public to resources
- replace string `resources/public` to `resources` in `project.clj`
- set `:asset-path` to `""` in `project.clj`
- set `:http-server-root` to `""` in `project.clj`
- lein figwheel
- browse to `http://localhost:3449`

Notice that Figwheel does not respond to code changes. Error message will be in the log files.
