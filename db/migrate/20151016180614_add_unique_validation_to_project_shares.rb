class AddUniqueValidationToProjectShares < ActiveRecord::Migration
  def change
    add_index :project_shares, [:project_id, :shared_user_id], :unique => true
  end
end
