# Irina Romanenkova's site

## API doc
1. Article

    `GET`

    | Parameter | Default | Required  | Type   | Description         |
    |:--------- |:------- |:--------- |:------ |:------------------- |
    | id        | null    | false     | string | id of article       |
    | lang      | null    | true      | string | language of article |

    Gets all articles which are not deleted and are published.
    If `id` is specified, gets 1 article with correspondent id.
    If admin is logged in, all articles are loaded irrespective
    of isDeleted and isPublished flags.

    `POST`

    | Parameter | Default | Required  | Type   | Description         |
    |:--------- |:------- |:--------- |:------ |:------------------- |
    | id        | null    | false     | string | id of article       |
    | lang      | null    | true      | string | language of article |

    Gets all articles which are not deleted and are published.
    If `id` is specified, gets 1 article with correspondent id.
    If admin is logged in, all articles are loaded irrespective
    of isDeleted and isPublished flags.