# Schema Information

## tasks
column name | data type | details
------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    | not null
description      | text      |
author_id        | integer   | not null, foreign key (references users), indexed
assigned_user_id | integer   | foreign key (references users), indexed
todolist_id      | integer   | not null, foreign key (references todolist), indexed
completed        | boolean   | not null, default: false
duedate          | datetime  |


## todolists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
project_id  | integer   | not null, foreign key (references projects), indexed
archived    | boolean   | not null, default: false

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## projectshares
column name | data type | details
------------|-----------|-----------------------
id                   | integer   | not null, primary key
project_id           | string    | not null, foreign key (references tasks), indexed
user_id              | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
