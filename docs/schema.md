# Schema Information

## tasks
column name | data type | details
------------|-----------|-----------------------
id               | integer   | not null, primary key
title            | string    | not null
body             | text      |
author_id        | integer   | not null, foreign key (references users), indexed
todolist_id      | integer   | not null, foreign key (references todolist), indexed
complete         | boolean   | not null, default: false

## todolists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed
archived    | boolean   | not null, default: false

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## duedates
column name | data type | details
------------|-----------|-----------------------
id                   | integer   | not null, primary key
task_id              | string    | not null, foreign key (references tasks), indexed
date                 | datetime  | not null

## projectshares
column name | data type | details
------------|-----------|-----------------------
id                   | integer   | not null, primary key
project_id           | string    | not null, foreign key (references tasks), indexed
user_id              | integer   | not null, foreign key (references users), indexed

## taskassignments
column name | data type | details
------------|-----------|-----------------------
id                 | integer   | not null, primary key
task_id            | string    | not null, foreign key (references tasks), indexed
assigned_user_id   | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
firstname       | string    | not null, indexed, unique
lastname        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
