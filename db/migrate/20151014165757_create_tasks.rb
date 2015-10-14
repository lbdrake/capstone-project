class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.integer :author_id, null: false
      t.integer :assigned_user_id
      t.integer :todolist_id, null: false
      t.boolean :completed, null: false, default: false
      t.datetime :duedate
      t.timestamps null: false
    end
    add_index :tasks, :author_id
    add_index :tasks, :todolist_id
    add_index :tasks, :assigned_user_id
  end
end
