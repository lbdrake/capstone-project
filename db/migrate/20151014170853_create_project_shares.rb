class CreateProjectShares < ActiveRecord::Migration
  def change
    create_table :project_shares do |t|
      t.integer :project_id, null: false
      t.integer :shared_user_id, null: false
      t.timestamps null: false
    end
    add_index :project_shares, :project_id
    add_index :project_shares, :shared_user_id
  end
end
