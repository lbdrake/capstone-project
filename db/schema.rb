# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151016184055) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "project_shares", force: :cascade do |t|
    t.integer  "project_id",     null: false
    t.integer  "shared_user_id", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "project_shares", ["project_id", "shared_user_id"], name: "index_project_shares_on_project_id_and_shared_user_id", unique: true, using: :btree
  add_index "project_shares", ["project_id"], name: "index_project_shares_on_project_id", using: :btree
  add_index "project_shares", ["shared_user_id"], name: "index_project_shares_on_shared_user_id", using: :btree

  create_table "projects", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.string   "title",       null: false
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "projects", ["author_id"], name: "index_projects_on_author_id", using: :btree

  create_table "tasks", force: :cascade do |t|
    t.string   "title",                            null: false
    t.text     "description"
    t.integer  "author_id",                        null: false
    t.integer  "assigned_user_id"
    t.integer  "todolist_id",                      null: false
    t.boolean  "completed",        default: false, null: false
    t.datetime "duedate"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

  add_index "tasks", ["assigned_user_id"], name: "index_tasks_on_assigned_user_id", using: :btree
  add_index "tasks", ["author_id"], name: "index_tasks_on_author_id", using: :btree
  add_index "tasks", ["todolist_id"], name: "index_tasks_on_todolist_id", using: :btree

  create_table "to_do_lists", force: :cascade do |t|
    t.string   "title",                      null: false
    t.integer  "project_id",                 null: false
    t.boolean  "archived",   default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "to_do_lists", ["project_id"], name: "index_to_do_lists_on_project_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
