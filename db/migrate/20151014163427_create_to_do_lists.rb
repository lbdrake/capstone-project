class CreateToDoLists < ActiveRecord::Migration
  def change
    create_table :to_do_lists do |t|
      t.string :title, null: false
      t.integer :project_id, null: false
      t.boolean :archived, null: false, default: false
      t.timestamps null: false
    end
  end
end
