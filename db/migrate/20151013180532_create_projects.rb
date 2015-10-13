class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :author_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps null: false
    end
  add_index :projects, :author_id
  end
end
